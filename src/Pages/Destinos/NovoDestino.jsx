import Header from "../../Components/Header/Header";
import NavBar from "../../Components/NavBar/NavBar";
import "../Destinos/Destinos.css";
import "../../Components/Global/Global.css";

export default function Destinos (){
return (

<>


<Header></Header>
<NavBar></NavBar>


<div className="cad">

<h1>Cadastrar novo destino</h1>
            
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
                            
                    <button classNameName='button' type="submit"> Cadastrar</button> 

    
    </div>
    </div>
</>



)



}