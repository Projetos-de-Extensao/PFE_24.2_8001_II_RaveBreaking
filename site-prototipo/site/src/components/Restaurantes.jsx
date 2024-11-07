import choripane1 from '../images/restaurante/choripane1.jpg'
import choribacon from '../images/restaurante/chori-bacon-01.jpeg'
function Restaurantes(){
    return (
        <>
        <div className="topo-res">
        <h1 className="h1-res">
            Confira as opções de restaurantes presentes no festival
        </h1>
        </div>
        <br />
        <div className='restaurantes-conteiner'>
            <div className='nome-res'>
                Chimi
            </div>
            <div className='item-res'>
                <h1 className='item-res-nome'>Choripán pimentão</h1>
                <p className='item-res-desc'>cachorro quente com queijo e condimentos</p>
                <img src={choripane1} alt='' className='item-res-img'/>
            </div>
            <div className='item-res'>
                <h1 className='item-res-nome'>Chori bacon smash</h1>
                <p className='item-res-desc'>100g de linguiça suína, queijo cheddar, e bacon artesanal</p>
                <img src={choribacon} alt='' className='item-res-img'/>
            </div>
            <div className='item-res'>
                <h1 className='item-res-nome'>Choripapas</h1>
                <p className='item-res-desc'>Porção de batatas com linguiça suína e maionese</p>
                <img src={choribacon} alt='' className='item-res-img'/>
            </div>
        </div>
        </>
    )
}

export default Restaurantes;