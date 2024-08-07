import React from 'react';
import { useLanguageContext } from '../provider/Language';
import JobList from './JobList';

const JobItem = ({ job }) => {
  const { language, setLanguage, setJobitem, jobitem } = useLanguageContext();

  const handleLanguageClick = (selectedLanguage) => {
    const updatedLanguages = [...language, selectedLanguage];
    const up =updatedLanguages.filter(function(item, pos){
      
      return updatedLanguages.indexOf(item)==pos
    })

    setLanguage(up)

    const filteredJobs = jobitem.filter(job =>
      job.languages.includes(selectedLanguage)
    )
    
    setJobitem(filteredJobs)
  };


  return (
    <div className='bg-white flex rounded-xl w-4/6 h-28 justify-between p-8 items-center mt-8 max-[1100px]:h-56 max-[1100px]:flex-col max-[630px]:h-1/6'>
      <div className='flex flex-row items-center w-4/5 max-[1100px]:border-b-2 max-[1100px]:border-gray-300 max-[1100px]:w-full max-[1100px]:mt-4 max-[630px]:flex-col'>
        <div className="max-[630px]:h-16">
          <img className="max-[630px]:-mt-10" src={job.logo} alt="" />
        </div>
        <div className='flex flex-col ml-4 max-[630px]:'>
          <div className='flex flex-row items-center gap-4 max-[380px]:flex-col'>
            <span className='text-[#35bfbc] cursor-default'>{job.company}</span>
            <div className="flex flex-row gap-4 cursor-default">
              {job.new && <div className="h-6 font-bold bg-[#71bfbf] rounded-2xl p-2 flex items-center text-white ">New!</div>}
              {job.featured && <div className="h-6 font-bold bg-[#30636b] rounded-2xl p-2 flex items-center text-white ">Featured</div>}
            </div>
          </div>  
          <div className='hover:text-[#35bfbc] cursor-pointer'>
            {job.position}
          </div>
          <JobList list={job} />
        </div>
      </div>
      <div className='flex gap-4 align-center items-end max-[630px]:justify-center max-[630px]:grid max-[630px]:grid-rows-2 max-[630px]:grid-flow-col'>
        {job.languages.map((lang, index) => (
          <div onClick={() => handleLanguageClick(lang)} key={index} className={`h-10 font-bold  flex items-center bg-[#e2fdfd] text-[#229795] rounded-xl mb-2 px-4 hover:bg-[#229795] hover:text-[#e2fdfd] cursor-pointer `}>
            {lang}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobItem;
