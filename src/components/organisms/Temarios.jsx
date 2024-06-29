import React, { useState } from 'react';
import TemarioForm from './TemarioForm';
import Button from '../atoms/Button';

const Temario = () => {
  const [temarios, setTemarios] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleOpenForm = () => {
    setIsCreating(true);
  };

  const handleCloseForm = () => {
    setIsCreating(false);
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleCreateTemario = (newTemario) => {
    if (isEditing) {
      const updatedTemarios = temarios.map((temario, index) =>
        index === editIndex ? newTemario : temario
      );
      setTemarios(updatedTemarios);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setTemarios([...temarios, newTemario]);
    }
    setIsCreating(false);
  };

  const handleDeleteTemario = (index) => {
    const nuevosTemarios = temarios.filter((_, i) => i !== index);
    setTemarios(nuevosTemarios);
  };

  const handleEditTemario = (index) => {
    setEditIndex(index);
    setIsEditing(true);
    setIsCreating(true);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">TEMARIO</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {temarios.length === 0 ? (
          <p>No hay temarios registrados</p>
        ) : (
          temarios.map((temario, index) => (
            <div key={index} className="border border-gray-300 rounded-lg bg-gray-100 p-4 w-40 text-center">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">{temario.name}</h2>
                <Button onClick={() => handleEditTemario(index)}>✏️</Button>
                <Button onClick={() => handleDeleteTemario(index)}>🗑️</Button>
              </div>
              <div className="text-5xl text-gray-800 mt-2">
                <a href={URL.createObjectURL(temario.file)} target="_blank" rel="noopener noreferrer">📄</a>
              </div>
            </div>
          ))
        )}
        <Button className="text-neutral-50 bg-teal-600  rounded-full w-12 h-12 text-2xl " onClick={handleOpenForm}>
          +
        </Button>
      </div>
      {isCreating && (
        <TemarioForm
          onCreate={handleCreateTemario}
          onClose={handleCloseForm}
          editData={isEditing ? temarios[editIndex] : null}
        />
      )}
    </div>
  );
};

export default Temario;
