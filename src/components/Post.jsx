import React from 'react';

const Post = (props) => {
    return (
        <div>
            <img className="image" src={props.data.imageURL} />
            <h3>{props.data.tagline}</h3>
            <p>{props.data.user_name}</p>
        </div>
    )
}

export default Post;
