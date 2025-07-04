import { useDispatch, useSelector } from 'react-redux'
import { Produto } from '../../types'
import { adicionar } from '../../store/reducers/carrinho'
import { adicionarOuRemover } from '../../store/reducers/favoritos'
import { RootReducer } from '../../store'
import * as S from './styles'

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)

const ProdutoComponent = ({ produto }: { produto: Produto }) => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)
  const estaNosFavoritos = favoritos.some((f) => f.id === produto.id)

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(adicionarOuRemover(produto))}>
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))}>
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
