import { Permission } from "./permission.interface";

export type Role = {
    id: number;
    createdAt: Date | null;
    description: string;
    name: string;
    updatedAt: Date | null;
}

export interface IRoleDetails extends Role{
    permission: Permission
}

export interface ICreateUserToRole {
    userId: number
    userIdAdd: number;
    roleIdAdd: number;
}

export interface ICreatePermissionToRole {
    roleId: number,
    userId: number,
    permissionId: number
}

export interface IRemoveUserToRole {
    userId: number,
    userIdRm: number,
    roleId: number,
}

export interface IRemovePermissionToRole {
    userId: number,
    roleId: number,
    permissionId: number,
}