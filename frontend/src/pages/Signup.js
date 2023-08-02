import React from 'react';
import imagedot from '../assets/dots.png';
import imageName from '../assets/trafalgar-header illustration 1.png';
import { useState } from "react"
import { useSignup } from '../hooks/useSignup';

function ImageComponent({name, height, width}) {
  return(
    <img src={name} alt='header'></img>
  );
}

function FormComponent({use, type, heading}) {
  return(
    <div className=' py-2 px-10'>
      <label className=' pr-2' htmlFor={use}>{heading}</label>
      <input type={type} id={use} className=' bg-transparent border-2 border-black rounded-md'></input>
    </div>
  );
}

const Signup = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] =useState('')
  const [date_of_birth, setDate_of_Birth] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [nationality, setNationality] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [address, setAddress] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(name, password, gender, age, date_of_birth, height, weight, nationality, email, mobile)
  }


  return (
    <div className="App">
      <div className=' min-h-screen bg-[#5643CD] font-poppins'>
        <ImageComponent name={imagedot}/>
        <div className='flex flex-row justify-evenly'>
          <div className='flex flex-col'>
            <h1 className=' text-4xl font-bold pb-8 drop-shadow-lg'>Healed</h1>

            <div>

              <h2 className='flex flex-col items-center font-sans font-bold text-4xl pb-5 drop-shadow-lg'>New User Registration</h2>
              <form className='flex flex-col items-center justify-between' onSubmit={handleSubmit}>
                <div className='font-sans font-medium bg-[#6657C6] rounded-md shadow-xl'>
                  {/*<FormComponent type="text" use="username" heading="Name : "/>
                  <FormComponent type="password" use="pass" heading="Password : "/>
                  <FormComponent type="password" use="confpass" heading={"Confirm Password : "}/>*/}
                  <label>Name: </label>
                    <input 
                      type="text"
                      onChange={(e) => setName(e.target.value)} 
                      value={name}
                    />
                    <label>Password: </label>
                    <input 
                      type="password" 
                      onChange={(e) => setPassword(e.target.value)} 
                      value={password} 
                    />
                                        
                  <div className='flex flex-row justify-evenly'>
                    <p>Gender :</p>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label for="html">Male</label>
                    </div>
                    <div >
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label for="css">Female</label>
                      {/* other gender slot 
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={gender === "other"}
                        onChange={(e) => setGender(e.target.value)}
                        />
                    */}
                    </div>
                  </div>
                  {/*<FormComponent type={"number"} use={"age"} heading={"Age : "} />
                  <FormComponent type={"date"} use={"date"} heading={"Date of birth : "}/>
                  <FormComponent type={"number"} use={"height"} heading={"Height(in cms) : "}/>
                  <FormComponent type={"number"} use={"weight"} heading={"Weight(in kgs) : "}/>*/}
          
                  <label>Age: </label>
                    <input 
                      type="number"
                      onChange={(e) => setAge(e.target.value)} 
                      value={age}
                    />
                  <label>Date of Birth: </label>
                    <input
                      type="date"
                      onChange={(e) => setDate_of_Birth(e.target.value)} 
                      value={date_of_birth}
                    />
                    <label>Height(in cms): </label>
                    <input
                      type="number"
                      onChange={(e) => setHeight(e.target.value)} 
                      value={height}
                    />
                    <label>Weight(in kgs): </label>
                    <input
                      type="number"
                      onChange={(e) => setWeight(e.target.value)} 
                      value={weight}
                    />
                  <div className='flex flex-row px-10 py-2'>
                  <label className=' pr-2' htmlFor="country">Nationality:</label> 
                  <select
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  id="country" className=' bg-transparent border-2 border-black rounded-md'>
                    
                    <option value="">-- Select --</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cabo Verde">Cabo Verde</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Central African Republic">Central African Republic</option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                    <option value="Congo, Republic of the">Congo, Republic of the</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                    <option value="East Timor (Timor-Leste)">East Timor (Timor-Leste)</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Eswatini">Eswatini</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Greece">Greece</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, North">Korea, North</option>
                    <option value="Korea, South">Korea, South</option>
                    <option value="Kosovo">Kosovo</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Laos">Laos</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia">Micronesia</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar (Burma)">Myanmar (Burma)</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="North Macedonia">North Macedonia</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russia</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syria</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Togo">Togo</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Vatican City">Vatican City</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                
                  </div>

                  {/*<FormComponent type={"email"} use={"email"} heading={"E-Mail ID : "} />
                <FormComponent type={"number"} use={"number"} heading={"Mobile Number : "}/>*/}
                <label>Email address: </label>
                  <input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                  />
                  <label>Mobile Number: </label>
                  <input
                    type="number" 
                    onChange={(e) => setMobile(e.target.value)} 
                    value={mobile}
                  />
                  <div className='flex flex-row py-2 px-10'>
                    <label className='pr-2' htmlFor="address">Address:</label>
                    <textarea
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      className='bg-transparent border-2 border-black rounded-md pl-1' id='address' name="message" rows="10" cols="30" placeholder='Enter the Address'>
                    </textarea>
                  </div>
                </div>
                <div className='bg-[#6657C6] mt-10 rounded-md mb-28 shadow-md'>
                  <button disabled = {isLoading} className='bg-transparent shadow-md rounded-md w-36 h-10'>Sign Up</button>
                  {error && <div className="error">{error}</div>}
                </div>
                
              </form>
            </div>

          </div>
          <div >
            <ImageComponent name={imageName} />
          </div>  
        </div>  
      </div>
    </div>
  );
}

export default Signup;