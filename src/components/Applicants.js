import React from "react";
import Header from './Header';
import '../styles/Applicants.css';
import { useState } from "react";
import { Link } from "react-router-dom";

function Applicants() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [charge, setcharge] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || surname === '' || email === '' || charge === '' || role === '') {
            setError(true);
            return
        }
        setError(false)
    }

    return (
        <section className="register-applicants">
            <Header />
            <div className="container-applicants">
                <div className="aside-applicants">
                    <p>Bienvenido</p>
                    <Link className="link" to='/'>Salir</Link>
                </div>

                <div className="main-applicants">
                    <h2>Postulacion</h2>
                    <form className="form-applicants" onSubmit={handleSubmit}>
                        <label>Nombre:</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />

                        <label>Apellido:</label>
                        <input type="text" value={surname} onChange={e => setSurname(e.target.value)} />

                        <label>Correo:</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                        <label>Cargo del postulante:</label>
                        <input type="text" value={charge} onChange={e => setcharge(e.target.value)} />

                        <label>Rol a postular:</label>
                        <input type="text" value={role} onChange={e => setRole(e.target.value)} />

                        <button>Agregar oferta</button>
                    </form>
                    {error && <p className="p-error">Todos los campos son necesarios</p>}
                </div>

            </div>

        </section>
    )
}

export default Applicants;