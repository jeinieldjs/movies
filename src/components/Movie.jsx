import React from "react";

const Movie = (props) => {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null ? <img src = {`https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg`} alt = "image not found" style = {{width: "100%", height: 360}} /> :   <img src = {`https://image.tmdb.org/t/p/w185${props.image}`} alt = "movie poster" style = {{width: "100%", height: 360}} />
                    }
                </div>
                <div className="card-content">
                    <p><a href="#">View Movie Info</a></p>
                </div>
            </div>
        </div>
    )

}

export default Movie;