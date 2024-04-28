import { BrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, Footer } from "./components";
import ReactGA from "react-ga4";

const trackingId = "G-NRYFT3CWKJ";
ReactGA.initialize(trackingId);

const App = () => {
	useEffect(() => {
		ReactGA.send("pageview");
	}, []);

	return (
		<>
			<BrowserRouter>
				<div className="app-container relative z-0 bg-primary">
					{/* Main Nav & Hero */}
					<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
						<Navbar />
						<Hero />
					</div>
					{/* Main Page Content */}
					<About />
					<Experience />
					<Works />
					<Feedbacks />
					{/* Footer */}
					<div className="contact-footer relative z-0">
						<Contact />
						<StarsCanvas />
						<Footer />
					</div>
				</div>
			</BrowserRouter>
		</>
	);
};

export default App;
