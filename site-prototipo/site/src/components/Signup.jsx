function Signup() {
    return (
      <div className="signup-container">
        <form className="signup-form">
        <h1 className="">CADASTRO</h1>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="phone">Senha:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div>
            <label htmlFor="phone">Confirmação de senha</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    );
  };

  export default Signup