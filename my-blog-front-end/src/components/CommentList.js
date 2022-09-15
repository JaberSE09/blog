import React from 'react';

const CommentList = ({ comment }) => (
    <>
    <h3>Comments:</h3>
    {comment.map((comment, key) => (
        <div className="comment" key={key}>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
        </div>
    ))}
    </>
);

export default CommentList;