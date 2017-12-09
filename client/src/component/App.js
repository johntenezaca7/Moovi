import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetch_nowPlaying } from '../actions/index';

import NowPlaying from './nowPlaying';
import SignIn from './SignIn';
// import { Carousel } from 'react-ressponsive-carousel';
// import ImageGallery from 'react-image-gallery';


class App extends Component {

  componentDidMount(){
    this.props.fetch_nowPlaying();
    
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
              <div>
                Action
              </div>
              <div>
                Drama
              </div>
              <div>
                Comedy
              </div>
              <div>
                Sci-Fi
              </div>
              <div>
                Rom-Coms
              </div>
              <div>
              Horror
              </div>
              <div>
                Film-Noir
              </div>
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

  return bindActionCreators({fetch_nowPlaying}, dispatch)
}

function mapStateToProps(state) {
  return{
      movies: state.nowPlaying[0]
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
