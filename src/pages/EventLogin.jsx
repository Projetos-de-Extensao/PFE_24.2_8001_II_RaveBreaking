import React from 'react';
import Login from "../components/login"; 
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function EventLogin() {
  return (
    <>
      <NavBar />

      <Login />  
      
      <Footer />
    </>
  );
}

export default EventLogin;
