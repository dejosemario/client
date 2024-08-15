
import { backend_headers } from "./usersService";
import { handleHttpError } from "./usersService";


export  const getClientSecret = async (amount: number) => {
    const url = "/api/payment/create-client-secret";
    const payload = {
        amount,
    };
    const res = await fetch(url, {
        method: "POST",
        headers: backend_headers,
        body: JSON.stringify(payload),
    });
    
    await handleHttpError(res);

    return res.json().catch((e) => {
        console.error(e.message);
        return {};
    });
}
