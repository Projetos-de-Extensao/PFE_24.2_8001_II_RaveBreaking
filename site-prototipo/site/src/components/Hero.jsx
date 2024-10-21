import backgroundImg from '../images/fundo-home.jpg'

function Hero() {
  return (
    <section>
      <img src={backgroundImg} alt="foto de fundo" className="hero-image"/>
      <div className="hero-content">
        <h1>Bem-vindo ao LollaPalooza!!</h1>
        <p>Quer descobrir mais sobre o festival?</p>
        <a href="/About" className="cta-button">Clique aqui</a>
      </div>
    </section>
  );
}

export default Hero;

