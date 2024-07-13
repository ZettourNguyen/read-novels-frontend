import Banner from '@/components/Banner';
import { useParams } from 'react-router-dom'

import NoverDetailsCard from '@/components/Card/NovelDetail';
import NovelDetailsChapters from '@/components/Card/NovelDetailsChapters';
import NovelComments from '@/components/Card/NovelComments';
interface NovelProps {

}
function Novel() {
    const { storyName } = useParams();

    return (
        <div>
            <h1>{storyName?.replace(/-/g, ' ')}</h1>
            <Banner />
            <div className='md:container mt-6'>
            <NoverDetailsCard/>
            <NovelDetailsChapters/>
            <Banner />

            <NovelComments/>
            </div>
        </div>
    );
}

export default Novel;
