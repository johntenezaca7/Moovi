import React, { Component } from 'react';
import { connect } from 'react-redux';


class nowPlaying extends Component {

    displayInfo(name){
        console.log('movie:' + name)
    }
    renderNowPlayingList(){
         return this.props.movies.results.map((movie, idx) => {
            //  console.log('each Movie', movie)
            return(
                <img 
                    key={idx}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    onClick={() =>{console.log('click', movie.title)}}
                    alt={movie.title}
                />                            
            )
        })
    }
 
    render(){
        
        if(!this.props.movies){
            return(<div>Loading</div>)
        }
       
        return(
            <div className="movie-list">
                {this.renderNowPlayingList()}
            </div>
        );
    }
}

  
function mapStateToProps(state) {
    return{
        movies: state.nowPlaying[0]
    }
}

export default connect(mapStateToProps)(nowPlaying);