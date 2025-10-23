import React from 'react'

const MyProfile = () => {
    return (
        <div className="min-h-[85vh] flex items-center justify-center bg-[#0a0f1c] px-4">
            <div className="bg-[#111827] p-10 rounded-2xl shadow-2xl text-center max-w-sm w-full border border-[#0cc0df]/30 hover:border-[#0cc0df]/60 transition-all duration-300">
                <div className="relative mx-auto mb-6">
                    <div className="w-28 h-28 mx-auto rounded-full border-4 border-[#0cc0df] overflow-hidden shadow-[0_0_20px_#0cc0df50]">
                        <img
                            src="https://i.ibb.co/6Nf3pP7/default-avatar.png"
                            alt="User Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-1">Abdur Rahman Mamun</h2>
                <p className="text-[#0cc0df] text-sm mb-6">mamun@example.com</p>

                <div className="border-t border-[#0cc0df]/20 my-6"></div>

                <button className="btn bg-[#0cc0df] hover:bg-[#09b1cd] border-none text-white font-semibold w-full">
                    Update Info
                </button>
            </div>
        </div>
    )
}

export default MyProfile