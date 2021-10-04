import React, { useEffect, useState } from 'react';

const Service = () => {
    const [course,setCourse]=useState([]);
    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data =>setCourse(data))
        
    },[])
    // console.log(course);
    return (
        <div className="row  ">
            {
                course.map(pd=><div className="col-md-4 g-4 rounded ">
                <div className="col d-flex justify-content-center">
                  <div className="card me-3 shadow" style={{width:"350px"}}>
                    <img style={{height:"300px"}} src={pd.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title text-primary fs-2">{pd.Course}</h5>
                      <p className="card-text text-dark fw-bolder">{pd.titel.slice(0, 100)}</p>
                    </div>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default Service;