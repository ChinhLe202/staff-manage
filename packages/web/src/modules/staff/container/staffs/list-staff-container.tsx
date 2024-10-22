import { StaffModel } from 'core-models';
import { CreateOrUpdateProvider, useStaffContext } from 'core-modules';
import { useEffect, useState } from 'react';
import { ToolBar } from 'src/based/components/common/tool-bar';
import { Advanced } from 'src/based/components/layout/Advanced/advanced';
import { HeaderListStaff } from 'src/modules/staff/components/staffs/list-staff/header-list-staff';
import { ListStaff } from 'src/modules/staff/container/staffs/list-staff';
import { CreateOrUpdateStaffContainer } from '../staffs/create-or-update-container';

export const ListStaffContainer = () => {
    const [filteredViewStaff, setfilteredViewStaff] = useState<StaffModel[]>([]);
    const { staffs, addStaff, updateStaff, isCreateOrUpdate, onCreateOrUpdate, itemUpdateStaff, setitemUpdateStaff } =
        useStaffContext();

    useEffect(() => {
        setfilteredViewStaff(staffs);
    }, [staffs]);

    const handleCancelAdd = () => {
        onCreateOrUpdate(false);
        setitemUpdateStaff(null);
    };

    const handleCreateOrUpdateStaff = (staff: StaffModel) => {
        if (itemUpdateStaff) {
            updateStaff(itemUpdateStaff.id, staff);
            setitemUpdateStaff(null);
        } else {
            addStaff(staff);
        }
        onCreateOrUpdate(false);
    };

    const handleEditStaff = (staff: StaffModel) => {
        setitemUpdateStaff(staff);
        onCreateOrUpdate(true);
    };

    return (
        <div className='w-full h-full'>
            <HeaderListStaff />

            <CreateOrUpdateProvider>
                {isCreateOrUpdate && (
                    <CreateOrUpdateStaffContainer
                        onCancel={handleCancelAdd}
                        onSubmit={handleCreateOrUpdateStaff}
                        initialData={itemUpdateStaff}
                    />
                )}
            </CreateOrUpdateProvider>

            <Advanced setfilteredViewStaff={setfilteredViewStaff} />
            <ToolBar quantity={filteredViewStaff.length} title='Tài khoản nhân viên' />

            <ListStaff
                filteredViewStaff={filteredViewStaff}
                isCreateOrUpdate={isCreateOrUpdate}
                onEdit={handleEditStaff}
            />
        </div>
    );
};
