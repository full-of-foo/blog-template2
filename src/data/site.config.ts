interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://blog-template-gray.vercel.app/', // Write here your website url
	author: 'Tony Troy', // Site author
	title: '♡ useless tech ramblings ♡', // Site title.
	description: 'Code Pirate, Project Monkey',
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share', // Message to share a post on social media
	paginationSize: 600 // Number of posts per page
}
