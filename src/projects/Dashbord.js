import React,{useState, useEffect} from 'react';
import Container from './Container';
import flag from '../assets/flag.gif';
import health from '../assets/health.png';

const Dashbord = () => {

  const [update, setUpdate] = useState({});

  const getUpdate = async () => {

    const response = await fetch("https://www.hpb.health.gov.lk/api/get-current-statistical");
    const report = await response.json();

    setUpdate(report.data);
  
  };

  useEffect(() => {
    getUpdate();
  }, []);

  
  const {update_date_time,
    local_new_cases,
    local_total_cases,
    local_total_number_of_individuals_in_hospitals,
    local_deaths,
    local_new_deaths,
    local_recovered,
    local_active_cases,
    global_new_cases,
    global_total_cases,
    global_deaths,
    global_new_deaths,
    global_recovered,
    total_pcr_testing_count,
    daily_pcr_testing_data,
    total_antigen_testing_count,
    daily_antigen_testing_data,
    hospital_data} = update
  
  return (

    <div>
      <img src={health} alt='health'/>
      <br/><br/>
      <h2>Sri Lanka COVID-19 Update</h2>
      <br/><br/>
      <img src={flag} alt='flag'/>
      <div className='products'>
        <Container name='නව ආසාදිතයින් :' data={local_new_cases} color='#337ab7'/>
        <Container name='සමස්ත ආසාදිතයින් :' data={local_total_cases} color='#f0ad4e'/>
        <Container name='සමස්ත මරණ සංඛ්‍යාව:' data={local_deaths} color='#5cb85c'/>
        <Container name='නව මරණ සංඛ්‍යාව:' data={local_new_deaths} color='#d9534f'/>
      </div>
      
    </div>
  )
}

export default Dashbord