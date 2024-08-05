import React, { useState, useEffect } from "react"

import ProductController from "../../controller/products";

export default function Homepage() {
  const [products, setProducts] = useState([]);

  // pagination 
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const records = products.slice(firstIndex, lastIndex);

  function prevPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1)
    }
  }

  function nextPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    ProductController.fetchAllProducts(setProducts);
  }, []);

  const [search, setSearch] = useState("")

    function searching(event) {
      event.preventDefault();  

      const result = products.filter(value => value.title.toLowerCase().includes(search.toLowerCase()));

      setProducts(result); 
      setCurrentPage(1);  
  }

  return (
    <div>

      <form class="max-w-md mx-auto mt-5" onSubmit={searching}>
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" value={search} onChange={(event)=>{return setSearch(event.target.value)}} id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." />
          <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
   
        </div>
      </form>

    
      <div className="container ml-20 mt-10" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "20px 20px" }}>

        {
          records.map((value) => (
            <div className="w-72 rounded overflow-hidden shadow-lg bg-white">
              <img className="w-full h-48 object-contain" src={value.thumbnail} alt={value.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{value.title}</div>
                <p className="text-gray-700 text-base tag">
                  ${value.price}
                </p>
              </div>
            </div>

          ))}
      </div>


      <div className="pagination">
        {currentPage === 1 ? <button disabled class="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded-full prev" onClick={() => { return prevPage() }}>Prev</button> : <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full prev" onClick={() => { return prevPage() }}>Prev</button>}

        {currentPage + 1 > Math.ceil(products.length / recordsPerPage) ? <button disabled class="bg-black text-white font-bold py-2 px-4 rounded-full next" onClick={() => { return nextPage() }}>Next</button> : <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full next" onClick={() => { return nextPage() }}>Next</button>}

      </div>
    </div>
  )
}