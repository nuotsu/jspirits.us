import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'

export const locales = [
	{ value: 'en', label: 'πΊπΈ English' },
	{ value: 'ja', label: 'π―π΅ ζ₯ζ¬θͺ' },
]

export const defaultLocale = 'en'

export default translation => {
	const { locale, defaultLocale } = useContext(GlobalContext)

	if (!translation) return

	return translation[locale] || translation[defaultLocale]
}
