import React from "react";
import { Label, TextInput, Button } from "flowbite-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const FeatureProudct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/feature", {
        data,
      })
      .then((res) => {
        if (res.status === 200) {
          toast("insert feature product!");
          reset();
        }
      })
      .catch((err) => console.log(err));
    // console.log(data);
  };

  return (
    <div className="my-12 max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <div className="mx-auto">
        <h2 className="text-2xl text-green-500 text-center capitalize">
          Add Feature product
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="productname" value="Product Name" />
            </div>
            <TextInput
              {...register("productName")}
              id="productname"
              type="text"
              placeholder="Add Product Name"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Product Images" />
            </div>
            <TextInput
              {...register("productImage")}
              id="productImage"
              type="text"
              required={true}
              shadow={true}
            />
          </div>
          <Button type="submit">Add Feature Images</Button>
        </form>
      </div>
    </div>
  );
};

export default FeatureProudct;
