function ContGps() {
    return (
    <div className="gps-container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.1712877797427!2d-46.71439421064291!3d-23.705576494288845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4f5c1f3bbc83%3A0x3039ef00468fb886!2sAut%C3%B3dromo%20Interlagos!5e0!3m2!1spt-BR!2sbr!4v1729793041125!5m2!1spt-BR!2sbr" 
            width="357.5"
            height="500"       
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    )
}
export default ContGps