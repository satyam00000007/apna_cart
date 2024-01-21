import Navbar from './Navbar.js'
import Footer from './Footer.js'
import ProductList from './ProductList.js'
import { useState } from 'react';
import AddItem from './AddItem';

export default function App() {
  let products= [{
                  name : 'Apple',
                  price : 80000,
                  quantity : 0,
                  },
                  {
                    name : 'Samsung',
                    price : 60000,
                    quantity : 0,
                  },{
                    name : 'Realme',
                    price : 10000,
                    quantity : 0,
                  }];

  const [productList,setProductlist] = useState(products);
  const [totalAmount,setTotalAmount] = useState(0);

  const incrementQuantity = (index) =>{
    let newProductList = [...productList];
    let newtotalAmount = totalAmount; 
    newProductList[index].quantity = newProductList[index].quantity + 1;
    newtotalAmount += newProductList[index].price;
    setTotalAmount(newtotalAmount); 
    setProductlist(newProductList);
  }

  const decreaseQuantity = (index) =>{
    let newProductList = [...productList]
    let newtotalAmount = totalAmount; 
    if(newProductList[index].quantity){
      newProductList[index].quantity = newProductList[index].quantity - 1;
      newtotalAmount -= newProductList[index].price;
      setTotalAmount(newtotalAmount); 
      setProductlist(newProductList);
    }
  }

  const resetQuantity = () =>{
    let newProductList = [...productList]
    newProductList.map((products)=>{
      products.quantity = 0;
    })
    setProductlist(newProductList);
    setTotalAmount(0); 
  }

  const removeRow = (index) => {
    let newProductList = [...productList]
    let newtotalAmount = totalAmount;
    newtotalAmount = newtotalAmount - (newProductList[index].quantity * newProductList[index].price);
    setTotalAmount(newtotalAmount);
    newProductList.splice(index,1);
    setProductlist(newProductList)
  }

  const AddItems = (name,price)=>{
    let newProductList = [...productList];
    newProductList.push({name : name, price : price, quantity:0});
    setProductlist(newProductList);
  }

  return (
    <>
      <Navbar/>
      <div className="container mt-4">
        <AddItem AddItems={AddItems}/>
        <ProductList productList={productList} incrementQuantity={incrementQuantity} decreaseQuantity={decreaseQuantity} removeRow={removeRow}/>
      </div>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  )
}
