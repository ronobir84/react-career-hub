const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('Job Applications')
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }
    return []
}

const saveJobApplication = id =>{

    const storedJobApplications = getStoredJobApplication() 
    const exists = storedJobApplications.fiend(jobId => jobId === id)
    if(!exists){
        storedJobApplications.push(id)
        localStorage.setItem('Job Applications', JSON.stringify(storedJobApplications))
    }
}
export {getStoredJobApplication,saveJobApplication}