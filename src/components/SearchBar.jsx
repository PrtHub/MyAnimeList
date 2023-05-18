import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose} from 'react-icons/ai'

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchbar, setSearchbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="flex flex-col justify-center items-center relative">
            <section>
            {searchbar ? (
            <AiOutlineClose
              className="h-5 w-5 cursor-pointer "
              onClick={() => setSearchbar(false)}
            />
          ) : (
            <FiSearch
              className="h-5 w-5 cursor-pointer "
              onClick={() => setSearchbar(true)}
            />
          )}
          </section>

          {searchbar && (
            <input
              type="text"
              autoComplete="off"
              id="search-field"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[250px] absolute top-[45px] left-[-206px] border-none outline-none text-base text-white px-3 py-2 sidebar background z-10"
            />
          )}
        </div>
      </form>
    </>
  );
};

export default SearchBar;
