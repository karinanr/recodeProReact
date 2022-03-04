import Header from "../../Components/Header/Header";
import NavBar from "../../Components/NavBar/NavBar";
import Foto12 from "../../assets/Foto12.jpg";
import Foto13 from "../../assets/Foto13.jpg";
import Foto14 from "../../assets/Foto14.jpg";
import Foto16 from "../../assets/Foto16.jpg";
import Card from "../../Components/Card/Card";
import "../Destinos/Destinos.css";
import "../../Components/Global/Global.css";
import { Link } from "react-router-dom"

export default function Destinos (){
return (

<>


<Header></Header>
<NavBar></NavBar>

<div className="flex-container">
       
   
    <div className="imagem">
         <Card foto={Foto12}></Card>       
          <div className="texto">
     <p><strong>Penha (SC)</strong></p>
     </div>
     </div> 

     <div className="imagem">
         <Card foto={Foto13}></Card>       
          <div className="texto">
          <p><strong>Lençois Maranhences - MA</strong></p>
     </div>
     </div> 
     
     <div className="imagem">
         <Card foto={Foto14}></Card>       
          <div className="texto">
          <p><strong>Rio de Janeiro (RJ)</strong></p>
     </div>
     </div> 

     <div className="imagem">
         <Card foto={Foto16}></Card>       
          <div className="texto">
          <p><strong>Salvador (BA)</strong></p>
     </div>
     </div> 

 

<div>


                                    
<button><Link to="/Novodestino"><a>Cadastrar novo Destino</a></Link></button>

    
    </div>
    </div>

</>



)



}