const JobList=({list})=>{

    return(
        <ul className='text-[#ababab] flex gap-2 list-inside list-disc cursor-default'>
            <li>{list.postedAt}</li>
            <li>{list.contract}</li>
            <li>{list.location}</li>
        </ul>
    )
}

export default JobList