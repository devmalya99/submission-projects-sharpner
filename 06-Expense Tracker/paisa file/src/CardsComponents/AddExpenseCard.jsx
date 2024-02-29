import React, {useContext , useState} from 'react'
import {ExpenseContext} from '../Home/Home'
const AddExpenseCard = () => {

  const {dispatch} = useContext(ExpenseContext)
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')

  const generateId = () => {
    const rawId = `${title}${amount}${category}`;
    const uniqueId = rawId.replace(/\s+/g, '-').toLowerCase()
    return `${uniqueId}-${Math.random().toString(36).slice(2)}`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !amount || !category){
      alert ('please enter all the fields');
      return
    }
    dispatch({ type: 'ADD_EXPENSE', payload: { title, amount, category, id: generateId()} }); // or a unique key generator
    setTitle('');
    setAmount('');
    setCategory('');
  }

  return (
    <div className='container mx-auto mt-10 max-w-md shadow-lg'>
    <div className='border-2 border-gray-200 p-5 rounded-md bg-white shadow-sm'>
      <form onSubmit={handleSubmit}>
        <label className='mb-4'>
          Expense Heading
          <input
          onChange={e=>setTitle(e.target.value)}
          value={title}
            type='text'
            placeholder='...Title'
            className='w-full bg-blue-200 px-3 py-2 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
          />
        </label>
        <label className='mb-4'>
          Expense Amount
          <input
           onChange={e=>setAmount(e.target.value)}
           value={amount}
            type='number'
            placeholder='...Amount'
            className='w-full px-3 bg-blue-200 py-2 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
          />
        </label>
        <div className='mb-4'>
          <label className='mb-2'>
            Expense Category
          </label>
          <select 
          onChange={e=>setCategory(e.target.value)}
          value={category}
          className='block w-full bg-blue-200 px-3 py-2 rounded-md'>
            <option disabled selected value={''}>Select Category</option>
            <option value={'Food'}>Food</option>
            <option value={'Utilities'}>Utilities</option>
            <option value={'Entertainment'}>Entertainment</option>
            <option value={'Gadgets'}>Gadgets</option>
          </select>
        </div>
        <button className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' aria-label="Add Expense">
          Add Expense
        </button>
      </form>
    </div>
  </div>
  );
}

export default AddExpenseCard;