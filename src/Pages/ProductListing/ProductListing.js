import React, { Component } from 'react'

 class ProductListing extends Component {
    render() {
    console.log(this.props.match.params.productId)
        return (
            <div>
                Toufik Desai
            </div>
        )
    }
}

export default ProductListing
