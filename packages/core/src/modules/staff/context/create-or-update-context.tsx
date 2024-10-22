import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { StaffModel } from "../../../models/staff-model";
import { useStaffContext } from "./staff-context";

interface CreateOrUpdateContextType {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    confirmPassword: string;
    status: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  resetFormData: () => void;
  validateForm: () => { isValid: boolean; error?: string };
  handleSubmit: () => boolean;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  isSubmitDisabled: boolean;
  setInitialData: (initialData: StaffModel | null) => void; // Thêm hàm để xử lý initialData
}

const CreateOrUpdateContext = createContext<CreateOrUpdateContextType>({
  formData: {
    fullName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    status: "active",
  },
  setFormData: () => {},
  resetFormData: () => {},
  handleSubmit: () => false,
  errorMessage: "",
  setErrorMessage: () => {},
  validateForm: () => ({ isValid: true }),
  isSubmitDisabled: true,
  setInitialData: () => {},
});

interface IProps {
  children: ReactNode;
}

export const CreateOrUpdateProvider = ({ children }: IProps) => {
  const { itemUpdateStaff, addStaff, updateStaff } = useStaffContext();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    status: "active",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  // Hàm để cập nhật form khi có initialData
  const setInitialData = (initialData: StaffModel | null) => {
    if (initialData) {
      setFormData({
        ...initialData,
        password: "", // Không hiển thị mật khẩu
        confirmPassword: "",
      });
    } else {
      resetFormData();
    }
  };

  // Reset form về trạng thái mặc định
  const resetFormData = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      confirmPassword: "",
      status: "active",
    });
  };

  // Kiểm tra xem form đã thay đổi hay chưa để kích hoạt nút submit
  useEffect(() => {
    const isFormChanged =
      formData.fullName !== (itemUpdateStaff?.fullName || "") ||
      formData.email !== (itemUpdateStaff?.email || "") ||
      formData.phone !== (itemUpdateStaff?.phone || "") ||
      formData.username !== (itemUpdateStaff?.username || "") ||
      formData.status !== (itemUpdateStaff?.status || "active") ||
      (!itemUpdateStaff && (formData.password || formData.confirmPassword));

    setIsSubmitDisabled(!isFormChanged);
  }, [formData, itemUpdateStaff]);

  const validateForm = () => {
    let isValid = true;
    let error: string | undefined;

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.username
    ) {
      error = "Please fill in all required fields.";
      isValid = false;
    }

    if (!itemUpdateStaff && !formData.password) {
      error = "Password is required for new staff.";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      error = "Passwords do not match.";
      isValid = false;
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      error = "Please enter a valid email.";
      isValid = false;
    }

    const phoneRegex = /^\d{10}$/; // Assuming phone numbers are 10 digits
    if (!phoneRegex.test(formData.phone)) {
      error = "Please enter a valid phone number.";
      isValid = false;
    }

    if (error) {
      setErrorMessage(error);
    } else {
      setErrorMessage(""); // Clear error message if valid
    }

    return { isValid, error };
  };

  const handleSubmit = () => {
    const { isValid, error } = validateForm();
    if (!isValid) {
      console.error(error); // Handle error, e.g., show a toast notification
      return false;
    }

    const newStaff: StaffModel = {
      id: itemUpdateStaff ? itemUpdateStaff.id : Date.now(), // Generate new ID if adding
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      username: formData.username,
      password: itemUpdateStaff ? itemUpdateStaff.password : formData.password, // Keep existing password when editing
      status: formData.status,
      middleName: "chinh", // Add default value for unused fields
      role: "Nhân viên",
      manager: "SM Nghĩa Trần",
      avatar: "",
    };

    if (itemUpdateStaff) {
      updateStaff(newStaff.id, newStaff); // Update staff
    } else {
      addStaff(newStaff); // Add new staff
    }

    resetFormData(); // Clear form after submission
    return true; // Return true to indicate successful submission
  };

  return (
    <CreateOrUpdateContext.Provider
      value={{
        formData,
        setFormData,
        resetFormData,
        validateForm,
        handleSubmit,
        errorMessage,
        setErrorMessage,
        isSubmitDisabled,
        setInitialData, // Cung cấp hàm để xử lý initialData
      }}
    >
      {children}
    </CreateOrUpdateContext.Provider>
  );
};

export const useCreateOrUpdateContext = () => {
  return useContext(CreateOrUpdateContext);
};
