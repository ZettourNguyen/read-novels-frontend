import axiosInstance from '@/api';
import { NovelFeedCardProps } from '@/components/Card/FeedCard';
import actionNotification from '@/components/NotificationState/Toast';
import { LoaddingListProps, NovelCardFull } from '@/Page/ListNovels';

import { INovelI, INovelInputI } from '@/Page/Novel/Novel.interface';
import { useEffect, useState } from 'react';
import { IAuthorI } from './useAuthor';
import Banner from '@/components/Banner';

export interface IChapterInputI {
    title: string,
    content: string,
    novelId: number,
    index: number,
    isPublish: boolean;
    chapterLength: number;
}
export interface ICardNovelsI {
    id: number,
    title: string,
    image: string,
    banner: string,
    state: string,
    description: string,
    categoryId: number,
    categoryName: string
    posterId: string,
    posterName: string,
    posterAvatar: string,
    author: IAuthorI[]
}

export interface ITagI {
    id: number;
    name: string;
}

export interface INovelDetailsI {
    id: number;
    title: string;
    image: string;
    state: string;
    description: string;
    categoryId: number;
    categoryName: string;
    author: IAuthorI[]
    posterId: number;
    posterName: string;
    posterAvatar: string;
    createdAt: string;
    updatedAt: string;
    chapter0: number;
    countChaptersPublishedInLast7Days: number;
    views: number;
    numberOfNominations: number;
    numberSavedBookmark: number;
    tags: ITagI[];
}
export interface UpdateNovelDTO {
    id: number
    title?: string;
    image?: string;
    banner?: string;
    state?: string;
    description?: string;
    posterId?: number;
    tagsId?: number[]
    categoryId?: number
}

export const useNovel = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const createNovelAPI = async (novelData: INovelInputI) => {
        try {
            setLoading(true);
            setError(null);
            const response = await axiosInstance.post('/novel', novelData);
            console.log('Novel created successfully:', response.status);
            setLoading(false);
            return response.data
        } catch (error) {
            console.error('Error creating novel:', error);
            setError('Đã xảy ra lỗi khi tạo tiểu thuyết');
            alert(error)
            setLoading(false);
            throw error;
        }
    };

    const updateNovelAPI = async (novelData: UpdateNovelDTO) => {
        try {
            const { id, ...updateData } = novelData;
            setLoading(true);
            const response = await axiosInstance.put(`/novel/${novelData.id}`, updateData);
            console.log('Novel update successfully:', response.status);
            actionNotification(`Novel update successfully`, `success`)
            setLoading(false);
            return response.data
        } catch (error) {
            console.error('Error creating novel:', error);
            actionNotification('Đã xảy ra lỗi khi cập nhật tiểu thuyết', 'error');
            setLoading(false);
            throw error;
        }
    };

    const createChapterAPI = async (data: IChapterInputI) => {
        try {
            setLoading(true);
            setError(null);
            const response = await axiosInstance.post('/chapter', data);
            console.log('Novel created successfully:', response.data);
            setLoading(false);
            return response.data
        } catch (error) {
            console.error('Error creating novel:', error);
            setError('Đã xảy ra lỗi khi tạo tiểu thuyết');
            alert(error)
            setLoading(false);
            throw error;
        }
    }
    return { createNovelAPI, updateNovelAPI, createChapterAPI, loading, error };
};

export interface NovelPublishedProps {
    id: number,
    title: string,
    state: string,
    createdAt: string,
    updatedAt: string,
    chapters: number,
    posterId: number,
    posterName: string
}
export const useBanner = () => {
    const [novels, setNovels] = useState<Banner[]>([]);
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
    useEffect(() => {
        console.log('Novels updated:', novels);
    }, [novels]);

    return { novels, loading, error, refetch: fetchMyPublishedNovels };
};

export const useNovelsByPoster = (posterId: any) => {
    const [novels, setNovels] = useState<NovelPublishedProps[]>([]);
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
    const [randomNovels, setRandomNovels] = useState<ICardNovelsI[]>([]);
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
    const [novelDetails, setNovelDetails] = useState<INovelDetailsI>();
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


export const useNovelInfor = (novelId: number) => {
    const [novelInfor, setNovelInfor] = useState<INovelI>();
    const [loadingInfor, setLoading] = useState(true);
    const [errorInfor, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchMyPublishedNovels = async () => {
            try {
                const response = await axiosInstance.get(`/novel/id/${novelId}`);
                setNovelInfor(response.data);
                console.log(novelInfor)
                setLoading(false)
            } catch (error: any) {
                setError(error.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchMyPublishedNovels();
    }, []);

    return { novelInfor, loadingInfor, errorInfor };
};

export const useLastNovels = () => {
    const [novelsLast, setNovelInfor] = useState<NovelFeedCardProps[]>([]);
    const [loadingInfor, setLoading] = useState(true);
    const [errorInfor, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchUseLastNovesl = async () => {
            try {
                const response = await axiosInstance.get(`/novel/getLast`);
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

export const useListNovels = ({ type, id }: LoaddingListProps) => {
    const [novelsList, setListNovel] = useState<NovelCardFull[]>([]);
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
    const [novelsList, setListNovel] = useState<NovelCardFull[]>([]);
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
    const [novelsAll, setListNovel] = useState<NovelPublishedProps[]>([]);
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
    const [FollowNovels, setRandomNovels] = useState<ICardNovelsI[]>([]);
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