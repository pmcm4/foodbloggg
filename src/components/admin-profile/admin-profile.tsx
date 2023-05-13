import styles from './admin-profile.module.scss';
import classNames from 'classnames';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';
import { MiniPost } from '../mini-post/mini-post';
import { useState } from 'react';
import { Create } from '../create/create';


export interface AdminProfileProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-profiles-and-templates
 */
export const AdminProfile = ({ className }: AdminProfileProps) => {

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }


    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.left1}>
                    <div className={styles.profPic} />
                    <h1 className={styles.Name}>Name Name</h1>
                    <span className={styles.info}>@NameName</span>
                    <span className={styles.info}>Ako’y tahimik lang sa umpisa..</span>
                </div>
                <div className={styles.right1}>
                    <div className={styles.head}>
                        <div className={styles.geadgead}>
                            <span className={styles.hello}>Post</span>
                            <span className={styles.hello} onClick={toggleModal}>Create</span>
                        </div>
                        <hr className={styles.divider} />
                    </div>
                    <div className={styles.bod}>
                        <MiniPost />
                        <MiniPost />
                        <MiniPost />
                        <MiniPost />
                        <MiniPost />
                        <MiniPost />
                    </div>
                    {modal && (
                        <div className='modal'>
                        <div className={styles.overlay} onClick={toggleModal}>
                        </div>
                        <Create/>
                        </div>

                    )}
                    

                </div>
            </div>
            <Footer />
        </div>
    );
};
