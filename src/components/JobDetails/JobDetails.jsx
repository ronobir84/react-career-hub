import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";


const JobDetails = () => {
    const jobs =  useLoaderData()
    const {id} = useParams() 
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job)
    
    const handelApplyJob = () =>{
         saveJobApplication(idInt)
        toast('You Have Applied SuccessFully')
    }
    return (
        <div>
            
            <div className="grid  gap-4 md:grid-cols-4 mb-6">
                <div className="border border-black md:col-span-3">
                    <h2 className="text-4xl">Details Coming here</h2>
                    <h2>Job Details of :{job.job_title} </h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border border-black">
                    <h2 className="text-2xl">Side things</h2>
                    <button onClick={handelApplyJob} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-2 w-full text-white">Apply Now</button>

                </div>
            </div>
            <ToastContainer />
            
        </div>
    );
};

export default JobDetails;