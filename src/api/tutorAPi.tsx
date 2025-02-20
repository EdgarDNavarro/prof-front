import api from "@/lib/axios";
import { okResponseSchema, TutorForm, User } from "@/types";
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
