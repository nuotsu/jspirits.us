import client from 'utils/sanity'
import groq from 'utils/groq'
import Page from 'lib/Page'

const Pg404 = ({ page }) => <Page {...page} />

export default Pg404

export async function getStaticProps({ locale }) {
	const { page, ...global } = await client.fetch(`
		{
			'page': *[_type == 'page' && slug.current == '404'][0]{
				...,
				blocks[]{
					...,
					cta{ ${groq.cta} }
				}
			},
			${groq.global}
		}
	`)

	return {
		props: {
			locale,
			page,
			global
		}
	}
}
