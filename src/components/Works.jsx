import React from "react";
import { motion } from "framer-motion";
import HoverVideoPlayer from "react-hover-video-player";

import { styles } from "../styles";
import { website } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, video, videothumb, project_link }) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="project-card">
			<div className="relative bg-tertiary p-5 rounded-2xl xs:w-full sm:w-[360px] w-full">
				<div
					onClick={() => window.open(project_link, "_blank")}
					className="website-icon absolute white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
				>
					<img src={website} alt="website" className="w-1/2 h-1/2 object-contain" />
				</div>
				<div className="relative w-full">
					<HoverVideoPlayer
						videoSrc={video}
						pausedOverlay={
							<img
								src={videothumb}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
								}}
							/>
						}
					/>
				</div>

				<div className="card-body">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>

				<div className="flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
			</div>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()} className="works-heading">
				<p className={`${styles.sectionSubText} `}>My work</p>
				<h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p variants={fadeIn("", "", 0.1, 1)} className="works-intro mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
					Below are a few samples of some of my most recent work as a software developer at Discovery Education. I embarked on a thrilling journey
					through the dynamic realm of educational technology and as a key member of the development team, I had the opportunity to work on a wide
					array of exciting projects and technologies. What made this experience truly remarkable was the challenge of transforming intricate designs
					from our award-winning creative team into functional, user-friendly digital solutions.
				</motion.p>
			</div>

			<div className="card-container mt-16 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "work");
