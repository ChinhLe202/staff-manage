import { mdiAccountOutline, mdiDelete, mdiEmailOutline, mdiPencil, mdiPhoneInTalkOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Switch } from 'antd';
import { StaffModel } from 'core-models';
import { useStaffContext } from 'core-modules';

export const StaffItem = ({ staff, onEdit }: { staff: StaffModel; onEdit: () => void }) => {
    const { staffs, updateStaff, deleteStaff } = useStaffContext();

    const handleDeleteStaff = (e: React.MouseEvent<HTMLButtonElement>) => {
        /**
         * Gọi hàm updateStaff để cập nhật dữ liệu và tắt chế độ chỉnh sửa sau khi lưu
         * @param {Staff} updatedStaff Dữ liệu nhân viên đã được chỉnh sửa
         */
        const confirmDelete = window.confirm(`Bạn có chắc chắn muốn xóa nhân viên ${staff.fullName}?`);
        if (confirmDelete) {
            deleteStaff(staff.id);
        }
    };

    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };

    const getInitials = (name: string) => {
        return name ? name.charAt(0).toUpperCase() : '';
    };

    return (
        <div className='flex h-[56px] w-full group transition-all duration-200 justify-between items-center p-2 border-b hover:shadow-md'>
            <div className='flex w-1/3 items-center justify-center'>
                <div className='rounded-full w-[40px] h-[40px] flex items-center justify-center bg-white border border-gray-300 mr-2'>
                    <span className='text-black font-bold'>{getInitials(staff.fullName)}</span>
                </div>

                <div className='flex flex-col'>
                    <div className='font-medium text-black text-md'>
                        {staff.fullName} ({staff.middleName})
                    </div>
                    <div className='flex gap-2 mt-1 text-xs'>
                        <div className='flex items-center gap-1'>
                            <Icon path={mdiPhoneInTalkOutline} className='w-[12px] h-[12px]' />
                            <span>{staff.phone}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Icon path={mdiEmailOutline} className='w-[12px] h-[12px]' />
                            <span>{staff.email}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Icon path={mdiAccountOutline} className='w-[12px] h-[12px]' />
                            <span>{staff.role}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center w-1/3'>
                <span className='text-[#757575] text-xs mb-[2px]'>Người quản lý</span>
                <span className='font-medium text-black text-md'>{staff.manager}</span>
            </div>

            <div className='w-1/3 items-center justify-center flex'>
                <button
                    className='hidden border-[#ECEDEF] group-hover:flex border font-medium items-center px-[12px] py-[8px] rounded-[2px] mr-2 text-xs
          '
                    onClick={onEdit}
                >
                    <Icon path={mdiPencil} className='mr-2 w-[16px] h-[16px]' />
                    Cập nhật
                </button>
            </div>

            <div className='flex justify-end items-center w-1/3'>
                <div className='flex items-center gap-12'>
                    <div className='flex items-center justify-center w-[20px] h-[12px]'>
                        <Switch onChange={onChange} size='small' />
                    </div>
                    <button className='flex items-center justify-center w-[40px] h-[40px]' onClick={handleDeleteStaff}>
                        <Icon path={mdiDelete} className='w-[20px] text-[#AFAFAF] hover:text-red-500' />
                    </button>
                </div>
            </div>
        </div>
    );
};
