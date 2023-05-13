import styles from './user-profile.module.scss';
import classNames from 'classnames';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { MiniPost } from '../mini-post/mini-post';

export interface UserProfileProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-user-profiles-and-templates
 */
export const UserProfile = ({ className }: UserProfileProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.prof}>
                    <div className={styles.profPic} />
                    <h1 className={styles.profName}>Name Name</h1>
                    <span>@NameName</span>
                </div>
                <hr className={styles.divider} />
                <div className={styles.likes}>
                    <MiniPost />
                    <MiniPost />
                    <MiniPost />
                    <MiniPost />
                    <MiniPost />
                    <MiniPost />
                </div>
            </div>
            <Footer />
        </div>
    );
};
