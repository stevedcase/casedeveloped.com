import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Service Card Component
const ServiceCard = ({ index, title, icon, description }) => (
	<Tilt className="xs:w-[250px] w-full">
		<motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
			>
				<img src={icon} title={description} className="tech-icons w-26 h-26 object-contain" />
				<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
			</div>
		</motion.div>
	</Tilt>
);

// About Component
const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
				Greetings, esteemed colleagues, and happy 2025! I'm Steve Case, and this virtual space serves as my professional hub on the web. As a seasoned
				software developer with over a decade of experience, I specialize in crafting front-end applications, websites, and comprehensive content
				management systems. Throughout my career, I've had the privilege of working with distinguished organizations and renowned brands, including
				VISA, AT&T, Lockheed Martin, Boeing, 3M, and the Federal Trade Commission (FTC). My solo and collaborative efforts have contributed to
				award-winning products and immersive web experiences, some of which are <a href="#work">showcased below</a>.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
