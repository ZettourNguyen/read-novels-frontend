import { ICreateReport } from "@/types/report.interface";
import axiosInstance from ".";

export const reportApiRequest = {
    getReports : async () => {
        return await axiosInstance.get(`/report`);
    },
    postReport: async (data : ICreateReport) => {
         return await axiosInstance.post(`/report`, data);
    },
    patchReport: async (userId: number, reportId: number) =>{
        return await axiosInstance.patch(`/report`, {
            userId: userId, reportId 
       });
    }
}