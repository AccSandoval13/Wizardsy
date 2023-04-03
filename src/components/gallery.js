import React from 'react'
import Post from './post'
const wizardsyPost = require('./content')

const Gallery = () => {
    return (
        <div>
           {
            wizardsyPost.content.map((data,i) => {
                return <Post data= {data} key = {i}/>
            })
           }
        </div>
    )
}
export default Gallery