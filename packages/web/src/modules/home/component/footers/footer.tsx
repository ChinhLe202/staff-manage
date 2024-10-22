export const Footer = () => {
    return (
        <div className='footer'>
            <div className='flex justify-between items-center p-4 bg-white border border-black'>
                <div className='text-gray-600'>© {new Date().getFullYear()} - TapChiLapTrinh.</div>

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
            </div>
        </div>
    );
};
