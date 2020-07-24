const newsletterFeed = require(`./src/utils/newsletterFeed`);

module.exports = (options) => {
	const { feed = true, feedTitle = `Minimal Blog - @lekoarts/gatsby-theme-minimal-blog` } = options;

	return {
		siteMetadata: {
			siteTitle: `Naren's Blog`,
			siteTitleAlt: `Narendra Nath Gogineni's Blog`,
			siteHeadline: `Narendra Nath Gogineni's Personal Website`,
			siteUrl: `https://naths.in`,
			siteDescription: `Hey, I'm Narendra Nath Gogineni. and this is my personal website`,
			siteLanguage: `en`,
			siteImage: `/picture-of-naren-512x512.png`,
			author: `Narendra Nath Gogineni`
		},
		plugins: [
			{
				resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
				options
			},
			feed && {
				resolve: `gatsby-plugin-feed`,
				options: newsletterFeed(feedTitle)
			},
			`gatsby-plugin-react-helmet`,
			`gatsby-plugin-typescript`,
			`gatsby-plugin-catch-links`,
			`gatsby-plugin-theme-ui`
		].filter(Boolean)
	};
};
