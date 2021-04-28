import React from 'react';

function Header(props) {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-list">
                    {props.children}
                </div>
            </nav>
        </header>
    );
}

export default Header