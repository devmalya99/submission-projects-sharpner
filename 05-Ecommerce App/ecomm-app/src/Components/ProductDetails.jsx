
import { useParams } from "react-router-dom"
import Data from "../Data/Data"

// import ProductContext from '../context/ProductContext'

const ProductDetails = () => {
    const params = useParams()

    const product = Data.find((item)=>item.id === Number(params.id))
  
//   const {quantity, quantityCount, productTitleRef, productPriceRef, productQuantityRef, addCart} = useContext(ProductContext)

  return (
    <div className="bg-gray-100 p-10">
    <h2 className="text-3xl mb-6 font-semibold text-gray-800">
        {product.title}
    </h2>

    <div className="flex justify-between mb-10">
        <div>
            <img src={product.imageUrl} alt={product.title} className="w-96 object-cover rounded-md shadow-md" />
            <button className="bg-blue-500 text-white w-full rounded-md py-2 mt-4 font-semibold">Add to Cart</button>
        </div>

        <div className="ml-10 bg-white p-8 rounded-md shadow-md w-80">
            <p className="text-lg font-semibold text-gray-800">${product.price}</p>
            <p className="mt-2 text-gray-600">Available Quantity: {product.quantity}</p>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-gray-800">
                Product Details
            </h3>

            {
                Object.entries(product.details).map(([key, value], index) => (
                    <p key={index} className="text-gray-600">
                        <strong className="text-gray-800">{key}</strong>: {value}
                    </p>
                ))
            }
        </div>
    </div>
</div>
  )
}

export default ProductDetails