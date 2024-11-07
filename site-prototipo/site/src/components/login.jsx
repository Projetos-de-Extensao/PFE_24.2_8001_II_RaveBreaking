import background from '../images/fundo-login1.jpg';

function Login() {  // Corrigido o nome do componente para "Login"
  return (
    <section className="login-section">
      <img src={background} alt="foto de fundo" className="hero-image" />
      <div className="login-container">
        <form className="login-form">
          <h1>LOGIN</h1>  {/* Texto corrigido dentro do h1 */}
          <div className="login-body">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="Digite seu email" required />
          </div>
          <div className="login-body">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;  // Componente exportado corretamente com letra maiúscula
