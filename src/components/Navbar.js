import React from 'react'
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (

/*<span className="navbar-toggler-icon"></span>*/
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">

<div className="container">
    
    
    <a className="navbar-brand" href="#"> <img  className="logo" src={logo} alt="logo..."  /> </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>

    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml ">
        <li className="nav-item active">
          <a className="nav-link" href="#">Accueil </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Formation </a>
          </li>
          <li className="nav-item active">
          <a className="nav-link" href="#">Prépa </a>
        </li>
       
          <li className="nav-item active">
          <a className="nav-link" href="#">Projets étudiants </a>
          </li>
          <li className="nav-item active">
          <a className="nav-link" href="#">Actualité </a>
          </li>
          <li className="nav-item active">
          <a className="nav-link" href="#">Qui sommes nous ? </a>
          </li>
      
      
       
      </ul>
     
    </div>

    </div>
  </nav>
  )
}

export default Navbar
