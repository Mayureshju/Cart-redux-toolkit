
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div  className="flex items-center justify-between border-b-4 border-black
    hover:scale-110 transition duration-300 ease-in gap-3 p-2 mt-10 ml-5 ">

      <div className="flex items-center justify-center border-b-black">

        <div className="mr-[50px] w-[180px] h-[180px] flex justify-center items-center">
          <img src={item.image} className="w-full h-[70%]"/>
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
          <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>

          <div className="flex justify-between mt-5">
            <p className="text-green-600 font-semibold">{item.price}</p>
            <div
            onClick={removeFromCart} className="h-[25px] w-[25px] bg-red-200 relative rounded-full cursor-pointer  mr-2 mb-2 hover: scale-150">
              <FcDeleteDatabase className="absolute top-1 left-1"/>
            </div>
          </div>
          

        </div>


      </div>

    </div>
  );
};

export default CartItem;
