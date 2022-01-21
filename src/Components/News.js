import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';

export class News extends Component {
 
  constructor(){
      super();
      this.state = {
          page:1,
          loading: true,
          articles: [],
          totalResults: -1
      }
  }

  handleNext = async () =>{
    
    if( Math.ceil(this.state.totalResults/9 > this.state.page)){
        this.setState({loading:true})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=299c6850d4e94ac88e016d957f1016e2&pageSize=${this.props.pageSize}&page=${this.state.page+1}`
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({
            articles:parsedData.articles , 
            page:this.state.page+1,
            loading:false});
    }
    else
        console.log('no pages left');
  } 
  handlePrev = async () =>{
      if(this.state.page>1){
        this.setState({loading:true})  
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=299c6850d4e94ac88e016d957f1016e2&pageSize=${this.props.pageSize}&page=${this.state.page-1}`
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({articles:parsedData.articles , page:this.state.page-1,
            loading: false});          
      }
      console.log('prev');
  } 

  async componentDidMount(){
      this.setState({loading:true})
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=299c6850d4e94ac88e016d957f1016e2&pageSize=${this.props.pageSize}&page=${this.state.page}`
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({articles:parsedData.articles , 
                    totalResults:parsedData.totalResults,
                    loading: false});

  }
  render() {
    return <div className='container my-3 '>
        <h2 className='my-3 text-center display-4 my-5'>Top Headlines </h2> 
        {this.state.loading && <Spinner />}
        <div className="row">
            { !this.state.loading && this.state.articles.map(({title,description,url,urlToImage})=>{
            
                return <div className="col-lg-4 d-flex align-items-stretch" key={url}>
                     <Newsitem title={title} desc={description} imageUrl={urlToImage} newsUrl = {url} />
                </div>
            })}
        </div>
        <div className="d-flex justify-content-center my-4">
            <button type="button" disabled={this.state.page<= 1} onClick={this.handlePrev} className="btn btn-dark mx-2">&#8592; Previous </button>
            <button type="button" disabled={this.state.page >= Math.ceil(this.state.totalResults/9)} onClick={this.handleNext} className="btn btn-dark mx-2">Next	&#8594; </button>
        </div>
    </div>;
  }
}

export default News;


// 299c6850d4e94ac88e016d957f1016e2