import Placeholder from '../../components/Placeholder'
import { identity } from '../../data/site'
export default function AboutStory(){return(<Placeholder eyebrow="About · Our Story" title="The Syntex story." description={`${identity.legal} was incorporated in ${identity.incorporated} in ${identity.region}, ${identity.country}. A fuller company history is being prepared.`} breadcrumbs={[{label:'About',to:'/about'},{label:'Our Story'}]} suggestions={[{to:'/about',label:'About Syntex'},{to:'/about/vision-mission',label:'Vision & Mission'}]}/>)}
