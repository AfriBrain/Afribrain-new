import { handleError } from "./errorHandling";

export const fetchUserInfo = async () => {
    try {
        const response = await fetch(process.env.USERINFO_URI as string);
        const userInfo = await response.json()
        const { success, data } = userInfo;
        if (success) {
            return data
        } else { return }
    } catch (error: any) {
        return handleError(error);
    }
};

