import React from 'react';
import './breadcrumb.css';

const Breadcrumb = props => {
    const renderElements = () => {
        return props.elements.map(elem => {
            return (
                <span key={elem.id}>{` ${elem.name} >`}</span>
            );
        });
    }

    return(
        <div className='breadcrumb-container'>
            {props.elements ? renderElements() : null}
        </div>
    );
};

export default Breadcrumb;