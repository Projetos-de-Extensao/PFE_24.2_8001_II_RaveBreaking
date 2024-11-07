
import styled from 'styled-components';
import  BackGroundImage  from './HeroImage';

const HeroContent = styled.div`
color: white;
padding: 40px 60px;
border-radius: 10px;
background-color: rgba(33, 33, 33, 0.5);
justify-content: center;
align-items: center;
text-align: center;
`;


function Hero() {
  return (
    <div>
      <BackGroundImage />
      <HeroContent>
        <h1>Bem-vindo ao RaveBreaking!!</h1>
        <h2>Atrações, shows e serviços - todas as informações essenciais sobre o LollaPalooza em um só lugar. </h2>
        <p>Quer descobrir mais?</p>
        <a href="/About" className="cta-button">Clique aqui</a>
      </HeroContent>
    </div>
  );
}

export default Hero;
