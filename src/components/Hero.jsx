import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// Hero Component
const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			{/* Wavy background pattern effect */}
			<div className={`${styles.paddingX} absolute inset-0 top-[50px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
				<div className="flex flex-col justify-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#804dee]" />
					<div className="gradient-bar w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				{/* Intro Heading and sub text */}
				<div className="hero-heading">
					<h1 className={`${styles.heroHeadText} text-white`}>
						Steve <span className="text-[#804dee]">Case</span>
					</h1>
					<p className={`${styles.heroSubText} text-white-100`}>
						Front-End Engineer <br /> & CMS Developer
					</p>
				</div>
			</div>
			{/* Render Computer Canvas */}
			<ComputersCanvas />
			{/* Animated Scroller Icon */}
			<div className="absolute xs:bottom-20 bottom-10 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full scroll-ball mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
