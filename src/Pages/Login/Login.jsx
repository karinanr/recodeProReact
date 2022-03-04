import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import NavBar from "../../Components/NavBar/NavBar"
import '../Login/Login.css'
import '../../Components/Global/Global.css'
import Foto1 from '../../assets/Foto1.jpg'
import Card from "../../Components/Card/Card"

export default function login (){
    
return(

    <>

    <Header></Header>
    <NavBar></NavBar>
    <body>
    <div className="login-container">
    <section className="form">
       <form>
        <h1>Acesse sua conta</h1>
        
        <div class="my-2">
                            <label class="form-label">Nome</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"
                                placeholder="Nome"/>
                        </div>
                        <div class="my-2">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Senha</label>
                            <input type="password" class="form-control" id="exampleFormControlInput1"
                                placeholder="Senha"/>
                        </div>
                        
                <button className='button' type="submit"> Login</button> 
                </form>

      
    </section>

    <section class="divCards container-fluid">
  <Card foto={Foto1}></Card> 
  
</section>

</div>
</body>
</>



)
}
