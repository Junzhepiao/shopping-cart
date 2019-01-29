import React from "react";

class ProductOptions extends React.Component {
    render() {
         return <option value={this.props.product.id} key = {this.props.product.id}>{this.props.product.name}</option>;
    }
}

export default ProductOptions;

