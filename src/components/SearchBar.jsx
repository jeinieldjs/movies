import React from "react";

const SearchBar = (props) => {
    return (
        <div className="containter">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form action="" onSubmit = {props.handleSubmit}>
                        <div className="input-field">
                            <input type="text" placeholder="Find a Flick" onChange={props.handleChange}></input> 
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SearchBar;