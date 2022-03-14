import React from 'react';

function Search() {
    return (
        <div className = "searchbar">
            <form id="ingredients">
                <input type="search" id="query" name="q" placeholder="Search...">
                    <button>Ingredients</button>
                </input>
            </form>
        </div>
    )}

export default Search;