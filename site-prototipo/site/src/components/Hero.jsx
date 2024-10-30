import backgroundImg from '../images/fundo-home.jpg'

function Hero() {
  return (
    <div>
      <img src={backgroundImg} alt="foto de fundo" className="hero-image"/>
      <div className="hero-content">
        <h1>Bem-vindo ao RaveBreaking!!</h1>
        <h2>Atrações, shows e serviços - todas as informações essenciais sobre o LollaPalooza em um só lugar. </h2>
        <p>Quer descobrir mais?</p>
        <a href="/About" className="cta-button">Clique aqui</a>
      </div>
    </div>
  );
}

export default Hero;
