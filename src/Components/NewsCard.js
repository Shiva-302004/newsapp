import React from 'react'
import img from"./img.jpg"
import "./NewsCard.css"
import { Link } from 'react-router-dom'

const NewsCard = (props) => {
  return (
    <div className="container">
        <div className="img">
            <img className='img' src={props.imgsrc===null?img:props.imgsrc} alt="not available" /></div>
            <h5>{props.title==="[Removed]"?"this news is not Available":props.title}</h5>
        <div className="desc">{props.desc==="[Removed]"?"this news is not Available":props.desc} </div>
        <div className="author">Author: {props.author}</div>
        <div className="links">
            <div className="date">{props.date}</div>
            <Link className="link" to={`${props.link}`}>more</Link>
        </div>
    </div>
  )
}

export default NewsCard