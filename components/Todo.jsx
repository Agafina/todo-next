import React from 'react'

const Todo = () => {

  return (
    <tr className="bg-white border-b dark:bg-white dark:border-gray-400">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    1
                </th>
                <td className="px-6 py-4">
                   Sports
                </td>
                <td className="px-6 py-4">
                    jogging
                </td>
                <td className="px-6 py-4">
                  Done
                </td>
                <td className="px-6 py-4 flex gap-1">
                    <button className='py-2 px-4 bg-red-500 text-white'>Delete</button>
                    <button className='py-2 px-4 bg-green-500 text-white'>Done</button>
                </td>
            </tr>
            
  )
}

export default Todo;
