import styles from './blog-single.module.scss';
import classNames from 'classnames';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export interface BlogSingleProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-blog-singles-and-templates
 */
export const BlogSingle = ({ className }: BlogSingleProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                className={styles.blogPic}
                src={
                    'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1683911783/blogpostExample_r2blfq.png'
                }
            />
            <div className={styles.blogContent}>
                <div className={styles.profile}>
                    <div className={styles.pic} />
                    <span className={styles.name}>Name Name</span>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Heading 1</h1>
                    <span className={styles.content}>
                        I recently had the pleasure of trying the spaghetti carbonara at a local
                        Italian restaurant, and it was an absolute delight. The pasta was perfectly
                        cooked and had a nice, firm texture that held up well against the rich and
                        creamy sauce.
                        <br />
                        <br />
                        Speaking of the sauce, it was a decadent blend of eggs, pancetta, and
                        parmesan cheese that was expertly seasoned with just the right amount of
                        black pepper. The flavors were perfectly balanced, with the salty pancetta
                        and tangy parmesan playing off each other beautifully.
                        <br />
                        <br />
                        Overall, I would highly recommend this dish to anyone looking for a
                        delicious and satisfying pasta experience. Whether youre a fan of
                        traditional Italian cuisine or just love a good bowl of spaghetti, this
                        carbonara is sure to hit the spot.
                    </span>
                </div>
                <div className={styles.postFoot}>
                    <hr className={styles.divier} />
                    <div className={classNames(styles.icons, styles.icons)}>
                        <div className={styles.left}>
                            <ModeCommentOutlinedIcon sx={{ cursor: "pointer" }}/>
                            <InsertLinkIcon sx={{ cursor: "pointer" }}/>
                        </div>
                        <div className={styles.right}>
                            <FavoriteBorderOutlinedIcon sx={{ cursor: "pointer" }}/>
                            <span className={styles.likeNum}>10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
