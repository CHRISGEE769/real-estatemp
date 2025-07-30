import { FaSearch } from "react-icons/fa";
export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto p-3">
        <h1 className="font-bold text-3xl text-center p-4 flex flex-wrap">
          <span className="text bg-red-400"> GEECEE</span>
          <span className="text bg-red-300"> REAL ESTATE</span>
        </h1>

        <form className="bg-gray-100 w-full max-w-md p-2 rounded shadow-md flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded bg-transparent focus:outline-0"
          />

          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4 ">
          <li className="hidden sm:inline text-slate-700 hover:underline">
            Home
          </li>

          <li className="hidden sm:inline text-slate-700 hover:underline">
            About
          </li>

          <li className="text-slate-700 hover:underline">Sign in</li>
        </ul>
      </div>
    </header>
  );
}
