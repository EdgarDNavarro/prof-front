import { getUser } from "@/api/userAPI";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const navigate = useNavigate();

    const { data, isError, isLoading, error } = useQuery({
        queryKey: ['user'],
        queryFn: () => getUser(navigate),
        retry: false,
        refetchOnWindowFocus: false
    })

    return { data, isError, isLoading, error }
}