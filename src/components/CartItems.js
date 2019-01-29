import React from "react";
import CartItemComponent from "./CartItemComponent";

class CartItems extends React.Component {
    render() {
        let cartItemsList = this.props.cartItemsList.map(cartItemComponent=>(
            <CartItemComponent key={cartItemComponent.id} cartItemComponent={cartItemComponent}/>
        ));
        const prices = this.props.cartItemsList.map((item)=>{
            return item.product.priceInCents * item.quantity/100
        });
        const totalPrice = prices.reduce((total,num)=>total + num)
        return (
            <div className="container">
            <h1>Cart Items</h1>
            <div className="list-group">
                <div className="list-group-item">
                <div className="row">
                    <div className="col-md-8">Product</div>
                    <div className="col-md-2">Price $</div>
                    <div className="col-md-2">Quantity</div>
                </div>
                </div>
                    {cartItemsList}
            </div>
            <div> Total Price: {totalPrice}</div>
            </div>
        )
    }
}

export default CartItems;