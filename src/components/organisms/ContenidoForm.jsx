import React, { useState } from 'react';

const ContenidoForm = ({ onCreate, onClose, editData }) => {
  const [contentData, setContentData] = useState(editData || { type: 'url', url: '', file: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContentData({ ...contentData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "video/mp4") {
      setContentData({ ...contentData, file });
    } else {
      alert("Solo se permiten archivos .mp4");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(contentData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-bold mb-4">{editData ? 'EDITAR CONTENIDO' : 'CREAR CONTENIDO'}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex justify-around mb-4">
            <label>
              <input
                type="radio"
                name="type"
                value="url"
                checked={contentData.type === 'url'}
                onChange={handleChange}
                className="mr-2"
              />
              URL
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="file"
                checked={contentData.type === 'file'}
                onChange={handleChange}
                className="mr-2"
              />
              Archivo
            </label>
          </div>
          {contentData.type === 'url' ? (
            <input
              type="text"
              name="url"
              placeholder="Ingresa URL"
              value={contentData.url}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
            />
          ) : (
            <input
              type="file"
              name="file"
              accept="video/mp4"
              onChange={handleFileChange}
              className="p-2 border border-gray-300 rounded"
            />
          )}
          <div className="flex justify-between mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Regresar</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">{editData ? 'Guardar' : 'Crear'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContenidoForm;
