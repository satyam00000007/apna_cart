import React from 'react'

export default function Footer(props) {
  return (
    <div className="row bg-dark fixed-bottom">
        <button className="btn btn-success col-2">Pay</button>
        <div className="col-8 d-flex justify-content-center align-items-center text-white"> ₹ {props.totalAmount}</div>
        <button className="btn btn-primary col-2" onClick={()=>props.resetQuantity()}>Reset</button>
    </div>
    
  )
}
