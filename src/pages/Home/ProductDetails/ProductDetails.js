import axios from "axios";
import { Card, Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);

  const [items, setItems] = useState([]);
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setItems(JSON.parse(cartData));
    }
  }, []);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(product);
  return (
    <div className=" max-w-screen px-12 mx-auto flex my-12">
      <div className="w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-3 text-center">
          <div className=" mx-auto">
            <div className="max-w-lg">
              <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
          </div>
          <div className=" mx-auto">
             <div className="max-w-lg">
             <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
