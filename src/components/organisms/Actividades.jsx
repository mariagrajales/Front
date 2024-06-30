import React, { useState } from 'react';

const ActividadesEntregadas = () => {
  const [actividades, setActividades] = useState([
    {
      nombre: "Eddie Grajales Vidal",
      titulo: "Algoritmos y control de flujos",
      calificacion: "0/100",
      tipo: "PDF",
    },
    {
      nombre: "Melanie Grajales Vidal",
      titulo: "Investigación de la historia de la informática.",
      calificacion: "0/100",
      tipo: "PDF",
    },
  ]);

  const handleCalificacionChange = (index, nuevaCalificacion) => {
    const nuevasActividades = [...actividades];
    const partes = nuevasActividades[index].calificacion.split('/');
    nuevasActividades[index].calificacion = `${nuevaCalificacion}/${partes[1]}`;
    setActividades(nuevasActividades);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto border border-gray-300 rounded-lg bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">ACTIVIDADES ENTREGADAS</h1>
      <div className="flex flex-col gap-6">
        {actividades.map((actividad, index) => (
          <div key={index} className="p-6 border border-gray-300 rounded-lg bg-white">
            <h2 className="text-xl font-semibold text-gray-800">{actividad.nombre}</h2>
            <p className="text-lg text-gray-700">{actividad.titulo}</p>
            <div className="flex justify-between items-center">
              <EditableCalificacion
                calificacion={actividad.calificacion}
                onChange={(nuevaCalificacion) => handleCalificacionChange(index, nuevaCalificacion)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EditableCalificacion = ({ calificacion, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newCalificacion, setNewCalificacion] = useState(calificacion.split('/')[0]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && Number(value) <= 100) {
      setNewCalificacion(value);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    onChange(newCalificacion);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={newCalificacion}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          autoFocus
          maxLength="3"
          className="border border-gray-300 rounded p-2"
        />
      ) : (
        <p onClick={handleEditClick} className="cursor-pointer text-gray-700">{calificacion}</p>
      )}
    </div>
  );
};

export default ActividadesEntregadas;
