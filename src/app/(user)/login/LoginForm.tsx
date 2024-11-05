"use client";
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === "" && password !== "") {
            toast.error("Email is required");
        } else if (password === "" && email !== "") {
            toast.error("Password is required");
        } else if (email === "" && password === "") {
            toast.error("Email and Password are required");
        }
        else {
            toast.success("Successfully logged in");

            // Redirect to home page (router.push() allows you to go back to the previous page, but router.replace() doesn't)
            router.replace('/');
        }
        console.log({ email, password });
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-3">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your email"
                    // required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your password"
                    // required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            >
                Log In
            </button>
        </form>
    )
}

export default LoginForm