import Header from "../../Components/Header/Header"
import NavBar from "../../Components/NavBar/NavBar"
import Card from "../../Components/Card/Card"
import Foto4 from "../../assets/Foto4.jpg"
import '../Precos/Precos.css'

export default function Precos (){

    return(

        <>

        <Header></Header>
        <NavBar></NavBar>

      
        <body>
    <div className="login-container">
    <section className="form">
       <form>
        <h1><strong>Solicite uma cotação</strong></h1>
        
        <div class="my-2">
                         <label class="form-label">Nome</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"
                                placeholder="Nome"/>
                        </div>

                        <div class="my-2">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="Informe seu melhor e-mail"/>
                        </div>

                        <div class="my-3">
                            <label class="form-label">Telefone</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="Informe seu telefone"/>
                        </div>


                        <div class="mb-4">
                            <label class="form-label">Viajantes</label>
                            <input type="Passageiros" class="form-control" id="exampleFormControlInput1"
                                placeholder="Informe a quantidade viajantes"/>
                        </div>

                        <div class="mb-5">
                            <label class="form-label">Origem</label>
                            <input type="Origem" class="form-control" id="exampleFormControlInput1"
                                placeholder="Informe a cidade de origem"/>
                        </div>  

                        <div class="mb-6">
                            <label class="form-label">Data de ida</label>
                            <input type="Ida" class="form-control" id="exampleFormControlInput1"
                                placeholder="Informe a data de ida"/>
                        </div>    

                        <div class="mb-7">
                            <label class="form-label">Destino</label>
                            <input type="Destino" class="form-control" id="exampleFormControlInput1"
                                placeholder="Informe a cidade de destino"/>
                          </div> 

                        <div class="mb-8">
                            <label class="form-label">Data de volta</label>
                            <input type="Volta" class="form-control" id="exampleFormControlInput1"
                                placeholder="Informe a data de volta"/>
                        </div> 

                      
                        <button className="button" type="submit">Enviar</button>

                        </form>
                    
                        </section>
                        
                         <section class="divCards container-fluid">
                         <Card foto={Foto4}></Card> 
                        </section>
      
        </div>
        </body>

    </>

    )
}