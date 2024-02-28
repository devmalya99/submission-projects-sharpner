import React from 'react';

const AddExpenseCard = () => {
  return (
    <div className='container mx-auto mt-10 max-w-md shadow-lg'>
      <div className='border-2 border-gray-200 p-5 rounded-md bg-white shadow-sm'>
        <form>

          <div className='mb-4'>
            <input
              type='text'
              placeholder='Expense Heading'
              className='w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
            />
          </div>

          <div className='mb-4'>
            <input
              type='number'
              placeholder='Expense Amount'
              className='w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
            />
          </div>

          <div className='mb-4'>
            <select className='form-select block w-full px-3 py-2 rounded-md'>
              <option>Expense Category</option>
              <option value={'Food'}>Food</option>
              <option value={'Utilities'}>Utilities</option>
              <option value={'Entertainment'}>Entertainment</option>
              <option value={'Gadgets'}>Gadgets</option>
            </select>
          </div>

          <div>
            <button className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Add Expense
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddExpenseCard;