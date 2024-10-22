import { mdiApps, mdiBellOutline, mdiCartOutline, mdiWarehouse } from '@mdi/js'; // Thêm mdiApps
import Icon from '@mdi/react';
import logo from 'src/asset/img/logo-header.png';

export const Header = () => {
    return (
        <div className='flex bg-white h-[56px] w-full font-semibold'>
            <div className='flex justify-start'>
                <img src={logo} alt='Logo' className='h-full p-2 object-contain' />
            </div>
            <div className='flex items-center justify-end flex-grow p-2'>
                <div className='border border-gray-200 flex space-x-4 p-1'>
                    <div className='bg-gray-100 rounded-md w-10 h-10 flex items-center justify-center'>
                        <Icon path={mdiWarehouse} className='w-6 h-6 text-gray-500' />
                    </div>

                    <div className='flex-grow ml-4'>
                        <span className='block text-[16px]'>Kho hàng Trần Đại Nghĩa cơ sở 1</span>
                        <span className='block text-gray-600 text-xs'>
                            67A Trương Định, phường Trương Định, quận H...
                        </span>
                    </div>

                    <div className='flex items-center justify-center'>
                        <Icon path={mdiApps} className='h-6 w-6 text-gray-600' />
                    </div>

                    <button className='hover:bg-gray-300 rounded-md p-1'>
                        <Icon path={mdiCartOutline} className='h-5 w-5 text-gray-600' />
                    </button>

                    <button className='hover:bg-gray-300 rounded-md p-1'>
                        <Icon path={mdiBellOutline} className='h-5 w-5 text-gray-600' />
                    </button>

                    <div className='bg-purple-600 rounded-full h-10 w-10 flex items-center justify-center ml-4'>
                        <span className='text-white font-bold text-lg'>K</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
