import axiosInstance from ".";

export const permissionApiRequest = {
    getUserPermisison: async (userId: number) => {
        return await axiosInstance.get(`/role/permissions/${userId}`);
    },
    getRolePermisison: async (userId: number,roleId: number) => {
        return await axiosInstance.get(`/role/permission/${userId}`, {
            params: { roleId }
        });;
    },
    getListPermisison: async (userId: number) => {
        return await axiosInstance.get(`/role/permission-list/${userId}`);
    },
}