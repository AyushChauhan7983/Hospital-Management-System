import React,{useEffect} from 'react'
import avatar from '../assets/avatar.jpg'
import vector from '../assets/Vector.jpg'
import { Link } from 'react-router-dom'
export default function Aboutus() {
    useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
  return (
    <div>
      <header class="text-gray-600 body-font m-10">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 font-sans font-bold text-xl">Healed</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link class="mr-5 text-slate-200 font-sans font-semibold px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-full" to='/landing'>Home</Link>
      <Link class="mr-5 text-slate-200 font-sans font-semibold px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-full" to='/finddoctor'>Find a doctor</Link>
      <Link class="mr-5 text-slate-200 font-sans font-semibold px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-full" to='/appointment'>Book an appointment</Link>
      <Link class="mr-5 text-slate-200 font-sans font-semibold px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-full" to='/pharmacy'>Pharmacy</Link>
      <Link class="mr-5 text-slate-200 font-sans font-semibold px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-full" to='/disease_prediction'>Disease prediction</Link>
      <img src={avatar} alt="profile" class='rounded-full w-15 h-12'></img>
    </nav>
  </div>
          </header>

          
    <section class="text-gray-600 body-font" style={{ backgroundImage:`url(${vector})`,backgroundRepeat:"no-repeat" }}>
  <div class="container px-5 py-5 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-bold font-sans title-font mb-4 text-gray-900">About us</h1>
            <p class="lg:w-2/3 mx-auto  leading-relaxed text-base ">Welcome to <span class='text-gray-700 font-medium font-sans text-xl'>Healed</span> your comprehensive solution for efficient and effective hospital management. We understand the unique challenges faced by healthcare institutions, and our goal is to empower you with innovative tools and services that streamline operations, enhance patient care, and optimize overall efficiency.
    Our hospital management site offers a range of robust features and services designed to meet the diverse needs of healthcare organizations. Here's a glimpse of what we provide:</p><br></br>
    <p class="lg:w-2/3 mx-auto leading-relaxed text-base bg-indigo-100 rounded shadow-xl"> <span class='text-gray-700 font-medium font-sans text-xl'>Find a Doctor: </span>We understand the importance of finding the right healthcare provider to meet your specific medical needs. Our comprehensive search tool empowers you to easily locate and connect with highly skilled doctors within our network. At Healed, we are committed to helping you find the right doctor who understands your unique healthcare needs.</p> <br></br>
    <p class="lg:w-2/3 mx-auto  leading-relaxed text-base bg-indigo-100 rounded shadow-xl">  <span class='text-gray-700 font-medium font-sans text-xl'>Appointments:</span> We understand that your time is valuable, and finding the right appointment slot with a          healthcare provider should be quick and hassle-free. Our user-friendly platform allows you to easily search for and schedule appointments with doctors, specialists, and other healthcare professionals. At Healed, we are focused in simplifying the appointment booking process and ensuring that you have convenient access to quality healthcare services.</p><br></br>
    <p class="lg:w-2/3 mx-auto  leading-relaxed text-base  bg-indigo-100 rounded shadow-xl">
        <span class='text-gray-700 font-medium font-sans text-xl'>Online Pharmacy:</span> We are dedicated to optimizing pharmacy services within your healthcare institution. By leveraging our comprehensive platform, you can streamline medication processes, enhance patient safety, and improve overall medication management efficiency.</p><br></br>
    <p class="lg:w-2/3 mx-auto  leading-relaxed text-base  bg-indigo-100 rounded shadow-xl"><span class='text-gray-700 font-medium font-sans text-xl'>Reports:</span> Reports Section designed to provide you with convenient access to your medical reports and records. We understand the importance of having timely and accurate information about your health, and our platform aims to empower you with comprehensive reports that help you stay informed and make informed decisions about your well-being.</p><br></br>
    </div>
              </div>
              <div className="bg-sky-500">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-slate-200 font-sans font-medium text-md text-center sm:text-left">© 2023 Healed —
        <a href="#" rel="noopener noreferrer" className="text-slate-200 ml-1" target="_blank">All rights reserved</a>
      </p>
    </div>
  </div>
    </section>
    </div>
  )
}
