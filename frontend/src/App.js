// TODO: Importing hooks and neccessary packages
import React, { useState, useEffect } from "react";
import BeneficiaryList from "./BeneficiaryList";
import axios from 'axios'

const App = () => {

  // TODO: useState function 
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroups, setSelectedGroups] = useState([]);

  // TODO: UseEffect for reading data Onetime
  useEffect(() => {
    fetchBeneficiaries();
  }, []);

  // TODO: Connecting nodeJs also reading data from Api
  const fetchBeneficiaries = async () => {
    try {
      const response = await axios.get("http://localhost:8080/beneficiaries");
      setBeneficiaries(response.data);
    } catch (error) {
      console.error("Error fetching beneficiaries:", error);
    }
  };
// TODO: Search by name
  const handleSearchByName = (e) => {
    setSearchTerm(e.target.value);
  };

  // TODO: Search by checkbox "group target" 
  const handleSearchByGroup = (e) => {
    const group = e.target.value;
    if (e.target.checked) {
      setSelectedGroups([...selectedGroups, group]);
    } else {
      setSelectedGroups(
        selectedGroups.filter((selectedGroup) => selectedGroup !== group)
      );
    }
  };
  
  // TODO: filtered beneficiaries stored in the filteredBeneficiaries array
  const filteredBeneficiaries = beneficiaries.filter((beneficiary) => {
    const fullName = beneficiary.fullName.toLowerCase();
    const matchedGroup = selectedGroups.includes(beneficiary.targetGroup);
    return (
      fullName.includes(searchTerm.toLowerCase()) &&
      (selectedGroups.length === 0 || matchedGroup)
    );
  });

  return (
    <div className="">
      <h1 className='text-center font-mono text-[25px] font-bold mt-10'>Beneficiaries List</h1>
      
      <div className="text-center font-extrabold font-mono mt-10">
        <label className="m-5 ">
          <input
            type="checkbox"
            value="Household"
            onChange={handleSearchByGroup}
          />
          Household
        </label>
        <label className="m-5">
          <input type="checkbox" value="Teacher" onChange={handleSearchByGroup} />
          Teacher
        </label>
        <label className="m-5">
          <input
            type="checkbox"
            value="Principal"
            onChange={handleSearchByGroup}
          />
          Principal
        </label>
        <label className="m-5">
          <input type="checkbox" value="FHW" onChange={handleSearchByGroup} />
          FHW
        </label>
        <label className="">
          <input type="checkbox" value="FHS" onChange={handleSearchByGroup} />
          FHS
        </label>
      </div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchByName}
        className="border-x-2 border-y-2 border-slate-600 py-1 px-5 mx-10 rounded-lg  mb-0"
      />

      {/* TODO: passing data to benefeciaryList as a props  */}
      <BeneficiaryList beneficiaries={filteredBeneficiaries} />
    </div>
  );
};

export default App;
