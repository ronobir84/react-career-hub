import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs]  =  useState([])
    // this is not the best way to load show all data
    const [dataLength, setDataLength] = useState(4)


    useEffect(() =>{
        fetch('jobs.json')
        .then(response => response.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center">
            <h2 className="text-3xl">Featured Jobs {jobs.length}</h2>
            <p >Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`text-center lg:mt-10 mb-14 ${dataLength === jobs.length && 'hidden'}`}>
                <button onClick={() => setDataLength(jobs.length)} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-5 py-3 text-white">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;