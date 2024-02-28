import { useSelector } from 'react-redux'
import './style.css'
import { RootReducer } from '../../store/reducs/store'
import icone from '../../assets/ico-card.png'

function Carrinho() {
    const itens = useSelector((state: RootReducer) => state.carrinho.items)

    const valorTotal = itens.reduce((acc, item) => {
        acc += item.preco
        return acc
      }, 0)
    return (
        <>
            <span>
                Total R$ {valorTotal}
            </span>
            <div>
            <img className='icone' src={icone} alt="Carrinho" />
            </div>
            <div className="circle">{itens.length}</div>
        </>
    )
}

export default Carrinho