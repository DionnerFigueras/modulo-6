import { Link } from 'react-router-dom';
import '../styles/RegisterJobOffer.css';
import Header from './Header';
import { useState } from 'react';

function RegisterJobOffer() {
  const [area, setArea] = useState('');
  const [booth, setBooth] = useState('');
  const [experience, setExperience] = useState('');
  const [modality, setModality] = useState('');
  const [salary, setSalary] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(area === '' || booth === '' || experience === '' || modality === '' || salary === ''){
      setError(true);
      return
    }

    setError(false);

  }


  return (
    <div className='register-jobOffer'>
      <Header />
      <div className="container">
        

        <div className="aside">
          <p>Bienvenido</p>
          <Link className='link' to='/'>Salir</Link>
        </div>

        <div className="main-jobOffer">
          <h2>Crea tu oferta de empleo</h2>
          <form className='form-jobOffer' onSubmit={handleSubmit}>
            <label>Area:</label>
            <input type="text" value={area} onChange={e => setArea(e.target.value)} />

            <label>Puesto:</label>
            <input type="text" value={booth} onChange={e => setBooth(e.target.value)} />

            <label>Nivel de experiencia:</label>
            <input type="text" value={experience} onChange={e => setExperience(e.target.value)} />
            <label>Modalidad:</label>

            <input type="text" value={modality} onChange={e => setModality(e.target.value)} />

            <label>Salario</label>
            <input type="number" value={salary} onChange={e => setSalary(e.target.value)}/>

            <button>Agregar oferta</button>
          </form>
          {error && <p className='p-error'>Todos los campos son necesarios</p>}
        </div>
      </div>
    </div>
  )
}

export default RegisterJobOffer;