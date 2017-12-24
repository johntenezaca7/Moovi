import React, { Component } from 'react';

class Search extends Component {
   
    render(){
        return(
            <form > 
            <label> Search:
            <input type="text" value={''} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        )
    }
}

export default Search;