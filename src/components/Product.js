import React from 'react'

export default function Product(props) {
    console.log(props)
  return (
        <div className='row'>
            <div className='col-3 d-flex justify-content-center align-items-center'>
                <h2 className=''>{props.product.name}<span className="badge bg-secondary mx-1"> ₹ {props.product.price}</span></h2>
            </div>
            <div className='col-3 d-flex justify-content-center align-items-center'>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-danger" onClick={()=>props.incrementQuantity(props.index)}> + </button>
                    <button type="button" className="btn btn-warning">{props.product.quantity}</button>
                    <button type="button" className="btn btn-success" onClick={()=>props.decreaseQuantity(props.index)}> - </button>
                </div>
            </div>
            <div className='col-3 d-flex justify-content-center align-items-center'>
                <h2 className=''> ₹ {props.product.price * props.product.quantity}</h2>
            </div>
            <div className='col-3 d-flex justify-content-center align-items-center'>
                <button type="button" className="btn btn-danger" onClick={()=>props.removeRow(props.index)}> remove </button>
            </div>
        </div>
    )
}
