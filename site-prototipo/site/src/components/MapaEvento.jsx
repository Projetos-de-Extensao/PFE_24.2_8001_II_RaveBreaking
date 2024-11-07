import mapa from '../images/mapa-festival.png'
import legenda from '../images/legenda-festival.png'

function MapaEvento() {
  return (
        <div className='local-div'>
          <div>
            <h1 className='legenda-mapa-fest'>Mapa do festival</h1>
          </div>
          <div>
            <img src={mapa} alt="mapa dp festival" className="mapaImg"/>
          </div>
          <div>
            <h2 className='legenda-mapa-fest'>Legenda ampliada:</h2>
          </div>
          <div>
            <img src={legenda} alt="legenda ampliada do festival" className="mapaLeg"/>
          </div>
        </div>
  )
}

export default MapaEvento;
