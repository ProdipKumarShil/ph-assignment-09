import { json } from "react-router-dom";


const saveTheId = (id) => {
  const previousAppliedJobs = JSON.parse(localStorage.getItem("applied-jobs"));
  let jobId = []

  if(previousAppliedJobs){
    const isExist = previousAppliedJobs.find(singleId => singleId == id)
    if(isExist){
      console.log('i am returning, i found same data')
      return
    }
    else{
      const spradedOldArr = [...previousAppliedJobs]
      spradedOldArr.push(id);
      localStorage.setItem("applied-jobs", JSON.stringify(spradedOldArr));
    }
  }
  else{
    jobId.push(id)
    localStorage.setItem("applied-jobs", JSON.stringify(jobId));
  }
};



export { saveTheId };
