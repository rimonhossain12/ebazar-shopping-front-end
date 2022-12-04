import { Button, Card, Label, TextInput } from "flowbite-react";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  let singInError;
  if (error) {
    singInError = <p className="text-thin text-red-500">{error.message}</p>;
  }
  let navigate = useNavigate();



  useEffect(() => {
		if (user) {
			// navigate(from, { replace: true })
      navigate('/')
		}
	}, [user, navigate])

  if ( loading ) {
    return <Loading />
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
              {singInError}
              <Button type="submit">Login</Button>
              <div className="flex items-center gap-2 text-center">
                <Label htmlFor="agree" className="text-center">
                  Have an account?{" "}
                  <Link
                    to="/register"
                    className="text-blue-600 hover:underline dark:text-blue-500 text-center"
                  >
                    Please Regiser here
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

export default Login;
