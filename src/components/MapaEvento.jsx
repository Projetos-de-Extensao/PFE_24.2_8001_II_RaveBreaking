import mapa from '../images/mapa-festival.png'
import styled from 'styled-components';

const MapaImg = styled.img`
position: relative;
top: 0;
left:0;
width: 100%;
height: 100%;
object-fit: cover;
z-index: -1; /* imagem abaixo do texto */
`;

function MapaEvento(){
  return (
      <MapaImg src={mapa} alt="mapa dp festival"/>
  )
}

export default MapaEvento;
