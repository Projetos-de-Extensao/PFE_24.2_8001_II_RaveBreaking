import turismo1 from '../images/Turismo1.png'
import turismo2 from '../images/Turismo2.png'

function ContTurismo() {
    return (
            <div className='turismo-container'>
                <img src={turismo1} alt='imagem 1 da página turismo' className='img-turismo-one'/>
                <div className='turismo-content'>
                    <h1 className='turismo-titulo'>O que fazer em São Paulo?</h1>
                    <p className='turismo-paragraph'>
                    Se você está planejando ficar mais tempo em São Paulo e quer explorar a cidade além do Lollapalooza, há uma 
                    infinidade de atrações imperdíveis que valem a visita! São Paulo é uma metrópole vibrante, rica em cultura, arte, 
                    natureza e gastronomia, oferecendo experiências para todos os gostos. Desde museus renomados e centros culturais até parques e restaurantes, 
                    a cidade é um verdadeiro caldeirão de diversidade. Confira alguns dos principais pontos turísticos que você não pode perder e aproveite para 
                    conhecer o lado único e cosmopolita de São Paulo!
                    </p>
                </div>
                <img src={turismo2} alt= 'imagem 2 da página turismo' className='img-turismo-two'/>
                <div className='turismo-content'>
                    <h2 className='turismo-titulo'>Avenida Paulista</h2>
                    <p className='content-two-turismo'>Uma das avenidas mais icônicas do Brasil, a Avenida Paulista é um verdadeiro centro cultural e financeiro de São Paulo. 
                    Aos domingos, a avenida fica fechada para carros e se transforma em um grande calçadão, onde artistas de rua, feiras, shows 
                    e eventos culturais acontecem. 
                    Não deixe de visitar o MASP (Museu de Arte de São Paulo) e explorar as várias galerias, livrarias e cafeterias ao longo do caminho.
                    </p>
                </div>
             </div>


    )
}
export default ContTurismo