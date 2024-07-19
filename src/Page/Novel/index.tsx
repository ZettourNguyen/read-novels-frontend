import Banner from '@/components/Banner';
import { useParams } from 'react-router-dom'

import NoverDetailsCard from '@/components/Card/NovelDetail';
import NovelDetailsChapters from '@/components/Card/NovelDetailsChapters';
import NovelComments from '@/components/Card/NovelComments';
import { useEffect } from 'react';

function Novel() {
    const { novelId } = useParams<{ novelId: string }>();
    const novelIdNumber = Number(novelId);
    if (isNaN(novelIdNumber)) {
        return <div>Error: Invalid novel ID</div>;
    }


    useEffect(() => {
        // Cuộn lên đầu trang mỗi khi component được mount
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Banner />
            <div className='md:container mt-6'>
                <div className='mt-3'>
                    <NoverDetailsCard novelId={+novelIdNumber} />
                </div>
                <div className='mb-4'>
                    <NovelDetailsChapters novelId={+novelIdNumber} />
                </div>
                <Banner />
                <NovelComments />
            </div>
        </div>
    );
}

export default Novel;
