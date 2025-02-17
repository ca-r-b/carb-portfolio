import ContactCard from "../components/contact/ContactCard"
import SubHeader from "../components/SubHeader"
import SubHeaderInfo from "../components/SubHeaderInfo"
import Header from "../components/Header"

import { FaLinkedin, FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Contact = () => {

  const iconSize = 20;

  return (
    <>
      <div className="flex flex-col mx-auto p-10">
        <Header 
        body="CONNECT WITH ME"
        isVerticalAnimation={false}
        />
        <div className="mb-15">
          <SubHeader 
          body="Let's build something awesome together! 🛠️"
          directionLTR={true}
          animDelay={0.7}
          />
          <SubHeaderInfo 
          body="I'm all about exploring new creative avenues. If you have any exciting projects or collaborations in mind, I'd be more than happy to join you and help out!"
          directionLTR={true}
          animDelay={0.9}
          />
        </div>
        <div>
          <div className="mb-4">
            <SubHeader 
            body="Drop me a line! 📱"
            directionLTR={true}
            animDelay={1}/>
            <SubHeaderInfo 
            body="I'm easy to reach! Contact me through any of the channels below."
            directionLTR={true}
            animDelay={1.2}
            />
            <div className="mt-3 flex flex-col md:flex-row gap-3 mx-auto mb-[0%] justify-center items-center">
              <ContactCard 
              icon={<FaLinkedin size={iconSize}/>} 
              details="Carlo Antonio R. Batac" 
              link="https://www.linkedin.com/in/carlo-antonio-batac-a752aa235/"
              animDelay={1.4}
              />
              <ContactCard 
              icon={<MdEmail size={iconSize}/>} 
              details="car.batac@gmail.com"
              link="mailto:car.batac@gmail.com"
              animDelay={1.6}
              />
              <ContactCard 
              icon={<FaPhone size={iconSize}/>} 
              details="(+63) 966 1303 969"
              animDelay={1.8}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact