import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { selected_genre } from '../actions/'

class Search extends Component {

    getListByGenre(id){
        this.props.actions.select(id).then(res => {
            console.log(res)
        })

    }
    
    renderGenres(){

        return this.props.genres.map((genre, i) => {
            return (
                <div key={genre.name} 
                className="each-genre"
                onClick={() => {this.getListByGenre(genre.id)}}
                >
                    {genre.name}
                </div>
            )
        })
    }

    render(){
        // console.log('find', this.props)
        if(!this.props.genres){
            return (
                <div>
                Loading..
                </div>
            )
        }

        return(
           <div className="genres-container">
            {this.renderGenres()}
           </div>
        )
    }
}

const mapStateToProps = (state) => { return { genres: state.allGenres.genres } }
const mapDispatchToProps = (dispatch) => { 
        return {
            actions:{
                select: bindActionCreators(selected_genre, dispatch)
            }
        } 
    }

export default connect(mapStateToProps, mapDispatchToProps)(Search);