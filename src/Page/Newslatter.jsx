import React from 'react'

const Newslatter = () => {
    return (
        <div className="bg-[#0cc0df]/10 py-16 px-6 md:px-20 text-center rounded-xl mt-16 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0cc0df] mb-4">
                Stay Updated with New Games 🎮
            </h2>
            <p className="text-[#0cc0df] mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest indie releases, updates, and exclusive offers straight to your inbox!
            </p>

            <form className="flex flex-col md:flex-row justify-center items-center gap-3 max-w-md mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full md:w-2/3 bg-gray-800 text-white placeholder-gray-400 focus:border-[#0cc0df] focus:outline-none"
                    required
                />
                <button
                    type="submit"
                    className="btn bg-[#0cc0df] border-none hover:bg-[#09b1cd] text-white font-semibold"
                >
                    Subscribe
                </button>
            </form>

            <p className="text-sm text-gray-400 mt-4">
                We respect your privacy. Unsubscribe anytime.
            </p>
        </div>
    )
}

export default Newslatter