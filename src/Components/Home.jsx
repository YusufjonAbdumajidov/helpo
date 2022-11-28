import React, { useState }  from 'react';
import News from '../data/news';

const Home = () => {
  const [ news, setNews ] = useState(News);
  return <div className='homeContainer'>
    <h1>University News</h1>
    <div className="newsWrapper">
    {
      news.map((item)=> {
          const { id, title, description, } = item;
          return <section key={id} className="newsContainer">
            <div className="newContainer_wrapper"></div>
              <h2>{title}</h2>
              <p>{description}</p>
          </section>
      })
    }
    </div>
    <p className='viewAllBtn'>view all news</p>
  </div>
}

export default Home;