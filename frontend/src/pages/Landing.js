import React from 'react'
import lp from '../assets/landing_page.jpg'
import lp1 from '../assets/landing_page_1.jpg'
import profile from '../assets/profile.png'
import girl from '../assets/girl.png'
import man from '../assets/man.png'
import s1 from '../assets/service1.jpg'
import s2 from '../assets/service2.jpg'
import s3 from '../assets/service3.jpg'
import s4 from '../assets/service4.jpg'
import avatar from '../assets/avatar.jpg'
import vector from '../assets/Vector.jpg'
import vector2 from '../assets/Vector_2.png'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }
  return (

    <div>
   
    <header>
      <header class="text-gray-600 body-font m-10">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 font-sans font-bold text-xl">Healed</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 text-slate-200 font-sans font-semibold px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-full">Home</a>
      <Link class="mr-5 text-slate-200 font-sans font-semibold px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-full" to='/finddoctor'>Find a doctor</Link>
      <Link class="mr-5 text-slate-200 font-sans font-semibold px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-full" to='/appointment'>Book an appointment</Link>
      <Link class="mr-5 text-slate-200 font-sans font-semibold px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-full" to='/pharmacy'>Pharmacy</Link>
      <Link class="mr-5 text-slate-200 font-sans font-semibold px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-full" to='/disease_prediction'>Disease prediction</Link>
      {/*<img src={avatar} alt="profile" class='rounded-full w-15 h-12'></img>*/}
      {user && (
        <div>
        <span>{user.email}</span>
        <button onClick={handleClick}>Log out</button>
        </div>
      )}
      {!user && (
        <div>
          <Link class="mr-5 text-slate-200 font-sans font-semibold px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-full" to='/login'>Login</Link>
          <Link class="mr-5 text-slate-200 font-sans font-semibold px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-full" to='/signup'>Sign Up</Link>      
        </div>
      )}
    </nav>
  </div>
</header>
        
    <section className="text-gray-600 body-font m-20">
    <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font font-sans sm:text-5xl text-3xl mb-4 font-bold text-gray-900">Virtual healthcare
        <br className="hidden lg:inline-block"/>for you
      </h1>
      <p className="mt-2 mb-8 text-2xl text-gray-500 leading-relaxed">Efficiency, Compassion, Care : Streamlinig health for a better tomorrow</p>
      <div className="flex justify-center">
        <Link to='/appointment'><button className="inline-flex text-white font-sans font-semibold bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Book an appointment</button></Link>
      </div>
    </div>
    <div class="md:max-w-md lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="image" src={lp}/>
    </div>
    </div>
    </section>
      </header>

      <div style={{ backgroundImage: `url(${vector})`, backgroundRepeat: "no-repeat" }}>
      <section class="text-gray-600 body-font m-20">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-bold font-sans title-font mb-4 text-gray-900">Our services</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Healed is an online platform that helps the patients book their appointments and help in providing affordable healthcare with their preferred doctors. We have online pharmacy with our express delivery services for you to take advantage of.</p>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Dont know which Disease your symptoms might lead to? Dont worry, we got you covered, head over to the Disease Prediction which would help you in the process for the same. Want to have a look at your reports before consulting the doctor again? Head over to our Reports Section.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-0 px-10 py-6 rounded-3xl shadow-xl shadow-gray-300 bg-white">
          <img src={s1} alt='service_1'></img>
          <h2 class="title-font font-bold font-sans text-2xl text-gray-900 mt-3">Search doctor</h2>
          <p class="leading-relaxed mt-3">Go through the information related to your preferred doctor from a list of general doctors.</p>
        </div>
            </div>
            

      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-0 px-10 py-6 rounded-3xl shadow-xl shadow-gray-300 bg-white">
          <img src={s2} alt='service_2'></img>
          <h2 class="title-font font-bold font-sans text-2xl text-gray-900 mt-2">Appointments</h2>
          <p class="leading-relaxed mt-3">Effortlessly book your appointments online which will save your time and hassle.</p>
        </div>
            </div>
            

      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-0 px-10 py-6 rounded-3xl shadow-xl shadow-gray-300">
          <img src={s3} alt='service_3'></img>
          <h2 class="title-font font-bold font-sans text-2xl text-gray-900 mt-4">Online Pharmacy</h2>
          <p class="leading-relaxed mt-3">Buy your medicines through Healed and enjoy the privilege of express delivery.</p>
        </div>
            </div>
            

      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-0 px-10 py-6 rounded-3xl shadow-xl shadow-gray-300">
          <img src={s4} alt='service_4'></img>
          <h2 class="title-font font-bold font-sans text-2xl text-gray-900 mt-7">Emergency care</h2>
          <p class="leading-relaxed mt-3">You can get 24/7 urgent care for yourself or your children and your lovely family</p>
        </div>
            </div>
    </div>
  </div>
</section></div>  
    

      <section className="text-gray-600 body-font m-20">
  <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={lp1} />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font font-sans sm:text-4xl text-3xl mb-5 font-bold text-gray-900">Leading healthcare
        <br className="hidden lg:inline-block"/>providers
      </h1>
      <p className="mb-8 font-sans mt-2 sm:text-1xl leading-relaxed">Welcome to Healed, where we enhance patient care, and optimize efficiency. We understand the complex challenges faced by healthcare facilities, and our advanced platform is designed to simplify operations. To us, it’s not just work. We take pride in the solutions we deliver.</p>
      <div className="flex justify-center">
        <Link to='/aboutus'><button className="inline-flex text-sky-400 font-sans bg-white border-2 border-sky-400 py-2 px-6 focus:outline-none hover:bg-cyan-100 rounded-full text-lg">Learn more</button></Link>
      </div>
    </div>
  </div>
      </section>
      
      
      <div>
        <section className="text-gray-600 body-font m-20">
  <div className="container px-5 py-20 mx-auto">
    <h1 className="text-3xl font-sans font-bold title-font text-gray-900 mb-12 text-center">What our customers are saying</h1>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-sky-500 p-8 rounded-3xl shadow-xl shadow-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-slate-200 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6 text-slate-200">I had an amazing experience at Healed hospital. From the moment I walked in, the staff greeted me with warm smiles and made me feel comfortable. Doctors were incredibly knowledgeable and took the time to thoroughly explain my treatment options. The procedure itself was painless, and I couldn't be happier with the results. I highly recommend Healed for anyone seeking top-notch health care!</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src={profile} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-sans font-medium text-white">Holden Caulfield</span>
              <span className="text-slate-100 text-md">Patient</span>
            </span>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-sky-500 p-8 rounded-3xl shadow-xl shadow-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-slate-200 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6 text-slate-200">Dr. Smith is a true miracle worker! I went to her with severe back pain, and she was able to relieve my discomfort in just one session. Not only is she skilled in her craft, but her compassionate nature made me feel at ease throughout the entire process. The clinic is clean and well-maintained, and the staff goes above and beyond to ensure your comfort. If you're looking for a chiropractor who genuinely cares about your well-being, look no further than Dr. Smith!</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src={girl} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-sans font-medium text-white">Amanda nicole</span>
              <span className="text-slate-100 text-md">Patient</span>
            </span>
          </a>
        </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-sky-500 p-8 rounded-3xl shadow-xl shadow-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-slate-200 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6 text-slate-200">I recently had a consultation with Dr. Anderson, and it was an absolute waste of time. Not only was he dismissive of my concerns, but he seemed more interested in upselling unnecessary procedures than addressing my actual issues. The staff was unprofessional and disorganized, and the wait time was outrageous. Save yourself the trouble and find a different doctor who actually values their patients' needs.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src={man} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-sans font-medium text-white">Daniel redcliffe</span>
              <span className="text-slate-100 text-md">Patient</span>
            </span>
          </a>
        </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-sky-500 p-8 rounded-3xl shadow-xl shadow-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-slate-200 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6 text-slate-200">I cannot express my gratitude enough to Dr. Ramirez for the life-changing experience I had at her practice. From my initial consultation to the final follow-up, she and her team were incredibly attentive and caring. Dr. Ramirez performed a complex surgical procedure with precision and skill, and the results exceeded my expectations. The recovery process was smooth, and I felt supported every step of the way. I highly recommend Dr. Ramirez for anyone in need of a skilled and compassionate surgeon!</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src={profile} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-sans font-medium text-white">Edward cullin</span>
              <span className="text-slate-100 text-md">Patient</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
      </section>
    </div>


      <div class="bg-no-repeat bg-right bg-gree-200" style={{ backgroundImage: `url(${vector2})`, backgroundRepeat: "no-repeat" }}>
        <section className="text-gray-600 body-font m-10">
        <div className="container px-5 py-10 mx-auto">
        <h1 className="text-4xl font-sans font-bold title-font text-gray-900 mb-12 text-center">Check out our latest collection recommended healthcare books</h1>
          <div className="flex flex-wrap -m-4">
       
            <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden shadow-xl">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src='https://m.media-amazon.com/images/I/81zzFU5xI7L._AC_UL600_FMwebp_QL65_.jpg' alt="blog"/>
          <div className="p-6">
            <h1 className="title-font text-lg font-sans font-bold text-gray-900 mb-3">Being Mortal: Medicine and What Matters in the End</h1>
            <p className="leading-relaxed mb-3">This book explores the complex issues surrounding end-of-life care and encourages a shift towards patient-centered approaches that prioritize quality of life and personal preferences.</p>
          </div>
        </div>
        </div>
            
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden shadow-xl bg-white">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src='https://m.media-amazon.com/images/I/51I4r8W6auL._AC_UY327_FMwebp_QL65_.jpg' alt="blog"/>
          <div className="p-6">
            <h1 className="title-font text-lg font-sans font-bold text-gray-900 mb-3">The Checklist Manifesto: How to Get Things Right</h1>
            <p className="leading-relaxed mb-3">Discover how simple checklists can have a profound impact on patient safety, and overall healthcare quality, as Gawande explores their effectiveness across various industries, including healthcare.</p>
          </div>
        </div>
        </div>
            
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden shadow-xl bg-white">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src='https://m.media-amazon.com/images/I/81pKheGT1BL._AC_UY327_FMwebp_QL65_.jpg' alt="blog"/>
          <div className="p-6">
            <h1 className="title-font text-lg font-sans font-bold text-gray-900 mb-3">The Healing of America: A Global Quest for Better, Cheaper, and Fairer Health Care</h1>
            <p className="leading-relaxed mb-3">Through international comparisons, Reid examines different healthcare systems and highlights potential improvements to achieve more accessible, and affordable care in the United States.</p>
          </div>
        </div>
        </div>
    </div>
        </div>
        <div className="flex justify-center">
          <Link to='/books'><button className="inline-flex text-sky-400 font-sans bg-white border-2 border-sky-400 py-2 px-6 focus:outline-none hover:bg-cyan-100 rounded-full text-lg">View all</button></Link>
        </div>
        
      </section>
   </div>
    
      
     
      <div>
        <footer className="text-white body-font m-20">
        <h1 className="text-4xl font-sans font-medium title-font text-gray-900 mb-12 text-center py-10">Contact</h1>
        <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col bg-sky-500 rounded-t-2xl">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-cyan-500 p-2 bg-white rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-3xl font-sans font-bold">Healed</span>
            </a>
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center mt-3 md:text-left">
            <p>At Healed we are committed to transforming healthcare delivery through innovative solutions. Your health, our priority.</p>
        </div>
          </div>
        
          
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center place-content-end">
    
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-sans font-bold text-slate-200 tracking-widest text-md mb-3">Help</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-slate-200 hover:text-gray-700">Help center</a>
          </li>
          <li>
            <a className="text-slate-200 hover:text-gray-700">Contact support</a>
          </li>
          <li>
            <a className="text-slate-200 hover:text-gray-700">Instructions</a>
          </li>
          <li>
            <a className="text-slate-200 hover:text-gray-700">How it works</a>
          </li>
        </nav>
      </div>
    </div>
        </div>
        

  <div className="bg-sky-500 rounded-b-xl">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-slate-200 font-sans font-medium text-md text-center sm:text-left">© 2023 Healed —
        <a href="#" rel="noopener noreferrer" className="text-slate-200 ml-1" target="_blank">All rights reserved</a>
      </p>
    </div>
  </div>
</footer>
      </div>


    </div>
  )
}
