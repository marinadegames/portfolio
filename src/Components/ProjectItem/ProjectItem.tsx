import React, {ReactElement, useState} from "react";
import gitHub_icon from '../../Assets/Images/git_black.png'
import ArrowRight from "../../Assets/Images/ArrowRight";
import git_icon_white from '../../Assets/Images/git.png'
import s from './ProjectItem.module.css'

type PropsType = {
    title: string
    subTitle?: string
    icon: string
    borderColor: string
    backgroundColor: string
    shadowColor: string
    colorFont: string
    description: ReactElement<any, any>
    linkPage?: string
    linkGitHub?: string
    gitWhite?: boolean
}

export const ProjectItem = ({
                                linkPage,
                                linkGitHub,
                                description,
                                title,
                                icon,
                                borderColor,
                                shadowColor,
                                colorFont,
                                gitWhite,
                                backgroundColor,
                                subTitle
                            }: PropsType) => {

    const [hover, setHover] = useState<boolean>(false)

    const onHover = () => {
        setHover(true)
    }
    const offHover = () => {
        setHover(false)
    }

    return (
        <>
            <div className={s.projectItem} style={{
                background: backgroundColor,
                border: `2px solid ${borderColor}`,
                filter: `drop-shadow(4px 6px 0px ${shadowColor})`,
            }}>
                <div className={s.box}>
                    <img className={s.icon} src={icon} alt={`${icon}`}/>
                    <div className={s.title} style={{color: colorFont}}>
                        {title}
                        {subTitle && <div className={s.subTitle}
                                          style={{color: colorFont}}>
                            {subTitle}
                        </div>}
                    </div>
                </div>
                <div className={s.description} style={{color: colorFont}}>
                    {description}
                </div>
                <div style={{width: '100%', display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between"}}>
                    {linkGitHub &&
                        <a href={linkGitHub}>
                            <img className={s.gitIcon}
                                 src={gitWhite ? git_icon_white : gitHub_icon}
                                 alt={gitHub_icon}/></a>}
                    {linkPage && <a style={{textDecoration: "none"}} href={linkPage}>
                        <button
                            className={s.button}
                            onMouseEnter={onHover}
                            onMouseLeave={offHover}
                            style={{color: backgroundColor, backgroundColor: shadowColor}}>
                            <span className={s.btnSpan}>
                            show</span><ArrowRight/></button>
                    </a>}
                </div>
            </div>
        </>
    )
}

