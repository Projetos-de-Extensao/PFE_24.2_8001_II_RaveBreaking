<<<<<<< HEAD:src/components/Signup.jsx
import background from '../images/fundo-login1.jpg';

function Signup() {
  return (
    <section className="signup-section">
    <img src={background} alt="foto de fundo" className="hero-image"/>
      <div className="signup-container">
        <form className="signup-form">
        <h1 className="">CADASTRO</h1>
          <div className='signup-body'>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" placeholder="Digite seu nome completo" required />
          </div>
          <div className='signup-body'>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="Digite seu email" required/>
          </div>
          <div className='signup-body'>
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
          </div>
          <div className='signup-body'>
            <label htmlFor="password">Confirmação de senha</label>
            <input type="password" id="password" name="password" placeholder="Confirme sua senha" required />
          </div>
          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </section>
  );
}

  export default Signup;
=======
import background from '../images/fundo-login1.jpg';

function Login() {
  return (
    <section className="login-section">
      <img src={background} alt="foto de fundo" className="hero-image" />
      <div className="login-container">
        <form className="login-form">
          <h1>LOGIN</h1>
          <div className="login-body">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="Digite seu email" required />
          </div>
          <div className="login-body">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
          </div>
          <button type="submit">Entrar</button>
          <p className="signup-link">Não possui cadastro? <a href="/signup">Cadastre-se aqui!</a></p>
        </form>
      </div>
    </section>
  );
}

export default Login;
>>>>>>> c0be0d319d7f26847c2283df8b0993aa6c9b27d8:site-prototipo/site/src/components/Signup.jsx
