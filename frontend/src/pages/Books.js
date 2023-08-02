import React from 'react'
import vector from '../assets/Vector.jpg'
import avatar from '../assets/avatar.jpg'
import { Link } from 'react-router-dom'

import { useEffect} from "react";

export default function Books() {
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
                        <h1 className="text-4xl font-sans font-bold title-font text-gray-900 mb-12 ">Books recommendations</h1>
                        <div className="flex flex-wrap -m-4">
            
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden shadow-xl bg-white">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src='https://m.media-amazon.com/images/I/81zzFU5xI7L._AC_UL600_FMwebp_QL65_.jpg' alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-sans font-bold text-gray-900 mb-3">Being Mortal: Medicine and What Matters in the End</h1>
                                        <p className="leading-relaxed mb-3">This book explores the complex issues surrounding end-of-life care and encourages a shift towards patient-centered approaches that prioritize quality of life and personal preferences.</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='https://www.amazon.in/s?k=Being+Mortal%3A+Medicine+and+What+Matters+in+the+End&crid=2RQ8GN9V4T3S0&sprefix=being+mortal+medicine+and+what+matters+in+the+end%2Caps%2C245&ref=nb_sb_noss_1' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 ">Buy
                                                <svg className="w-5 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden shadow-xl bg-white">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src='https://m.media-amazon.com/images/I/51I4r8W6auL._AC_UY327_FMwebp_QL65_.jpg' alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-sans font-bold text-gray-900 mb-3">The Checklist Manifesto: How to Get Things Right</h1>
                                        <p className="leading-relaxed mb-3">Discover how simple checklists can have a profound impact on patient safety, and overall healthcare quality, as Gawande explores their effectiveness across various industries, including healthcare.</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='https://www.amazon.in/s?k=The+Checklist+Manifesto%3A+How+to+Get+Things+Right&crid=1FHIZPMAXA9WH&sprefix=the+checklist+manifesto+how+to+get+things+right%2Caps%2C875&ref=nb_sb_noss_1' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Buy
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden shadow-xl">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src='https://m.media-amazon.com/images/I/81pKheGT1BL._AC_UY327_FMwebp_QL65_.jpg' alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-sans font-bold text-gray-900 mb-3">The Healing of America: A Global Quest for Better, Cheaper, and Fairer Health Care</h1>
                                        <p className="leading-relaxed mb-3">Through international comparisons, Reid examines different healthcare systems and highlights potential improvements to achieve more accessible, and affordable care in the United States.</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='https://www.amazon.in/s?k=The+Healing+of+America%3A+A+Global+Quest+for+Better%2C+Cheaper%2C+and+Fairer+Health+Care&crid=16EBJ5ZF7VJJT&sprefix=the+healing+of+america+a+global+quest+for+better%2C+cheaper%2C+and+fairer+health+care%2Caps%2C453&ref=nb_sb_noss' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Buy
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden shadow-xl">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src='https://m.media-amazon.com/images/I/41AQccmoRLL._AC_UY327_FMwebp_QL65_.jpg' alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-sans font-bold text-gray-900 mb-3">The Patient Will See You Now: The Future of Medicine Is in Your Hands</h1>
                                        <p className="leading-relaxed mb-3">Delve into the transformative potential of digital health technologies, such as smartphones and wearable devices, and how they empower patients to take control of their healthcare decisions and outcomes.</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='https://www.amazon.in/s?k=The+Patient+Will+See+You+Now%3A+The+Future+of+Medicine+Is+in+Your+Hands&crid=2QVSNQWN0SO9F&sprefix=the+patient+will+see+you+now+the+future+of+medicine+is+in+your+hands%2Caps%2C263&ref=nb_sb_noss_1' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Buy
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden shadow-xl">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src='https://m.media-amazon.com/images/I/41m2Xrz1aTL._AC_UY327_FMwebp_QL65_.jpg' alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-sans font-bold text-gray-900 mb-3">The Social Transformation of American Medicine</h1>
                                        <p className="leading-relaxed mb-3">A comprehensive historical analysis of the American healthcare system, this Pulitzer Prize-winning book explores the social, economic, and political factors that have shaped healthcare in the United States.</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='https://www.amazon.in/s?k=The+Social+Transformation+of+American+Medicine&crid=29G12JKMXYM38&sprefix=the+social+transformation+of+american+medicine%2Caps%2C372&ref=nb_sb_noss' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Buy
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden shadow-xl">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src='https://m.media-amazon.com/images/I/81Kugd4MIAL._AC_UY327_FMwebp_QL65_.jpg' alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-sans font-bold text-gray-900 mb-3">An American Sickness: How Healthcare Became Big Business and How You Can Take It Back</h1>
                                        <p className="leading-relaxed mb-3">Investigate the profit-driven aspects of the healthcare industry and learn about potential solutions to create a more patient-centered and affordable system.</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='https://www.amazon.in/s?k=An+American+Sickness%3A+How+Healthcare+Became+Big+Business+and+How+You+Can+Take+It+Back&crid=3N7O53MF1PKME&sprefix=the+social+transformation+of+american+medicine%2Caps%2C302&ref=nb_sb_noss' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Buy
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
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

