import Header from "../../Components/Header/Header";
import NavBar from "../../Components/NavBar/NavBar";
import "../Promocoes/Promocoes.css";
import "../../Components/Global/Global.css";

export default function NovaPromocao (){
return (

<>


<Header></Header>
<NavBar></NavBar>


<div className="promo">

<h1>Cadastrar nova Promoção</h1>
            
            <div className="novo-container">
                             <div classNameName="mb2">
                                <label className="form-label">Cidade</label>
                                <input type="cidade" className="form-control" id="exampleFormControlInput1"
                                    placeholder="Digite a cidade"/>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Estado</label>
                                <input type="estado" className="form-control" id="exampleFormControlInput1"
                                    placeholder="Digite o estado"/>
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Pais</label>
                                <input type="pais" className="form-control" id="exampleFormControlInput1"
                                    placeholder="Digite o País"/>
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Preço</label>
                                <input type="preço" className="form-control" id="exampleFormControlInput1"
                                    placeholder="Digite o Valor"/>
                            </div>
                            
                    <button classNameName='button' type="submit"> Cadastrar</button> 

    
    </div>
    </div>
  
</>



)



}