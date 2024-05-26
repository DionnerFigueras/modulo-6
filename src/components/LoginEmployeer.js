import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginEmployeer.css';
import { useState } from 'react';

function LoginEmployeer() {
    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === '' || password === ''){
            seterror(true);
            return
        }
        seterror(false);
        navigate('/registerJobOffer', {replace:true})
    }

    return (
        <div className='login-employeer'>

            <div className='content-login'>
                <div className='login-title'>
                    <h2>Iniciar Sesion - Empresas</h2>
                    <p>Encontrando las mentes brillantes que impulsan el futuro.</p>
                </div>

                <form className='form-loginEmployeer' onSubmit={handleSubmit}>
                    <label>Nombre de usuaario: </label>
                    <input type='text' value={username} onChange={e => setUsername(e.target.value)} ></input>

                    <label>Contraseña: </label>
                    <input type='password' value={password} onChange={e => setpassword(e.target.value)}></input>

                    <button>Iniciar Sesion</button>
                    <Link className='link' to='/'>Regresar</Link>
                </form>
                {error && <p className='p-error'> Todos los campos son requeridos </p>}
            </div>
        </div>
    );
}

export default LoginEmployeer;