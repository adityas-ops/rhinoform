import { useState } from "react";

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };
  const [gender, setgender] = useState("");

  //  for education
  const [educationList, setEducationList] = useState([
    { college: "", startDate: "", endDate: "", degree: "" },
  ]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const list = [...educationList];
    list[index][name] = value;
    setEducationList(list);
  };

  const handleAddEducation = () => {
    setEducationList([
      ...educationList,
      { college: "", startDate: "", endDate: "", degree: "" },
    ]);
  };

  const handleDeleteEducation = (index) => {
    const list = [...educationList];
    list.splice(index, 1);
    setEducationList(list);
  };

  // for experience

  //  achievements 
  const [achievelist, setAchievelist] = useState([
    { achieve: '' },
  ]);

  const handleInputChangeA = (index, e) => {
    const { name, value } = e.target;
    const list = [...achievelist];
    list[index][name] = value;
    setAchievelist(list);
  };

  const handleAddEducationA = () => {
    setAchievelist([
      ...achievelist,
      {achieve: '' },
    ]);
  };

  const handleDeleteEducationA = (index) => {
    const list = [...achievelist];
    list.splice(index, 1);
    setAchievelist(list);
  };

  return (
    <>
      <div className="w-full h-full font-jetBrain  overflow-y-scroll">
        {/* header part */}
        <div className="w-full h-[60px] border-b bg-white z-50 border-zinc-300 fixed"></div>
        <div className=" mt-[60px] w-full h-full flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="mt-[2.5rem] pt-10 mb-20 lg:w-[50%] md:w-[80%] w-[90%]  h-full  border-t px-5 border-zinc-300"
          >
            <h2 className="text-[1.25rem] font-[600]">Basic Information</h2>
            <div className="pt-6">
              <label className="text-[1.125rem] font-[400]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full py-2 mt-3 px-3 bg-[#F6F6F6]  border border-zinc-300"
              />
            </div>
            <div className="pt-6">
              <label className="text-[1.125rem] font-[400]">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full py-2 mt-3 px-3 bg-[#F6F6F6]  border border-zinc-300"
              />
            </div>
            <div className="pt-6">
              <label className="text-[1.125rem] font-[400]">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="ex: +91XXXXXXXXXX"
                className="w-full py-2 mt-3 px-3 bg-[#F6F6F6]  border border-zinc-300 active:border-red-500 focus:border-"
              />
            </div>
            <div className="pt-6">
              <label className="text-[1.125rem] font-[400]">
                Gender <span className="text-red-500">*</span>
              </label>
              <div className="mt-3">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  // onChange={handleGenderChange}
                  className="mr-2"
                />
                <label htmlFor="male" className="mr-4">
                  Male
                </label>

                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  // onChange={handleGenderChange}
                  className="mr-2"
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between">
              <label className="text-[1.125rem] font-[400] whitespace-nowrap">
                age <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                className="w-[90%] py-2 mt-3 px-3 bg-[#F6F6F6]  border border-zinc-300 active:border-red-500 focus:border-"
              />
            </div>
            {/* address  */}
            <h2 className="text-[1.25rem] font-[600] mt-10 pt-2 border-t border-zinc-300">
              Address
            </h2>
            <div className="pt-6">
              <label className="text-[1.125rem] font-[400]">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full py-2 mt-3 px-3 bg-[#F6F6F6]  border border-zinc-300"
              />
            </div>
            <div className="pt-6">
              <label className="text-[1.125rem] font-[400]">
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full py-2 mt-3 px-3 bg-[#F6F6F6]  border border-zinc-300"
              />
            </div>
            {/* education start */}
            <h2 className="text-[1.25rem] font-[600] mt-10 pt-2 border-t border-zinc-300">
              Education
            </h2>
            {/* <div className="pt-6"> */}
              {educationList.map((education, index) => (
                <div key={index} className="py-8 border-b border-zinc-300"  >
                <div className="mb-4">
                  <label className="text-[1.125rem] font-[400]">
                    College name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full py-2 mt-3 px-3 bg-[#F6F6F6]  border border-zinc-300"
                  />
                  </div>
                  <div className="mb-4">
                  <label className="text-[1.125rem] font-[400]">
                   Degree <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full py-2 mt-3 px-3 bg-[#F6F6F6]  border border-zinc-300"
                  />
                  </div>
                  <div className="flex justify-between pt-2">
                    <div className="flex items-center">
                      <label className="text-[1.125rem] font-[400]">
                        Start date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        className="py-2 mt-3 ml-3 px-3 bg-[#F6F6F6]  border border-zinc-300"/>
                    </div>
                    <div className="flex items-center">
              <label className="text-[1.125rem] font-[400]">
                End date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                required
                className="
                py-2 mt-3 ml-3 px-3 bg-[#F6F6F6]  border border-zinc-300"
              />
              </div>
                  </div>
                </div>
              ))}
             <div className="pt-8 w-full flex justify-between">
             <button type="button"
          className="bg-zinc-300  px-4 py-2 w-[40%] rounded mb-4 hover:bg-zinc-200"
          onClick={handleAddEducation}
          >Add Education</button>
          {
            educationList.length > 1 && (
              <button
              type="button"
              className="bg-zinc-300  px-4 py-2 w-[40%] rounded mb-4 hover:bg-zinc-200"
              onClick={handleDeleteEducation}
              >Remove Education</button>
            )
          }
          {/*  achievement start */}
             </div>
             {/* achievement start */}
            <h2 className="text-[1.25rem] font-[600] mt-10 pt-2 border-t border-zinc-300">
             Achievement
            </h2>
            <div className="pt-6">
              {achievelist.map((achieve, index) => (
                <div key={index} className="py-1 "  >
                <div className="mb-3 flex items-center ">
                <p className="mr-4">{index+1}.</p>
                  <input
                    type="text"
                    required
                    className="w-full py-2 mt-3 px-3 bg-[#F6F6F6]  border border-zinc-300"
                  />
                  </div>
                    </div>
              ))}
             <div className="pt-8 w-full flex justify-between">
             <button type="button"
          className="bg-zinc-300  px-4 py-2 w-[40%] rounded mb-4 hover:bg-zinc-200"
          onClick={handleAddEducationA}
          >Add Achievement</button>
          {
            achievelist.length > 1 && (
              <button
              type="button"
              className="bg-zinc-300  px-4 py-2 w-[40%] rounded mb-4 hover:bg-zinc-200"
              onClick={handleDeleteEducationA}
              >Remove Achievement</button>
            )
          }
          </div>
          </div>
            {/* achievement end */}
            {/* file upload cv */}
            <div className="pt-4 mt-4 border-t border-zinc-300">
              <label className="text-[1.125rem] font-[400]">
                Upload CV <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                required
                className="w-full py-2 mt-3 px-3 bg-[#F6F6F6]  border border-zinc-300"
              />
            </div>
            {/* submit button */}
          </form>
        </div>
      </div>
    </>
  );
}
