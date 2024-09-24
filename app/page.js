"use client"

import Todo from "../components/Todo";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
      const [formData, setFormData] = useState({
        title: "",
        description:"",
      })


  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFormData(form => ({...form, [name]:value}));
    console.log(formData);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    try{
      toast.success("Todo Added ")
    }catch(error){
      toast.error('Error')
    }

  }

  return (
    <>
      <ToastContainer />
      <form  onSubmit={handleSubmit} className="flex items-start flex-col max-w-[600px] w-[80%] gap-2 mt-24 px-2 mx-auto">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="w-full px-3 py-2 border-2"
          onChange={handleChange}
          value={formData.title}
        />
        <textarea
          name="description"
          value={formData.description}
          placeholder="Enter Description"
          className="w-full py-2 px-3 border-2"
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11 text-white">
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-200 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-300 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                TITLE
              </th>
              <th scope="col" className="px-6 py-3">
                DESCRIPTION
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
           <Todo />
           
          </tbody>
        </table>
      </div>
    </>
  );
}
