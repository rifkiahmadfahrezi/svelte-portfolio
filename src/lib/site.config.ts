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

export const me: PersonalInfo = {
	fullName: 'Rifki ahmad fahrezi',
	bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat eius aperiam nisi provident fuga voluptas quae unde neque sequi aliquam at ipsa, saepe expedita maiores magni dolorem, nesciunt officia cupiditate!'
};
