import s from './SkillItem.module.css'

type PropsType = {
    title: string
    icon: string
    borderColor: string
    backgroundColor: string
    shadowColor: string
    colorFont: string
    gradient?: GradientType
    speed?: number
}
type GradientType = {
    firstColor: string,
    secondColor: string
}

export const SkillItem = ({gradient, title, icon, borderColor, shadowColor, colorFont, backgroundColor, speed}: PropsType) => {
    return (
        <div data-scroll-section>
            <div className={s.skillItem}
                 data-scroll data-scroll-speed={2} data-scroll-position="top" data-scroll-direction="vertical"
                 style={{
                     height: window.screen.width > 1300 ? 120 : 200,
                     width: window.screen.width > 1300 ? 275 : '100%',
                     padding: '0 20px 0 20px',
                     borderRadius: 15,
                     background: gradient ? `linear-gradient(98.22deg, ${gradient.firstColor} 12.05%, ${gradient.secondColor} 100%)` : `${backgroundColor}`,
                     border: `2px solid ${borderColor}`,
                     display: 'flex',
                     justifyContent: "space-between",
                     alignItems: 'center',
                     filter: `drop-shadow(4px 6px 0px ${shadowColor})`,
                     transition: '0.15s',
                 }}>
                <div style={{
                    color: `${colorFont}`,
                    width: '70%',
                    fontSize: window.screen.width > 1300 ? 25 : 50,
                    fontWeight: 'bold'
                }}>
                    {title}
                </div>
                <img style={{
                    height: window.screen.width > 1300 ? 70 : 110,
                    borderRadius: 4
                }} src={icon} alt={`${icon}`}/>
            </div>
        </div>
    )
}