import React from 'react';
import ShippingIcon from '../common/assets/ic_shipping.png';

const ItemRow = ({item, onClick}) => {
    return(
        <div className='item-list-row' key={item.id} >
            <div className='item-info-first-col'>
                <img src={item.picture} alt='itemImg' onClick={() => onClick(item.id)} />
            </div>
            <div className='item-info-second-col'>
                <div>
                    <span className='item-price'>{item.price}</span>
                    {item.free_shipping ? <img src={ShippingIcon} alt='icon-shipping' /> : null}
                </div>
                <span className='item-title' onClick={() => onClick(item.id)} >{item.title}</span>
            </div>
            <div className='item-info-third-col'>
                <span>{item.city}</span>
            </div>
        </div>
    );
};

export default ItemRow;