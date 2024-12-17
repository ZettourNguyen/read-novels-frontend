import { RootState } from "@/store/store";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import actionNotification from "@/components/NotificationState/Toast";
import { IRoleDetails } from "@/types/role.interface";
import { roleApiRequest } from "@/api/role";

export const useRoles = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    const [roles, setRoles] = useState<IRoleDetails[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

        const fetchRoles = async () => {
            if (user?.id) {
                try {
                    const response = await roleApiRequest.getRoles(user.id)
                    setRoles(response.data);
                } catch (error: any) {
                    setError(error.message || 'Đã xảy ra lỗi khi lấy dữ liệu');
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
                setError('Người dùng không hợp lệ');
            }
        };
        useEffect(() => {

        fetchRoles();
    }, [user?.id]);

    return { roles, loading, error, refetch: fetchRoles };
};

export function getRoleName(roleId: number) {
    const [roleName, setRoleName] = useState<string>();

    useEffect(() => {
        const fetchRoles = async () => {
            const fetchRoleName = async () => {
                try {
                    const response = await roleApiRequest.getRoleName(roleId)
                    setRoleName(response.data);
                } catch (error: any) {
                    actionNotification(error.message || 'Đã xảy ra lỗi khi lấy dữ liệu', 'error');
                }
            }
            fetchRoleName();
        };
        fetchRoles();
    }, [roleId]);
    return {
        roleName
    }
}

export const useUserRole = (userId:number) => {

    const [userRoles, setUserRoles] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUserRoles = async () => {
        if (userId) {
            try {
                const response = await roleApiRequest.getUserRole(userId)
                setUserRoles(response.data);
            } catch (error: any) {
                setError(error.message || 'Đã xảy ra lỗi khi lấy dữ liệu');
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
            setError('Người dùng không hợp lệ');
        }
    };
    useEffect(() => {

        fetchUserRoles();
    }, [userId]);

    return { userRoles, loading, error, refetch: fetchUserRoles };
};
