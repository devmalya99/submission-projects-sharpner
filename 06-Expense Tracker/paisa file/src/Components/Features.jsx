import React from 'react'

const Features = () => {
  return (
    <div className="p-8 max-w-7xl m-auto">
      <h1 className="text-4xl  text-blue-600 font-semibold mb-6 text-center p-4">WIMM Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Income & Expenses Tracking</h2>
          <p className="text-gray-600">
            Keep track of your money flow by logging all expenses and income. Categorize your spending for better budgeting and analysis.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Monthly Reports</h2>
          <p className="text-gray-600">
            Receive detailed analytics of your expenditures each month. Understand your spending patterns to control your finances better.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Transaction Categorization</h2>
          <p className="text-gray-600">
            Categorize transactions for better organization. Identify trends, often used categories, and much more for efficient budgeting.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Budget Management</h2>
          <p className="text-gray-600">
            Set monthly spending limits for different categories. Get alerted when you are close to reaching your limit.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Secure Data</h2>
          <p className="text-gray-600">
            With Expenseless, your financial data is safe and secure. We use top-notch security measures to protect your information.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Availability</h2>
          <p className="text-gray-600">
            Access your Expenseless account anytime, anywhere. Keep track of your finances directly from your smartphone or computer.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Features