import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email:''
        }
    }
    render(){
        return(
            <form > 
                <label> Name:
                <input type="text" value={this.state.username} />
                </label>
                <br />
                <label> Email:
                <input type="text" value={this.state.email} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default SignIn;