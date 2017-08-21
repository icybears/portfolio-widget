import React, { Component } from 'react';
import Form from './Form';
import TagsDisplay from './TagsDisplay';

class App extends Component {
    state = {
        selectedTags: [],
    }
    addTag = (newTag) => {
        this.setState( (prevState) => {
            return(
                {
                    selectedTags: prevState.selectedTags.concat([newTag])
                }
            )
        })
    }
    render() {
        return (
            <div>
                <Form addTag={this.addTag} />
                <TagsDisplay />
            </div>
        );
    }
}

export default App;