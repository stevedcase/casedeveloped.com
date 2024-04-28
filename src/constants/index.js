import {
	cmsdevelopment,
	frontend,
	frameworks,
	agile,
	discovery,
	lockheed,
	c30yes,
	fleishmanhillard,
	jesswitmer,
	jacobebenhoe,
	deyslthumb,
	deysl,
	defwkthumb,
	defwk,
	defuturelabthumb,
	defuturelab,
	deboeingthumb,
	deboeing,
	depathwaysthumb,
	depathways,
	nfldfsthumb,
	nfldfs,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "experience",
		title: "Experience",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Front End Development",
		icon: frontend,
	},
	{
		title: "CMS Development",
		icon: cmsdevelopment,
	},
	{
		title: "Libraries & Frameworks",
		icon: frameworks,
	},
	{
		title: "Agile Workflows",
		icon: agile,
	},
];

const experiences = [
	{
		title: "Senior Software Engineer",
		company_name: "Discovery Education",
		company_url: "https://www.discoveryeducation.com/",
		company_location: "Silver Spring, Maryland",
		icon: discovery,
		iconBg: "#017695",
		date: "January 2019 - October 2023",
		points: [
			"Integral part of the Corporate Education Partnerships (CEP) development team, delivering websites for renowned clients including Boeing, Home Depot, Discover, and 3M",
			"Managed and maintained approximately two dozen client properties utilizing both the Drupal CMS (8/9) and the React-based Gatsby.js framework",
			"Collaborated with cross-functional teams to refine project requirements, ensuring consistent client satisfaction",
			"Conducted code reviews, Git repository management, issue resolution, and performance optimization efforts, resulting in seamless user experiences and error-free applications",
		],
	},
	{
		title: "Software Engineer",
		company_name: "Lockheed Martin",
		company_url: "https://www.lockheedmartin.com/",
		company_location: "Crystal City, Virginia",
		icon: lockheed,
		iconBg: "#003478",
		date: "March 2016 - November 2018",
		points: [
			"Collaborated on a large-scale Drupal 8 GSA portal upgrade project for the Government Services Administration (GSA)",
			"Optimized the GSA portal's front-end, creating Twig-based templates and enhancing the custom GSA theme",
			"Integrated community-contributed Drupal 8 modules and co-developed custom modules to expand project functionality",
			"Conducted comprehensive testing, including unit, integration, and performance testing, to ensure scalability and usability",
			"Actively engaged in agile development processes, including sprint planning, daily stand-ups, and retrospectives, enhancing team efficiency and project success",
		],
	},
	{
		title: "Technical Team Manager & Front End Developer",
		company_name: "Carousel 30, a Yes& Company",
		company_url: "https://yesandagency.com/",
		company_location: "Alexandria, Virginia",
		icon: c30yes,
		iconBg: "#C10230",
		date: "November 2011 - February 2016",
		points: [
			"Led development projects, overseeing time management, conducting code reviews, and providing training for both in-house developers and external contractors",
			"Managed front-end development, ensuring cross-browser compatibility, conducting weekly code reviews, and collaborating with the creative department to meet client expectations",
			"Participated in design reviews with the creative department to create new websites and client digital assets",
			"Developed Drupal 7 custom theme templates adhering to industry standards",
		],
	},
	{
		title: "Junior Developer",
		company_name: "Fleishmand Hillard",
		company_url: "https://fleishmanhillard.com/",
		company_location: "Washington, DC",
		icon: fleishmanhillard,
		iconBg: "#528DD7",
		date: "October 2009 - November 2011",
		points: [
			"Created and managed web applications in .NET, Drupal, and WordPress, aligning with technical and client specification",
			"Collaborated with cross-functional teams, encompassing designers, product managers, and developers, to craft top-tier products",
			"Enforced responsive design and cross-browser compatibility",
			"Actively engaged in code reviews, offering constructive feedback to fellow developers",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"As a designer, I am always excited to collaborate with Steve. His attention to detail and aligned visual intent allowed us to deliver high-quality products to market on aggressive timelines. He is a multi-talented engineer who can lead a project with a wide range of stakeholders and product goals. Steve is a developer who any designer would want to be paired with!",
		name: "Jessica Muñiz Witmer",
		//linkedinurl: "https://www.linkedin.com/in/jessicawitmer/",
		designation: "Senior Product Designer",
		company: "Colorhive",
		image: jesswitmer,
	},
	{
		testimonial:
			"Steve was an invaluable asset to our team, seamlessly blending exceptional technical expertise with a rare gift for clear communication. His dedication to project success, coupled with his vibrant personality, made collaborating with him an absolute pleasure.",
		name: "Jocob Ebenhoe",
		//linkedinurl: "https://www.linkedin.com/in/jacob-ebenhoe-05a24684/",
		designation: "Senior Project Manager",
		company: "Sparq",
		image: jacobebenhoe,
	},
	{
		testimonial:
			"Our original CMS was clunky and difficult to use. However, Steve worked directly with our internal team to rebuild our in-house CMS and the improvement is massive. Our content team is literally thrilled to make updates now. Our team can't thank him enough for understanding our software needs and helping us craft an optimal and sustainable solution.",
		name: "Lisa Wang",
		//linkedinurl: "",
		designation: "Product Manager",
		company: "Discovery Education",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "3M Young Scientist Lab",
		description:
			"The 2023 3M Young Scientist Challenge is an annual challenge allowing students the opportunity to submit a potentially life-changing idea voted on by a panel of judges and public voters with a chance to become 3M's Top Young Scientist. Developed in Drupal 9 with a Gatsby.js front end, the revamp includes individual user roles, a student blog feature and the ability for content managers to add and update content on a daily basis.",
		tags: [
			{
				name: "Gatsby",
				color: "blue-text-gradient",
			},
			{
				name: "Drupal 9",
				color: "green-text-gradient",
			},
			{
				name: "SCSS",
				color: "pink-text-gradient",
			},
		],
		videothumb: deyslthumb,
		video: deysl,
		project_link: "https://youngscientistlab.com/",
	},
	{
		name: "Future Well Kids",
		description:
			"The Future Well Kids program teaches kids ages 10-13 about chronic diseases – also called noncommunicable diseases (NCDs) – and how they can stay healthy and reduce their risk of developing chronic diseases later in life. Primarily built using the Gatsby.JS framework, Future Well Kids also has a content managed backend and is available in six different languages.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Drupal 9",
				color: "green-text-gradient",
			},
			{
				name: "SASS",
				color: "pink-text-gradient",
			},
		],
		videothumb: defwkthumb,
		video: defwk,
		project_link: "https://futurewellkids.com/",
	},
	{
		name: "Genentech FutureLab+",
		description:
			"Launched in 2022, Futurelab+ aims to increase the number and diversity of students receiving a quality high school biotech education by offering a free, equity-centered curriculum designed by and for teachers. Developed using the React-based Gatsby.js framework, Futurelab+ includes rich video content, Virtual field trips (VFTs), and ensures an optimal learning experience for students and educators alike.",
		tags: [
			{
				name: "Gatsby",
				color: "blue-text-gradient",
			},
			{
				name: "Azure Media Player",
				color: "green-text-gradient",
			},
			{
				name: "SCSS",
				color: "pink-text-gradient",
			},
		],
		videothumb: defuturelabthumb,
		video: defuturelab,
		project_link: "https://futurelabplus.com/",
	},
	{
		name: "BOEING FutureU",
		description:
			"FUTURE U. aims to inspire the next generation of aerospace innovation by providing standards-aligned, STEM-focused educational resources for middle and high school students. Developed in Drupal 8 (recently migrated to 9), FUTURE U. utilizes custom theme-based twig templates, both custom and community contributed modules, and custom jQuery for a diverse set of functionality.",
		tags: [
			{
				name: "Drupal 8",
				color: "green-text-gradient",
			},
			{
				name: "SASS",
				color: "pink-text-gradient",
			},
			{
				name: "jQuery",
				color: "blue-text-gradient",
			},
		],
		videothumb: deboeingthumb,
		video: deboeing,
		project_link: "https://www.boeingfutureu.com/",
	},
	{
		name: "Discover's Pathways",
		description:
			"Pathway to Financial Success in Schools empowers middle school and high school students to take control of their financial futures and set their paths for financial success. Pathways The full capability of the Drupal content management system, including React-based interactive educational modules, rich instructional videos, and a fully functional, user-friendly content-managed backend.",
		tags: [
			{
				name: "Drupal 8",
				color: "green-text-gradient",
			},
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "SASS",
				color: "pink-text-gradient",
			},
		],
		videothumb: depathwaysthumb,
		video: depathways,
		project_link: "https://www.pathwayinschools.com/",
	},
	{
		name: "DFS NFL Showdown Study",
		description:
			"NFL-SS is personal project in active development that harnesses historical data from respected DFS research pioneers I subscribe to (Stokastic and Fantasy Cruncher). It delves deep into the realm of fantasy sports, meticulously analyzing team and player performance to help predict each player's best odds and suggests player pairings to help create a winning lineup for NFL DFS showdowns. The current build is powered by a dynamic React.js front-end and a robust Python backend.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "SASS",
				color: "pink-text-gradient",
			},
			{
				name: "Python",
				color: "green-text-gradient",
			},
		],
		videothumb: nfldfsthumb,
		video: nfldfs,
		project_link: "#",
	},
];

export { services, experiences, testimonials, projects };
