import { json } from "react-router-dom";


const saveTheId = (id) => {
  // get the data from local storage
  const previousAppliedJobs = JSON.parse(localStorage.getItem("applied-jobs"));
  // create the empty arr
  let jobId = []

  // condition
  if(previousAppliedJobs){
    // find existing id
    const isExist = previousAppliedJobs.find(singleId => singleId == id)
    
    if(isExist){
      // if find existing id it will return
      console.log('i am returning, i found same data')
      return
    }
    else{
      // else it push new id
      const spradedOldArr = [...previousAppliedJobs]
      spradedOldArr.push(id);
      localStorage.setItem("applied-jobs", JSON.stringify(spradedOldArr));
    }
  }
  else{
    // if not found id it will push first id
    jobId.push(id)
    localStorage.setItem("applied-jobs", JSON.stringify(jobId));
  }
};



export { saveTheId };
