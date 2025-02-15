import React from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { reactjs } from "../assets";
import { tailwindcss } from "../assets";
import { threejs } from "../assets";

const Footer = () => {
	return (
		<div className="footer max-w-7xl">
			<div className="footer-logos-wrapper">
				<span className="made-with">Made with</span>
				<ul className="footer-logos">
					<li>
						<Link to="https://react.dev/" target="_blank">
							<img src={reactjs} className="footer-reactjs" />
						</Link>
					</li>
					<li>
						+{" "}
						<Link to="https://tailwindcss.com/" target="_blank">
							<img src={tailwindcss} className="footer-tailwind" />
						</Link>
					</li>
					<li>
						+{" "}
						<Link to="https://threejs.org/" target="_blank">
							<img src={threejs} className="footer-threejs" />
						</Link>
					</li>
				</ul>
			</div>
			<div className="copyright">Case Developed, LLC &copy; 2025</div>
		</div>
	);
};

export default Footer;
