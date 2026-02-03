import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "John Doe",
      email: "johndoe@example.com",
      message: "Hello, this is a default message.",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="px-4 bg-gray-700 py-10 mx-20 rounded-4xl my-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          max-w-[550px]
          mx-auto
          my-10
          p-6
          bg-[var(--formclr)]
          rounded-xl
          shadow-[var(--formshadow)]
          transition-colors
          duration-[1300ms]
          text-white
        "
      >
        {/* NAME */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold text-[var(--fromtxt)]">
            Full Name
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
            className="
              w-full
              px-4
              py-2.5
              text-sm
              border-2
              border-[#3025ff]
              rounded-lg
              outline-none
              transition
              focus:border-[#007bff]
              focus:ring-2
              focus:ring-[#007bff]/20
            "
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold text-[var(--fromtxt)]">
            Your Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            className="
              w-full
              px-4
              py-2.5
              text-sm
              border-2
              border-[#3025ff]
              rounded-lg
              outline-none
              transition
              focus:border-[#007bff]
              focus:ring-2
              focus:ring-[#007bff]/20
            "
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* MESSAGE */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-[var(--fromtxt)]">
            Message
          </label>
          <textarea
            {...register("message", {
              required: "Message is required",
            })}
            className="
              w-full
              px-4
              py-3
              text-sm
              border-2
              border-[#3025ff]
              rounded-lg
              outline-none
              transition
              resize-y
              min-h-[120px]
              focus:border-[#007bff]
              focus:ring-2
              focus:ring-[#007bff]/20
            "
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="
              px-8
              py-2.5
              rounded-lg
              bg-[#3025ff]
              text-white
              font-semibold
              transition
              hover:bg-[#1f1acc]
              active:scale-95
              focus:outline-none
              focus:ring-2
              focus:ring-[#3025ff]/40
            "
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
