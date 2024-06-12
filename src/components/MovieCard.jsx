import React from "react";

const MovieCard = (props) => {
    return (
        <div className="container">
            <div className="row" onClick={props.closeInfo} style={{cursor: "pointer", paddingTop: 50}}>
                <i class="tiny material-icons">arrow_back</i>
                <span style={{marginLeft: 10}}>Back</span>
            </div>
            <div className="row">
                <div className="col s12 m4">
                {
                    props.currentMovie.poster_path == null ? <img src = {`https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg`} alt = "image not found" style = {{width: "100%", height: 360}} /> :   <img src = {`https://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt = "movie poster" style = {{width: "100%", height: 360}} />
                }

                </div>
                <div className="col s12 m8">
                <div className="info-container">
                    <p><strong>{props.currentMovie.title}</strong></p>
                    <p>Release date: {props.currentMovie.release_date}</p>
                    <p>Overview: {props.currentMovie.overview}</p>
                </div>
            </div>
            
            </div>
            
        </div>
    )

}

export default MovieCard;