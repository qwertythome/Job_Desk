import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import Loader from './Loader';
import JobItem from './JobItem';
import { useEffect } from 'react';
import { useLanguageContext } from '../provider/Language';

const Job = () => {
    const { data, error, isLoading } = useSWR('https://667882120bd45250561ee7e5.mockapi.io/JobDesk', fetcher);
    const { jobitem, setJobitem } = useLanguageContext();

    useEffect(() => {
        if (data) {
            setJobitem(data);
        }
    }, [data, setJobitem]);

    if (error) return <main className='flex justify-center items-center h-screen'>Failed to load</main>;
    if (isLoading) return <Loader />;

    return (
        <main className='flex flex-col items-center py-4'>
            {jobitem && jobitem.map(el => (
                <JobItem key={el.id} job={el} />
            ))}
        </main>
    );
}

export default Job;
