export type SocialMedia = {
	icon: string
	url: string
	name: string
}

export type Education = {
	course: string
	school: string
	marksheet: string
	cgpa: string
}

export type ExperienceStyle = {
	bg_color: string
	font_color: string
	icon_path: string
}

export type ExperienceMap = {
	[id: string]: ExperienceStyle
}



export type GithubContribution = {
	title: string
	author: string
	date: string
	type: string
	link: string
	description: string
	tech: string
}


export type Series = {
	metadata: {
		title: string
		description: string
		date: string
		published: true
		slug: string
	}
	blogs: Blog[]
}
export type Blog = {
	title: string
	slug: string
	description: string
	date: string
	categories: string[]
	published: boolean
}

export type Experience = {
	id: string,
	designation: string
	company: string
	industry: string
	location: string
	duration: string
	join_year: number
	type: string
}


export type ContributionButton = {
	id:string,
	iconEmoji: string,
	label: string,
	description: string,
	bgColor: string,
	textColor: string,
}

export type Award = {
	title: string
	organization: string
	type: string
	description: string
	time: string
	year: number
	proof_link: string
}

