import styles from './create.module.scss';
import classNames from 'classnames';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

export interface CreateProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-creates-and-templates
 */
export const Create = ({ className }: CreateProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.header}>
                <div className={styles.bkacdiv}>
                    <ArrowBackIosNewOutlinedIcon />
                </div>
                <h1 className={styles.headercreate}>Create New Post</h1>
                <h1 className={styles.headershare}>Share</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.left}>
                    <span className={styles.drop}>Drag photos and video here</span>
                    <button className={styles.select}>Select from Computer</button>
                </div>
                <div className={styles.right}>
                    <div className={styles.top}>
                        <div className={styles.prof}>
                            <img
                                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                                className={styles.img}
                            />
                            <span className={styles.username}>@username</span>
                        </div>
                        <input className={styles.title} placeholder={'Title'} />
                        <textarea className={styles.textArea} />
                    </div>
                    <div className={styles.bottom}>
                        <option className={styles.choosecat}>Choose Category</option>
                        <input className={styles.locs} placeholder="Add location" />
                    </div>
                </div>
            </div>
        </div>
    );
};
