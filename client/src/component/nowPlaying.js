import React, { Component } from 'react';
import { connect } from 'react-redux';


class nowPlaying extends Component {
    renderNowPlayingList(){
        return this.props.movies.results.map((movie) => {
            return(
                <li
                    key={movie.title}
                    >
                    {movie.title}
                </li>
            )
        })
    }
 
    render(){
        
        if(!this.props.movies){
            return(<div>Loading</div>)
        }

        return(
            <ul>
            {this.renderNowPlayingList()}
            </ul>
        );
    }
}

  
function mapStateToProps(state) {
    return{
        movies: state.nowPlaying[0]
    }
}

export default connect(mapStateToProps)(nowPlaying);