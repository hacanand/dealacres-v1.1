"use client";

import React, { useState } from "react";
import feedbackHeaderImage from "../../../public/feedback/Feedback_header.png";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";

const Feedback = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm();

  const [rating, setRating] = useState(0);

  const onSubmit = (data) => {
    let hasErrors = false;

    if (!data.name || data.name.length <= 1) {
      setError("name", {
        type: "manual",
        message: "Name should be at least 2 characters",
      });
      hasErrors = true;
    }

    if (!isValidEmail(data.email)) {
      setError("email", { type: "manual", message: "Invalid email format" });
      hasErrors = true;
    }

    if (data.userFeedback.length <= 10) {
      setError("userFeedback", {
        type: "manual",
        message: "Feedback length should be greater than 10",
      });
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    data.rating = rating;
    console.log(data);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <Image
        src={feedbackHeaderImage}
        alt="feedback deal acres"
        className="w-full"
      />

      <div className="px-4 py-6 md:px-8 lg:px-12 xl:px-[25rem] mt-10 mb-14 space-y-5">
        <h2 className="text-4xl font-bold">We are eager to hear you!</h2>
        <form className="w-full space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="w-full">
                <input
                  {...field}
                  type="text"
                  placeholder="Name"
                  className="pl-5 text-gray-400 bg-white border-2 border-gray-300 w-full rounded-md py-2"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="w-full">
                <input
                  {...field}
                  type="text"
                  placeholder="Email"
                  className="pl-5 text-gray-400 bg-white border-2 border-gray-300 w-full rounded-md py-2"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            )}
          />
          <div className="flex flex-col items-start mb-1 w-full">
            <p className="text-2xl font-semibold">Rate Deal</p>
            <div className="flex space-x-3">
              {[1, 2, 3, 4, 5].map((starValue) => (
                <span
                  key={starValue}
                  className={`text-4xl cursor-pointer ${
                    rating >= starValue ? "text-yellow-500" : "text-gray-400"
                  }`}
                  onClick={() => setRating(starValue)}
                >
                  &#9733;
                </span>
              ))}
            </div>
            {errors.rating && (
              <p className="text-red-500">{errors.rating.message}</p>
            )}
          </div>
          <Controller
            name="feedbackType"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Select Feedback"
                className="pl-5 text-gray-400 bg-white border-2 border-gray-300 w-full rounded-md py-2"
              />
            )}
          />
          <Controller
            name="userFeedback"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="relative w-full">
                <input
                  {...field}
                  type="text"
                  placeholder=""
                  className="pl-5 top-4 pb-16 text-gray-400 bg-white border-2 border-gray-300 w-full rounded-md text-left align-top"
                />
                {field.value.trim().length === 0 && (
                  <p className="absolute top-1 left-5 text-gray-400 text-md">
                    Type your message...
                  </p>
                )}

                {errors.userFeedback && (
                  <p className="text-red-500">{errors.userFeedback.message}</p>
                )}
              </div>
            )}
          />
          <button className="bg-[#0061DF] font-bold w-full text-md py-4 text-center text-white">
            Send Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
