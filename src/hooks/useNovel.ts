import actionNotification from '@/components/NotificationState/Toast';
import { useEffect, useState } from 'react';
import { ICreateNovel, INovelSummary, IUpdateNovel, INovelDetailSummary, Novel, IPaginatedNovel } from '@/types/novel.interface';
import { IChapterCreate } from '@/types/chapter.interface';
import { IBanner, ILoaddingListProps } from '@/types/another.interface';
import novelApiRequest from '@/api/novel';

export const useNovel = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [novelId, setNovelId] = useState<number>(0);

    const createNovelAPI = async (novelData: ICreateNovel) => {
        try {
            setLoading(true); // Bắt đầu trạng thái loading
            setError(null);   // Reset lỗi trước đó

            // Gọi API tạo tiểu thuyết
            const response = await novelApiRequest.createNovel(novelData);
            setNovelId(response.data); 
            console.log('API response data:', response.data); 
            actionNotification('Truyện được tạo thành công!', 'success'); 
        } catch (error: any) {
            actionNotification(`${error.response.data.message}`, 'error');

            console.error('Error creating novel:', error.response.data);
        } finally {
            // Đảm bảo luôn dừng trạng thái loading dù có lỗi hay không
            setLoading(false);
        }
    };



    // Cập nhật tiểu thuyết
    const updateNovelAPI = async (novelData: IUpdateNovel) => {
        try {
            setLoading(true);
            await novelApiRequest.updateNovel(novelData)
            actionNotification(`Truyện được cập nhật thành công!`, `success`);
            setLoading(false);
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
            await novelApiRequest.createChapter(data)
            setLoading(false);
        } catch (error) {
            console.error('Error creating chapter:', error);
            setError('Đã xảy ra lỗi khi tạo chương');
            alert(error);
            setLoading(false);
            throw error;
        }
    };

    return { createNovelAPI, updateNovelAPI, createChapterAPI, loading, error, novelId };
};



export const useBanner = () => {
    const [novels, setNovels] = useState<IBanner[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchMyPublishedNovels = async () => {
        try {
            // get banner
            const response = await novelApiRequest.getBanner()
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
            const response = await novelApiRequest.getNovelsByPoster(posterId)
            setNovels(response.data);
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
            const response = await novelApiRequest.getRandomNovels()
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
    const [novelDetails, setNovelDetails] = useState<{ novel: INovelSummary, novelDetail: INovelDetailSummary }>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchMyPublishedNovels = async () => {
            try {
                const response = await novelApiRequest.getNovelDetails(novelId)
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
                const response = await novelApiRequest.getLastNovels()
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

export const useListNovels = ({ type, id, page, limit }: ILoaddingListProps) => {
    const [novelsList, setListNovel] = useState<IPaginatedNovel>();
    const [loadingList, setLoading] = useState(true);
    const [errorList, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUseLastNovesl = async () => {
            try {

                const response = await novelApiRequest.getNovelsList({ type, id, page, limit })
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
    }, [page]);

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
                const response = await novelApiRequest.searchNovels(keyword)
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
            const response = await novelApiRequest.getAllNovels()
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
                const response = await novelApiRequest.getMostFollowedNovels()
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