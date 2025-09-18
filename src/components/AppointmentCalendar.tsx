'use client';
import { useEffect, useState } from 'react';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import dayjs, { Dayjs } from "dayjs";
import { styled } from "@mui/material/styles";
import { AlignLeftIcon, ArrowLeftIcon, Calendar, Clock, Globe } from "lucide-react";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";
import CustomToast from './CustomToast';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

const userTimeZone = dayjs.tz.guess(); // Detect user's timezone

const formatAppointmentLabel = (date: string, time: string) => {
    // Ensure the date format is correctly passed and combined with the time
    const startTime = dayjs(time, "h:mm A");
    const endTime = startTime.add(15, "minutes");
    return `${startTime.format("h:mm A")} - ${endTime.format("h:mm A")},  ${dayjs.utc(date).tz(userTimeZone).format("MMMM D, YYYY")}`;
};
const CustomPickersDay = styled(PickersDay, {
    shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected?: boolean }>(({ isSelected }) => {
    return (
        {
            ...(isSelected && {
                backgroundColor: "#1fb9b9 !important",
                // border: "1px solid red",
                color: "white",
                "&:hover": {
                    backgroundColor: "#1F97B9",
                },
            }),
        })
});
type AppointmentFormProps = {
    appointment: {
        date: string;
        time: string;
        timezoneTime: string;
        message: string;
        email: string;
        name: string;
    };
    setNext: React.Dispatch<React.SetStateAction<boolean>>
    setAppointment: React.Dispatch<React.SetStateAction<{
        date: string;
        time: string;
        timezoneTime: string;
        message: string;
        email: string;
        name: string;
    }>>;
    slotId?: string;
    getSlots: any
};

const AppointmentForm: React.FC<AppointmentFormProps> = ({ setAppointment, appointment, setNext, slotId, getSlots }) => {
    const [loading, setIsLoading] = useState(false)
    const [toast, setToast] = useState({
        message: "",
        open: false,
        type: "error"
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setAppointment({
            ...appointment,
            [name]: value,
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // prevent page reload
        setIsLoading(true);

        // Basic validation
        if (!appointment.name.trim()) {
            setToast({
                open: true,
                type: "error",
                message: "Please enter your name.",
            });
            setIsLoading(false);
            return;
        }

        if (!appointment.email.trim()) {
            setToast({
                open: true,
                type: "error",
                message: "Please enter your email.",
            });
            setIsLoading(false);
            return;
        }

        // Simple email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(appointment.email)) {
            setToast({
                open: true,
                type: "error",
                message: "Please enter a valid email address.",
            });
            setIsLoading(false);
            return;
        }
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}appointment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...appointment, slotId }),
            });

            const result = await response.json();
            if (response.ok) {
                setNext(false);
                getSlots()
                setAppointment({
                    date: "",
                    time: "",
                    message: "",
                    timezoneTime: "",
                    email: "",
                    name: "",
                });
                setToast({
                    open: true,
                    type: "success",
                    message: "Your appointment request has been submitted successfully!",
                });
            } else {
                setToast({
                    open: true,
                    type: "error",
                    message: result?.message || "Something went wrong. Please try again.",
                });
            }
        } catch (error) {
            console.error(error);
            setToast({
                open: true,
                type: "error",
                message: "Failed to submit. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="max-w-md mx-auto p-6 bg-white">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                User Details
            </h2>
            <p className="text-sm text-gray-500 text-center mb-6">
                Please provide your information below
            </p>

            {/* Name */}
            <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={appointment.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                />
            </div>

            {/* Email */}
            <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={appointment.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                />
            </div>

            {/* Message */}
            <div className="mb-5">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={appointment.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="Please share anything that will help prepare for our meeting..."
                />
            </div>

            {/* Submit Button */}
            <div className="mb-4">
                <button
                    type="button"
                    disabled={loading}
                    onClick={handleSubmit}
                    className="w-full flex items-center justify-center gap-2 p-3 bg-primary text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                    {loading ? (
                        <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                        </svg>
                    ) : (
                        "Submit"
                    )}
                </button>
            </div>

            {/* Toast */}
            <CustomToast
                open={toast.open}
                message={toast.message}
                type={toast.type}
                setOpen={setToast}
            />
        </div>

    );
};


const AppointmentCalendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
    const [slotId, setSlotId] = useState<string>()
    const [times, setTimes] = useState<{
        time: string,
        available?: boolean
    }[]>([])
    const [data, setData] = useState<any[]>([])
    const [slots, setSlots] = useState<string[]>([])
    const [next, setNext] = useState<boolean>(false)
    const [day, setDay] = useState<string>("")
    const [utcTime, setUtcTime] = useState<{ label: string, value: string, available: boolean }[]>()
    const [appointment, setAppointment] = useState<{
        name: string,
        date: string,
        time: string,
        timezoneTime: string,
        message: string,
        email: string,
    }>({
        name: "",
        date: "",
        time: "",
        timezoneTime: "",
        message: "",
        email: ""
    })
    const getSlots = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}slot`)  // Replace with your API URL
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();  // Parse JSON response
            })
            .then(data => {
                // Convert slots to Day.js objects
                const mappedDates = data[0]?.slots.map((slot: any) =>
                    slot.date
                );
                console.log(data)
                setSlotId(data[0]?.PK)
                setData(data[0]?.slots)
                setSlots(mappedDates);
                // setSlots(data[0]?.slots)
            })  // Handle the data
            .catch(error => console.error('Error fetching data:', error));
    }
    useEffect(() => {
        getSlots()
    }, [])
    const shouldDisableDate = (date: Dayjs) => {
        const formattedDate = date.format("ddd MMM DD YYYY");
        const notInSlots = !slots?.includes(formattedDate);
        const isPastDate = date.isBefore(dayjs(), "day");
        return notInSlots || isPastDate;
    };
    const dateSelectionHandler = (e: any) => {
        const time = data.find((item: any) => item.date === dayjs(e).format("ddd MMM DD YYYY"))?.times || [];
        setTimes(time)
        const formattedDay = dayjs(e).format("ddd MMM DD YYYY");
        const dayName = dayjs(e).format("dddd");
        setDay(dayName)
        setAppointment({
            ...appointment,
            date: formattedDay
        })
    }
    const setTimeHandler = (time: any) => {
        setAppointment({
            ...appointment,
            time: time.value,
            timezoneTime: time.label
        })
    }
    useEffect(() => {
        if (appointment.date) {
            const appointmentUTC = dayjs.utc(appointment.date).format("YYYY-MM-DD"); // Ensure UTC date
            const convertedTimes = times.map(t => {
                const parsedTime = dayjs
                    .tz(`${appointmentUTC} ${t.time}`, "YYYY-MM-DD h:mm A", "Europe/London") // Use UK timezone explicitly
                    .tz(userTimeZone) // Convert to user's local timezone
                    .format("h:mm A"); // Format properly
                return { label: parsedTime, value: t.time, available: t?.available || false };
            });

            setUtcTime(convertedTimes); // Now it should be in the user's local time
        }
    }, [appointment.date]);
    return (
        <div className="bg-white rounded-lg w-96">
            <div className='text-center p-4'>
                {appointment?.date && <div className='text-left'><ArrowLeftIcon size={22} className='-mb-6' onClick={() => {
                    if (appointment.time && next) {
                        setNext(false)
                        setAppointment({
                            date: appointment.date,
                            time: appointment.time,
                            message: "",
                            timezoneTime: appointment.timezoneTime,
                            email: "",
                            name: ""

                        })
                    } else {
                        setNext(false)
                        setAppointment({
                            date: "",
                            time: "",
                            message: "",
                            timezoneTime: "",
                            email: "",
                            name: ""

                        })
                    }
                }} /> </div>}
                {(next && utcTime?.length) ?
                    <><h2>15 Minute Meeting</h2>
                        <div className='mt-2'>
                            <p className='flex text-sm mb-2'><Calendar size={18} className='mr-2 text-gray-500' />{formatAppointmentLabel(appointment.date, appointment.timezoneTime)}</p>
                            <p className='flex text-sm'><Globe size={18} className='mr-2  text-gray-500' />{userTimeZone}</p>
                        </div>
                    </> :
                    <> <h2 className='font-bold text-secondary-light'>{appointment.date ? day : "Information Medilab"}</h2>
                        {appointment.date && <>    {appointment.date && (
                            <h2 className="font-bold">
                                {dayjs.utc(appointment.date).tz(userTimeZone).format("MMMM D, YYYY")}
                            </h2>
                        )}</>}
                        {appointment.date ? "" : <p className='text-2xl flex justify-center text-center font-bold mt-2'>15 Minute Meeting</p>}
                        {appointment.date ? "" : <p className='text-sm flex justify-start text-left  mt-2'><Clock size={22} style={{ marginRight: "0.5rem", color: "gray" }} />15 min</p>}
                    </>}

            </div>
            <hr />
            {next ? <AppointmentForm setNext={setNext} setAppointment={setAppointment} appointment={appointment} slotId={slotId} getSlots={getSlots} /> : appointment.date ? <div className='p-2 text-center'>
                <h2 className='font-bold'>Select a Time</h2>
                <p className='text-sm flex justify-center text-center mb-1'><Clock size={20} style={{ marginRight: "0.5rem", color: "gray" }} />Duration: 15 Minutes</p>
                <div className="max-h-[300px] overflow-y-auto">
                    {utcTime?.length && utcTime.map((time) => {
                        const isSelected = appointment.time === time.value;
                        const isAvailable = time.available !== false; // default true if missing
                        return (
                            <div className="flex justify-center" key={time.label}>
                                <div
                                    className={`m-1 p-2 rounded-md text-center w-52 font-semibold text-sm transition-all duration-200
                                     ${isAvailable
                                            ? isSelected
                                                ? "bg-white text-primary border border-primary cursor-pointer"
                                                : "bg-white text-primary border-transparent hover:border-primary hover:bg-primary border text-gray-700 cursor-pointer"
                                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                        }`}
                                    onClick={() => isAvailable && setTimeHandler(time)}
                                >
                                    <label>{time.label}</label>
                                </div>
                            </div>
                        );
                    })}
                </div>


                {appointment?.time && <button className='p-2 bg-primary text-white rounded-md w-52 mb-2 mt-2' onClick={() => {
                    setNext(true)
                }}>Next</button>}
            </div> : <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    value={selectedDate}
                    shouldDisableDate={shouldDisableDate}
                    onChange={dateSelectionHandler}
                    slots={{
                        day: (props) => {
                            const formattedDay = dayjs(props.day).format("ddd MMM DD YYYY");
                            //console.log(formattedDay)
                            return (
                                <CustomPickersDay
                                    {...props}
                                    isSelected={slots?.includes(formattedDay)}
                                />
                            );
                        },
                    }}
                />
            </LocalizationProvider>}
        </div>
    );
};

export default AppointmentCalendar;
