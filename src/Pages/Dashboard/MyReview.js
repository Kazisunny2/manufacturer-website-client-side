import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const MyReview = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/review`;
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
          toast.success("Your Review Added");
        }
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-2xl mb-10">Add Your Review</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="label">
            <span className="label-text "> Name</span>
          </label>
          <input
            className="mb-2 input input-bordered input-primary w-full "
            placeholder="Your Name"
            {...register("name", { required: true, maxLength: 20 })}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text ">Rating</span>
          </label>
          <input
            className="mb-2 input input-bordered input-primary w-full "
            type="number"
            placeholder="Your Rating"
            {...register("Rating")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text ">Description</span>
          </label>
          <textarea
            className="mb-2 input input-bordered input-primary w-full "
            placeholder="Description"
            {...register("Description")}
          />
        </div>

        <button type="submit" value="Add Review" class="btn">
          Add Review
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default MyReview;
