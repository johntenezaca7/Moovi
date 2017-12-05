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
        <div className="wrapper">
       
        <div class="header">
        <h1>Chania</h1>
        </div>
          <div class="row">

          <div class="col-3 menu">
          <h1>Now Playing:</h1>
                  <NowPlaying />
          </div>

          <div class="col-9">
            <h1>The City</h1>
            <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
            <p>Resize the browser window to see how the content respond to the resizing.</p>
          </div>

          </div>
        </div>
      );
    }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({fetch_nowPlaying}, dispatch)
}

export default connect(null, mapDispatchToProps)(App);
