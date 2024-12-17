import { IAddChapters } from "@/types/chapter.interface";
import { useCallback, useEffect, useState } from "react";
import { IArrChaptersDetails } from "@/types/novel.interface";
import { IChapterAndView } from "@/types/chapter.interface";
import { chapterApiRequest } from "@/api/chapter";

export const useAddChapters = (novelId: number) => {
    const [propsChapter, setPropsChapter] = useState<IAddChapters>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await chapterApiRequest.getPublishedChapters(novelId);
                setPropsChapter(response.data);
                console.log(response.data.nextIndex);
            } catch (error: any) {
                setError(error.message || "An error occurred");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [novelId]);

    return { propsChapter, loading, error };
};


export const useArrChaptersDetails = (data: IArrChaptersDetails) => {
    const [ArrChapters, setArrChapters] = useState<IChapterAndView[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const chapters = await chapterApiRequest.getChapters(data);
            setArrChapters(chapters.data);
        } catch (error: any) {
            setError(error.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    }, [data.novelId, data.publishedOnly]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { ArrChapters, loading, error, refetch: fetchData };
};
