import React from 'react';

import './styles.css';

function Button({started, onClick}) {
  return (
    <button className="btn-start" style={{
      background: started ? "#eb2727" : "#10a850"
    }}
      onClick={onClick}
    >
      {!started 
      ? 
      'Iniciar' 
      :         
      'Parar'}
    </button>
  );
};

export default Button;
