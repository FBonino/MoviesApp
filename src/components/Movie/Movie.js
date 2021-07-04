import React from 'react';
import { connect } from 'react-redux';
import { addMovieFavourite, getMovieDetail } from '../../actions'
import styles from './Movie.module.css';

export class Movie extends React.Component {
	constructor(props) {
		super(props);
		this.loading = false;
	}

	componentDidMount() {
		this.loading = true;
		this.props.getMovieDetail(this.props.match.params.id)
			.then(this.loading = false);
	}

	render() {
		let details = this.props.movieDetail;
		return (
			<div>
				{
					this.loading
					? 
					<div className = {styles.loading}>
						<img src = "https://i.stack.imgur.com/MnyxU.gif" alt = "loading"/>
					</div>
					:	
					<div className = {styles.container}>
						<div className = {styles.info}>
							<h3> {details.Title} </h3>
							<div className = {styles.narrow}>
								<div className = {styles.subinfo}>
									<p> {details.Year} </p>
									<p> {details.Rated} </p>
									<p> {details.Genre} </p>
								</div>
								<p className = {styles.plot}> {details.Plot} </p>
								<div className = {styles.ratings}>
									{
										details.Ratings?.map(rating => {
											return <p key = {rating.Source}> {rating.Source} {rating.Value} </p>
										})
									}
									<p> IMDB {details.imdbRating} </p>
								</div>
							</div>
						</div>
						<button className = {styles.fav} onClick = {() => this.props.addMovieFavourite({title: details.Title, movieID: details.imdbID, poster: details.Poster})}> 💗 </button>
						<img className = {styles.image} src = {details.Poster} alt = ""/>
					</div>
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		movieDetail: state.movieDetail
	}
}

export default connect(mapStateToProps, {addMovieFavourite, getMovieDetail})(Movie);