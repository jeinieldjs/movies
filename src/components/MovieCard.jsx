import React from "react";

const MovieCard = (props) => {
    return (
        <div className="container">
            <div className="row" onClick={props.closeInfo} style={{cursor: "pointer", paddingTop: 50}}>
                <i class="tiny material-icons">arrow_back</i>
                <span style={{marginLeft: 10}}>Back</span>
            </div>
        </div>
    )

}

export default MovieCard;