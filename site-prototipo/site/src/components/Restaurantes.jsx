import choripane1 from '../images/restaurante/choripane1.jpg'
function Restaurantes(){
    return (
        <>
        <div className="topo-res">
        <h1 className="h1-res">
            Confira as opções de restaurantes presentes no festival
        </h1>
        </div>
        <section className="opcoes">
        <div>
            <h2 className="res-nome1">Chimi</h2>
            <div className='chimi'>
                <h2 className='chimi-op1'>choripán pimentão</h2>
                <img src={choripane1} alt='Foto do sanduiche choripane do restaurante' className='img-choripane' width="178" height="160" />
            </div>
        </div>
        </section>
        </>
    )
}

export default Restaurantes;