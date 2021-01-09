import React from 'react';

export const Logo = ({todoCounter, doneCounter}) => {
    return (
        <div className="col s12">
            <nav>
                <div className="nav-wrapper green darken-3 row">
                    <div className="col s9">
                        <span className="brand-logo">
                            <i className="material-icons">event_note</i>
                            ToDo App
                        </span>
                    </div>
                    <div className="col s3" style={{textAlign: 'right', paddingRight: '15px'}}>
                        <span className="">{todoCounter} more to do, {doneCounter} done</span>
                    </div>
                </div>
            </nav>
        </div>
    );
}