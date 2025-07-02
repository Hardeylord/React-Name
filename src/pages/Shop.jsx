import React, { useEffect, useState } from "react";
import Productcard from "../components/Productcard";
import axios from "axios";
import { Loader2 } from "lucide-react";

export default function Shop() {
  // const productProperties = [
  //   {
  //     name: "Grey T-shirt",
  //     price: 15.99,
  //     description: "Grey long sleeve T-shirt",
  //     image: "/724855s.webp",
  //   },
  //   {
  //     name: "Sweatshirt",
  //     price: 50.99,
  //     description: "blue long sleeve Tshirt",
  //     image: "/205867_1696480316.webp",
  //   },
  //   {
  //     name: "Red round neck",
  //     price: 500,
  //     description: "red round neck top",
  //     image: "/download.jpg",
  //   },
  // ];

  const[data, setData]=useState([]);
  const[isLoading, setisLoading]=useState(true);

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{setData(res.data)}).finally(()=>{setisLoading(false)})
  }, [])
  return (
    <div>
      {isLoading ? (<div className="sm:col-span-2 lg:col-span-4 p-10">
        <Loader2 className="animate-spin m-auto text-blue-400" size={50}/>
      </div>) :(<div className="w-full space-x-4 grid grid-cols-4">
        {data.map((item, index) => (
          <Productcard
            name={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
            key={index}
          />
        ))}
      </div>)}
    </div>
  );
}