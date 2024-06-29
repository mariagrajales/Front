import React, { useState } from 'react';

const CrearGrupoForm = ({ onCreate, onClose }) => {
  const [groupData, setGroupData] = useState({
    name: '',
    subject: '',
    grade: '',
    group: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroupData({
      ...groupData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(groupData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4 text-center space-y-4 text-black p-2 rounded-t-lg">CREAR GRUPO</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nombre del grupo"
            value={groupData.name}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="subject"
            placeholder="Asignatura"
            value={groupData.subject}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
          <div className="flex justify-between gap-2">
            <input
              type="text"
              name="grade"
              placeholder="Grado"
              value={groupData.grade}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded w-1/2"
            />
            <input
              type="text"
              name="group"
              placeholder="Grupo"
              value={groupData.group}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded w-1/2"
            />
          </div>
          <div className="flex justify-between mt-4">
            <button 
              type="button" 
              onClick={onClose} 
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Regresar
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-teal-500 text-white rounded"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearGrupoForm;
