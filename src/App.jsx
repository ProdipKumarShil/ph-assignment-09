import './App.css'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Home from './components/Home/Home'
import JobDetails from './components/JobDetails/JobDetails'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Home></Home> */}
      <JobDetails></JobDetails>
      {/* <AppliedJobs></AppliedJobs> */}
    </div>
  )
}

export default App
