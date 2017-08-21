import React from 'react';

const Tag = (props) => {
    const {name, deleteTag} = props;
    return (
        <div className="tag">
            {name}
            <button onClick={deleteTag.bind(null, name)}>x</button>
        </div>
    );
};

export default Tag;