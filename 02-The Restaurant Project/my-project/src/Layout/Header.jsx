

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center">
    <h1 className="text-white text-xl">CONTEXT CART</h1>
    <button 
      className="flex items-center text-white" 
    >
      
      <span className="ml-2 ">
      🛒 Your Cart 
      </span>
    </button>
</header>
  )
}

export default Header