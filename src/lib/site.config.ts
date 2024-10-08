import type { SiteConfig, PersonalInfo } from './types/site';

export const site: SiteConfig = {
	name: 'Rifki',
	description: 'Fullstack website developer',
	navbarMenus: [
		{
			label: 'Home',
			link: '/'
		},
		{
			label: 'About',
			link: '/about'
		},
		{
			label: 'Blogs',
			link: '/blogs'
		}
	]
};

export const personalInfo: PersonalInfo = {
	fullName: `Alex Johnson`,
	bio: `Full-stack web developer with a passion for creating dynamic and user-friendly websites. Skilled in both frontend and backend technologies with 5+ years of experience.`,
	experience: [
		{
			company: `Tech Solutions Inc.`,
			position: `Senior Web Developer`,
			from: `January 2020`,
			until: `Present`,
			description: `Leading a team of developers in building scalable web applications using modern frameworks such as React and Node.js.`
		},
		{
			company: `Creative Web Studio`,
			position: `Frontend Developer`,
			from: `June 2017`,
			until: `December 2019`,
			description: `Developed responsive and accessible websites using HTML, CSS, JavaScript, and React. Collaborated with designers to implement UI/UX improvements.`
		}
	],
	education: [
		{
			school: `University of Tech`,
			major: `Bachelor's Degree in Computer Science`,
			from: `September 2013`,
			until: `May 2017`,
			description: `Studied core subjects like Algorithms, Data Structures, and Web Development, and completed a capstone project on e-commerce application development.`
		}
	],
	projects: [
		{
			title: `E-commerce Platform`,
			description: `Developed a full-featured e-commerce platform with product listings, shopping cart, and payment integration.`,
			techStack: [`React`, `Node.js`, `MongoDB`, `Stripe`],
			role: [`Lead Developer`, `Backend Developer`],
			link: `https://ecommerce-platform-demo.com`
		},
		{
			title: `Portfolio Website`,
			description: `Personal portfolio website showcasing web development projects and skills.`,
			techStack: [`Next.js`, `Tailwind CSS`],
			role: [`Frontend Developer`, `Designer`],
			link: `https://alexjohnson.dev`
		}
	]
};

