import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps ={
    country:'in',
    pageSize:6,
    category:'general',
    headline:'General News',
    
  }

  static propTypes= {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
    headline:PropTypes.string,
    publishedAt:PropTypes.string
  }
    
    constructor(){
        super();
        this.state={
            articles :[],
            loading : true,
            page:1
        }
        
    }
    async componentDidMount(){
         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c915d01abe64ba8b6d3bb5ae0e423f9&page=1&pageSize=${this.props.pageSize}`
          this.setState({loading:true})
         let data = await fetch(url);
         let parsedData = await data.json()
         console.log(parsedData);
         this.setState({articles:parsedData.articles,
          totalResults:parsedData.totalResults,
          loading:false
      })
         
    }

    handlePreviousClick= async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c915d01abe64ba8b6d3bb5ae0e423f9&page=${this.state.page -1}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
         let data = await fetch(url);
         let parsedData = await data.json()
         console.log(parsedData);
         
      this.setState({
        page:this.state.page-1,
        articles:parsedData.articles,
        loading:false
      })
    }

    handleNextClick=async ()=>{
      if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c915d01abe64ba8b6d3bb5ae0e423f9&page=${this.state.page +1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
        page:this.state.page+1,
        articles:parsedData.articles,
        loading:false

      })}
    }

  render() {
    return (
      <div className="container my-3 ">
        <h1 className='text-center 'style={{margin:'35px 0px'}}> {this.props.headline}</h1>
        {this.state.loading && <Spinner/>}
        <div className=" row " >
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4 " key={element.url}> 
            <NewsItem  title={element.title?element.title:""} description={element.description?element.description.slice(0,85):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            
            </div>
            })}
        </div>

        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
        <button  disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>  
        </div>

      </div>
    )
  }
}

export default News

