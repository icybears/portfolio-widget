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
        this.setState({
            inputVal: ''
        })
    }
    render() {
        return (
            <div id="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Search by tags e.g: javascript'
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