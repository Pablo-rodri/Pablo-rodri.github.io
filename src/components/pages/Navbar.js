import logo6 from "../img/square.png"
//import { Link } from 'react-router-dom'

const Navbar = () => {
    return( 
        <> 
 <div class="respmenu">
  <input type="checkbox"/>
  <i class="fas fa-bars"></i>
  <i class="fas fa-times"></i>
     <nav>
     <button>
       <img className="imgNav" src={logo6} ></img>
       </button>
     <ul className="ulNav">
  
          <li><a href="/">Inicio</a></li>
          <li><a href="/SobreMi">Sobre mi</a></li>
          <li><a href="/contacto">Contacto</a></li>
          <li><a href="/curriculum">Curriculum pdf</a></li>  

      </ul>

     </nav>
     </div>
 </>
    )}

    export default Navbar