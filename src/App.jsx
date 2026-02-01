import React, { useState } from "react";

const App = () => {

  const [fullName, setfullName] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')


  const submitHandler = (e) => {
    e.preventDefault()
    console.log(fullName,email,password,confirmpassword)

    setfullName('')
    setemail('')
    setpassword('')
    setconfirmpassword('')
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-emerald-300 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-6">
          Create Account
        </h2>

        <form onSubmit={(e) => {
          submitHandler(e)
        }} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={fullName}
              onChange={(e) =>{
                setfullName(e.target.value)
              }}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
               value={email}
              onChange={(e) =>{
                setemail(e.target.value)
              }}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
               value={password}
              onChange={(e) =>{
                setpassword(e.target.value)
              }}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
               value={confirmpassword}
              onChange={(e) =>{
                setconfirmpassword(e.target.value)
              }}
            />
          </div>

          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg mt-4 transition duration-200 shadow-md">
            Submit
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-5">
          Already have an account?
          <span className="text-emerald-700 font-semibold cursor-pointer ml-1">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default App;
