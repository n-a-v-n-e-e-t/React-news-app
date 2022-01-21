import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
  render() {
    return <div className='container my-3 '>
        <h2 className='my-3'>Top Headlines </h2> 
        <div className="row">
            <div className="col-md-4">
                <Newsitem title="News Title" desc="Lorem Ipsum" />
            </div>
            <div className="col-md-4">
                <Newsitem title="News Title" desc="Lorem Ipsum" />
            </div>
            <div className="col-md-4">
                <Newsitem title="News Title" desc="Lorem Ipsum" />
            </div>
        </div>
    </div>;
  }
}

export default News;


// 299c6850d4e94ac88e016d957f1016e2