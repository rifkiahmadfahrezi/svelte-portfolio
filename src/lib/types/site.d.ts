export type SiteConfig = {
	name: string;
	description: string;
	profileImage?: string;
	navbarMenus: NavbarMenu[];
};

export type NavbarMenu = {
	label: string;
	link: string;
	newTab?: boolean;
};

export type PersonalInfo = {
	fullName: string;
	bio: string;
	experience?: Experience[];
	education?: Education[];
	projects?: Projects[];
};

export type Experience = {
	company: string;
	position: string;
	from: string;
	until: string;
	description?: string;
};
export type Education = {
	school: string;
	major: string;
	from: string;
	until: string;
	description?: string;
};
export type Projects = {
	title: string;
	description: string;
	techStack?: string[];
	role?: string[];
	link: string;
};
