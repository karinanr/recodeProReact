
import Header from "../../Components/Header/Header"
import NavBar from "../../Components/NavBar/NavBar"
import Card from "../../Components/Card/Card"
import Foto2 from "../../assets/Foto2.jpg"


function Contato (){

    return(

       
        <>

        <Header></Header>
        <NavBar></NavBar>
        <body>
        <div className="login-container">
        <section className="form">
           <form>
            <h1>Deixe sua mensagem</h1>
            
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
                                <label class="form-label">Telefone</label>
                                <input type="Telefone" class="form-control" id="exampleFormControlInput1"
                                    placeholder="Telefone"/>
                            </div>

                            <div class="mb-4">
                                <label class="form-label">Mensagem</label>
                                <input type="Mensagem" class="form-control" id="exampleFormControlInput1"
                                    placeholder="Mensagem"/>
                            </div>
                            
                    <button className='button' type="submit"> Enviar</button> 
    </form>
    
          
        </section>
    
        <section class="divCards container-fluid">
      <Card foto={Foto2}></Card> 
      
    </section>
    
    </div>
    </body>
    </>
    )

}

export default Contato