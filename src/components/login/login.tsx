import styles from './login.module.scss';
import classNames from 'classnames';

export interface LoginProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-logins-and-templates
 */
export const Login = ({ className }: LoginProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <div className={styles.login}>
                    <h1 className={styles.logHead}>Log in here!</h1>
                    <div className={styles.input}>
                        <input className={styles.inputEmail} placeholder={'Email'} />
                        <input className={styles.inputEmail} placeholder={'Password'} />
                    </div>
                    <div className={styles.rfp}>
                        <input type="radio" className={styles.rememberBtn} />
                        <span className={styles.remember}>Remember me</span>
                        <span className={styles.remember1}>Forgot Password?</span>
                    </div>
                    <div className={styles.loggbtn}>
                        <button className={styles.loginBtn}>Log in</button>
                        <span className={styles.outys}>or use your account</span>
                        <img
                            src={
                                'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1683903482/LOGIN_google_ja65yb.png'
                            }
                            className={styles.glbg}
                        />
                        <img
                            src={
                                'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1683903483/LOGIN_image_removebg_preview_1_a4wg0g.png'
                            }
                            className={styles.gllg}
                        />
                    </div>
                </div>
                <div className={styles.reg}>
                    <div className={styles.containgerReg}>
                        <h1 className={styles.headerRegLog}>
                            Discover <br />
                            New Foods
                        </h1>
                        <p className={styles.regLogP}>
                            Join the epicurean escapade! Register now to tantalize your taste buds.
                        </p>
                        <button className={styles.regBtn}>Register Here!</button>
                    </div>
                    <img
                        className={styles.logobg}
                        src={
                            'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1683901570/LOGIN_login_bg_ziso9b.jpg'
                        }
                    />
                </div>
            </div>
        </div>
    );
};
