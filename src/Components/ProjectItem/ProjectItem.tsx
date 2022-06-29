import s from "../SkillItem/SkillItem.module.css";
import React, {ReactElement, useState} from "react";
import gitHub_icon from '../../Assets/Images/git_black.png'
import {Button} from "../Buttons/Button";
import ArrowRight from "../../Assets/Images/ArrowRight";
import git_icon_white from '../../Assets/Images/git.png'

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
        <div>
            <div style={{
                height: 240,
                width: 274,
                padding: '20px 20px 20px 20px',
                borderRadius: 15,
                background: backgroundColor,
                border: `2px solid ${borderColor}`,
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexDirection: 'column',
                filter: `drop-shadow(4px 6px 0px ${shadowColor})`,
                transition: '0.15s',
            }}>
                <div style={{display: "flex", flexDirection: 'row', alignItems: "center"}}>
                    <img style={{height: 70, borderRadius: 100, marginRight: 24}} src={icon} alt={`${icon}`}/>
                    <div style={{color: colorFont, width: '70%', fontSize: 30, fontWeight: 'bold'}}>
                        {title}
                        {subTitle && <div style={{color: colorFont, fontSize: 20, fontWeight: 'bold'}}>{subTitle}</div>}
                    </div>
                </div>
                <div style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: colorFont
                }}>
                    {description}
                </div>
                <div style={{width: '100%', display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between"}}>
                    {linkGitHub && <a href={linkGitHub}><img style={{cursor: "pointer", height: 30, opacity: '60%'}} src={gitWhite ? git_icon_white : gitHub_icon} alt={gitHub_icon}/></a>}
                    {linkPage && <a style={{textDecoration: "none"}} href={linkPage}>
                        <button
                            onMouseEnter={onHover}
                            onMouseLeave={offHover}
                            style={{
                                width: hover ? 100 : 50,
                                height: 50,
                                color: backgroundColor,
                                border: "none",
                                cursor: "pointer",
                                backgroundColor: shadowColor,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 1000,
                            }}>{hover ? <span style={{fontSize: 23}}>
                            show</span> : <ArrowRight/>}</button>
                    </a>}
                </div>
            </div>
        </div>
    )
}

