import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { ProfileLogout } from '../profile-logout/profile-logout';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-navbars-and-templates
 */
export const Navbar = ({ className }: NavbarProps) => {

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div className={classNames(styles.root, className)}>
            
            <Link to="/" style={{ textDecoration: 'none' }}>
            <img
                alt=""
                className={styles.num11}
                src="https://static.overlay-tech.com/assets/a800f9aa-48a8-4e07-8ea0-524263edbc47.png"
            />
            </Link>
            <div className={styles.btns} >
            <Link to="/" style={{ textDecoration: 'none' }}>
            <p className={styles.home}>Home</p>
            </Link>
            
            <p className={styles.category}>Category</p>
            <Link to="/about" style={{ textDecoration: 'none' }}>
            <p className={styles.about}>About</p>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
            <p className={styles.home}>Contact</p>
            </Link>
            <div className={styles.icons}>
            <Link to="/search" style={{ textDecoration: 'none' }}>
                <img
                    alt=""
                    className={styles.iconSearch}
                    src="https://static.overlay-tech.com/assets/b38ca8e3-4ac4-4f32-b6a2-949dc160f48e.svg"
                />
                </Link>
            
                <img
                    alt=""
                    className={styles.vector}
                    src="https://static.overlay-tech.com/assets/44a6f2bd-fa39-45c1-b60b-7c3c8bb06eb6.svg"
                />
                <img
                    onClick={toggleModal}
                    alt=""
                    className={styles.iconUserCircleAlt}
                    src="https://static.overlay-tech.com/assets/3a13b6c1-c4c7-4d1e-95fc-603b879dbd26.svg"
                />
                
                {modal && (
                    <div className='modal'>
                        <div className={styles.overlay} onClick={toggleModal}>
                        </div>
                            <div className={classNames(styles.modal, className)}>
                                
                                <div className={styles.toProfileBtn}>
                                    <p className={styles.userProfileName}>User Profile name</p>
                                </div>
                                <div className={styles.toLogoutBtn}>
                                    <p className={styles.logOut}>Log out</p>
                                </div>
                                
                            </div>
                            </div>
                )}
                    
               
                
            </div>
            </div>
        </div>
    );
};
