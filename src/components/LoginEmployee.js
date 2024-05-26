import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginEmployee.css';
import { useState } from 'react';


function LoginEmployee() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError(true);
      return
    }
    setError(false);
    navigate('/applicants', {replace:true})
  }

  return (
    <div className="login-employee">
      <div className='content-form'>

        <div className='login-title'>
          <h2>Iniciar Sesion - Empleado</h2>
          <p>Descubre las mejores oportunidades en el mundo IT.</p>
        </div>

        <form className='form-loginEmployee' onSubmit={handleSubmit}>
          <label for="username">Nombre de usuario:</label>
          <input type='text' value={username} onChange={e => setUsername(e.target.value)}></input>

          <label for="pasword">Contraseña</label>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>

          <button >Iniciar Sesion</button>
          <Link className='link' to='/'>Regresar</Link>
        </form>
        {error && <p className='p-error'>Todos los campos son obligatorios</p>}
      </div>

    </div>

  );
}

export default LoginEmployee;