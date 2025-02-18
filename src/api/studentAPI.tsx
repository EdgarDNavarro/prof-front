import api from "@/lib/axios";
import { okResponseSchema, StudentForm, User } from "@/types";
import { isAxiosError } from "axios";

export const createStudent = async ({
    formData,
    user_id
}: {
    formData: StudentForm;
    user_id: User["id"];
}) => {
    try {
        const url = "/students";
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
