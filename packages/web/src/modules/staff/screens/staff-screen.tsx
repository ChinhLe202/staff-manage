import { ListStaffProvider } from 'core-modules';
import { ListStaffContainer } from 'src/modules/staff/container/staffs/list-staff-container';

export const StaffScreen = () => {
    return (
        <ListStaffProvider>
            <ListStaffContainer />
        </ListStaffProvider>
    );
};
