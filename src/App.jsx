import React, { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', { name, email, gender });
  };

  return (
    <div className="App">
      <h1>Formulário</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={({target}) => setName(target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={({target}) => setEmail(target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gênero:</label>
          <select id="gender" value={gender} onChange={({target}) => setGender(target.value)}>
            <option value="">Selecione</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </select>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
