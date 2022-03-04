import Header from "../../Components/Header/Header";
import NavBar from "../../Components/NavBar/NavBar";
import Foto3 from "../../assets/Foto3.jpg";
import Foto6 from "../../assets/Foto6.jpg";
import Foto7 from "../../assets/Foto7.jpg";
import Foto8 from "../../assets/Foto8.jpg";
import Foto9 from "../../assets/Foto9.jpg";
import Foto10 from "../../assets/Foto10.jpg";
import Card from "../../Components/Card/Card";
import "../Promocoes/Promocoes.css";
import "../../Components/Global/Global.css";
import { Link } from "react-router-dom";

export default function Promocoes (){
return (

<>


<Header></Header>
<NavBar></NavBar>

<h1>Conheça nossas promoções!</h1>

<div className="flex-container">
       
   
    <div className="imagem">
         <Card foto={Foto6}></Card>       
          <div className="texto">
     <p><strong>Saindo de São Paulo (SP) para Penha (SC) por apenas R$ 754,00</strong></p>
     </div>
     </div> 

     <div className="imagem">
         <Card foto={Foto7}></Card>       
          <div className="texto">
          <p><strong>Saindo de São Paulo (SP) para Lençóis Maranhences (MA) por apenas R$ 981,00</strong></p>
     </div>
     </div> 
     
     <div className="imagem">
         <Card foto={Foto8}></Card>       
          <div className="texto">
          <p><strong>Saindo de São Paulo (SP) para Rio de Janeiro (RJ) por apenas R$ 427,00</strong></p>
     </div>
     </div> 

     <div className="imagem">
         <Card foto={Foto9}></Card>       
          <div className="texto">
          <p><strong>Saindo de São Paulo (SP) para Parque Nacional Iguaçu (PA) por apenas R$ 864,00</strong></p>
     </div>
     </div> 

     <div className="imagem">
         <Card foto={Foto3}></Card>       
          <div className="texto">
          <p><strong>Saindo de São Paulo (SP) para Salvador (BA) por apenas R$ 754,00</strong></p>
     </div>
     </div> 

</div>

<div>


                                    
<button><Link to="/NovaPromocao"><a>Cadastrar nova Promoção</a></Link></button>

    
    </div>
</>



)



};