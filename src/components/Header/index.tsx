import './style.css'
import Carrinho from '../Carrinho'

function Header() {
    return (
        <div className="container">
            <h1>Logo</h1>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Produtos</a>
                    </li>
                    <li>
                        <a href="#">Serviços</a>
                    </li>
                    <li>
                        <a href="#">Contatos</a>
                    </li>
                </ul>
                <Carrinho/>
        </div>
    )
}

export default Header