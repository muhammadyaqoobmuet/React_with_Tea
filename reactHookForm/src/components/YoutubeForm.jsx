import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function YoutubeForm() {
  const form = useForm({
    // defaultValues:{
    //   email:"",
    //   name:"batman012904",
    //   channel:""
    // }
    // to get old user email when he comes back
    defaultValues: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      return {
        name: "batman012479534623",
        email: data.email,
        channel: "",
        age:Number,
        dob:new Date(),
        social: {
          twiter: "",
          youtube: ""
        },
        phoneNumber: ["", ""],
        phNums: [
          {
            number: " "
          }
        ],
       
      };
    }
  }); // this form object has a lot of properties like watch, register, handleSubmit, formState, etc.
  
  const { register, control, handleSubmit, formState,watch ,getValues,setValue } = form; // the register function is used to register an input or select element into the form context
  // const { name, ref, onChange, onBlur } = register('email') // it requires input name to bind and validate changes and error
  const { errors } = formState; // contains individual field errors

  const watchForm = watch(); // ths watches all form if we watch(["number","channel"]) then this will watch only it ("channel") then will watch this only
  // disadantage : it rerender on everychange in form 
  const dataHandler = (data) => {
    console.log();
    if (data) {
      console.log(data);
    }
  };

  const { fields, append, remove } = useFieldArray({
    name: "phNums",
    control,
  });

   const  handleSetValue = () =>{
    setValue("age",Math.floor(Math.random()*(80-10)+(10)),{
      shouldDirty:true,
      shouldTouch:true,
      shouldValidate:true,
    })
   }
  // useEffect(()=>{
  //   const subs = watch((value)=>{
  //     console.log(value?.age);
  //   })
  //   return () => subs.unsubscribe
  // },[watch])

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
      <form
        onSubmit={handleSubmit(dataHandler)}
        noValidate
        className="w-1/4 flex flex-col p-6 bg-white rounded-lg shadow-lg"
      >
      {/* <h1>{JSON.stringify(watchForm)}</h1> */ } 
        <div className="flex flex-col px-2 py-3">
          <label htmlFor="email" className="text-gray-700 font-semibold">Email</label>
          <input
            className="border border-gray-300 bg-gray-100 rounded-md w-full py-2 text-md px-2 outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            //    name={name} type='text' ref={ref} onChange={onChange} onBlur={onBlur}  too avoid this
            {...register("email", {
              required: {
                value: true,
                message: "email is required",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "invalid email ",
              },
              // validate:(feildValue)=>{
              //   return (
              //       feildValue !== "admin@gmail.com"  || "enter different  email this is reserve for admins "
              //   )
              // }
              validate: {
                notAdmin: (feildVal) => {
                  return feildVal !== "admin@gmail.com" || " enter a different email address";
                },
                blackListedDomain: (feildVal) => {
                  return !feildVal.endsWith("yahoo.com") || `yahoo.com is not supported`;
                }
              }
            })}
          />
          <p className="text-red-500 mt-2 text-sm">{errors.email?.message}</p>
        </div>
        
        <div className="flex flex-col px-2 py-3 my-2">
          <label htmlFor="name" className="text-gray-700 font-semibold">Name</label>
          <input
            className="border border-gray-300 bg-gray-100 rounded-md w-full py-2 text-md px-2 outline-none focus:ring-2 focus:ring-blue-500"
            id="name"
            type="text"
            {...register("name")}
          />
          <p className="text-red-500 mt-2 text-sm">{errors.name?.message}</p>
        </div>
        
        <div className="flex flex-col px-2 py-3">
          <label htmlFor="channel" className="text-gray-700 font-semibold">Channel</label>
          <input
            className="border border-gray-300 bg-gray-100 rounded-md w-full py-2 text-md px-2 outline-none focus:ring-2 focus:ring-blue-500"
            id="channel"
            type="text"
            {...register("channel", {
              required: {
                value: true,
                message: "enter a channel name"
              }
            })}
          />
          <p className="text-red-500 mt-2 text-sm">{errors.channel?.message}</p>
        </div>

        <div className="flex flex-col px-2 py-3 my-2">
          <label htmlFor="youtube" className="text-gray-700 font-semibold">YouTube</label>
          <input
            className="border border-gray-300 bg-gray-100 rounded-md w-full py-2 text-md px-2 outline-none focus:ring-2 focus:ring-blue-500"
            id="youtube"
            type="text"
            {...register("social.youtube")}
          />
        </div>

        <div className="flex flex-col px-2 py-3 my-2">
          <label htmlFor="twiter" className="text-gray-700 font-semibold">Twitter</label>
          <input
            className="border border-gray-300 bg-gray-100 rounded-md w-full py-2 text-md px-2 outline-none focus:ring-2 focus:ring-blue-500"
            id="twiter"
            type="text"
            {...register("social.twiter")}
          />
        </div>

        <div className="flex flex-col px-2 py-3 my-2">
          <label htmlFor="pnumber" className="text-gray-700 font-semibold">Primary Phone Number</label>
          <input
            className="border border-gray-300 bg-gray-100 rounded-md w-full py-2 text-md px-2 outline-none focus:ring-2 focus:ring-blue-500"
            id="pnumber"
            type="text"
            {...register(`phoneNumber[0]`)}
          />
        </div>

        <div className="flex flex-col px-2 py-3 my-2">
          <label htmlFor="snumber" className="text-gray-700 font-semibold">Secondary Phone Number</label>
          <input
            className="border border-gray-300 bg-gray-100 rounded-md w-full py-2 text-md px-2 outline-none focus:ring-2 focus:ring-blue-500"
            id="snumber"
            type="text"
            {...register(`phoneNumber[1]`)}
          />
        </div>

        <div className="flex gap-5 px-2 py-3 my-2">
          <label className="text-md pt-1">List of Numbers</label>
          <div className="flex-1">
            {fields.map((field, index) => (
              <div className="relative flex items-center space-x-2 mb-2" key={field.id}>
                <input
                  className="border border-gray-300 bg-gray-100 rounded-md w-full py-2 text-md px-2 outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  {...register(`phNums.${index}.number`)}
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="absolute top-1 right-1 bg-red-600 text-white px-2 py-1 rounded-md"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => append({ number: "" })}
            className="self-center bg-gray-700 text-white px-3 py-1 rounded-md"
          >
            Add
          </button>
        </div>


        <div className="flex flex-col px-2 py-3">
          <label htmlFor="age" className="text-gray-700 font-semibold">Age</label>
          <input
            className="border border-gray-300 bg-gray-100 rounded-md w-full py-2 text-md px-2 outline-none focus:ring-2 focus:ring-blue-500"
            id="age"
            type="number"
            {...register("age", {
              valueAsNumber:true,
              required: {
                value: true,
                message: "enter age"
              }
            })}
          />
          <p className="text-red-500 mt-2 text-sm">{errors.age?.message}</p>
        </div>

        <div className="flex flex-col px-2 py-3">
          <label htmlFor="dob" className="text-gray-700 font-semibold">Date of Birth</label>
          <input
            className="border border-gray-300 bg-gray-100 rounded-md w-full py-2 text-md px-2 outline-none focus:ring-2
             focus:ring-blue-500"
            id="dob"
            type="date"
            {...register("dob", {
             valueAsDate:true,
             disabled:watch("social.twiter")==="", // if twiter feild is filled then it will be not disable otherwise disabled
              required: {                          // this removes all validations when it is diable and feildvalue is undifiend
                value: true,
                message: "enter dob"
              }
            })}
          />
          <p className="text-red-500 mt-2 text-sm">{errors.dob?.message}</p>
        </div>

        <div className="flex gap-2 items-center">
        <button
          type="submit"
          className="w-full bg-teal-950 text-white py-2 rounded-md mt-4"
        >
          Submit
        </button>

        <button  onClick={()=>console.log(getValues())}
          type="button"
          className="w-full bg-slate-900 text-white py-2 rounded-md mt-4"
        >
          Console Values
        </button>

        <button  onClick={handleSetValue}
          type="button"
          className="w-full bg-orange-600 text-white py-2 rounded-md mt-4"
        >
            Random Age
        </button>
        </div>
      </form>

      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm;


// Binding Input Elements: When you call register, you bind an input element to the form so that React Hook
// Form can manage its state and validation.
// It essentially connects the input to the form's data handling.

// Providing Form Data: register returns an object with props that need to be spread onto your
//  form elements. This allows React Hook Form to track changes, handle validation, and update the
//  form state.
