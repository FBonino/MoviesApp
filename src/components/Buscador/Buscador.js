import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {addMovieFavourite, getMovies, getMovieDetail} from '../../actions'
import styles from './Buscador.module.css';


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    this.setState({title: ""});
  }

  render() {
    const { title } = this.state;
    return (
      <div className = {styles.container}>
        <form className = {styles.searchBar} onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder = "Search..."
            className = {styles.input}
            autoComplete="off"
            value={title}
            onChange={(e) => this.handleChange(e)}
          />
          <button className = {styles.button} type="submit"> 🔍 </button>
        </form>
        <div className = {styles.results}>
          {
            this.props.movies?.map(movie => {
              if (movie.Poster !== "N/A") {
                return (
                  <div key = {movie.imdbID} className = {styles.movie}>
                    <Link className = {styles.image} to = {`/movie/${movie.imdbID}`}>
                      <img className = {styles.image} src = {movie.Poster} alt = ""/>
                    </Link>
                    <Link to = {`/movie/${movie.imdbID}`} className = {styles.info}> {movie.Title} </Link>
                    <button className = {styles.fav} onClick = {() => this.props.addMovieFavourite({title: movie.Title, movieID: movie.imdbID, poster: movie.Poster})}> 💗 </button>
                  </div>
                )
              } else {
                return null;
              }
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.loadedMovies
  }
}

export default connect(mapStateToProps, {addMovieFavourite, getMovies, getMovieDetail})(Buscador);
