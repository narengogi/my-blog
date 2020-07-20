require(`dotenv`).config({
	path: `.env`
});

module.exports = {
	siteMetadata: {
		siteUrl: `https://www.naths.in`,
		siteTitleAlt: `Naren's Blog`
	},
	plugins: [
		{
			resolve: `@lekoarts/gatsby-theme-minimal-blog`,
			// See the theme's README for all available options
			options: {
				navigation: [
					{
						title: `Blog`,
						slug: `/blog`
					},
					{
						title: `About`,
						slug: `/about`
					}
				],
				externalLinks: [
					{
						name: `Facebook`,
						url: `https://www.facebook.com/Narendranathgogineni/`
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
