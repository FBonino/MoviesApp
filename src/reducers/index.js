import {GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVOURITE, REMOVE_MOVIE_FAVOURITE} from '../actions'

const initialState = {
	favouriteMovies: [],
	loadedMovies: [],
	movieDetail: {}
}

export default function rootReducer(state = initialState, action) {
	switch(action.type) {
		case GET_MOVIES:
			return {
				...state,
				loadedMovies: action.payload.Search
			}
		case GET_MOVIE_DETAIL:
			return {
				...state,
				movieDetail: action.payload
			}
		case ADD_MOVIE_FAVOURITE:
			return state.favouriteMovies.some(movie => movie.movieID === action.payload.movieID) ? state : {...state,	favouriteMovies: [...state.favouriteMovies, action.payload]};
		case REMOVE_MOVIE_FAVOURITE:
			return {
				...state,
				favouriteMovies: state.favouriteMovies.filter(movie => movie.movieID !== action.payload)
			}
		default:
			return state;
	}
}