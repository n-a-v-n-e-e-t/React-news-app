import React, { Component } from 'react';

export class Newsitem extends Component {
    ;
   render(){
        let { title , desc , imageUrl , newsUrl} = this.props;
       return <div className="card" style={{width: "18rem"}}>
       <img src={imageUrl} className="card-img-top" alt="..." />
       <div className="card-body">
           <h5 className="card-title">{title}</h5>
           <p className="card-text">{desc}</p>
           <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More !</a>
       </div>
   </div> 
   }
}

export default Newsitem; 


/*
     render() {
        return <div className='container'> 
            This is a news Component 

        </div>;
      }

*/
/*

    <div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
*/