import React from 'react';

const ItemRow = ({item}) => {
    return(
        <div className='item-list-row' key={item.id} >
            <div className='item-info-first-col'>
                <img src={item.picture} alt='itemImg' />
            </div>
            <div className='item-info-second-col'>
                <span>{item.price}</span>
                <span>{item.title}</span>
            </div>
            <div className='item-info-third-col'>
                <span>{item.city}</span>
            </div>
        </div>
    );
};

export default ItemRow;