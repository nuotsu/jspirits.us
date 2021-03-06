import { localize, t } from '../locales'

export const internalLink = {
	name: 'internalLink',
	title: 'Internal link',
	type: 'object',
	fields: [
		{
			name: 'link',
			type: 'reference',
			to: [{ type: 'page' }],
		},
		{ name: 'label', ...localize({ type: 'string' }), },
	],
	preview: {
		select: {
			title: 'link.title',
			label: 'label',
		},
		prepare({ title, label }) {
			return {
				title: t(label || title),
			}
		},
	},
}

export const externalLink = {
	name: 'externalLink',
	title: 'External link',
	type: 'object',
	fields: [
		{ name: 'url', title: 'Link', type: 'url', },
		{ name: 'label', ...localize({ type: 'string' }), },
	],
	preview: {
		select: {
			title: 'label',
			subtitle: 'url',
		},
		prepare({ title, subtitle }) {
			return {
				title: t(title),
				subtitle,
			}
		},
	},
}
