import { Globe2 } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { confirmAccount } from "@/api/userAPI";

const ConfirmAccount = () => {
    const navigate = useNavigate();
    const params = useParams();
    const email = params.email!;
    const [token, setToken] = useState("");

    const { mutate, isPending } = useMutation({
        mutationFn: confirmAccount,
        onError(error) {
            toast.error(error.message);
        },
        onSuccess(data) {
            toast.success(data);
            navigate("/login");
        }
    });

    const handleChange = (data: string) => setToken(data);
    const handleComplete = (data: string) => {
        if (isPending) return;
        mutate({ token: data, email });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Link to="/" className="flex items-center justify-center">
                    <Globe2 className="h-10 w-10 text-blue-600" />
                    <span className="ml-2 text-3xl font-bold text-gray-900">
                        LinguaLearn
                    </span>
                </Link>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Confirmar cuenta
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Ingresa el codigo que se ha mandado a tu correo electronico{" "}
                    {/* <Link
                        to="/register"
                        className="font-medium text-blue-600 hover:text-blue-500"
                    >
                        Regístrate
                    </Link> */}
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6">
                        <label className="font-normal text-2xl text-center block">
                            Código de 6 dígitos
                        </label>

                        <div className="flex justify-center gap-5">
                            <PinInput
                                value={token}
                                onChange={handleChange}
                                onComplete={handleComplete}
                            >
                                <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border placeholder-white " />
                                <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border placeholder-white " />
                                <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border placeholder-white " />
                                <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border placeholder-white " />
                                <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border placeholder-white " />
                                <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border placeholder-white " />
                            </PinInput>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConfirmAccount;
