import React from 'react';
import './Post.css';

const post =(props)=>(
    <article className="Post" onClick={props.clicked}>
        
        <h1>{props.title}</h1>
        <div className="Author">
            {props.author}
        </div>
    </article>
);
export default post;