import React from 'react'

function Post(props) {
    const { post } = props;

  return (
    <div>
        <img src={post.profilePicture} alt='User profiles' />
        <h3>{post.username}</h3>
        <p>{post.content}</p>
    </div>
  );
}

export default Post