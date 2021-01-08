import React from 'react';
import { Button } from './Button';

export const TodoItemCreator = () => {
    return (
            <div className="col s12">
                <nav>
                    <div className="nav-wrapper green darken-3 row">
                        <div className="input-field inline col s9">
                            <input
                                id="add-inline"
                                type="text"
                                className="validate"
                                placeholder="What needs to be done?"
                            />
                        </div>
                        <div className="cols s3">
                            <ul id="nav-mobile" className="right button-set-bottom hide-on-small-only">
                                <Button text="Add" isActive />
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
    );
}


            /* <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s9">
                            <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input disabled value="I am not editable" id="disabled" type="text" className="validate" />
                            <label htmlFor="disabled">Disabled</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            This is an inline input field:
                        <div className="input-field inline">
                                <input id="email_inline" type="email" className="validate" />
                                <label htmlFor="email_inline">Email</label>
                                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div> */