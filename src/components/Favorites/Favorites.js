import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {removeMovieFavourite} from '../../actions'
import styles from './Favorites.module.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h3 className = {styles.title}> Favourites </h3>
        <div className = {styles.results}>
          {
            this.props.favourites?.map(movie => {
              return (
                <div key = {movie.movieID} className = {styles.movie}>
                    <Link className = {styles.image} to = {`/movie/${movie.movieID}`}>
                      <img className = {styles.image} src = {movie.poster} alt = ""/>
                    </Link>
                    <Link to = {`/movie/${movie.imdbID}`} className = {styles.info}> {movie.title} </Link>
                    <button className = {styles.fav} onClick = {() => this.props.removeMovieFavourite({movieID: movie.movieID})}> 💔 </button>
                  </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favourites: state.favouriteMovies
  }
}

export default connect(mapStateToProps, {removeMovieFavourite})(ConnectedList);
