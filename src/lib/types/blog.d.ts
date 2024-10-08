export type Category = 'website' | 'frontend' | 'backend' | 'database' | 'devops' | 'tips' | 'learn' | 'oot'

export type Blog = {
	title: string;
	date: string;
	published: boolean;
	description?: string;
	content: string;
	slug: string;
	tags?: string[];
	categories: Category[];
};