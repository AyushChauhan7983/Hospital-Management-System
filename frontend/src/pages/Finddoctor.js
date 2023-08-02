import React,{useEffect} from 'react'
import avatar from '../assets/avatar.jpg'
import vector from '../assets/Vector.jpg'
import {Link} from 'react-router-dom'

export default function About() {
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
      
      <div style={{ backgroundImage:`url(${vector})`,backgroundRepeat:"no-repeat" }}>
                    <section className="text-gray-600 body-font m-10">
                    <div className="container px-5 py-10 mx-auto">
                        <h1 className="text-4xl font-sans font-bold title-font text-gray-900 mb-12 ">Doctors</h1>
                        <div className="flex flex-wrap -m-4">
            
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden shadow-xl bg-white">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src='https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg?size=626&ext=jpg' alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-sans font-bold text-gray-900 mb-3">Dr. DK Ahuja</h1>
                                        <p className="leading-relaxed mb-3">Dr. DK Ahuja is a highly regarded physician known for her groundbreaking research and expertise in the field of neurological disorders. With over 20 years of experience, Dr. Ahuja has made significant contributions to the understanding and treatment of conditions such as Alzheimer's disease and Parkinson's disease.</p>
                                    </div>
                                </div>
                            </div>
            
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden shadow-xl bg-white">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src='https://img.freepik.com/premium-photo/portrait-male-doctor-gp-with-stethoscope-wearing-white-coat-standing-office_562859-2598.jpg?size=626&ext=jpg' alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-sans font-bold text-gray-900 mb-3">Dr. Rohan Saxena</h1>
                                        <p className="leading-relaxed mb-3">Dr. Rohan Saxena is a dynamic and innovative medical professional renowned for his expertise in the field of cardiology. With a passion for advancing cardiovascular care, Dr. Saxena has made significant contributions to the development of groundbreaking treatment methods and technologies.</p>
                                    </div>
                                </div>
                            </div>
            
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden shadow-xl">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src='https://img.freepik.com/free-photo/portrait-doctor_144627-39391.jpg?size=626&ext=jpg' alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-sans font-bold text-gray-900 mb-3">Dr. Christine Thompson</h1>
                                        <p className="leading-relaxed mb-3">Dr. Christine Thompson is a respected and accomplished physician known for her expertise in the field of pediatric medicine. With a warm and compassionate demeanor, she has earned the trust and admiration of both her young patients and their parents.</p>
                                    </div>
                                </div>
                            </div>
                      
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden shadow-xl">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src='https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?size=626&ext=jpg' alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-sans font-bold text-gray-900 mb-3">Dr. Aryan Jha</h1>
                                        <p className="leading-relaxed mb-3">Dr. Aryan Jha is a distinguished and highly skilled medical professional specializing in the field of orthopedic surgery. With a passion for helping patients regain their mobility and improve their quality of life, Dr. Jha has earned a reputation for his exceptional surgical skills and compassionate patient care.</p>
                                    </div>
                                </div>
                            </div>
                      
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden shadow-xl">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src='https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?size=626&ext=jpg' alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-sans font-bold text-gray-900 mb-3">Dr. Jennifer Marine</h1>
                                        <p className="leading-relaxed mb-3">Dr. Jennifer Marine is a visionary medical professional with expertise in the field of marine medicine. With a unique focus on the health and well-being of maritime professionals, she has dedicated her career to understanding and addressing the medical challenges faced by sailors, fishermen, and other individuals working at sea.</p>
                                    </div>
                                </div>
                            </div>
                      
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden shadow-xl">
                                    <img className="lg:h-48 md:h-36 object-cover w-full object-center" src='https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg?size=626&ext=jpg' alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-sans font-bold text-gray-900 mb-3">Dr. Ravi Chopra</h1>
                                        <p className="leading-relaxed mb-3">Dr. Ravi Chopra is a renowned holistic health expert and integrative medicine practitioner, known for his innovative approach to wellness. With a deep understanding of the mind-body connection, Dr. Chopra has dedicated his career to promoting holistic healing and helping patients achieve optimal health and balance.</p>
                                    </div>
                                </div>
                                </div>  
                        </div>
                    </div>
                </section>
                </div>
    </div>
  )
}
