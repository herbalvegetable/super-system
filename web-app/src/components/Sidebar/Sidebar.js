import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

import styles from './Sidebar.module.css';

import { SidebarData } from './SidebarData';

const Sidebar = props=>{

    const [collapsed, setCollapsed] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [useDefaultProfilePic, setUseDefaultProfilePic] = useState(true);

    const location = useLocation();

    useEffect(()=>{
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = SidebarData.findIndex(item => item.section === curPath);
        setActiveIndex(activeItem);

        return ()=>{

        }
    }, [location]);

    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                SUPER-SYSTEM :)
            </div>
            <Link to='/profile' className={`${styles.profile} ${activeIndex === 0 ? styles.profile_active : ''}`}>
                <div className={styles.profile_icon}>
                    <img 
                        src={`media/${useDefaultProfilePic ? 'default-' : ''}profile-pic.jpeg`}
                        alt='Profile Picture' 
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                        }}
                    />
                </div>
                <div className={styles.profile_name}>
                    Adam369 Tan
                </div>
            </Link>
            <div className={styles.menu}>
                {
                    SidebarData.map( (item, i)=>{
                        return item.show ? <Link key={`${i}`} to={item.to} className={activeIndex === i ? styles.menu_item_active : styles.menu_item}>
                            <div className={styles.menu_item_icon}>
                                {item.icon}
                            </div>
                            <div className={styles.menu_item_title}>
                                {item.title}
                            </div>
                        </Link>
                        :
                        null
                    } )
                }
            </div>
        </div>
    );
}

export default Sidebar;