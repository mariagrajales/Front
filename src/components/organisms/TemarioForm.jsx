import React, { useState } from 'react';

const TemarioForm = ({ onCreate, onClose, editData }) => {
  const [temarioData, setTemarioData] = useState({
    name: editData ? editData.name : '',
    file: editData ? editData.file : null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTemarioData({
      ...temarioData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setTemarioData({
      ...temarioData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(temarioData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-bold text-teal-600 mb-4">{editData ? 'EDITAR TEMARIO' : 'CREAR TEMARIO'}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nombre del temario"
            value={temarioData.name}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="p-2 border border-gray-300 rounded"
          />
          <div className="flex justify-between mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Regresar</button>
            <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded">{editData ? 'Editar' : 'Crear'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TemarioForm;
