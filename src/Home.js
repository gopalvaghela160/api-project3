import React from "react";
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "gopal",
            email: "gopal@gmail.com"
        }
        
    }
    getdata = () => {
        this.setState({
            name : "bhai",
            email :"topG@gmail.com"
        })
    }
    render() {
        return (
            <div>

                <h1>hello world</h1>
                <h1>{this.props.top}</h1>
                <h1>{this.state.name}</h1>
                <h1>{this.state.email}</h1>
                <input type="button" value={"Click here"} onClick={this.getdata}></input>
            </div>
        )

    }

}

export default Home;