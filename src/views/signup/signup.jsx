import React from 'react';

export default class Signup extends React.Component{
    constructor(props){
        super(props);
    }

    handleChange = (event) => {
        event.preventDefault();
        let title = event.target.value;

        this.setState({
            title
        });

        console.log(title);
    }

    render(){
        return(
            <div className="signup">
                <div className="registerForm">
                      <input placeholder="name" onChange={this.handleChange}/>
                </div>
            </div>
        );
    }
}