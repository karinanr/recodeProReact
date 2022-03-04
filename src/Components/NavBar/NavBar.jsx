import './NavBar.css'
import { Link } from "react-router-dom"

export default function NavBar(){
  
  return(
     

      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
         
            <div className="nav">
              <div className="navLeft">
                <h3>Freedom </h3>
              </div>
              
              <div className="collapse navbar-collapse" id="navbarNav">
              <div className="menu">
                <ul>
                <li><Link to="/"><a>Home</a></Link></li>
                 <li><Link to="/Login"><a>Login</a></Link></li>
                 <li><Link to="/Promocoes"><a>Promoções</a></Link></li>
                 <li><Link to="/Precos"><a>Preços</a></Link></li>
                 <li><Link to="/Contato "><a>Contato</a></Link></li>
                 <li><Link to="/Destinos "><a>Destinos</a></Link></li>
                   
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
  
  
 
  )
  }
  
  
  