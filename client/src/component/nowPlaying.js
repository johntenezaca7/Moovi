import React, { Component } from 'react';
import { connect } from 'react-redux';


class nowPlaying extends Component {
    renderNowPlayingList(){
         return this.props.movies.results.map((movie, idx) => {
            return(
                    
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} key={idx}  />
                  
                
            )
        })
    }
 
    render(){
        
        if(!this.props.movies){
            return(<div>Loading</div>)
        }
       
        return(
            <div className="nested">
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