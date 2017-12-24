import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetch_nowPlaying, fetch_genres } from '../actions/index';

import NowPlaying from './nowPlaying';
import SignIn from './SignIn';
import Search from './Search';


class App extends Component {

  componentDidMount(){
    this.props.actions.nowPlaying();
    this.props.actions.allGenres();
    
}

    render() {

      return (
        <div className="app-wrapper">  
          <div className="left-side-content">
            <div>
              <SignIn />
            </div>
            <div>Chat Content</div>
          </div>
          <div className="right-side-content">
            <div className="header">
              <Search />
              <div></div>
            </div>
            <div className="media-content">
                <NowPlaying />
            </div>
          </div>
        </div>
      );
    }
}

function mapDispatchToProps(dispatch) {

  return {
    actions: {
      nowPlaying: bindActionCreators(fetch_nowPlaying, dispatch),
      allGenres: bindActionCreators(fetch_genres, dispatch)
    }
  }

}

function mapStateToProps(state) {
  return{
      movies: state.nowPlaying[0],
      genres: state.allGenres[0]
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
