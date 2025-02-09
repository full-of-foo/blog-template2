import TwitterIcon from '@/components/icons/TwitterIcon'
import GithubIcon from '@/components/icons/GithubIcon'
import LinkedInIcon from '@/components/icons/LinkedInIcon'

// ADD YOUR SOCIAL NETWORKS HERE
export const SOCIALNETWORKS = [
	{
		name: 'Github',
		url: 'https://github.com/full-of-foo',
		icon: GithubIcon
	},

	{
		name: 'Twitter',
		url: 'https://x.com/devtoeknee',
		icon: TwitterIcon
	},

	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/anthony-troy',
		icon: LinkedInIcon
	}
] as const
