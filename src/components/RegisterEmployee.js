import { Link, useNavigate } from 'react-router-dom';
import '../styles/RegisterEmployee.css';
import { useState } from 'react';

function RegisterEmployee() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [surname, setSurname] = useState('');
  const [Ssurname, setSsurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrror] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === '' || surname === '' || lastName === '' || Ssurname === '' || email === '' || password === ''){
      setErrror(true);
      return
    }

    setErrror(false);
    navigate('/applicants', {replace:true})
  }

  return (
    <div className='register-employee'>
      <div className='content-register'>

        <h2>Registro - Empleados</h2>

        <form className='form-register' onSubmit={handleSubmit}>

          <label>Nombre: </label>
          <input type='text' value={name} onChange={e => setName(e.target.value)}></input>

          <label>Segundo Nombre: </label>
          <input type='text' value={lastName} onChange={e => setLastName(e.target.value)}></input>

          <label>Apellido: </label>
          <input type='text' value={surname} onChange={e => setSurname(e.target.value)}></input>

          <label>Segundo Apellido: </label>
          <input type='text' value={Ssurname} onChange={e => setSsurname(e.target.value)}></input>

          <label>Correo: </label>
          <input type='email' value={email} onChange={e => setEmail(e.target.value)}></input>

          <label>contrseña: </label>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>

          <button>Registrarse</button>
          <Link className='link' to='/'>Regresar</Link>
        </form>
        {error && <p className='p-error'>Todos los campos son necesarios</p>}
      </div>
    </div>
  )
}

export default RegisterEmployee;