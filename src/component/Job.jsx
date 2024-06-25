import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import Loader from './Loader';
import JobItem from './JobItem';

const Job = () => {
    const { data, error, isLoading } = useSWR('https://667882120bd45250561ee7e5.mockapi.io/JobDesk', fetcher);

    if (error) return <main className='flex justify-center items-center h-screen'>Failed to load</main>;
    if (isLoading) return <Loader />;

    return (
        <main className='flex flex-col items-center'>
            {data && data.map(el => (
                <JobItem key={el.id} job={el} />
            ))}
        </main>
    );
}

export default Job;
