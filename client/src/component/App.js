import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetch_nowPlaying } from '../actions/index';

import NowPlaying from './nowPlaying';


class App extends Component {

  componentDidMount(){
    this.props.fetch_nowPlaying();
    
}

    render() {
      return (
        <div >
          <h1>Now Playing:</h1>
            <NowPlaying />
        </div>
      );
    }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({fetch_nowPlaying}, dispatch)
}

export default connect(null, mapDispatchToProps)(App);
