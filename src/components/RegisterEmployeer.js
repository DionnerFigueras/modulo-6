import { Link, useNavigate } from 'react-router-dom';
import '../styles/RegisterEmployeer.css';
import { useState } from 'react';

function RegisterEmployeer() {
  const [nameCompany, setNameCompany] = useState('');
  const [counrty, setCounrty] = useState('');
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(nameCompany === '' || counrty === '' || email === '' || domain === '' || password === ''){
      setError(true);
      return
    }

    setError(false);
    navigate('/registerJobOffer', {replace:true})
  }


  return (
    <div className='register-employeer'>
      <div className='content-registerEmployeer'>
        <h2>Registro - Empresa</h2>

        <form className="form-registerEmployeer" onSubmit={handleSubmit}>
          <label>Nombre de la empresa:</label>
          <input type='text' value={nameCompany} onChange={e => setNameCompany(e.target.value)}></input>

          <label>Pais:</label>
          <input type='text' value={counrty} onChange={e => setCounrty(e.target.value)}></input>


          <label>Correo de la empresa:</label>
          <input type='email' value={email} onChange={e => setEmail(e.target.value)}></input>


          <label>Dominio de la empresa:</label>
          <input type='text' placeholder='http://' value={domain} onChange={e => setDomain(e.target.value)}></input>


          <label>Contraseña:</label>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>

          <button>Registrarse</button>

          <Link className='link' to='/'>Regresar</Link>
        </form>
        {error && <p className='p-error'>Todos los campos son necesarios</p>}
      </div>
    </div>
  )
}

export default RegisterEmployeer;