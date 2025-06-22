import { useSelector } from 'react-redux'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootReducer } from '../../store'

const Header = () => {
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)
  const itensCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )

  const valorTotal = itensCarrinho.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
