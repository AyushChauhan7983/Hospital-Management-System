import { useState } from "react";
import { useAppointmentContext } from "../hooks/useAppointmentsContext";
import lp from "../assets/landing_page.jpg";
import { useAuthContext } from "../hooks/useAuthContext";

const AppointmentForm = () => {
  const { dispatch } = useAppointmentContext();
  const { user } = useAuthContext();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [department, setDepartment] = useState("");
  const [date_of_appt, setDate_of_appt] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const appointment = {
      name,
      gender,
      age,
      date_of_birth,
      department,
      date_of_appt,
    };

    const response = await fetch("/api/appointments", {
      method: "POST",
      body: JSON.stringify(appointment),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setName("");
      setGender("");
      setAge("");
      setDate_of_birth("");
      setDepartment("");
      setDate_of_appt("");
      setError(null);
      setEmptyFields([]);
      console.log("new appointment added", json);
      dispatch({ type: "CREATE_APPOINTMENT", payload: json });
    }
  };
  return (
    <div
      class="bg-no-repeat bg-right bg-gree-200 mr-36"
      style={{ backgroundImage: `url(${lp})`, backgroundRepeat: "no-repeat" }}
    >
      <div class="flex flex-col m-20 flex">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
            <h3 className="text-4xl font-sans font-bold title-font text-gray-900 mb-5 ">
              Add new Appointment
            </h3>
          </div>
          <div class="relative mb-3" data-te-input-wrapper-init>
            <div class="flex items-left justify-left p-9">
              <div class="w-full max-w-[550px] bg-transparent">
                <form className="create" onSubmit={handleSubmit}>
                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5 shadow-xl">
                        <label
                          for="fName"
                          class="mb-3 block text-base text-xl font-sans font-bold"
                        >
                          Name:{" "}
                        </label>
                        <input
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          className={
                            emptyFields.includes("name") ? "error" : ""
                          }
                          class='"w-full rounded-md border border-slate-900 bg-white py-3 px-6 text-base font-sans font-medium text-black outline-none focus:border-black focus:shadow-md  shadow-md shadow-gray-500"'
                        />
                      </div>
                    </div>
                  </div>

                  <div class="mb-5">
                    <label class="mb-3 block text-base text-xl font-sans font-bold">
                      Gender:{" "}
                    </label>
                    <div class="flex items-center space-x-6">
                      <div class="flex items-center">
                        <label
                          for="radioButton1"
                          class="pl-3 text-base font-medium text-[#07074D]"
                        >
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === "male"}
                            onChange={(e) => setGender(e.target.value)}
                            className={
                              emptyFields.includes("gender") ? "error" : ""
                            }
                            class="h-5 w-5"
                          />
                          Male
                        </label>
                      </div>

                      <div class="flex items-center">
                        <label>
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={(e) => setGender(e.target.value)}
                            className={
                              emptyFields.includes("gender") ? "error" : ""
                            }
                            class="h-5 w-5"
                          />
                          Female
                        </label>
                      </div>

                      <div class="flex items-center">
                        <label>
                          <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={gender === "other"}
                            onChange={(e) => setGender(e.target.value)}
                            class="h-5 w-5"
                          />
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="w-full sm:w-1/2">
                    <div class="mb-5">
                      <label class="mb-3 block text-base text-xl font-sans font-bold">
                        Age:{" "}
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                        className={emptyFields.includes("age") ? "error" : ""}
                        class="w-full rounded-md border border-slate-900 bg-white py-3 px-6 text-base font-sans font-medium text-black outline-none focus:border-black focus:shadow-md shadow-md shadow-gray-500"
                      />
                    </div>
                  </div>

                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label class="mb-3 block text-base text-xl font-sans font-bold">
                          Date of Birth:{" "}
                        </label>
                        <input
                          type="date"
                          onChange={(e) => setDate_of_birth(e.target.value)}
                          value={date_of_birth}
                          className={
                            emptyFields.includes("date_of_birth") ? "error" : ""
                          }
                          class="w-full rounded-md border border-slate-900 bg-white py-3 px-6 text-base font-sans font-medium text-gray-500 outline-none focus:border-black focus:shadow-md shadow-md shadow-gray-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="w-full sm:w-1/2">
                    <div class="mb-5">
                      <label class="mb-3 block text-base text-xl font-sans font-bold">
                        Department:
                      </label>
                      <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className={
                          emptyFields.includes("department") ? "error" : ""
                        }
                        class="formbold-form w-full-input rounded-md border border-slate-900 bg-white py-3 px-6 text-base font-sans font-medium text-black outline-none focus:border-black focus:shadow-md shadow-md shadow-gray-500"
                        name="occupation"
                        id="occupation"
                      >
                        <option value="">Select Department</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Dermatology">Dermatology</option>
                        <option value="Endocrinology">Endocrinology</option>
                        <option value="Gastroenterology">
                          Gastroenterology
                        </option>
                        <option value="Neurology">Neurology</option>
                        <option value="Ophthalmology">Ophthalmology</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Psychiatry">Psychiatry</option>
                        <option value="Radiology">Radiology</option>
                      </select>
                    </div>
                  </div>

                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label class="mt-5 mb-3 block text-base text-xl font-sans font-bold">
                          Date of Appointment:{" "}
                        </label>
                        <input
                          type="date"
                          onChange={(e) => setDate_of_appt(e.target.value)}
                          value={date_of_appt}
                          className={
                            emptyFields.includes("date_of_appt") ? "error" : ""
                          }
                          class="w-full rounded-md border border-slate-900 bg-white py-3 px-6 text-base font-sans font-semibold text-gray-500 outline-none focus:border-black focus:shadow-md shadow-md shadow-gray-500"
                        />
                      </div>
                    </div>
                  </div>
                  <button class="hover:shadow-form mt-2 rounded-md bg-[#6A64F1] py-2 px-6 text-center text-base font-semibold text-white outline-none rounded-3xl shadow-md shadow-gray-500">
                    Create
                  </button>
                  {error && <div className="error">{error}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
