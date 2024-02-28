import './style.css'
import Imagem from '../../assets/Ebac_shop.png'

function Slider() {
    return (
        <div className='container_imagem'>
            <img className='img_header' src={Imagem} alt="" />
        </div>
    )
}

export default Slider