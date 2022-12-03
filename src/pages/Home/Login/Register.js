import React from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";


const Regiser = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const {
    register,
    reset ,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let singInError;

  const onSubmit =  (data) => {
    const password1 = data.password;
    const password2 = data.password2;
    if (password1 !== password2) {
      toast.error("password didn't match!");
      return;
    } 
    else {
      createUserWithEmailAndPassword(data.email,data.password);
      reset ();
      
    }
  };

  if ( error ) {
    singInError =  <p className="text-thin text-red-500">{error.message}</p>
  }


  let navigate = useNavigate();
  if ( user ) {   
    console.log('user',user);
     toast('user create successfully');
     navigate('/')
  }

  if ( loading ) {
      <Loading />
  }

  return (
    <>
      <div className="container-lg p-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="max-w-lg mx-auto">
          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Regiser
            </h5>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Your Name" />
                </div>

                <TextInput
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required!",
                    },
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                  type="text"
                  placeholder="john"
                />
                <Label className="text-red-500">
                  {errors.name?.type === "required" && (
                    <p>{errors.name.message}</p>
                  )}
                </Label>
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>

                <TextInput
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required!",
                    },

                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "provide a valid Email",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                  type="email"
                  placeholder="dev@gmail.com"
                />

                <Label className="text-red-500">
                  {errors.email?.type === "required" && (
                    <p>{errors.email.message}</p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p>{errors.email.message}</p>
                  )}
                </Label>
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>

                <TextInput
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required!",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 character or Longer!",
                    },
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                  type="password"
                  placeholder="......"
                />

                <label className="label">
                  {errors.password?.type === "required" && (
                    <p className="text-red-500 text-thin" role="alert">
                      {errors.password.message}
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500 text-thin" role="alert">
                      {errors.password.message}
                    </p>
                  )}
                </label>
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password2" value="Your password" />
                </div>

                <TextInput
                  {...register("password2", {
                    required: {
                      value: true,
                      message: "Password is required!",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be provide atleast 6 character or longer",
                    },
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                  type="password"
                  placeholder="......"
                />

                <Label className="text-red-500">
                  {errors.password2?.type === "required" && (
                    <p>{errors.password2.message}</p>
                  )}
                  {errors.password2?.type === "minLength" && (
                    <p>{errors.password2.message}</p>
                  )}
                </Label>
              </div>

              <Button type="submit">submit</Button>
              {singInError}
              <div className="flex items-center gap-2 text-center">
                <Label htmlFor="agree" className="text-center">
                  Have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-600 hover:underline dark:text-blue-500 text-center"
                  >
                    Please Login here
                  </Link>
                </Label>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Regiser;
