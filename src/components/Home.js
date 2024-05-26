import React from "react";
import logo from '../img/Logo.png';
import '../styles/Home.css';
import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="home-content-main">


      <header className="home-container">
        <div className="home-logo">
          <img src={logo} alt="Logo" title="Logo" />
          <p>Code Ninjas</p>
        </div>

        <nav className="nav-home">
          <ul className="main-list">
            <li className="login-item">
              Ingresar
              <ul className="sub-listLogin">
                <li>
                  <Link className="links" to='/loginEmployee'>Empleado</Link> 
                </li>
                <li>
                  <Link className="links" to='/loginEmployeer'>Empresa</Link> 
                </li>
              </ul>
            </li>
            <li className="register-item">
              Registrarse
              <ul className="sub-listRegister">
                <li>
                  <Link className="links" to='/registerEmployee'>Empleado</Link> 
                </li>
                <li>
                  <Link className="links" to='/registerEmployeer'>Empresa</Link> 
                </li>
              </ul>
            </li>
          </ul>
        </nav>

      </header>

      <section className="home-body">
        <div className="body-img">
          <h1>Deja que los empleos llegen a ti</h1>
          <p>Oportunidades ilimitadas para profesionales apasionados.</p>
        </div>

        <div className="home-employee">
          <p>Filtramos los empleos para ti. Solo las mejores empresas.</p>
          <div className="employee-img">
            <img src={require('../img/Uber.png')} alt="" title=""></img>
            <img src={require('../img/Accenture.png')} alt="" title=""></img>
            <img src={require('../img/Deloitte.png')} alt="" title=""></img>
            <img src={require('../img/Mercado-libre.png')} alt="" title=""></img>
            <img src={require('../img/Santander.png')} alt="" title=""></img>
            <img src={require('../img/Spotify.png')} alt="" title=""></img>

          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;