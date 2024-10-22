import { FaPhone } from 'react-icons/fa';
export const Header = () => {
    return (
        <div className='flex items-center bg-white p-4'>
            <div className='flex items-center justify-center w-80 m-2'>
                <span className='text-green-400 text-2xl font-bold'>ORES</span>
                <span className='text-orange-500 text-lg ml-2'>NỀN TẢNG BÁN HÀNG TOÀN DIỆN</span>
            </div>
            <div className='flex items-center justify-end flex-grow m-2'>
                <FaPhone className='text-gray-500 mr-2' />
                <span className='text-black-500'>Trợ giúp: </span>
                <span className='text-blue-500'>1900636018</span>
            </div>
        </div>
    );
};
