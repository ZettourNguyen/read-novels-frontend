import { useState, useEffect } from "react";
import { authorApiRequest } from "@/api/author";
import { Author, IAuthors } from "@/types/author.interface";

export const useCategoryAuthorInNovel = (novelId: number) => {
    const [authorInNovel, setAuthorInNovel] = useState<Author>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchAuthor = async () => {
        try {
            const response = await authorApiRequest.getAuthorInNovel(novelId);
            setAuthorInNovel(response.data);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAuthor();
    }, [novelId]);

    return { authorInNovel, loading, error, refetch: fetchAuthor };
};


export const useAuthors = () => {
    const [authors, setAuthors] = useState<IAuthors[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchAuthors = async () => {
        try {
            const response = await authorApiRequest.getAuthors()
            setAuthors(response.data);
            console.log(response.data)
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchAuthors();
    }, []);

    return { authors, loading, error, refetch: fetchAuthors }
}
