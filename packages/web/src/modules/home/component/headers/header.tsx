import { FaSearch } from 'react-icons/fa';

export const Header = () => {
    return (
        <div className='header'>
            <div className='flex items-center border border-black bg-white'>
                <div className='h-24 flex items-center justify-center w-52 border border-black'>Logo</div>
                <div className='h-24 flex items-center justify-center flex-grow border border-black'>Banner</div>
            </div>

            <div className=' mt-4'>
                <div className='flex justify-between items-center p-4 bg-white border border-black'>
                    <div className='flex space-x-4'>
                        <a href='#' className='text-blue-600 hover:underline'>
                            Home
                        </a>
                        <a href='#' className='text-blue-600 hover:underline'>
                            Students
                        </a>
                        <a href='#' className='text-blue-600 hover:underline'>
                            Courses
                        </a>
                        <a href='#' className='text-blue-600 hover:underline'>
                            About Us
                        </a>
                        <a href='#' className='text-blue-600 hover:underline'>
                            Contact Us
                        </a>
                    </div>

                    <div>
                        <div className='flex items-center border border-black rounded-full p-2'>
                            <FaSearch className='text-gray-500 mr-2' />
                            <input
                                type='text'
                                placeholder='search'
                                className='flex-1 outline-none bg-transparent p-1 rounded-full'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
