import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
  constructor(){
      super();
      this.state = {
          loading: true,
          articles: []
      }
  }
  async componentDidMount(){
      const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=299c6850d4e94ac88e016d957f1016e2"
      const data = await fetch(url);
      const parsedData = await data.json();
      console.log(parsedData.articles);
      this.setState({articles:parsedData.articles});
  }
  render() {
    return <div className='container my-3 '>
        <h2 className='my-3 text-center display-4 my-5'>Top Headlines </h2> 
        <div className="row">
            { this.state.articles.map(({title,description,url,urlToImage})=>{
                return <div className="col-md-4" key={url}>
                    <Newsitem title={title} desc={description} imageUrl={urlToImage} newsUrl = {url}/>
                </div>
            })}
        </div>
    </div>;
  }
}

export default News;


// 299c6850d4e94ac88e016d957f1016e2