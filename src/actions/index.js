export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const ADD_MOVIE_FAVOURITE = "ADD_MOVIE_FAVOURITE";
export const REMOVE_MOVIE_FAVOURITE = "REMOVE_MOVIE_FAVOURITE";

const apikey = "20dac387";

export function getMovies(movieTitle) {
	return function(dispatch) {
		return fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${movieTitle}`)
			.then(response => response.json())
			.then(data => dispatch({
				type: GET_MOVIES,
				payload: data
			}))
	}
}

export function getMovieDetail(movieID) {
	return function(dispatch) {
		return fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${movieID}`)
			.then(response => response.json())
			.then(data => dispatch({
				type: GET_MOVIE_DETAIL,
				payload: data
			}))
	}
}

export function addMovieFavourite(payload) {
	return {
		type: ADD_MOVIE_FAVOURITE,
		payload: payload
	}
}

export function removeMovieFavourite({movieID}) {
	return {
		type: REMOVE_MOVIE_FAVOURITE,
		payload: movieID
	}
}