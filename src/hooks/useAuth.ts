import { getUser } from "@/api/userAPI";
import { useQuery } from "@tanstack/react-query";

export const useAuth = () => {
    const { data, isError, isLoading, error } = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
        retry: false,
        refetchOnWindowFocus: false
    })

    return { data, isError, isLoading, error }
}