import React from 'react'
import logo from '../logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (

/*<span className="navbar-toggler-icon"></span>*/
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">

<div className="container">
    
    
    <a className="navbar-brand" href="/home"> <img  className="logo" src={logo} alt="logo..."  /> </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>

    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml ">
        <li className="nav-item active">
          <a className="nav-link" href="/home">Accueil</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="formation">Formation </a>
          </li>
          <li className="nav-item active">
          <a className="nav-link" href="/prepa">Prépa</a>
        </li>
       
          <li className="nav-item active">
          <a className="nav-link" href="projet-etudiant">Projets étudiants </a>
          </li>
          <li className="nav-item active">
          <a className="nav-link" href="actualite">Actualité </a>
          </li>
          <li className="nav-item active">
          <a className="nav-link" href="qui-sommes-nous">Qui sommes nous ? </a>
          </li>
      
      
       
      </ul>
     
    </div>

    </div>
  </nav>
  )
}

export default Navbar
