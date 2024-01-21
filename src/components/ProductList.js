import React from "react";
import Product from "./product";

export default function ProductList(props) {
        return (
            props.productList.length?props.productList.map((product,i)=>{
                    return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i} decreaseQuantity={props.decreaseQuantity} removeRow={props.removeRow}></Product>
                }) : <h2>No Product exixts in the Cart</h2>
        );
    }