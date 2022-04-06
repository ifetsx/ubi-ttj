import React, { useEffect, useState } from 'react'
import {ListGroup} from 'react-bootstrap';

function ProductList() {

    const[list, setProductList]=useState([]);

    useEffect(() => {
        fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
        .then(reponse => reponse.json())
        .then(data => setProductList(data));
    })

    const listItems = list.map((product) => {
        return <ListGroup.Item>{product.name} - Price: {product.price}</ListGroup.Item>
    });

    return (
        <ListGroup>
            {listItems}
</ListGroup>
    )
}

export default ProductList;
