import JobList from "./JobList";

const JobItem = ({ job }) => {
    return (
        <div className='bg-white flex rounded-xl w-4/6 h-28 justify-between p-8 items-center mt-8 max-[1100px]:h-56 max-[1100px]:flex-col max-[630px]:h-1/6'>
            <div className='flex flex-row items-center w-4/5 max-[1100px]:border-b-2 max-[1100px]:border-gray-300 max-[1100px]:w-full max-[1100px]:mt-4 max-[630px]:flex-col'>
                <div className="max-[630px]:h-16"><img className="max-[630px]:-mt-10" src={job.logo} alt="" /></div>
                <div className='flex flex-col ml-4 max-[630px]:'>
                    <div className='flex flex-row items-center gap-4 max-[380px]:flex-col'>
                        <span className='text-[#35bfbc]'>{job.company}</span>
                        <div className="flex flex-row gap-4">
                        {job.new && <div className="h-6 font-bold bg-[#71bfbf] rounded-2xl p-2 flex items-center text-white">New!</div>}
                        {job.featured && <div className="h-6 font-bold bg-[#30636b] rounded-2xl p-2 flex items-center text-white">Featured</div>}
                        </div>
                    </div>
                    <div className='hover:text-[#35bfbc]'>
                        {job.position}
                    </div>
                    <JobList list={job}/>
                </div>
            </div>
            <div className='flex gap-4 align-center items-end max-[630px]:justify-center max-[630px]:grid max-[630px]:grid-rows-2 max-[630px]:grid-flow-col'>
                {job.languages.map((language, index) => (
                    <div key={index} className='h-10 font-bold flex items-center bg-[#e2fdfd] text-[#229795] rounded-xl mb-2 px-4 hover:bg-[#229795] hover:text-[#e2fdfd] cursor-pointer'>
                        {language}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JobItem;
