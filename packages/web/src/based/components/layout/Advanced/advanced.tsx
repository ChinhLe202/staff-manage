import { useStaffContext } from 'core-modules';
import { Filter } from '../../common/filter';
import { Search } from '../../common/search';

import { mdiDiamondStone } from '@mdi/js';
import Icon from '@mdi/react';

export const Advanced = ({ setfilteredViewStaff }: any) => {
    const { staffs } = useStaffContext();

    return (
        <div>
            <div className='border-y p-2 flex justify-between items-center'>
                <Search
                    data={staffs}
                    placeholder='Tìm kiếm...'
                    searchField='fullName'
                    onResults={(results) => setfilteredViewStaff(results)}
                />
                <Filter />
            </div>

            <div className='flex gap-2 p-2 items-center text-xs'>
                <Icon path={mdiDiamondStone} size={1} className='text-gray-300' />{' '}
                <span className='text-[#000] font-[460]'>Trạng thái:</span>
                <div className='bg-gray-200 py-1 px-2 rounded-[24px]'>
                    <span>Hoạt động</span>
                </div>
                <div className='bg-blue-100 py-1 px-2 rounded-[24px]'>
                    <span className='text-blue-600 font-[550]'>Ngừng hoạt động</span>
                </div>
            </div>
        </div>
    );
};
