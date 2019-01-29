import React from "react";
import ProductOptions from "./ProductOptions";

class AddItem extends React.Component {
    state={
        products: this.props.products,
        selectedQuantity:1,
        selectedProduct:this.props.products[0]
    };
    handleQuantityChange = e =>{
        this.setState({
            selectedQuantity: parseInt(e.target.value),
        })
    };
    handleProductChange = e =>{
        let selectedProduct = this.state.products.filter(selectedProduct => selectedProduct.id == e.target.value)
        this.setState({
          selectedProduct: selectedProduct[0]
        })
    };
    handleSubmit = e => {
        e.preventDefault();
        let newItem = {
            id: 4,
            product: this.state.selectedProduct,
            quantity: this.state.selectedQuantity
        }
        this.props.submitFunction(newItem)
    };
    render() {
        const productOptions = this.props.products.map(product =>{
            return (
                <ProductOptions key={product.id} product={product}/>
            )
        })
        return <div className="container" style={{margin:"20px"}} >
            <form onSubmit={this.handleSubmit}>
            <div style={{margin:"10px"}}>
            <span>Quantity:</span>
            <input className = 'form-control' type = 'number' onChange = {this.handleQuantityChange}/>
            </div>
            <div style={{margin:"10px"}}>
                <span>Product:</span>
                <select onChange={this.handleProductChange} >
                {productOptions}
                </select>
            </div>
            <input  style={{margin:"10px"}} type="submit" value="submit"/>
        </form>
        </div>
    }
}

export default AddItem;
