import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Button from '../atoms/Button';

const GrupoDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const grupo = location.state;

  const [students, setStudents] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(null);
  const [newStudent, setNewStudent] = useState({
    matricula: '',
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correoElectronico: '',
    contrasena: '',
    curp: '',
    tipoSangre: '',
    edad: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({
      ...newStudent,
      [name]: value,
    });
  };

  const handleAddStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({
      matricula: '',
      nombres: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      correoElectronico: '',
      contrasena: '',
      curp: '',
      tipoSangre: '',
      edad: ''
    });
    setIsAdding(false);
  };

  const handleEditStudent = (index) => {
    setIsEditing(index);
    setNewStudent(students[index]);
  };

  const handleUpdateStudent = () => {
    const updatedStudents = students.map((student, index) =>
      index === isEditing ? newStudent : student
    );
    setStudents(updatedStudents);
    setIsEditing(null);
    setNewStudent({
      matricula: '',
      nombres: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      correoElectronico: '',
      contrasena: '',
      curp: '',
      tipoSangre: '',
      edad: ''
    });
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto border border-gray-300 rounded-lg bg-white">
      <h1 className="text-2xl font-bold text-white bg-teal-500 p-4 rounded-t-lg text-center">{grupo.name}</h1>
      <p className="text-lg text-center text-gray-700">{grupo.subject}</p>
      <p className="text-lg text-center text-gray-700">{grupo.grade} - {grupo.group}</p>
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-center mb-4">Alumnos</h2>
        {students.length === 0 ? (
          <p className="text-center text-gray-700">No hay alumnos registrados</p>
        ) : (
          <table className="w-full border-collapse mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Matricula</th>
                <th className="border p-2">Nombres</th>
                <th className="border p-2">Apellido Paterno</th>
                <th className="border p-2">Apellido Materno</th>
                <th className="border p-2">Correo Electrónico</th>
                <th className="border p-2">Contraseña</th>
                <th className="border p-2">CURP</th>
                <th className="border p-2">Tipo de Sangre</th>
                <th className="border p-2">Edad</th>
                <th className="border p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'}>
                  <td className="border p-2">{student.matricula}</td>
                  <td className="border p-2">{student.nombres}</td>
                  <td className="border p-2">{student.apellidoPaterno}</td>
                  <td className="border p-2">{student.apellidoMaterno}</td>
                  <td className="border p-2">{student.correoElectronico}</td>
                  <td className="border p-2">{student.contrasena}</td>
                  <td className="border p-2">{student.curp}</td>
                  <td className="border p-2">{student.tipoSangre}</td>
                  <td className="border p-2">{student.edad}</td>
                  <td className="border p-2 flex flex-col space-y-1">
                    <Button onClick={() => handleEditStudent(index)}>Editar</Button>
                    <Button onClick={() => handleDeleteStudent(index)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <Button onClick={() => setIsAdding(true)} className="mt-4">Agregar Alumno</Button>
        {(isAdding || isEditing !== null) && (
          <div className="mt-4">
            <input
              type="text"
              name="matricula"
              placeholder="Matricula"
              value={newStudent.matricula}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded mb-2 w-full"
            />
            <input
              type="text"
              name="nombres"
              placeholder="Nombres"
              value={newStudent.nombres}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded mb-2 w-full"
            />
            <input
              type="text"
              name="apellidoPaterno"
              placeholder="Apellido Paterno"
              value={newStudent.apellidoPaterno}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded mb-2 w-full"
            />
            <input
              type="text"
              name="apellidoMaterno"
              placeholder="Apellido Materno"
              value={newStudent.apellidoMaterno}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded mb-2 w-full"
            />
            <input
              type="email"
              name="correoElectronico"
              placeholder="Correo Electrónico"
              value={newStudent.correoElectronico}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded mb-2 w-full"
            />
            <input
              type="password"
              name="contrasena"
              placeholder="Contraseña"
              value={newStudent.contrasena}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded mb-2 w-full"
            />
            <input
              type="text"
              name="curp"
              placeholder="CURP"
              value={newStudent.curp}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded mb-2 w-full"
            />
            <select
              name="tipoSangre"
              value={newStudent.tipoSangre}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded mb-2 w-full"
            >
              <option value="">Tipo de Sangre</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            <input
              type="text"
              name="edad"
              placeholder="Edad"
              value={newStudent.edad}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded mb-2 w-full"
            />
            <div className="flex justify-between mt-4">
            <Button onClick={() => { setIsAdding(false); setIsEditing(null); }} className="px-4 py-2 bg-gray-400 text-white rounded">
                Cancelar
              </Button>
              <Button onClick={isAdding ? handleAddStudent : handleUpdateStudent} className="px-4 py-2 bg-teal-500 text-white rounded">
                {isAdding ? 'Agregar' : 'Actualizar'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GrupoDetail;
