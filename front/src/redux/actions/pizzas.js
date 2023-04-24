import axios from 'axios' 

export const setLoaded = payload => ({
	type: 'SET_LOADED',
	payload
})

export const fetchPizzas = (sortBy, category) => dispatch => {
	dispatch({
		type: 'SET_LOADED',
		payload: false,
	}) 


 axios.get(`https://6445a11c0431e885f0017df0.mockapi.io/pizzas?${category !== null 
		? `category=${category}` 
		: ''}&sortby=${sortBy.type}&order=${sortBy.order}`)
	.then(({ data }) => {
        dispatch(setPizzas(data))
    })
}

export const setPizzas = items => ({
	type: 'SET_PIZZAS',
	payload: items,
})