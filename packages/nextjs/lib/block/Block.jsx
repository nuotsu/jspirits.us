import dynamic from 'next/dynamic'

const AssetList = dynamic(() => import('./AssetList'))
const ContactForm = dynamic(() => import('./form/ContactForm'))
const ContentBox = dynamic(() => import('./ContentBox'))
const FAQList = dynamic(() => import('./FAQList'))
const Gallery = dynamic(() => import('./Gallery'))
const GameList = dynamic(() => import('./game/GameList'))
const GameListCompact = dynamic(() => import('./game/GameListCompact'))
const HeroHome = dynamic(() => import('./HeroHome'))
const NewsList = dynamic(() => import('./NewsList'))
const Roster = dynamic(() => import('./roster/Roster'))
const UpcomingGameList = dynamic(() => import('./game/UpcomingGameList'))

const Block = ({ _type, ...props }) => {
	switch (_type) {
		case 'assetList': return <AssetList {...props} />
		case 'contactForm': return <ContactForm {...props} />
		case 'contentBox': return <ContentBox {...props} />
		case 'faqList': return <FAQList {...props} />
		case 'gallery': return <Gallery {...props} />
		case 'gameList': return <GameList {...props} />
		case 'gameListCompact': return <GameListCompact {...props} />
		case 'heroHome': return <HeroHome {...props} />
		case 'newsList': return <NewsList {...props} />
		case 'roster': return <Roster {...props} />
		case 'upcomingGameList': return <UpcomingGameList {...props} />
		default: return <pre>{_type}</pre>
	}
}

export default Block
