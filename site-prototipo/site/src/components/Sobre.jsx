import backgroundImg from '../images/fundo-home.jpg'

function Sobre(){
  return (
    <section>
      <img src={backgroundImg} alt="foto de fundo" className="hero-image"/>
      <div className="sobre-content">
        <h2>Sobre o festival</h2>
        <p>O Lollapalooza é um dos maiores e mais icônicos festivais de música do mundo, reunindo artistas de diversos gêneros, como rock, indie, pop e música eletrônica. Desde sua criação, o evento se tornou sinônimo de diversidade cultural e entretenimento de alta qualidade, proporcionando uma experiência única para os amantes de música. Além dos shows, o festival oferece uma variedade de atrações, incluindo opções gastronômicas, ativações de marcas, e atividades interativas, fazendo do Lollapalooza um ponto de encontro para quem busca diversão e inovação.</p>
        <h2>Sobre nossa plataforma</h2>
        <p>Nosso site foi criado para tornar sua experiência no Lollapalooza ainda mais incrível e sem complicações. Aqui, você encontra tudo o que precisa saber sobre o festival em um só lugar – desde o line-up completo, informações sobre as atrações, até dicas de gastronomia e mapas interativos. Queremos que você curta o Lolla ao máximo, sem se preocupar em perder algo importante. Com notificações em tempo real e sugestões personalizadas, nossa missão é te ajudar a aproveitar cada momento do evento da melhor forma possível!</p>
        <a href="/">Voltar para o início</a>
      </div>
    </section>
  );
}

  export default Sobre;
