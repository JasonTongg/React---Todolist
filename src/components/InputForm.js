import React from 'react'
import Button from '../components/Button'

class InputForm extends React.Component {
    state = {
        text: ""
    };

    change = (e) => {
        console.log(e.target.value);
        this.setState({text: e.target.value});
    }

    addData = (e) => {
        e.preventDefault();
        this.props.add(this.state.text);
        document.querySelector(".input").value="";
    }

    render(){
        return (
            <form style={form} onSubmit={this.addData}>
                <input type="text" placeholder='Add Item' style={input} className="input" onChange={this.change}/>
                <Button text="Send" variant="primary"></Button>
            </form>
        )
    }
}

export default InputForm;

const form = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: ".8rem 2rem",
    alignItems: "center",
    border: "2px solid #61DAFB"
}

const input = {
    border: "none",
    fontSize: "1.1rem",
    padding: ".5rem 1rem",
    outline: "none",
    width: "80%"
}
