import React from 'react';
import api from '../common/Services/api.js';
import './itemDetail.css';

class ItemDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfo: {},
        };
    }

    async componentDidMount() {
        let itemId= this.props.location.state.itemId;
        let result = await api.getItemById(itemId);
        this.setState({ itemInfo: result.item });
    };

    render() {
        let statusText = this.state.itemInfo.condition + ' - ' + this.state.itemInfo.sold_quantity;
        return (
            <div className='item-detail-container'>
                <div className='detail-left-column'>
                    <img className='item-image' src={this.state.itemInfo.picture} alt='item-img' />
                    <div className='item-description-container'>
                        <h2>Descripcion del producto</h2>
                        <span>{this.state.itemInfo.description}</span>
                    </div>
                </div>
                <div className='detail-right-column'>
                    <div className='item-status'>
                        {statusText}
                    </div>
                    <span className='item-title'>{this.state.itemInfo.title}</span>
                    <span className='item-price'>{this.state.itemInfo.price}</span>
                    <button className='item-buy-button'>Comprar</button>
                </div>
            </div>
        );
    };
}

export default ItemDetail;