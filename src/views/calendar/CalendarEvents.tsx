import { useEffect, useState } from "react";
import {
    Calendar,
    Components,
    EventProps,
    momentLocalizer,
    View
} from "react-big-calendar";
import moment from "moment";
import {
    ChevronLeft,
    ChevronRight,
    Calendar as CalendarIcon
} from "lucide-react";
import clsx from "clsx";
import "react-big-calendar/lib/css/react-big-calendar.css";
import GoogleLogin from "@/core/GoogleLogin";
import { EventItem } from "@/types/calendar";
import { calendarColors } from "@/constDate";
import { useMutation } from "@tanstack/react-query";
import { getEvents } from "@/api/calendarAPI";

const localizer = momentLocalizer(moment);

const viewNames: Record<View, string> = {
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    work_week: "Semana laboral"
};

const CustomToolbar = ({ onNavigate, label, onView, view }: any) => (
    <div className="flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center gap-4">
            <button
                onClick={() => onNavigate("TODAY")}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
                Hoy
            </button>
            <div className="flex items-center gap-1">
                <button
                    onClick={() => onNavigate("PREV")}
                    className="p-1 text-gray-600 hover:bg-gray-100 rounded-full"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={() => onNavigate("NEXT")}
                    className="p-1 text-gray-600 hover:bg-gray-100 rounded-full"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
            <div className="flex gap-1 p-1 bg-gray-100 rounded-lg">
                {(["month", "week", "day", "agenda"] as View[]).map(
                    (viewType) => (
                        <button
                            key={viewType}
                            onClick={() => onView(viewType)}
                            className={clsx(
                                "px-3 py-1 text-sm font-medium rounded-md transition-colors",
                                view === viewType
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-600 hover:text-gray-900"
                            )}
                        >
                            {viewNames[viewType]}
                        </button>
                    )
                )}
            </div>
        </div>
        <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900">
            <CalendarIcon className="w-6 h-6 text-indigo-600" />
            {label}
        </h2>
    </div>
);

const EventComponent = ({ event }: EventProps<EventItem>) => (
    <div
        className={clsx(
            "px-1 pb-2 rounded overflow-hidden h-full",
            "hover:opacity-90 transition-opacity",
            "cursor-pointer"
        )}
        style={{
            backgroundColor: event.colorId
                ? calendarColors[event.colorId].background
                : "#4F46E5"
        }}
    >
        <div
            style={{
                color: event.colorId
                    ? calendarColors[event.colorId].foreground
                    : "#fff"
            }}
            className="font-medium text-white"
        >
            {event.title}
        </div>
        {event.summary && (
            <div
                style={{
                    color: event.colorId
                        ? calendarColors[event.colorId].foreground
                        : "#fff"
                }}
                className="text-xs text-white/80"
            >
                {event.description}
            </div>
        )}
    </div>
);

const CalendarEvents = () => {
    const [events, setEvents] = useState([]);
    const [loged, setLoged] = useState(true);

    const { mutate } = useMutation({
        mutationFn: getEvents,
        mutationKey: ["calendar-events"],
        onSuccess(data) {
            const formattedEvents = data.map((event: any) => ({
                ...event,
                title: event.summary,
                start: new Date(event.start.dateTime || event.start.date),
                end: new Date(event.end.dateTime || event.end.date)
            }));
            setEvents(formattedEvents);
        },
        onError(error) {
            if (error.message === "true") {
                setLoged(false);
            }
        }
    });

    useEffect(() => {
        mutate();
    }, []);

    const components: Components<EventItem> = {
        event: EventComponent,
        toolbar: CustomToolbar
    };

    return (
        <div className=" mx-auto container mt-10">
            <div className="h-screen p-4">
                {!loged && <GoogleLogin />}

                <div className=" rounded-xl shadow-xl overflow-hidden">
                    <Calendar
                        localizer={localizer}
                        events={events}
                        views={["month", "week", "day", "agenda"]}
                        startAccessor="start"
                        endAccessor="end"
                        components={components}
                        style={{ height: "80vh" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CalendarEvents;
