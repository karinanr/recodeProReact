import './Body.css'
import './../Global/Global.css'
import Card from '../Card/Card'
import Foto5 from '../../assets/Foto5.jpg'


export default function Body (){

return (

<body>


  <table class="table">
    <thead>
      <tr>
        <th scope="col">COMPROMETIMENTO</th>
        <th scope="col">EXPERIÊNCIA</th>
        <th scope="col">SERVIÇO</th>
        <th scope="col">PLANTÃO</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>Atendemos a viagens feitas sob medida - suas expectativas não serão apenas atendidas em uma de nossas férias, mas superadas todas as vezes. </td>
        <td>Nossos representantes de viagens viajaram extensivamente pelo pelo Brasil e podem ajudar a criar as férias perfeitas.</td>
        <td>O mesmo representante de viagens dedicado cuidará da sua viagem do início ao fim.</td>
        <td>Você terá acesso ao nosso número de emergência 24 horas por dia, 7 dias por semana, enquanto estiver viajando no Brasil.</td>
      </tr>
     
    </tbody>
  </table>

        
<section class="divCards container-fluid">
  <Card foto={Foto5}></Card> 
  
</section>


  
<div className="container">

<div className='box box-1'> <a href="https://www.gov.br/anvisa/pt-br/assuntos/paf/coronavirus/arquivos/arquivos-protocolos/7132json-file-1 " target={"blank"}>COVID 19 - SAÚDE DO VIAJANTE 
ORIENTAÇÕES AOS VIAJANTES </a></div>
<div className='box box-1'> <a href="https://www.unidas.com.br/para-voce/reservas-nacionais/?action=new&cupom=15verao&keyword=aluguel%20de%20carros&adgroup=118511561952&campaign=9650273277&matchtype=e&gclid=cjwkcaia6y2qbhateiwaghybpbjrcu9nkedfli9zdxy1i2nwhnzd4kzck_v5n767scju00xmft-24bocdboqavd_bwe&gclid=cjwkcaia6y2qbhateiwaghybpbjrcu9nkedfli9zdxy1i2nwhnzd4kzck_v5n767scju00xmft-24bocdboqavd_bwe&action=new&cupom=15VERAO&keyword=aluguel%20de%20carros&adgroup=118511561952&campaign=9650273277&matchtype=e&gclid=CjwKCAiA6Y2QBhAtEiwAGHybPbjrCu9nKEdFLI9ZdxY1I2NWhNzD4kZck_V5n767ScJU00xmft-24BoCdboQAvD_BwE&gclid=CjwKCAiA6Y2QBhAtEiwAGHybPbjrCu9nKEdFLI9ZdxY1I2NWhNzD4kZck_V5n767ScJU00xmft-24BoCdboQAvD_BwE" target={"blank"}> RESERVE SEU CARRO </a></div>
</div>




   
        <div className="banner">
     <p><b> SUA PRÓXIMA PARADA É AQUI! </b></p> 
        </div>

</body>


    )
}

