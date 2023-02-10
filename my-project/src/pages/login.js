
const login = () => {
  return (
    <>
    <div className = "flex flex-col justify-center items-center h-screen bg-green-300">
        
    <form className = "flex flex-col w-1/4 p-8 items-center rounded-2xl justify-center drop-shadow-2xl bg-white">
      <h1 className="text-6xl bold mb-8 "> Login </h1>
      <input className = "p-2 m-3 w-full h-1/3 bg-slate-200 rounded-xl " required type="text" placeholder="Username" name = "username" ></input>
      <input className = "p-2 m-3 w-full h-1/3 bg-slate-200 rounded-xl " required type = "password" placeholder="Password" name = "password"></input>
      <button className=" bg-emerald-600 text-center text-white p-2 mt-4 rounded-full h-1/3  w-full active:bg-green-400" type = "Submit">Log In</button>
    </form>
    <div className="flex flex-col w-1/4 p-6 mt-3 items-center rounded-2xl justify-center drop-shadow-2xl bg-white">
        <h2>Not a user? <a href="/signup" className="text-blue">Sign Up</a></h2>
    </div>
    </div>
    </>

  )
}

export default login
