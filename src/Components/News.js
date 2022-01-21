import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
  articles = [ {
    "source": {
    "id": null,
    "name": "News18"
    },
    "author": "News Desk",
    "title": "Omicron LIVE Updates: Delhi L-G Rejects Kejriwal's 'End Curfew' Plan, Only Allows Pvt Offices to Run at 50% - News18",
    "description": "Omicron LIVE Updates: An increase of 94,774 cases has been recorded in the active COVID-19 caseload in a span of 24 hours.",
    "url": "https://www.news18.com/news/india/omicron-live-updates-covid-genome-sequencing-kerala-sunday-lockdown-rules-delhi-mumbai-patients-livenews-4681172.html",
    "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/01/delhi-covid-164155100216x9.jpg",
    "publishedAt": "2022-01-21T08:36:23Z",
    "content": "variant, according to the Union Health Ministry data updated on Friday.The active cases have increased to 20,18,825, the highest in 235 days, while the death toll has climbed to 4,88,396 with 703 fre… [+3307 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NDTV News"
    },
    "author": null,
    "title": "Grand Netaji Statue At India Gate, Says PM. Hologram To Fill Spot - NDTV",
    "description": "A statue of freedom icon Subhash Chandra Bose will be installed at India Gate in Delhi, Prime Minister Narendra Modi declared today in tweets. Until the statue is ready, a hologram of the Subhash Chandra Bose, or Netaji, will be put up at the spot, P",
    "url": "https://www.ndtv.com/india-news/grand-netaji-subhaschandra-bose-statue-at-india-gate-says-pm-modi-hologram-to-fill-spot-2721220",
    "urlToImage": "https://c.ndtvimg.com/2022-01/i38mtpt8_grand-statue-of-netaji-subhash-chandra-bose-650_625x300_21_January_22.jpg",
    "publishedAt": "2022-01-21T08:24:00Z",
    "content": "\"I will unveil the hologram statue on 23rd January, Netaji's birth anniversary,\" PM Modi tweeted.\r\nNew Delhi: A statue of freedom icon Subhash Chandra Bose will be installed at India Gate in Delhi, P… [+2166 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NDTV News"
    },
    "author": "Edited by Gadgets 360 Newsdesk",
    "title": "Hubble Telescope Research Shows Black Holes Could Aid Star Formation - Gadgets 360",
    "description": "A recent research based on Hubble Space Telescope findings showed that black holes could go against their all-absorbing nature at times and may aid creation. The research showed a supermassive black hole at the centre of a dwarf galaxy, some 30 million light-…",
    "url": "https://gadgets.ndtv.com/science/news/hubble-space-black-hole-star-formation-henize-2-10-galaxy-2721011",
    "urlToImage": "https://i.gadgets360cdn.com/large/black_hole_star_form_nasa_1642753108908.jpg",
    "publishedAt": "2022-01-21T08:22:57Z",
    "content": "A recent research based on Hubble Space Telescope findings showed that black holes could go against their all-absorbing nature at times and may aid creation. The research showed a supermassive black … [+1506 chars]"
    }];
  constructor(){
      super();
      this.state = {
          loading: true,
          articles: this.articles
      }
  }

  render() {
    return <div className='container my-3 '>
        <h2 className='my-3'>Top Headlines </h2> 
        <div className="row">
            { this.articles.map(({title,description,url,urlToImage})=>{
                return <div className="col-md-4">
                    <Newsitem title={title} desc={description} imageUrl={urlToImage} newsUrl = {url}/>
                </div>
            })}
        </div>
    </div>;
  }
}

export default News;


// 299c6850d4e94ac88e016d957f1016e2