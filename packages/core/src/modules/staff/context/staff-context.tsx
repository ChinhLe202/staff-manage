import { ReactNode, createContext, useContext, useState } from "react";
import { StaffModel } from "../../../models/staff-model";

interface StaffContextType {
  staffs: StaffModel[];
  itemUpdateStaff: StaffModel | null;
  setitemUpdateStaff: (staff: StaffModel | null) => void;
  addStaff: (staff: StaffModel) => void;
  updateStaff: (id: number, staff: StaffModel) => void;
  deleteStaff: (id: number) => void;
  searchStaff: (q: string) => StaffModel[];
  filterStaff: (filterValue: string) => StaffModel[];
  onCreateOrUpdate: (value: boolean) => void;
  isCreateOrUpdate: boolean;
}

const StaffContext = createContext<StaffContextType>({
  staffs: [],
  itemUpdateStaff: null,
  setitemUpdateStaff: () => {},
  addStaff: () => {},
  updateStaff: () => {},
  deleteStaff: () => {},
  onCreateOrUpdate: () => {},
  isCreateOrUpdate: false,
  searchStaff: () => [],
  filterStaff: () => [],
});

interface IProps {
  children: ReactNode;
}

export const ListStaffProvider = ({ children }: IProps) => {
  const [isCreateOrUpdate, setIsCreateOrUpdate] = useState<boolean>(false);
  const [staffs, setStaffs] = useState<StaffModel[]>([]);
  // todo: item update
  const [itemUpdateStaff, setitemUpdateStaff] = useState<StaffModel | null>(
    null
  );
  const addStaff = (staff: StaffModel) => {
    setStaffs((prevStaffs) => [...prevStaffs, staff]);
  };

  const updateStaff = (id: number, updatedStaff: StaffModel) => {
    setStaffs((prevStaffs) =>
      prevStaffs.map((staff) => (staff.id === id ? updatedStaff : staff))
    );
  };

  const deleteStaff = (id: number) => {
    setStaffs((prevStaffs) => prevStaffs.filter((staff) => staff.id !== id));
  };

  const searchStaff = (q: string) => {
    return staffs.filter((staff) =>
      staff.fullName.toLowerCase().includes(q.toLowerCase())
    );
  };

  const filterStaff = (filterValue: string) => {
    return staffs.filter((staff) =>
      staff.fullName.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const onCreateOrUpdate = (value: boolean) => {
    setIsCreateOrUpdate(value);
  };

  return (
    <StaffContext.Provider
      value={{
        staffs,
        itemUpdateStaff,
        setitemUpdateStaff,
        addStaff,
        updateStaff,
        deleteStaff,
        searchStaff,
        filterStaff,
        isCreateOrUpdate,
        onCreateOrUpdate,
      }}
    >
      {children}
    </StaffContext.Provider>
  );
};

export const useStaffContext = (): StaffContextType => {
  return useContext(StaffContext);
};
