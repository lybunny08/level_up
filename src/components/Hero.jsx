import '../App.css';

function Hero() {
    return (
        <div className='flex flex-col pt-[10vh] pb-[6vh] items-center text-center'>
            <h1 className='text-[#f7f7f7] font-bold mb-[5vh]'>
                Level Up Your Productivity
            </h1>
            <p className='text-[#cccccc] mb-[2vh]'>
                Unlock your potential by organizing your life. 
                Create tasks, reach goals, and Levelup your productivity with simple and powerful tools.
            </p>
            <button className='px-8 py-4 rounded-lg border border-blue-500 bg-blue-500 text-[17px] text-[#e7e7e7] text-sm hover:shadow-[4px_4px_0px_0px_#f7f7f7] transition duration-200'>
                Create Task
            </button>
        </div>
    );
}

export default Hero;
