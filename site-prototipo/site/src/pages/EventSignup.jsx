function EventSignup() {
  return (
    <div className="signup-container">
      <h1>Inscrição para o Lollapalooza</h1>
      <form className="signup-form">
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="phone">Telefone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <button type="submit">Inscrever-se</button>
      </form>
    </div>
  );
};

export default EventSignup;
