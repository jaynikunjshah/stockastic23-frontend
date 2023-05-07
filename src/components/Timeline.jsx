import React from 'react';
import { events } from "../constants";
import "./styles/EventsTimeline.css"
import {Tilt} from 'react-tilt';



const EventCard = ({index, image, title, description, dates}) => {
  return(
    <div className="">
      <div className="">
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 150
          }}
          className=" min-w-[400px] event-gradient p-5 rounded-2xl shadow-md sm:w-[260px] w-full h-full"
          >


          <div className="relative w-full rounded-xl">
            <img
              src={image}
              className="w-full h-full object-cover rounded-full bg-black"
              />


          </div>

          <div className="mt-5">
            <h3 className="text-white font-extrabold text-[25px] ">{title}</h3>
            <p className="mt-2 text-white font-bold text-[15px] text-secondary ">{description}</p>
            <p className="mt-2 text-white font-bold text-[14px] text-secondary ">{dates}</p>
          </div>
        </Tilt>
      </div>
    </div>
  )
}


function Timeline() {
  return (
    <div
      id="Team"
      className="my-[10%]"
      >



      <div

        className={`mt-20 flex flex-wrap gap-10`}>

          <div
            className="my-20 flex align-center justify-center flex-wrap gap-20 mx-auto"
            >
            {events.map((event, index) => {
             return (
               <EventCard
                 key={`events-${index}`}
                 index={index}
                 image={event.image}
                 title={event.title}
                 description={event.description}
                 dates={event.dates}
               />
             );
           })}
          </div>


        </div>


</div>

  )
}

export default Timeline
