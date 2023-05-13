import styles from './home.module.scss';
import classNames from 'classnames';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { BlogSingle } from '../blog-single/blog-single';

export interface HomeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-homes-and-templates
 */
export const Home = ({ className }: HomeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />
            <div className={styles.content}>
                <h1 className={styles.header}>Tasting, Rating, Reviewing.</h1>
                <div className={styles.catHeader}>
                    <div className={styles.cats}>
                        <img
                            className={styles.catpics}
                            src={
                                'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1683910827/cat1_vp2fcm.png'
                            }
                        />
                        <span className={styles.catgName}>Healthy Foods</span>
                    </div>
                    <div className={styles.cats}>
                        <img
                            className={styles.catpics}
                            src={
                                'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1683910827/cat2_uamldn.png'
                            }
                        />
                        <span className={styles.catgName}>Beverages</span>
                    </div>
                    <div className={styles.cats}>
                        <img
                            className={styles.catpics}
                            src={
                                'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1683910826/cat3_brdewz.png'
                            }
                        />
                        <span className={styles.catgName}>Snacks</span>
                    </div>
                    <div className={styles.cats}>
                        <img
                            className={styles.catpics}
                            src={
                                'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1683910827/cat4_ecg3an.png'
                            }
                        />
                        <span className={styles.catgName}>International Food</span>
                    </div>
                    <div className={styles.cats}>
                        <img
                            className={styles.catpics}
                            src={
                                'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1683910826/cat5_fesdtb.png'
                            }
                        />
                        <span className={styles.catgName}>Specialty</span>
                    </div>
                    <div className={styles.cats}>
                        <img
                            className={styles.catpics}
                            src={
                                'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1683910826/cat6_pgnmjp.png'
                            }
                        />
                        <span className={styles.catgName}>Restaurants</span>
                    </div>
                </div>
                <BlogSingle />
            </div>
            <Footer />
        </div>
    );
};
