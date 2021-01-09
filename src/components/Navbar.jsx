import React, { useState } from 'react';
import { Button } from './Button';

export const Navbar = ({ filter, handleFiltration, handleSearch }) => {
    const [currentFilter, setCurrentFilter] = useState(filter);
    const changeFilter = (newFilter) => {
        setCurrentFilter(newFilter);

        //give changed to top by calling function in destruct. props
        handleFiltration(newFilter);

        //set searched
        const text = document.getElementById('search-inline').value;
        if (text) {
            handleSearch(text, newFilter);
        }
    };

    const handleChange = (event) => {
        const text = event.target.value;
        handleSearch(text);
    };

    return (
        <div className="col s12">
            <nav>
                <div className="nav-wrapper green darken-3 row">
                    <div className="input-field inline col s6">
                        <input
                            id="search-inline"
                            type="text"
                            className="validate"
                            placeholder="type to search"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="cols s3">
                        <ul id="nav-mobile" className="right button-set-top hide-on-small-only">
                            <li>
                                <Button
                                    text="All"
                                    isActive={currentFilter === 'All'}
                                    handleButtonClick={changeFilter}
                                />
                            </li>
                            <li>
                                <Button
                                    text="Active"
                                    isActive={currentFilter === 'Active'}
                                    handleButtonClick={changeFilter}
                                />
                            </li>
                            <li>
                                <Button
                                    text="Done"
                                    isActive={currentFilter === 'Done'}
                                    handleButtonClick={changeFilter}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}