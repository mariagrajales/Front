import React, { useState } from 'react';
import ContenidoForm from './ContenidoForm';
import Button from '../atoms/Button';

const Contenido = () => {
  const [contents, setContents] = useState([]);
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

  const handleCreateContent = (newContent) => {
    if (isEditing) {
      const updatedContents = contents.map((content, index) =>
        index === editIndex ? newContent : content
      );
      setContents(updatedContents);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setContents([...contents, newContent]);
    }
    setIsCreating(false);
  };

  const handleDeleteContent = (index) => {
    const newContents = contents.filter((_, i) => i !== index);
    setContents(newContents);
  };

  const handleEditContent = (index) => {
    setEditIndex(index);
    setIsEditing(true);
    setIsCreating(true);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-8">CONTENIDO</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {contents.length === 0 ? (
          <p>No hay contenidos registrados</p>
        ) : (
          contents.map((content, index) => (
            <div key={index} className="bg-gray-100 border border-gray-300 rounded-lg p-4 w-52 text-center">
              <div className="flex flex-col items-center">
                {content.type === 'url' ? (
                  <a href={content.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    {content.url}
                  </a>
                ) : (
                  <video width="200" controls className="mt-2">
                    <source src={URL.createObjectURL(content.file)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <div className="flex justify-around w-full mt-2">
                  <Button onClick={() => handleEditContent(index)}>✏️</Button>
                  <Button onClick={() => handleDeleteContent(index)}>🗑️</Button>
                </div>
              </div>
            </div>
          ))
        )}
        <Button className="bg-blue-600 text-white p-2 rounded-full text-2xl" onClick={handleOpenForm}>
          +
        </Button>
      </div>
      {isCreating && (
        <ContenidoForm
          onCreate={handleCreateContent}
          onClose={handleCloseForm}
          editData={isEditing ? contents[editIndex] : null}
        />
      )}
    </div>
  );
};

export default Contenido;
