import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

    generateMovieCards = () => movieData.map((movieObj, i) => <MovieCard {...movieObj} key={i} />)
    render() {
        return (
        <div id="movie-showcase">
            {this.generateMovieCards()}
        </div>
        )
    }
}
