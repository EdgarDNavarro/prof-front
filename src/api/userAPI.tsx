import api from "@/lib/axios";
import {
    AuthUser,
    errorResponseSchema,
    loginResponseSchema,
    okResponseSchema,
    User,
    UserLoginForm,
    userSchema
} from "@/types";
import { isAxiosError } from "axios";
import { NavigateFunction } from "react-router-dom";

export const getUser = async (navigate: NavigateFunction) => {
    try {
        const url = "/users";
        const { data } = await api(url);

        if (data.success) {
            const response = userSchema.safeParse(data.data);

            if (response.success) {
                return response.data;
            }
        }

        if (data.error) {
            const response = userSchema.safeParse(data.data);

            if (response.success) {
                if (
                    window.location.pathname !== "/create-account" &&
                    window.location.pathname !== "/account/student" &&
                    window.location.pathname !== "/account/student/" &&
                    window.location.pathname !== "/account/teacher" &&
                    window.location.pathname !== "/account/teacher/" &&
                    window.location.pathname !== "/create-account/"
                ) {
                    navigate("/create-account");
                }

                return response.data;
            }
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
};

export const registerUser = async (formData: AuthUser) => {
    try {
        const url = "/users";
        const { data } = await api.post(url, formData);
        const response = okResponseSchema.safeParse(data);

        if (response.success) {
            return response.data.data;
        }

        throw new Error("Something went wrong");
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const response = errorResponseSchema.safeParse(error.response.data);
            if (response.success) {
                throw new Error(response.data.data[0]?.msg);
            }

            throw new Error(error.response.data.error);
        }
        throw new Error("Something went wrong");
    }
};

export const login = async (formData: UserLoginForm) => {
    try {
        const url = "/users/login";

        const { data } = await api.post(url, formData);

        const response = loginResponseSchema.safeParse(data);

        if (response.success) {
            localStorage.setItem("PROF_AUTH_TOKEN", response.data.data.token);
            return "Success";
        }

        throw new Error("Something went wrong");
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const response = errorResponseSchema.safeParse(error.response.data);
            if (response.success) {
                throw new Error(response.data.data[0]?.msg);
            }

            if (error.status === 401 || error.status === 403) {
                throw new Error(error.response.data?.data?.msg);
            }

            throw new Error(error.response.data.error);
        }

        throw new Error("Something went wrong");
    }
};

export const confirmAccount = async (formData: {
    token: string;
    email: User["email"];
}) => {
    try {
        const url = "/users/confirm-account";

        const { data } = await api.post(url, formData);
        const response = okResponseSchema.safeParse(data);

        if (response.success) {
            return response.data.data;
        }

        throw new Error("Something went wrong");
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            if (error.response.status === 401 && error.response.data.error) {
                throw new Error("Codigo no valido");
            }

            const response = errorResponseSchema.safeParse(error.response.data);
            if (response.success) {
                throw new Error(response.data.data[0]?.msg);
            }

            throw new Error(error.response.data.error);
        }
        throw new Error("Something went wrong");
    }
};

export const updateLang = async (formData: { language: User["language"] }) => {
    try {
        const url = "/users/language";

        const { data } = await api.put(url, formData);
        const response = okResponseSchema.safeParse(data);

        if (response.success) {
            return response.data.data;
        }

        throw new Error("Something went wrong");
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            console.log(error.response);
            if (error.response.status === 401 && error.response.data.error) {
                throw new Error("Codigo no valido");
            }

            const response = errorResponseSchema.safeParse(error.response.data);
            if (response.success) {
                throw new Error(response.data.data[0]?.msg);
            }

            throw new Error(error.response.data.error);
        }
        throw new Error("Something went wrong");
    }
};
