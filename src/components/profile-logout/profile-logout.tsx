import styles from './profile-logout.module.scss';
import classNames from 'classnames';

export interface ProfileLogoutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-profile-logouts-and-templates
 */
export const ProfileLogout = ({ className }: ProfileLogoutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.toProfileBtn}>
                <p className={styles.userProfileName}>User Profile name</p>
            </div>
            <div className={styles.toLogoutBtn}>
                <p className={styles.logOut}>Log out</p>
            </div>
            <div className={styles.overlay} />
        </div>
    );
};
