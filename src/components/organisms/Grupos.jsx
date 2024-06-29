import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CrearGrupoForm from './CrearGrupoForm';
import Button from '../atoms/Button';

const Grupos = () => {
  const [isCreatingGroup, setIsCreatingGroup] = useState(false);
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  const handleOpenForm = () => {
    setIsCreatingGroup(true);
  };

  const handleCloseForm = () => {
    setIsCreatingGroup(false);
  };

  const handleCreateGroup = (group) => {
    setGroups([...groups, { ...group, id: groups.length }]);
    setIsCreatingGroup(false);
  };

  const handleGroupClick = (group) => {
    navigate(`/grupo/${group.id}`, { state: group });
  };

  return (
    
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8">Grupos</h1>
      <div className="w-full max-w-3xl flex flex-col items-center border border-gray-300 p-4 mt-8">
        {groups.map((group, index) => (
          <div 
            key={index} 
            className="bg-teal-500 text-white p-4 rounded-lg mb-2 cursor-pointer w-full text-center" 
            onClick={() => handleGroupClick(group)}
          >
            <h2 className="text-xl">{group.name}</h2>
            <p>{group.subject}</p>
            <p>{group.grade} - {group.group}</p>
          </div>
        ))}
        <button 
          className="bg-teal-600 text-white p-3 rounded text-2xl mt-4" 
          onClick={handleOpenForm}
        >
          +
        </button>

      </div>
      {isCreatingGroup && <CrearGrupoForm onCreate={handleCreateGroup} onClose={handleCloseForm} />}
    </div>
  );
};

export default Grupos;
