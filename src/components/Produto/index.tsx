import { useState, useEffect } from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../../store/slice'

type Produtos = {
    id: number
    nome: string
    imagem: string
    preco: number

}

const Produtos = () => {
  const [produtos, setProdutos] = useState<Produtos[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, []);


  return (
    <>
    <h2 className='titulo_produto'>Produtos</h2>
    <div className='container_produto'>
    {produtos.map((produto) => (
        <li key={produto.id}>
            <img className='imagem_produto' src={produto.imagem} alt={produto.nome} />
            <div>
            <h3>{produto.nome}</h3>
            <p>Preço: R${produto.preco}</p>
            </div>
            <button className='btnAdiciona' onClick={() => (dispatch(addItem(produto)))}>Adicionar ao Carrinho</button>
            <button className='btnRemover' onClick={() => (dispatch(removeItem(produto)))}>Remover</button>
        </li>
        ))}
    </div>
    </>
  )
}

export default Produtos