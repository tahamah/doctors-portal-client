import React, { useEffect } from 'react'
import {
    useSignInWithGoogle,
    useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useForm } from 'react-hook-form'
import Spinner from '../Shared/Spinner'
import { Link, useLocation, useNavigate } from 'react-router-dom'
const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] =
        useSignInWithGoogle(auth)

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth)

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'
    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true })
        }
    }, [user, gUser, from, navigate])

    let singInError

    if (loading || gLoading) {
        return <Spinner />
    }

    if (error || gError) {
        singInError = (
            <p className="text-red-500 pb-2">
                <small> {error?.message || error?.message}</small>
            </p>
        )
    }

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data)
    }
    return (
        <div className="flex md:h-screen justify-center items-center ">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold ">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email is required!',
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email!',
                                    },
                                })}
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                                {errors.email?.type === 'pattern' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        {/* password */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Password is required!',
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters!',
                                    },
                                })}
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                                {errors.password?.type === 'minLength' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        {singInError}
                        <input
                            className="btn w-full max-w-xs"
                            type="submit"
                            value="Login"
                        />
                    </form>
                    <p className="text-center">
                        New to Doctor's Portal?
                        <Link className="text-secondary pl-2" to="/signUp">
                            Create Account
                        </Link>
                    </p>
                    <div className="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >
                        CONTINUE WITH GOOGLE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
