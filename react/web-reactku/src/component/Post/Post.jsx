import React from 'react';

const Post = (props) => {
    return(
        <div className='container'>
            <button className='btn-hapus' onClick={() => props.remove(props.data.id)}>hapus</button>
            <button className='btn-update' onClick={() => props.update(props.data)}>edit</button>
            <img src='https://placeimg.com/200/150/tech'></img>
            <p className='title' onClick={() => props.goDetail(props.data.id)}>{props.data.title}</p>
            <p className='content'>{props.data.body}</p>
        </div>
    );
}

export default Post;