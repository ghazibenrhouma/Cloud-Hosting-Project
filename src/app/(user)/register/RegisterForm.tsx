"use client";
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "") {
            toast.error("Username is required");
        } else if (email === "") {
            toast.error("Email is required");
        } else if (password === "") {
            toast.error("Password is required");
        }
        else {
            toast.success("Successfully Registered");
        }
        console.log({ username, email, password });
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-3">
                <label
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your name"
                    // required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
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
                Register
            </button>
        </form>
    )
}

export default RegisterForm