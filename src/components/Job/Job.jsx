/* eslint-disable react/prop-types */
import { GrLocation } from 'react-icons/gr';
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
const { id,logo, job_title, company_name,remote_or_onsite,location,job_type,salary } = job;
return (
    <div className="card card-compact lg:w-[500px]  bg-base-100 shadow-xl mb-8">
    <figure>
        <img className='pt-6' src={logo}alt="Shoes"/>
    </figure>
    <div className="card-body">
        <h2 className="card-title">{job_title}</h2> 
        <p>{company_name}</p>
        <div>
            <button className="px-5 py-2 font-extrabold border border-[#7E90FE] rounded mr-4 text-[#9873ff]">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border border-[#7E90FE] rounded mr-4 text-[#9873FF]">{job_type}</button>
        </div>
        <div className='mt-4 flex gap-4'>
            <h2 className='flex '><GrLocation className='text-lg mr-2'></GrLocation>{location}</h2>
            <h1 className='flex'><AiOutlineDollar className='text-lg mr-2'></AiOutlineDollar>{salary}</h1>
        </div>
        <div className="card-actions">
        <Link to={`/job/${id}`}>
        
        <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-5 py-3 text-white">View Details</button>
        </Link>
        </div>
    </div>
    </div>
);
};

export default Job;
