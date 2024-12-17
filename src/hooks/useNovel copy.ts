import axiosInstance from '@/api';
import actionNotification from '@/components/NotificationState/Toast';
import { useEffect, useState } from 'react';
import { ICreateNovel, INovelSummary, IUpdateNovel, INovelDetailSummary, Novel, IPaginatedNovel } from '@/types/novel.interface';
import { IChapterCreate } from '@/types/chapter.interface';
import { IBanner, ILoaddingListProps } from '@/types/another.interface';

export const useNovel = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Tạo tiểu thuyết
    const createNovelAPI = async (novelData: ICreateNovel) => {
        try {
            setLoading(true);
            setError(null);
            const response = await axiosInstance.post('/novel', novelData);
            console.log('Novel created successfully:', response.status);
            setLoading(false);
            return response.data;
        } catch (error) {
            console.error('Error creating novel:', error);
            setError('Đã xảy ra lỗi khi tạo tiểu thuyết');
            alert(error);
            setLoading(false);
            throw error;
        }
    };

    // Cập nhật tiểu thuyết
    const updateNovelAPI = async (novelData: IUpdateNovel) => {
        try {
            const { id, ...updateData } = novelData;
            setLoading(true);
            const response = await axiosInstance.put(`/novel/${novelData.id}`, updateData);
            console.log('Novel update successfully:', response.status);
            actionNotification(`Novel update successfully`, `success`);
            setLoading(false);
            return response.data;
        } catch (error) {
            console.error('Error updating novel:', error);
            actionNotification('Đã xảy ra lỗi khi cập nhật tiểu thuyết', 'error');
            setLoading(false);
            throw error;
        }
    };

    // Tạo chương mới
    const createChapterAPI = async (data: IChapterCreate) => {
        try {
            setLoading(true);
            setError(null);
            const response = await axiosInstance.post('/chapter', data);
            console.log('Chapter created successfully:', response.data);
            setLoading(false);
            return response.data;
        } catch (error) {
            console.error('Error creating chapter:', error);
            setError('Đã xảy ra lỗi khi tạo chương');
            alert(error);
            setLoading(false);
            throw error;
        }
    };

    return { createNovelAPI, updateNovelAPI, createChapterAPI, loading, error };
};



export const useBanner = () => {
    const [novels, setNovels] = useState<IBanner[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchMyPublishedNovels = async () => {
        try {
            const response = await axiosInstance.get(`/novel/banner/a`);
            setNovels(response.data);
        } catch (error: any) {
            setError(error.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMyPublishedNovels();
    }, []);

    // Thêm useEffect để theo dõi sự thay đổi của novels
    // useEffect(() => {
    //     console.log('Novels updated:', novels);
    // }, [novels]);

    return { novels, loading, error, refetch: fetchMyPublishedNovels };
};

export const useNovelsByPoster = (posterId: any) => {
    const [novels, setNovels] = useState<Novel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchMyPublishedNovels = async () => {
        if (!posterId) return;

        try {
            const response = await axiosInstance.get(`/novel/me/${posterId}`);
            setNovels(response.data);
            console.log(novels)
        } catch (error: any) {
            setError(error.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {

        fetchMyPublishedNovels();
    }, [posterId]);

    return { novels, loading, error, refetch: fetchMyPublishedNovels };
};

export const useRandomNovels = () => {
    const [randomNovels, setRandomNovels] = useState<INovelSummary[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const fetchMyPublishedNovels = async () => {
        try {
            const response = await axiosInstance.get(`/novel/random/6`);
            setRandomNovels(response.data);
        } catch (error: any) {
            setError(error.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchMyPublishedNovels();
    }, []);

    return { randomNovels, loading, error, refetch: fetchMyPublishedNovels };
};

export const useNovelDetails = (novelId: number) => {
    console.log(novelId)
    const [novelDetails, setNovelDetails] = useState<{novel: INovelSummary, novelDetail: INovelDetailSummary}>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchMyPublishedNovels = async () => {
            try {
                const response = await axiosInstance.get(`/novel/${novelId}`);
                setNovelDetails(response.data);
            } catch (error: any) {
                setError(error.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchMyPublishedNovels();
    }, [novelId]);

    return { novelDetails, loading, error };
};

export const useLastNovels = () => {
    const [novelsLast, setNovelInfor] = useState<INovelSummary[]>([]);
    const [loadingInfor, setLoading] = useState(true);
    const [errorInfor, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchUseLastNovesl = async () => {
            try {
                const response = await axiosInstance.get(`/novel/getlast`);
                setNovelInfor(response.data);
                console.log(novelsLast)
                setLoading(false)
            } catch (error: any) {
                setError(error.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchUseLastNovesl();
    }, []);

    return { novelsLast, loadingInfor, errorInfor };
};

export const useListNovels = ({ type, id }: ILoaddingListProps) => {
    const [novelsList, setListNovel] = useState<IPaginatedNovel[]>([]);
    const [loadingList, setLoading] = useState(true);
    const [errorList, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUseLastNovesl = async () => {
            try {
                const response = await axiosInstance.get(`/novel/${type}/${id}`);
                setListNovel(response.data);
                console.log(novelsList)
                setLoading(false)
            } catch (error: any) {
                setError(error.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchUseLastNovesl();
    }, []);

    return { novelsList, loadingList, errorList };
};
export const useSearchNovels = (keyword: string) => {
    const [novelsList, setListNovel] = useState<INovelSummary[]>([]);
    const [loadingList, setLoading] = useState(true);
    const [errorList, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSearchNovel = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get(`/novel/search`, {
                    params: { keyword },
                });
                setListNovel(response.data); 
                setLoading(false);
            } catch (error) {
                console.error('Error searching novels:', error);
                setError('Có lỗi xảy ra khi tìm kiếm tiểu thuyết.');
                setLoading(false);
            }
        };

        if (keyword.trim()) { 
            fetchSearchNovel();
        } else {
            setListNovel([]); 
        }
    }, [keyword]); 

    return { novelsList, loadingList, errorList };
};
export const useAllNovel = () => {
    const [novelsAll, setListNovel] = useState<Novel[]>([]);
    const [loadingAll, setLoading] = useState(true);
    const [errorAll, setError] = useState<string | null>(null);

    const fetchUseAllNovesl = async () => {
        try {
            const response = await axiosInstance.get(`/novel/`);
            setListNovel(response.data);
            console.log(novelsAll)
            setLoading(false)
        } catch (error: any) {
            setError(error.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchUseAllNovesl();
    }, []);

    return { novelsAll, loadingAll, errorAll, refetch: fetchUseAllNovesl };
};

export const useMostFollowNovels = () => {
    const [FollowNovels, setRandomNovels] = useState<INovelSummary[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchMyPublishedNovels = async () => {
            try {
                const response = await axiosInstance.get(`/novel/follow/6`);
                setRandomNovels(response.data);
            } catch (error: any) {
                setError(error.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchMyPublishedNovels();
    }, []);

    return { FollowNovels, loading, error };
};