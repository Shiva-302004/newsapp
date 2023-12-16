import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import NewsCard from './NewsCard'
import "./NewsContainer.css"
import img from "./img.jpg"
import InfiniteScroll from 'react-infinite-scroll-component'

const NewsContainer = (props) => {
    let  apikey=process.env.REACT_APP_NEWS_API
    const [data,setdata]=useState([])
    const [loading, setloading] = useState(true)
    const [page,setpage]=useState(0)
    const [totalresults,settotalresults]=useState(0)
    document.title=`news:${props.category}`
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=215842d1084c4b668bae2c7d3132a4dd`).then((res)=>{
            setdata(res.data.articles)
            setloading(false)
            settotalresults(res.data.totalResults)
            console.log(data)
        })

    }, [])

    const loadmore=()=>{
        setpage(page+1)
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=215842d1084c4b668bae2c7d3132a4dd&page=${page+1}`).then((res)=>{
            setdata(data.concat(res.data.articles))
            setloading(false)
            settotalresults(res.data.totalResults)
            console.log(data)
        })

    }
    
  return (
    <div className='newscontainer'>
        <h1 className='extra'> news related:) {props.category}</h1>
         <InfiniteScroll dataLength={data.length} next={loadmore} hasMore={data.length!==totalresults} />
        <ul>

        { loading?<p>Loading</p>:
            data.map((el,id)=>{
                return <li><NewsCard imgsrc={el.urlToImage==null?img:el.urlToImage
                } title={el.title.substring(0,20)
                } desc={el.description===null?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolores molestiae iste eius cumque!":el.description.substring(0,100)
                } author={el.author===null?"not available":el.author
                } link={el.url
                } date={el.publishedAt.substring(0,10)
                } key=
                {id}></NewsCard></li>
            })
        }
        </ul>
        
    </div>
  )
}
export default NewsContainer