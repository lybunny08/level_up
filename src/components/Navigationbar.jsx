import '../App.css';

function Navigationbar() {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex flex-row h-full w-full justify-between items-center p-4'>
                <span className='text-[#f7f7f7] font-extrabold text-[4vh] '>Levelup</span>
                <button className='text-black shadow-md shadow-white font-thin py-2 px-4 rounded-lg'>
                    Download the app
                </button>
            </div>
            <hr className='opacity-40 border-[#4c4743] border-[1px] ' />
        </div>
    );
}

export default Navigationbar;