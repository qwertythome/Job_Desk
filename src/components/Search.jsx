
import React from 'react';
import { useLanguageContext } from '../provider/Language';
import { ImCross } from "react-icons/im";
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
 
const Search = () => {
  const { data} = useSWR('https://667882120bd45250561ee7e5.mockapi.io/JobDesk', fetcher);
  const { language, setLanguage, setJobitem } = useLanguageContext();


  const handleClear =()=>{
    setLanguage([])
    setJobitem(data)
  }
  const handleClearLan=(index)=>{
    const newLanguage =language.filter((_, i)=>i !== index)

    setLanguage(newLanguage);

    setJobitem(data.filter(job =>
      newLanguage.every(lang => job.languages.includes(lang))
    ));
  }
  return (
    <section className="flex justify-center">
      <div className="flex bg-white c w-4/6 rounded-xl -mt-10 p-8 justify-between  ">

      <div className="flex  items-center text-black  max-[630px]:grid max-[630px]:grid-rows-1  max-[630px]:gap-4">
          {language.map((lang, index) => (
            <div key={index} className='text-[#e2fdfd] bg-[#6ecee1] flex flex-row justify-center p-1 items-center align-center rounded-2xl mr-2'>
              <span className='p-2'>{lang}</span> 
              <ImCross onClick={()=>{handleClearLan(index)}}/>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <span onClick={handleClear} className="underline text-[#40e3e0] text-lg">Clear</span>
        </div>
      </div>
    </section>
  );
};

export default Search;
