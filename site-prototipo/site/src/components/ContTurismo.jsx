import turismo1 from '../images/Turismo1.png'

function ContTurismo() {
    return (
        <section className='flex-container'>
            <div className='img-turismo-one'>
                <img src={turismo1} alt='imagem 1 da página turismo' className='img-turismo-one' />
            </div>
            <div>
                <h1>O que fazer em São Paulo?</h1>
                <p className="turismo-paragraph">
                Se você está planejando ficar mais tempo em São Paulo e quer explorar a cidade além do Lollapalooza, há uma 
                infinidade de atrações imperdíveis que valem a visita! São Paulo é uma metrópole vibrante, rica em cultura, arte, 
                natureza e gastronomia, oferecendo experiências para todos os gostos. Desde museus renomados e centros culturais até parques e restaurantes, 
                a cidade é um verdadeiro caldeirão de diversidade. Confira alguns dos principais pontos turísticos que você não pode perder e aproveite para 
                conhecer o lado único e cosmopolita de São Paulo!
                </p>
            </div>
        </section>

    )
}
export default ContTurismo