import useSWR from 'swr';

const fetcher = url => fetch(url).then(r => r.json());

const Job = () => {
    const { data, error } = useSWR('https://667882120bd45250561ee7e5.mockapi.io/JobDesk', fetcher);

    if (error) return <div className='flex justify-center items-center h-screen'>Failed to load</div>;
    if (!data) return <div className='flex justify-center items-center h-screen'>Loading...</div>;

    return (
        <main className='flex flex-col items-center'>  
            {data && data.map(el => (                
                <div key={el.id} className='bg-white flex rounded-xl w-4/6 h-28 justify-between p-8 items-center mt-8'> 
                    <div className='flex flex-row items-center w-4/5'>
                        <div><img src={`${el.logo}`} alt="" /></div>
                        <div className='flex flex-col ml-4'>
                            <div className='flex flex-row items-center gap-4'>
                                <span className='text-[#35bfbc]'>{el.company}</span>  
                                {el.new && <div className="h-6 bg-[#71bfbf] rounded-2xl p-2 flex items-center">New</div>}
                                {el.featured && <div className="h-6 bg-[#4aaaaa] rounded-2xl p-2 flex items-center">Featured</div>}   
                            </div>
                            <div className=' hover:text-[#35bfbc]'>
                                {el.position}
                            </div>
                            <div className='text-[#ababab]'>
                                {el.postedAt} | {el.contract} | {el.location}
                            </div>
                        </div>
                    </div>
                    <div className='flex items-end gap-6 '>
                        {el.languages.map((language, index) => (
                            <div key={index} className='h-10 font-bold flex items-center bg-[#e2fdfd] text-[#229795] rounded-xl mb-2 px-4 hover:bg-[#229795] hover:text-[#e2fdfd] cursor-pointer'>
                                {language}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </main>
    );
}

export default Job;
