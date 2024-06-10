import React from "react";

const SearchBar = () => {
    return (
        <div className="containter">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form action="">
                        <div className="input-field">
                            <input type="text" placeholder="Find a Flick"></input> 
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SearchBar;