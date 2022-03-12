export default {
	name: 'site',
	title: 'Site settings',
	type: 'document',
	__experimental_actions: ['update', 'publish'],
	fields: [
		{
			name: 'title',
			type: 'object',
			fields: [
				{ name: 'short', type: 'localeString', },
				{ name: 'long', type: 'localeString', },
			]
		},
	],
	preview: {
		prepare() {
			return {
				title: 'Site settings',
			};
		},
	},
}