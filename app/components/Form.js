import React, { Component } from 'react';

class Form extends Component {
    state = {
        inputVal: ''
    }
    handleChange = (e) => {
        this.setState({
            inputVal: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const newTag = this.state.inputVal;
        this.props.addTag(newTag);
    }
    render() {
        return (
            <div onSubmit={this.handleSubmit}>
                <form>
                    <input type="text" placeholder='Search tags e.g: "javascript"'
                     value={this.state.inputVal} 
                     onChange={this.handleChange}
                     required
                     />
                    <input type="submit" value="Enter"/>
                </form>
            </div>
        );
    }
}

export default Form;