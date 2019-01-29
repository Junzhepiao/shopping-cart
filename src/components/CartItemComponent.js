import React from "react";

class CartItemComponent extends React.Component {
    render() {  
        console.log("props",this.props.cartItemComponent)
        return (
        <div className="collection-item">
            <div className="list-group">
            <div className="list-group-item">
            <div className="row">
                <div className="col-md-8">{this.props.cartItemComponent.product.name}</div>
                <div className="col-md-2">{this.props.cartItemComponent.product.priceInCents/100}</div>
                <div className="col-md-2">{this.props.cartItemComponent.quantity}</div>
            </div>
            </div>
            </div>
        </div>
        ) 
    }
}

export default CartItemComponent;