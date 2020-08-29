import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Main = () => {
    const [articles, setArticles] = useState([])
    
    

    useEffect(() => {
        fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-29&sortBy=publishedAt&apiKey=8b14e3f0ce034a21892259108283a32a')
        .then (res => res.json())
        .then(data=>setArticles(data.articles))
        
    },[])


    return (
        <div>
        
         <h2>Total headlines: {articles.length}</h2>
         <div className="row ">
         {
             articles.map(article => <Cart article={article}></Cart> )
         }
            

         </div>
        
        </div>
    );
};

export default Main;