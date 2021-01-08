import React from 'react';
import { Button } from './Button';

export const Navbar = () => {
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
                        />
                    </div>
                    <div className="cols s3">
                        <ul id="nav-mobile" className="right button-set-top hide-on-small-only">
                            <li><Button text="All" isActive /></li>
                            <li><Button text="Active" /></li>
                            <li><Button text="Done" /></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}