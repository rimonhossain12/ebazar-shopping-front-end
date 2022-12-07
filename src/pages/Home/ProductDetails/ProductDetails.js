import axios from "axios";
import { Card, Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
const ProductDetails = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct({
			...res?.data,
			qty:0
		});
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleAddToCart = () => {
	setProduct({
		...product,
		qty: product.qty ? product.qty + 1 : 1
	})
  };
  

  console.log(product);

  const { image, description, price, title,qty } = product;

  return (
    <div className=" max-w-screen px-12 mx-auto flex my-12">
      <div className="w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-3 text-center">
          <div className=" mx-auto">
            <div className="max-w-lg">
              <Card>
                <img style={{ height: "180px" }} src={image} alt="not found" />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {title}
                </p>
                <p className="font-normal text-left text-gray-700 dark:text-gray-400">
                  {description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-900 dark:text-white">
                    ${price}
					<h2 className="text-2xl">Quantity: {qty} </h2>
                  </span>
                </div>
                <div className="flex gap-5">
                  <div>
                    <Button onClick={handleAddToCart}>
                      <HiShoppingCart className="mr-2 h-5 w-5" />
                      Add To Cart
                    </Button>
                  </div>
                  <div>
                    <Button>
                      <HiShoppingCart className="mr-2 h-5 w-5" />
                      Buy now
                    </Button>
                  </div>
                </div>
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
