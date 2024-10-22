import { StaffModel } from 'core-models';
import { StaffItem } from 'src/modules/staff/components/staffs/list-staff/list-staff-item';

interface ListStaffProps {
    filteredViewStaff: StaffModel[];
    isCreateOrUpdate: boolean;
    onEdit: (staff: StaffModel) => void;
}

export const ListStaff = ({ filteredViewStaff, isCreateOrUpdate, onEdit }: ListStaffProps) => {
    return (
        <div
            className={`overflow-y-auto ${isCreateOrUpdate ? 'max-h-[calc(100vh-600px)]' : 'h-[calc(100vh-300px)]'} h-full w-full`}
        >
            {filteredViewStaff.length > 0 ? (
                filteredViewStaff.map((staff) => (
                    <StaffItem key={staff.id} staff={staff} onEdit={() => onEdit(staff)} />
                ))
            ) : (
                <span className='p-2 text-red-400'>Danh sách chưa có nhân viên nào.</span>
            )}
        </div>
    );
};
