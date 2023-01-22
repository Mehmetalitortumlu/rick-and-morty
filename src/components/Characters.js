import React from 'react'
import { RickAndMortyAPI } from '../context/RickAndMortyContext'

function Characters() {

    const { character, increasePage, decreasePage, filtered } = RickAndMortyAPI()
    console.log(character)


    return (
        <div className='container'>
            <div className="row">

                {filtered.map((item, i) => {
                    return (
                        <div key={i} className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                            <div className="card mt-5 " style={{ width: "18rem" }}>
                                <img src={item.image} className="card-img-top" alt="resim bulunamadı" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.status}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{item.species}</li>
                                    <li className="list-group-item">{item.gender}</li>
                                    <li className="list-group-item">{item.origin.name}</li>
                                </ul>
                            </div>
                        </div>
                    )
                })}

                <div className='mt-3'>
                    <button className='btn btn-success' onClick={decreasePage}>Previous Page </button>
                    <button className='btn btn-success' onClick={increasePage}>Next Page </button>
                </div>

            </div>
        </div>
    )
}

export default Characters
