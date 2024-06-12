import React from "react";
import Movie from "./Movie";

const List = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.movies.map((movies, index) => {
                            return (
                                <Movie key={index} image={movies.poster_path} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default List;