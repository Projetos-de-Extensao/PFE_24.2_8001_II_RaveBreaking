import Login from "../components/login"; // Para login.js
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function EventLogin() {
  return (
    <>
      <NavBar />
      <Login />  {/* Certifique-se de que está usando o nome correto aqui */}
      <Footer />
    </>
  );
}

export default EventLogin;
