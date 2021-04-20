require(`dotenv`).config({
	path: `.env`
});

module.exports = {
	siteMetadata: {
		siteUrl: `https://www.naths.in`,
		siteTitle: `Naren's website`,
		siteTitleAlt: `Naren's personal website`,
		siteHeadline: `Naren's website`,
		siteDescription: `Narendra Nath Gogineni's personal website`,
		siteLanguage: `en`,
		siteImage: `/favicon-32x32.jpg`,
		author: `Narendra Nath Gogineni`
	},
	plugins: [
		{
			resolve: `@lekoarts/gatsby-theme-minimal-blog`,
			// See the theme's README for all available options
			options: {
				navigation: [
					{
						title: `Essays`,
						slug: `/blog`
					},
					{
						title: `Unindexed/Links`,
						slug: `/unindexed`
					}
				],
				externalLinks: [
					{
						name: `Github`,
						url: `https://www.github.com/nathsin/`
					}
					// {
					// 	name: `Instagram`,
					// 	url: `https://www.instagram.com/lekoarts.de/`
					// }
				]
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-171747963-1'
			}
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Narendra Nath Gogineni's blog`,
				short_name: `naren's blog`,
				description: `Hey, I'm Narendra Nath Gogineni, and this is my personal website.`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#6B46C1`,
				display: `standalone`,
				icons: [
					{
						src: `/picture-of-naren-192x192.png`,
						sizes: `192x192`,
						type: `image/png`
					},
					{
						src: `/picture-of-naren-512x512.png`,
						sizes: `512x512`,
						type: `image/png`
					}
				]
			}
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-netlify`
	]
};
