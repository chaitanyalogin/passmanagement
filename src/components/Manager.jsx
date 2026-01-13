import React, { useEffect, useState } from "react";

const Manager = () => {
  const [form, setForm] = useState({
    site: "",
    username: "",
    password: "",
  });

  const [passwordArray, setPasswordArray] = useState([]);

  // Load data from localStorage on first render
  useEffect(() => {
    const storedPasswords = localStorage.getItem("password");
    if (storedPasswords) {
      setPasswordArray(JSON.parse(storedPasswords));
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // 🔴 very important

    // Basic validation
    if (!form.site || !form.username || !form.password) {
      alert("Please fill all fields");
      return;
    }

    const updatedPasswords = [...passwordArray, form];

    // Update state
    setPasswordArray(updatedPasswords);

    // Save to localStorage
    localStorage.setItem("password", JSON.stringify(updatedPasswords));

    // Clear form after submit
    setForm({ site: "", username: "", password: "" });
  };

  return (
    <div className="mx-auto max-w-4xl bg-slate-800 p-6">
      <div className="bg-slate-50 p-6 rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-2">
          <span className="text-green-700">/&lt;</span>
          Pass
          <span className="text-green-700"> OP/&gt;</span>
        </h1>

        <p className="text-green-900 text-lg text-center mb-4">
          Your own Password Manager
        </p>

        {/* 🔴 FORM STARTS HERE */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="site"
            value={form.site}
            onChange={handleChange}
            placeholder="Enter Website URL"
            className="rounded-full border-green-700 border px-4 py-2 w-full"
          />

          <div className="flex gap-4">
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Your Username"
              className="rounded-full border-green-700 border px-4 py-2 w-full"
            />

            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              className="rounded-full border-green-700 border px-4 py-2 w-full"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-blue-500 via-green-400 to-blue-400 rounded-full px-6 py-2"
            >
              Submit
            </button>
          </div>
        </form>
        {/* 🔴 FORM ENDS HERE */}
      </div>

      <div className="flex justify-center p-1">
        <h2 className="text-white" >Your Credentials</h2>
      </div>
      
      <div className=" rounded-md overflow-hidden ">
        <table className="table-auto  rounded-md w-full bg-green-50 ">
          <thead>
            <tr className="bg-green-100" >
              <th className="py-2" >Site</th>
              <th className="py-2">Username</th>
              <th className="py-2">Password</th>
            </tr>
          </thead>
          <tbody>
            {passwordArray.map((item)=> {
                return <tr>
                           
              <td className="text-center w-32">{item.site}</td>
              <td className="text-center w-32">{item.username}</td>
              <td className="text-center w-32">{item.password}</td>
            </tr>
              })}
             
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manager;
