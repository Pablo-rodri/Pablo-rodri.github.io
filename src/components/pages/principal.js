import logo from "../img/img1.jpg"
import logo2 from "../img/css.png"
import logo3 from "../img/bootstrap.png"
import logo4 from "../img/html-5.png"
import logo5 from "../img/js.png"
import logo6 from "../img/pripia2.jpg"

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
<div className="div2Principal">

    <p className="columnaDerecha moveme"><b>TECNOLOGIAS CONOCIDAS</b> .</p>
    <div className="div3Principal">
    <ul className= "UlPrincipal"l>
      <li ><img className="imgPrincipal1" src={logo4} ></img></li>
      <li ><img className="imgPrincipal" src={logo2} ></img></li>
      <li ><img className="imgPrincipal" src={logo5} ></img></li>
      <li  ><img className="imgPrincipal" src={logo3} ></img></li>    
    </ul>  
    </div>
  </div>
</div>
</>
    )
}

export default Principal