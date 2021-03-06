import { BsFileTextFill } from 'react-icons/bs'
import { t } from '../locales'
import fields from '../fields'

export default {
	name: 'contentBox',
	title: 'Content box',
	icon: BsFileTextFill,
	type: 'object',
	fields: [
		{
			name: 'heading',
			type: 'heading',
			options: { collapsible: true, collapsed: true, },
		},
		fields.richtext(),
		{
			name: 'cta',
			title: 'CTA',
			type: 'cta',
			options: { collapsible: true, collapsed: true, },
		},
	],
	preview: {
		select: {
			heading: 'heading.text',
		},
		prepare({ heading }) {
			return {
				title: t(heading),
				subtitle: 'Content box',
			}
		},
	},
}
