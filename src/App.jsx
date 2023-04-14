import { Outlet } from 'react-router-dom'
import './App.css'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Home from './components/Home/Home'
import JobDetails from './components/JobDetails/JobDetails'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
