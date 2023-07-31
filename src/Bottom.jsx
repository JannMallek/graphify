import React from 'react'

export default function Bottom() {
  return (
    <nav className='bg-slate-900 w-full text-white flex justify-around  absolute'>
      <div>
        <form action="https://api.web3forms.com/submit" method="POST" id="form">
          <input type="hidden" name="access_key" value="76aab1e9-62d5-448a-883e-536b95091da0" />
          <input type="hidden" name="subject" value="New Sub" />
          <input type="hidden" name="redirect" value="https://graphify.com/thanks.html" />
          <input type="checkbox" name="botcheck" id="" className='hidden' />
          <div className="mb-6 mx-4">
            <label htmlFor="email" className="block mb-2 pt-8 text-sm text-gray-600 dark:text-gray-400">Newsletter</label>
            <input type="email" name="email" id="email" placeholder="you@company.com" required className="mr-4 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
            <button type="submit" className=" px-3 py-2  mt-4 text-white inline rounded-md btn-bg">
              Subscribe
            </button>
          </div>

          <p className="text-base text-center text-gray-400" id="result"></p>
        </form>
      </div>
      <div className='flex items-center mr-4'>
        <div>
        <a href="#" className="fa fa-instagram mr-4"></a>
        <a href="#" className="fa fa-twitter"></a>
        </div>
      </div>
        <h2 className='pl-8 text-sm  self-end '>made with ❤️ in Bochum, Germany</h2>

    </nav>
  )
}
