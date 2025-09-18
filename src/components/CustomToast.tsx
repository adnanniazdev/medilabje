import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define types for the props
interface CustomToastProps {
    open: boolean;
    message: string;
    type: string;
    setOpen: React.Dispatch<React.SetStateAction<{ message: string; open: boolean; type: string }>>;
}

const CustomToast: React.FC<CustomToastProps> = ({ open, message, type, setOpen }) => {
    const onCloseToast = () => {
        setOpen({
            message: "",
            open: false,
            type: "error"
        });
    };

    const notify = () => {
        const toastOptions = {
            position: "bottom-right" as const, // Directly use POSITION values from toast
            onClose: onCloseToast,
        };

        if (type === "error") {
            toast.error(message, toastOptions);
        } else if (type === "success") {
            toast.success(message, toastOptions);
        } else {
            toast.info(message, toastOptions);
        }
    };

    useEffect(() => {
        if (open) {
            notify();
        }
    }, [open]);

    return <ToastContainer />;
};

export default CustomToast;
