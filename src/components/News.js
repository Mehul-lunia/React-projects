import React from 'react'
import NewsItem from './NewsItem'
import ImgNotFound from './ImgNotFound'
import Spinner from './Spinner';


const News = (props) => {
  return (
    <>
      <div className="container  my-3">
        <h1 className='text-center'>KalTak - {props.querySearch ? props.querySearch : props.searchResult}</h1>
        {props.loading && <Spinner />}
        {props.newsArray.length === 0 && <ImgNotFound />}
        <div className='row'>
          {!props.loading && props.newsArray.map((ele) => {
            return <div className='col-md-3' key={ele.url}>
              <NewsItem title={ele.title} content={ele.content} imgUrl={ele.urlToImage} url={ele.url} source={ele.source['name']} author={ele.author} publishedAt={ele.publishedAt} />
            </div>
          })}
        </div>
        <div className='d-flex justify-content-between'>
          <button className='btn btn-dark' onClick={props.updatePreviousPage} disabled={props.page === 1} id='previous'>Previous</button>
          <button className='btn btn-dark' onClick={props.updateNextPage} disabled={props.page + 1 > Math.ceil(props.totalResults / 8)} id='next'>Next</button>
        </div>
      </div>


    </>

  )
}

export default News


















