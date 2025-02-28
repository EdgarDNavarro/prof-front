import api from "@/lib/axios";
import {
    okResponseSchema,
    Tutor,
    TutorDescriptionsForm,
    TutorForm,
    tutorSchema,
    User
} from "@/types";
import { isAxiosError } from "axios";

export const createTutor = async ({
    formData,
    user_id
}: {
    formData: TutorForm;
    user_id: User["id"];
}) => {
    try {
        const url = "/tutors";
        const { data } = await api.post(url, { ...formData, user_id });
        const response = okResponseSchema.safeParse(data);
        console.log({ response, data });

        if (response.success) {
            return response.data.data;
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

export const getTutorById = async (tutorId: Tutor["id"]) => {
    try {
        const url = `/tutors/${tutorId}`;
        const { data } = await api.get(url);
        const response = tutorSchema.safeParse(data.data);
        console.log({ response, data });

        if (response.success) {
            return response.data;
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

export const updateTutor = async (formData: Tutor) => {
    try {
        console.log({ ...formData });

        const url = "/tutors";
        const { data } = await api.put(url, formData);
        const response = okResponseSchema.safeParse(data);
        console.log({ response, data });

        if (response.success) {
            return response.data.data;
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

export const updateVisibility = async (tutorId: Tutor["id"]) => {
    try {
        const url = `/tutors/profile_visibility/${tutorId}`;
        const { data } = await api.put(url);
        const response = okResponseSchema.safeParse(data);
        console.log({ response, data });

        if (response.success) {
            return response.data.data;
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

export const updateClassPrice = async ({
    id,
    class_price
}: {
    id: Tutor["id"];
    class_price: Tutor["class_price"];
}) => {
    try {
        const url = `/tutors/class_price/${id}`;
        const { data } = await api.put(url, { class_price });
        const response = okResponseSchema.safeParse(data);
        console.log({ response, data });

        if (response.success) {
            return response.data.data;
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

export const updateDescriptions = async (
    description: TutorDescriptionsForm
) => {
    try {
        const url = `/profile/descriptions`;
        const { data } = await api.post(url, description);
        const response = okResponseSchema.safeParse(data);
        console.log({ response, data });

        if (response.success) {
            return response.data.data;
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
