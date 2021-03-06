import React from 'react';
import api from '../common/Services/api.js';
import Breadcrumb from '../common/Components/Breadcrumb.js';
import './itemDetail.css';

class ItemDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfo: {},
        };
        this.getItemId = this.getItemId.bind(this);
    }

    getItemId() {
        if(this.props.location.state && this.props.location.state.itemId) {
            return this.props.location.state.itemId;
        } 
        return this.props.location.pathname.split('/items/')[1];
    }

    async componentDidMount() {
        let itemId= this.getItemId();
        let result = await api.getItemById(itemId);
        this.setState({ itemInfo: result.item });
    };

    render() {
        if (!this.state.itemInfo.price || !this.state.itemInfo.title) {
            return null;
        };

        let statusText = this.state.itemInfo.condition + ' - ' + this.state.itemInfo.sold_quantity + ' vendidos';
        let priceText = `${this.state.itemInfo.price.currency} ${this.state.itemInfo.price.intPrice}`;
        let decimals = this.state.itemInfo.price.decimals ? this.state.itemInfo.price.decimals.split('.')[1] : '00';

        return (
            <React.Fragment>
                <Breadcrumb elements={this.state.itemInfo.categories} />
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
                        <div className='item-price'>
                            <span>{priceText}</span>
                            <span className='item-price-decimals'>{decimals}</span>
                        </div>
                        <button className='item-buy-button'>Comprar</button>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default ItemDetail;