import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title,description,imageUrl,newsUrl,author, date,source}= this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2023/05/13/cropped/16-9/APPLE-FAR-OUT-51_1669476928393_1669476928393_1683964042610.jpg?impolicy=new-ht-20210112&width=1600":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body ">
                        <h5 className="card-title">{title}<span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
    {source}
    <span class="visually-hidden">unread messages</span>
  </span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small class="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
