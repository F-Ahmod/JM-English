import React, { useEffect, useState } from 'react';



const Home = () => {
    const [future,setFuture]=useState([]);
    useEffect(()=>{
        fetch('https://fatehahmod.github.io/data/jm.json')
        .then(res=>res.json())
        .then(data =>setFuture(data))
        
    },[])
    
    return (
        <div className="row">
            <div className="col-md-4  d-flex align-items-center">
                <h1 style={{fontSize:"60px"}} className="text-primary ms-3 ">What we Offer:
               </h1>
          </div>
            <div className="col-md-8">
            <div className="row">
            
            {
                future.map(pd=><div className="col-md-6 g-4 rounded mb-3 ">
                <div className="col">
                  <div className="card me-3 shadow">
                    <img style={{height:"300px"}} src={pd.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title text-primary fs-2">{pd.Course.slice(0,20)}</h5>
                      <p className="card-text text-dark fw-bolder">{pd.titel.slice(0,100)}</p>
                    </div>
                  </div>
                </div>
              </div>)
            }
         </div>
     </div>
         
        </div>
    );
};

export default Home;