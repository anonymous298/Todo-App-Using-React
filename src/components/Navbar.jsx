function Navbar() {
    return (
        <nav className=" flex justify-center items-center bg-blue-500">
            <div className=" w-[80%] flex justify-between items-center p-2">
                <h2 className=" text-3xl font-bold text-white">Taskify</h2>
                <ul className="flex gap-7">
                    <li className="hover:text-white transition cursor-pointer underline text-white">Home</li>
                    <li className="hover:text-white transition cursor-pointer hover:underline">Tasks</li>
                    <li className="hover:text-white transition cursor-pointer hover:underline">Login</li>
                </ul>
            </div>
        </nav>        
    )
}

export default Navbar