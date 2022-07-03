import s from './Projects.module.css'
import {ProjectItem} from "../ProjectItem/ProjectItem";
import moon_icon from '../../Assets/Images/moon.png'
import moon_purple_icon from '../../Assets/Images/moon-purple.png'
import cards_icon from '../../Assets/Images/cards.png'
import radiation_icon from '../../Assets/Images/radiation.png'
import sheep_icon from '../../Assets/Images/holySheep.png'
import covid_icon from '../../Assets/Images/covid.png'

const moonMsgDescription = <span>It's my social network project - <b>MOON msg!</b> I use in the this project <b>React</b>, <b>Redux</b>, <b>Rest-api</b>, <b>CSS</b>, <b>AXIOS</b> and more.</span>
const cardsDescription = <span>It's team-work project. Our team used <b>TailwindCSS</b>, <b>JS</b>, <b>TS</b>, <b>React</b>, <b>Redux+toolkit</b>, <b>ESLint</b>; Using Typescript for best code control during development.</span>
const moonTasksDescription = <span>It's my ToDo-application - MOON tasks! I used <b>JS</b>, <b>TS</b>,  <b>React</b>, <b>Redux+toolkit</b>, <b>CSS</b> and more.</span>
const moonTasksMobileDescription = <span>Mobile ToDo-application. The same application, only for the phone. Made in <b>React-native.</b></span>
const rgHelperFrontendDescription = <span>Application for receiving patients in the X-ray department. <b>React</b>, <b>Redux</b>, <b>TailwindCSS</b>, <b>AXIOS</b> and more. </span>
const rgHelperBackendDescription = <span>Rg-helper Backend: <b>NodeJS</b>, <b>PostgreSQL</b>, <b>Express</b>.</span>
const holySheepDescription = <span>This is my android mobile game. Made in <b>C#</b> and <b>Unity</b>. </span>
const covidKillerDescription = <span>This is my JS game. Made in <b>JS canvas</b>. <small>In developing...</small></span>

export const Projects = () => {
    return (
        <div className={s.projectsContainer}>
            <div className={s.titleProjects}>
                <span className={s.rotate_title}>Projects</span>
            </div>
            <div className={s.projectItems} id={'projects'}>
                <ProjectItem title={'Moon!msg'}
                             backgroundColor={'var(--background)'}
                             borderColor={'#1C4F7C'}
                             icon={moon_icon}
                             colorFont={'#1C4F7C'}
                             shadowColor={'#1C4F7C'}
                             description={moonMsgDescription}
                             linkGitHub={'https://github.com/marinadegames/moon-msg'}
                             linkPage={'https://marinadegames.github.io/moon-msg/'}/>
                <ProjectItem title={'Cards'}
                             backgroundColor={'white'}
                             borderColor={'#717286'}
                             icon={cards_icon}
                             colorFont={'#717286'}
                             shadowColor={'#717286'}
                             description={cardsDescription}
                             linkGitHub={'https://github.com/ershisan99/cards'}
                             linkPage={'https://ershisan99.github.io/cards/'}/>
                <ProjectItem title={'Moon!tasks'}
                             backgroundColor={'var(--pink)'}
                             borderColor={'#75569C'}
                             icon={moon_purple_icon}
                             colorFont={'#75569C'}
                             shadowColor={'#75569C'}
                             description={moonTasksDescription}
                             linkGitHub={'https://github.com/marinadegames/moon-tasks'}
                             linkPage={'https://marinadegames.github.io/moon-tasks/'}/>
                <ProjectItem title={'Moon!tasks'}
                             subTitle={'mobile 📱'}
                             backgroundColor={'var(--pink)'}
                             borderColor={'#75569C'}
                             icon={moon_purple_icon}
                             colorFont={'#75569C'}
                             shadowColor={'#75569C'}
                             description={moonTasksMobileDescription}
                             linkGitHub={'https://github.com/marinadegames/todolist-mobile'}/>
                <ProjectItem title={'Rg-helper'}
                             subTitle={'frontend'}
                             backgroundColor={'var(--black)'}
                             borderColor={'var(--yellow)'}
                             icon={radiation_icon}
                             colorFont={'white'}
                             shadowColor={'var(--yellow)'}
                             gitWhite={true}
                             description={rgHelperFrontendDescription}
                             linkPage={'https://rg-helper-front.herokuapp.com/'}
                             linkGitHub={'https://github.com/marinadegames/rg-helper-front'}/>
                <ProjectItem title={'Rg-helper'}
                             subTitle={'backend'}
                             backgroundColor={'var(--black)'}
                             borderColor={'var(--yellow)'}
                             icon={radiation_icon}
                             colorFont={'white'}
                             shadowColor={'var(--yellow)'}
                             gitWhite={true}
                             description={rgHelperBackendDescription}
                             linkGitHub={'https://github.com/marinadegames/rg-helper-back'}/>
                <ProjectItem title={'Holy sheep!'}
                             backgroundColor={'#F2F6F9'}
                             borderColor={'#7595B2'}
                             icon={sheep_icon}
                             colorFont={'#7595B2'}
                             shadowColor={'#7595B2'}
                             description={holySheepDescription}
                             linkPage={'https://play.google.com/store/apps/details?id=com.MarinadeGames.HolySheep&hl=ru&gl=US'}/>
                <ProjectItem title={'Covid Killer'}
                             subTitle={'game'}
                             backgroundColor={'white'}
                             borderColor={'black'}
                             icon={covid_icon}
                             colorFont={'black'}
                             shadowColor={'black'}
                             description={covidKillerDescription}/>
            </div>
        </div>
    )
}