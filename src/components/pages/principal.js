
import logo6 from "../img/foto.jpg"
import logo1 from "../img/github.png"
import logo2 from "../img/linkedin.png"
import logo3 from "../img/gorjeo.png"

const Principal = () => {
    
    return (
       <> 
       <div id="particle-container"></div>    
<h2 className="h2Principal">Pablo Rodríguez Ramírez</h2>
<div class='ripple-background'>
  <div class='circle xxlarge shade1'></div>
  <div class='circle xlarge shade2'></div>
  <div class='circle large shade3'></div>
  <div class='circle mediun shade4'></div>
  <div class='circle small shade5'></div>
</div>

<div id="container">
  <div className="div1Principal">

<div className="div1-2">
<img className="img1Principal" src={logo6}             
     alt="" />

<p>Soy una persona con una alta capacidad de adaptación, de compromiso con la empresa y con una gran capacidad de esfuerzo. <br></br>Ademas poseo amplias habilidades de trabajo en equipo y de comunicación. Estas experiencias profesionales también me han permitido desarrollar habilidades de gestión del tiempo y de organización. 

<br></br>También por mi experiencia estoy acostumbrado a trabajar por objetivos y bajo presión.</p>  

  </div>
</div>
</div>
<section className="redesSociales">
    <a className="aRedes" href="https://github.com/Pablo-rodri?tab=repositories"><img className="imgRedes" src={logo1}/></a>
    <a className="aRedes"  href="https://www.linkedin.com/in/pablo-rodr%C3%ADguez-ram%C3%ADrez/"><img className="imgRedes" src={logo2}/></a>
    <a className="aRedes"  href="https://github.com/Pablo-rodri?tab=repositories"><img className="imgRedes" src={logo3}/></a>


  </section>
</>
    )
}

export default Principal