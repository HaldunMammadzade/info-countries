import React from "react"
import { NavLink } from "react-router-dom"


function List({index}) {
    return (
        <>
           <div className="col-lg-3 col-md-6 col-12 mt-5">
            <div className="card">
                <img src={index.flags.png} className="card-img-top" alt="..."/>

                <div className="card-body">

                    <h5 className="card-title">{index.name.official}</h5>
                    <p className="card-text">Ehali: {index.population}</p>
                    <p>Qite: {index.region}</p>
                    <p>Paytaxt: {index.capital}</p>
                </div>

                <NavLink to={`${index.cca2}`} className="btn btn-success">Etrafli bax</NavLink>
            </div>

           </div>
        </>
    )
}

export default List