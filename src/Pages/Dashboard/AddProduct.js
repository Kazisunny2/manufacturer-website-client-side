import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://polar-forest-02530.herokuapp.com/tool`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.resultId) {
          toast.error("New Product Added");
          reset();
        } else {
          toast.success("New Product Added");
        }
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-2xl mb-10">Add New Product</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="label">
            <span className="label-text ">Product Name</span>
          </label>
          <input
            className="mb-2 input input-bordered input-primary w-full "
            placeholder="Product Name"
            {...register("name", { required: true, maxLength: 20 })}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text ">Price</span>
          </label>
          <input
            className="mb-2 input input-bordered input-primary w-full "
            type="number"
            placeholder="Price"
            {...register("Price")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text ">Description</span>
          </label>
          <textarea
            className="mb-2 input input-bordered input-primary w-full "
            placeholder="Description"
            {...register("description")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text ">Minimum Order</span>
          </label>
          <input
            className="mb-2 input input-bordered input-primary w-full "
            type="number"
            placeholder="Minimum Order"
            {...register("minimum_order_quantity")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text ">Available Quantity</span>
          </label>
          <input
            className="mb-2 input input-bordered input-primary w-full "
            type="number"
            placeholder="Available Quantity"
            {...register("available_quantity")}
          />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text ">Photo</span>
          </label>
          <input
            className="mb-2 input input-bordered input-primary w-full"
            type="text"
            placeholder="Photo URL"
            {...register("img")}
          />
        </div>
        <button type="submit" value="Add Order" class="btn">
          Add Product
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default AddProduct;
