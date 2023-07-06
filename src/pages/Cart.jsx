import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex justify-center items-center  mt-8">


      <div className="flex flex-col w-[600px] mr-[3.5rem] ">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col justify-center items-center">

        <div>
          <div className="text-lg uppercase text-green-600 font-semibold">Your Cart</div>
          <div className="text-5xl uppercase text-green-600 font-bold">Summary</div>
          <p className="mt-5">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="mt-[90%]">
          <p className=" text-black  font-semi-bold text-md">Total Amount :<span className="font-bold"> ${totalAmount}</span> </p>
          <button className="w-full bg-green-600 p-3 pl-5 pr-5 mt-2 rounded-md text-white hover:bg-green-700 transition-all duration-200 ">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col justify-center items-center mt-[20%]">
      <h1 className="text-gray-700 font-semibold text-lg p-4 w-full text-left truncate ml-[90rem] mt-2">Cart Empty</h1>
      <Link to={"/"}>
        <button className="w-full bg-green-600 p-4 mt-2 rounded-md text-white hover:bg-green-700 transition-all duration-200 ">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
