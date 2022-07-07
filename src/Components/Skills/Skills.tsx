import s from './Skills.module.css'
import {SkillItem} from "../SkillItem/SkillItem";
import react_icon from '../../Assets/Images/react.png'
import react_native_icon from '../../Assets/Images/react-native.png'
import js_icon from '../../Assets/Images/JS.png'
import ts_icon from '../../Assets/Images/typescript.png'
import redux_icon from '../../Assets/Images/redux.png'
import html_icon from '../../Assets/Images/html5.png'
import css_icon from '../../Assets/Images/css3.png'
import nodejs_icon from '../../Assets/Images/nodejs.png'
import bootstrap_icon from '../../Assets/Images/bootstrap.png'
import miu_icon from '../../Assets/Images/material-ui.png'
import tailwind_icon from '../../Assets/Images/Tailwind.png'
import potgreSQL_icon from '../../Assets/Images/postgreSQL.png'
import postman_icon from '../../Assets/Images/postman_logo.png'
import storybook_icon from '../../Assets/Images/storybook.png'
import figma_icon from '../../Assets/Images/Figma-logo.png'
import git_icon from '../../Assets/Images/git.png'

export const Skills = () => {
    return (
        <div className={s.skillsContainer} id={'skills'} data-scroll-section>
            <div className={s.title}>
                <span className={s.rotate_title}>Skills</span>
            </div>
            <div className={s.skillsItems}>
                <SkillItem title={'React'}
                           colorFont={'white'}
                           icon={react_icon}
                           borderColor={'#61DAFB'}
                           backgroundColor={'#282C34'}
                           shadowColor={'#61DAFB'}/>
                <SkillItem title={'React Native'}
                           colorFont={'white'}
                           icon={react_native_icon}
                           borderColor={'#61DAFB'}
                           backgroundColor={'#282C34'}
                           shadowColor={'#61DAFB'}/>
                <SkillItem title={'JavaScript'}
                           colorFont={'black'}
                           icon={js_icon}
                           borderColor={'black'}
                           backgroundColor={'#F7DE1D'}
                           shadowColor={'black'}/>
                <SkillItem title={'TypeScript'}
                           colorFont={'white'}
                           icon={ts_icon}
                           borderColor={'white'}
                           backgroundColor={'#1262D5'}
                           shadowColor={'#1262D5'}/>
                <SkillItem title={'Redux'}
                           colorFont={'#6A10F3'}
                           icon={redux_icon}
                           borderColor={'#6A10F3'}
                           backgroundColor={'white'}
                           shadowColor={'#6A10F3'}/>
                <SkillItem title={'HTML'}
                           colorFont={'white'}
                           icon={html_icon}
                           borderColor={'white'}
                           backgroundColor={'#F85A2C'}
                           shadowColor={'#F85A2C'}/>
                <SkillItem title={'CSS'}
                           colorFont={'white'}
                           icon={css_icon}
                           borderColor={'white'}
                           backgroundColor={'#1262D5'}
                           shadowColor={'#1262D5'}/>
                <SkillItem title={'NodeJS'}
                           colorFont={'white'}
                           icon={nodejs_icon}
                           borderColor={'white'}
                           backgroundColor={'#8CC84B'}
                           shadowColor={'#8CC84B'}/>
                <SkillItem title={'Bootstrap'}
                           colorFont={'white'}
                           gradient={{firstColor: '#9927FF', secondColor: '#6B10F3'}}
                           icon={bootstrap_icon}
                           borderColor={'white'}
                           backgroundColor={'none'}
                           shadowColor={'#6B10F3'}/>
                <SkillItem title={'Material UI'}
                           colorFont={'white'}
                           gradient={{firstColor: '#007EFD', secondColor: '#005BB5'}}
                           icon={miu_icon}
                           borderColor={'white'}
                           backgroundColor={'none'}
                           shadowColor={'#005BB5'}/>
                <SkillItem title={'Tailwind CSS'}
                           colorFont={'white'}
                           gradient={{firstColor: '#009AB3', secondColor: '#00BEAF'}}
                           icon={tailwind_icon}
                           borderColor={'white'}
                           backgroundColor={'none'}
                           shadowColor={'#00BEAF'}/>
                <SkillItem title={'PostgreSQL'}
                           colorFont={'white'}
                           icon={potgreSQL_icon}
                           borderColor={'white'}
                           backgroundColor={'#336791'}
                           shadowColor={'#336791'}/>
                <SkillItem title={'Postman'}
                           colorFont={'white'}
                           icon={postman_icon}
                           borderColor={'white'}
                           backgroundColor={'#F26635'}
                           shadowColor={'#F26635'}/>
                <SkillItem title={'Storybook'}
                           colorFont={'white'}
                           icon={storybook_icon}
                           borderColor={'white'}
                           backgroundColor={'#F2447E'}
                           shadowColor={'#F2447E'}/>
                <SkillItem title={'Figma'}
                           colorFont={'black'}
                           icon={figma_icon}
                           borderColor={'black'}
                           backgroundColor={'white'}
                           shadowColor={'black'}/>
                <SkillItem title={'Git'}
                           colorFont={'white'}
                           icon={git_icon}
                           borderColor={'white'}
                           backgroundColor={'black'}
                           shadowColor={'black'}/>

            </div>
        </div>
    )
}