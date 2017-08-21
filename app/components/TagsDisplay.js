import React from 'react';
import Tag from './Tag';

const TagsDisplay = (props) => {
    const {selectedTags, deleteTag} = props;
    return (
        <div id="tags-bar">
            {
                selectedTags.map((tag) => <Tag deleteTag={deleteTag} key={tag} name={tag} />)
            }
        </div>
    );
};

export default TagsDisplay;