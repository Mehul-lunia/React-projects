import React from 'react'
import {useSelector} from 'react-redux'
import { selectTheme } from '../Reducer'

const NewsItem = (props) => {
  const mode = useSelector(selectTheme);
  const d = new Date(props.publishedAt)
  return (
    <>
    <div
   className="card my-2"
   style={{ width: `${18}rem` }}
   data-bs-theme={mode.value}
   >
   <img
     src={
       props.imgUrl
         ? props.imgUrl
         : "https://i2.wp.com/orstx.org/wp-content/uploads/2019/10/no-photo-available-icon-12.jpg?fit=300%2C245&ssl=1"
     }
     className="card-img-top"
     alt="..."
     height={200}
   />
   <span
     class="position-absolute top-0  translate-middle badge rounded-pill bg-danger souceBadge"
     style={{ left: "90%", "z-index": "1" }}
   >
     {props.source}
     <span class="visually-hidden">unread messages</span>
   </span>
   <div className="card-body">
     <h5 className="card-title">
       {props.title
         ? props.title.slice(0, 45)
         : "Lorem ipsum dolor sit, amet consectetur adipisicing."}
     </h5>
     <p className="card-text">
       {props.content
         ? props.content.slice(0, 88)
         : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic animi possimus reprehenderit, omnis modi soluta pariatur."}
     </p>
     <p class="card-text"><small class="text-body-secondary">By: {props.author ? props.author.slice(0, 26) : "Unknown"} on {d.toDateString()}</small></p>
     <a href={props.url} className="btn btn-dark" target="__blank">
       read more
     </a>
   </div>
   </div>
   </>
  )
}

export default NewsItem
  
  
  
  
  
  
  
  
  
 