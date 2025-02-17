import React from 'react'
import Accordion from './Accordion'

const WorkHistory = () => {
  const lineColor = "text-white"

  return (
    <div className='px-[10%] md:px-[12%] py-[1%] text-white rounded-lg'>
        <Accordion
        title="Navitaire Philippines Inc."
        duration='August 2024 - December 2024'
        subtitle="Software Developer (Intern)"
        body={
          <>
            <p>- Contributed to improving the unit testability of the GoNow codebase by identifying & 
            resolving testing challenges.</p>
            <p>- Played a key role in improving code modularity & maintainability by restructuring the usage of 
            cache for over 10+ data entities across the codebase & reducing coupling.</p>
          </>
        }
        />
        <hr className={`${lineColor}`}/>
        <Accordion
        title="Computer Studies Government - DLSU"
        duration='February 2023 - December 2023'
        subtitle="Executive for Human Resources"
        body={
          <>
            <p>- Contributed to the success of CSG events by both facilitating presentations as the host and assisting with organizational logistics. Events include General Assemblies and Team Building activities.</p>
          </>
        }
        />
        <hr className={`${lineColor}`}/>
        <Accordion
        title="Microsoft Student Community - DLSU"
        duration='December 2022 - October 2023'
        subtitle="Executive for External Relations"
        body={
          <>
            <p>- Coordinated with professionals of various fields to develop content for events such as the organization’s podcast, TechKwentuhan. </p>
            <p>- Helped maintain strong relationships with partner organizations within the university. </p>
          </>
        }
        />
        <hr className={`${lineColor}`}/>
        <Accordion
        title="Project Susog Inc."
        duration="Apr 2017 - May 2018"
        subtitle="Student Volunteer"
        body={
          <>
          <p>- Took an active role in facilitating & organizing events such as the Pintakasi ning Sasabyung 
          Boinon for advancing arts & cultural initiatives in Buhi, Camarines Sur.</p>
          </>
        }
        />
        <hr className={`${lineColor}`}/>
    </div>
  )
}

export default WorkHistory