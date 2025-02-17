import AboutCard from "./AboutCard";

import { topToBottom } from "../../animations/topToBottom"
import { leftToRight } from "../../animations/leftToRight"
import { rightToLeft } from "../../animations/rightToLeft"
import { bottomToTop } from "../../animations/bottomToTop";

import ContentAbout1 from "./about_card_contents/ContentAbout1";
import ContentAbout2 from "./about_card_contents/ContentAbout2";
import ContentAbout3 from "./about_card_contents/ContentAbout3";
import ContentAbout4 from "./about_card_contents/ContentAbout4";
import ContentAbout5 from "./about_card_contents/ContentAbout5";

import AboutCardMid from "./AboutCardMid";
import ContentAbout6 from "./about_card_contents/ContentAbout6";
import ContentAbout7 from "./about_card_contents/ContentAbout7";

const AboutCards = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 pt-20 pb-15 px-10 md:px-15 lg:px-40 gap-3 place-self-center text-center content-center text-white">
            <AboutCard
            content={<ContentAbout1/>}
            additionalProperties="order-1 flex items-center justify-center"
            aniVariant={leftToRight()}
            aniDelay={0.3}
            />
            <AboutCard 
            content={<ContentAbout2/>}
            additionalProperties="order-2 flex items-center justify-center"
            aniDelay={0.4}
            />
            <AboutCard
            content={<ContentAbout3/>}
            additionalProperties="order-3 row-span-1 md:row-span-2"
            aniVariant={bottomToTop()}
            aniDelay={1}
            />
            <AboutCard
            content={<ContentAbout4/>}
            additionalProperties="order-last md:order-4 row-span-2"
            aniVariant={topToBottom()}
            aniDelay={1}
            />
            <AboutCardMid
            content={<ContentAbout5/>}
            additionalProperties="order-first md:order-5"
            />
            <AboutCard
            bgColor="bg-black/65 hover:transition hover:duration-200 hover:text-amber-900 hover:bg-amber-300"
            content={<ContentAbout6/>}
            additionalProperties="order-4 md:order-6 content-center"
            aniVariant={topToBottom()}
            aniDelay={0.6}
            />
            <AboutCard
            bgColor="bg-black/65 hover:transition hover:duration-200 hover:text-amber-900 hover:bg-amber-300"
            content={<ContentAbout7/>}
            additionalProperties="order-5 md:order-7 content-center"
            aniVariant={rightToLeft()}
            aniDelay={0.5}/>
        </div>
    )
}

export default AboutCards