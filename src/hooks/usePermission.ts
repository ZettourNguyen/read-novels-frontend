import axiosInstance from "@/api";
import { permissionApiRequest } from "@/api/permission";
import { RootState } from "@/store/store";
import { Permission } from "@/types/permission.interface";
import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";



export const useUserPermission = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const [permissions, setPermissions] = useState<Permission[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchPermissions = async () => {
        if (user?.id) {
          try {
            const response = await permissionApiRequest.getUserPermisison(user.id);
            //  response.data là một mảng các mảng quyền
            const allPermissions: Permission[] = response.data.flat();// Kết hợp tất cả các mảng thành một mảng duy nhất
            // lọc bỏ các giá trị trùng
            const uniquePermissions: Permission[] = Array.from(
                new Map(allPermissions.map(permission => [permission.id, permission])).values()
              );
            setPermissions(uniquePermissions);
            
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
  
      fetchPermissions();
    }, [user?.id]);
    return { permissions, loading, error };
  };

export const useRolePermission = (roleId: number | undefined) => {
    const user = useSelector((state: RootState) => state.auth.user);

    const [permissions, setPermissions] = useState<Permission[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [shouldRefetch, setShouldRefetch] = useState(false);

    const fetchPermissions = useCallback(async () => {
        if (user?.id && roleId) {
            try {
                const response = await permissionApiRequest.getRolePermisison(user.id, roleId)
                setPermissions(response.data);
            } catch (error: any) {
                setError(error.message || 'Đã xảy ra lỗi khi lấy dữ liệu');
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
            setError('Người dùng không hợp lệ hoặc roleId không hợp lệ');
        }
    }, [user?.id, roleId, shouldRefetch]);

    useEffect(() => {
        fetchPermissions();
    }, [fetchPermissions]);

    return { permissions, loading, error, refetch: () => setShouldRefetch(prev => !prev) };
};
export const useListPermission = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const [permissionsList, setPermissionsList] = useState<Permission[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPermissions = async () => {
            if (user?.id) {
                try {
                    const response = await permissionApiRequest.getListPermisison(user.id)
                    setPermissionsList(response.data); 
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

        fetchPermissions();
    }, [user?.id]);

    return { permissionsList, loading, error };
};