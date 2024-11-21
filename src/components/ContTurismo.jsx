import turismo1 from '../images/Turismo1.png'
import turismo2 from '../images/Turismo2.jpg'
import turismo3 from '../images/Turismo3.jpeg'

function ContTurismo() {
    return (
            <div className='turismo-container'>
                <div className='turismo-one'>
                    <h1 className='turismo-titulo'>O que fazer em São Paulo?</h1>
                    <p className='content-one-turismo'>
                    Se você está planejando ficar mais tempo em São Paulo e quer explorar a cidade além do Lollapalooza, há uma 
                    infinidade de atrações imperdíveis que valem a visita! São Paulo é uma metrópole vibrante, rica em cultura, arte, 
                    natureza e gastronomia, oferecendo experiências para todos os gostos. Desde museus renomados e centros culturais até parques e restaurantes, 
                    a cidade é um verdadeiro caldeirão de diversidade. Confira alguns dos principais pontos turísticos que você não pode perder e aproveite para 
                    conhecer o lado único e cosmopolita de São Paulo!
                    </p>
                </div>
                <div className='turismo-two'>
                    <img src={turismo1} alt='imagem 1 da página turismo' className='img-one-turismo'/>  
                </div>
                <div className='turismo-three'>
                    <h2 className='turismo-titulo'>Avenida Paulista</h2>
                    <p className='content-two-turismo'>Uma das avenidas mais icônicas do Brasil, a Avenida Paulista é um verdadeiro centro cultural e financeiro de São Paulo. 
                    Aos domingos, a avenida fica fechada para carros e se transforma em um grande calçadão, onde artistas de rua, feiras, shows 
                    e eventos culturais acontecem. 
                    Não deixe de visitar o MASP (Museu de Arte de São Paulo) e explorar as várias galerias, livrarias e cafeterias ao longo do caminho.
                    </p>
                </div>
                <div className='turismo-four'>
                    <img src={turismo2} alt= 'imagem 2 da página turismo' className='img-two-turismo'/>
                </div>
                <div className='turismo-five'>
                    <h2 className='turismo-titulo'>Parque Ibirapuera</h2>
                    <p className='content-three-turismo'>
                    Um dos parques mais emblemáticos do Brasil, o Parque Ibirapuera é um verdadeiro oásis verde no coração de São Paulo. Com uma 
                    extensa área que combina lazer, cultura e natureza, o parque oferece espaços para caminhadas, piqueniques, esportes ao ar 
                    livre e eventos culturais. Aos finais de semana, o parque se torna ponto de encontro de famílias, ciclistas e artistas de 
                    rua, criando um ambiente vibrante e acolhedor. Não deixe de visitar o Pavilhão da Bienal, o MAM (Museu de Arte Moderna) e a Oca, 
                    além de explorar as trilhas e apreciar o visual ao redor do lago.
                    </p>
                </div>
                <div className='turismo-six'>
                    <img src={turismo3} alt= 'imagem 3 da página turismo' className='img-three-turismo'/>
                </div>
             </div>


    )
}
export default ContTurismo