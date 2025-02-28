import api from "@/lib/axios";
import { isAxiosError } from "axios";

export const googleLogin = async () => {
    try {
        const url = "/auth/google";
        const { data } = await api.get(url);
        console.log({ data });
        if (data) {
            window.location.href = data.url;
        }

        throw new Error("Something went wrong");
    } catch (error) {
        console.log(error);

        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error("Something went wrong");
    }
};

export const getEvents = async () => {
    try {
        const url = "/calendar/events";
        const { data } = await api.get(url, {
            withCredentials: true
        });

        if (data) {
            return data;
        }

        throw new Error("Something went wrong");
    } catch (error) {
        console.log(error);

        if (
            isAxiosError(error) &&
            error.response &&
            error.response.status === 401
        ) {
            throw new Error("true");
        } else if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error("Something went wrong");
    }
};
