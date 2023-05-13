import styles from './category-solo.module.scss';
import classNames from 'classnames';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { BlogSingle } from '../blog-single/blog-single';

export interface CategorySoloProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-category-solos-and-templates
 */
export const CategorySolo = ({ className }: CategorySoloProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.headerName}>
                    <h1 className={styles.catNameHead}>Healthy Foods</h1>
                </div>
                <BlogSingle />
            </div>
            <Footer />
        </div>
    );
};
