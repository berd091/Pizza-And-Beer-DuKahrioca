import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from '../components'

const categoryNames = ['Carnívoras', 'Vegetarianas', 'Lotadas de Molho', 'Recomendações do Chef', 'Bebidas']
const sortItems = [
  { name: 'Avaliação', type: 'rating', order: 'desc' },
  { name: 'Preço', type: 'price', order: 'asc' },
  { name: 'A-Z', type: 'name', order: 'asc' },
]

const Home = () => {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters)

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [category, sortBy])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    })
  }

  return (
    <div className='container'>
      <div className='content--top'>
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className='content--title'>
        {category === null ? 'Todas' : categoryNames[category]}
      </h2>
      <div className='content--items'>
        {isLoaded
          ? items.map((obj) => (
            <PizzaBlock
              onClickAddPizza={handleAddPizzaToCart}
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              {...obj}
            />
          ))
          : Array(12)
            .fill(0)
            .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  )
}

export default Home
