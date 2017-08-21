import React, { Component } from 'react';
import Form from './Form';
import TagsDisplay from './TagsDisplay';
import ProjectsView from './ProjectsView';

class App extends Component {
    state = {
        projects: _projects,
        availableTags: _tags,
        selectedTags: [],
        error: null
    }
    validateTag = (tag) => {
        const availableTags = this.state.availableTags;
        if(availableTags.indexOf(tag.toLowerCase()) !== -1){
            return true;
        }else{
            return false;
        }
    }
    addTag = (newTag) => {
        this.setState( (prevState) => {
            if(this.validateTag(newTag)){
            return(
                {
                    selectedTags: prevState.selectedTags.concat([newTag.toLowerCase()]),
                    error: null
                }
            )
            }
        else{
            return({
                error: 'Invalid tag name'
            })
        }
        })
    }
    deleteTag = (tagName) => {
        this.setState((prevState) => (
            {
                selectedTags: prevState.selectedTags.filter((tag) => tag !== tagName )
            }
        ))
    }
    render() {
        const {selectedTags, error, projects} = this.state;
        return (
            <div>
                <Form addTag={this.addTag} />
                {
                    error && <span>{error}</span>
                }
                <TagsDisplay selectedTags={selectedTags} 
                            deleteTag={this.deleteTag}
                />
                <hr />
                <ProjectsView projects={projects} />

            </div>
        );
    }
}

export default App;