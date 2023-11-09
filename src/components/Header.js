import React from "react"
import ReactTyped from "react-typed"

const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="main-info">
        <h1> Web development and websites promotions</h1>
        <ReactTyped className="typed-text"
        strings={["Statistique"," Bureautique","Lettre de motivation","Analyse de données","Traitement de données","Logiciel statistique"]}
        typeSpeed={40}
        backSpeed={60}
        loop></ReactTyped>
        <a href="#" className="btn-main-offer"> Contacter nous</a>
        </div>
      
    </div>
  )
}

export default Header
