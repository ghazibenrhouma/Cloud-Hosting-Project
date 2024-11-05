"use client";
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const AddArticleForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title === "" && description !== "") {
            toast.error("Title is required");
        } else if (description === "" && title !== "") {
            toast.error("Description is required");
        } else if (title === "" && description === "") {
            toast.error("Title and Description are required");
        }
        else {
            toast.success("Article Successfully Added");
        }
        console.log({ title, description });
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-3">
                <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Title
                </label>
                <input
                    type="text"
                    id="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter Article Title"
                    // required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Description
                </label>
                <textarea
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    rows={5}
                    placeholder="Enter Article Description"
                    // required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-900 text-white font-bold p-2 rounded"
            >
                Add
            </button>
        </form>
    )
}

export default AddArticleForm