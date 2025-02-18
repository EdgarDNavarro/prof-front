import { User } from "@/types";

export const isStudent = (user: User) => {
    return user.Student ? true : false
}