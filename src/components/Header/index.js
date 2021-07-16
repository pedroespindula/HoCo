import React, { useCallback, useState } from 'react'

import { ReactComponent as Burguer } from '../../assets/burg.svg'
import { ReactComponent as LogoIcon } from '../../assets/LogoHoco.svg'
import { ReactComponent as Minilogo } from '../../assets/minilogo.svg'

import { Logo } from '../Logo'
import { Profile } from '../Profile'
import Sidebar from '../Sidebar'

import style from './style.module.css'

export const Header = ({ props }) => {
    const { handlePathname } = props
    const [isActive, setIsActive] = useState(false)

    const handleActive = useCallback(() => {
        setIsActive(!isActive)
    }, [isActive, setIsActive])

    return (
        <div >
            <div className={`${style.sidebarContainer} ${isActive ? style.active : style.inactive}`}
                 onClick={handleActive}>
                <div className={style.sidebarBackground}>
                    <div className={style.sidebar}>
                        <Sidebar props={{...props, isMobile: true}}/>
                    </div>
                </div>
            </div>
            
            <div className={style.headerContainer} >
                <Burguer className={style.burguer} onClick={handleActive}/>
                <div className={style.logo} onClick={handlePathname}>
                    <Logo
                        Logo={LogoIcon}
                        alt='Logo grande do hoco onde está escrito HoCo com o H e o C maiúsculos'/>
                </div>
                <div className={style.minilogo} onClick={handlePathname}>
                    <Logo
                        Logo={Minilogo}
                        alt='Versão mini da logo, contendo um C com traços no meio para imitar ponteiros de relógios'/>
                </div>
                <div className={style.photo} onClick={handlePathname}>
                    <Profile />
                </div>
            </div>
        </div>
    )
}
