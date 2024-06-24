import useSWR from 'swr'

const fetcher = url => fetch(url).then(r => r.json())

const Job = () => {
    const { data, error } = useSWR('https://667882120bd45250561ee7e5.mockapi.io/JobDesk', fetcher)
    if (error) return <div className='flex justify-center items-center h-screen'>Failed to load</div>
    if (!data) return <div className='flex justify-center items-center h-screen'>Loading...</div>


    
    return (
        <main className='flex flex-col items-center'>  
            {data && data.map(el=>(                
                <div className='bg-white flex rounded-xl w-4/6 h-28 justify-between p-8 items-center'> 
                <div className='flex flex-row '>
                    <div><img src={`${el.logo}`} alt="" /></div>
                    <div className='flex items-center flex-col'>
                        <div className='flex flex-row'>
                            {el.company}
                            {el.new && <div className="">New</div>}
                            {el.featured && <div className="">Featured</div>}   
                        </div>
                        <div>
                            {el.position}
                        </div>
                        <div>
                            {el.postedAt}
                            {el.contract}
                            {el.location}
                        </div>
                    
                    </div>
                </div>
                <div className='flex items-center'>
                    {el.languages}
                </div>
                    
                </div>
            ))}
        </main>
    )
}

export default Job
