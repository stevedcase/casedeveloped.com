import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import resume from "../assets/docs/Steve-Case-Resume.pdf";
import resumeicon from "../assets/general/resume-icon.png";

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#1d1836",
				color: "#fff",
			}}
			contentArrowStyle={{ borderRight: "7px solid  #232631" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<Link to={experience.company_url} target="_blank">
						<img src={experience.icon} alt={experience.company_name} className="w-[100%] h-[100%] object-contain" />
					</Link>
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
				<p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
					{experience.company_name} | <span>{experience.company_location}</span>
				</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.points.map((point, index) => (
					<li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()} className="experience-intro">
				<p className={`${styles.sectionSubText} text-center`}>Great Companies. Great People.</p>
				<h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
			</motion.div>

			<div className="experience-timeline mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard key={`experience-${index}`} experience={experience} />
					))}
					<Link to={resume} target="_blank" className="resume">
						<img src={resumeicon} className="resume-icon" />
						<div className="resume-download-icon">
							<svg viewBox="0 0 512 512">
								<linearGradient id="gr1" x2="0" y2="200%" spreadMethod="reflect" gradientUnits="userSpaceOnUse">
									<animateTransform
										attributeType="XML"
										repeatCount="indefinite"
										attributeName="gradientTransform"
										from="0 0"
										to="0 2048"
										dur="3s"
										type="translate"
									></animateTransform>
									<stop offset="0%" stopColor="currentColor" stopOpacity="var(--stop-opacity, .2)" />
									<stop offset="40%" stopColor="currentColor" stopOpacity="var(--stop-opacity, .2)" />
									<stop offset="50%" stopColor="currentColor" />
									<stop offset="60%" stopColor="currentColor" stopOpacity="var(--stop-opacity, .2)" />
									<stop offset="100%" stopColor="currentColor" stopOpacity="var(--stop-opacity, .2)" />
								</linearGradient>
								<g>
									<path
										fill="url(#gr1)"
										d="M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64
			c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472
			c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z"
									/>
									<path fill="currentColor" d="M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z" />
								</g>
							</svg>
						</div>
					</Link>
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "experience");
