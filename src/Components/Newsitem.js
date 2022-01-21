import React, { Component } from 'react';



export class Newsitem extends Component {
    imagebackup = "https://e7.pngegg.com/pngimages/911/883/png-clipart-free-newspaper-headline-others-love-logo.png";
    render(){
        let { title , desc , imageUrl , newsUrl} = this.props;
       return <div className="card my-2" >
       <img src={imageUrl || this.imagebackup} style={{width: "100%",height:"15vw",objectFit:"cover"}}/>
       <div className="card-body" style={{position:"relative"}}>
           <h5 className="card-title"> <a target="_blank" rel="noreferrer" href={newsUrl} className="link-dark text-decoration-none"> {title} </a> </h5>
           <p className="card-text">{desc}</p>
       </div>
   </div> 
   }
}

export default Newsitem; 


/*

position: absolute;
right:    0;
bottom:   0;
    className="card-img-top"
    .card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}

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