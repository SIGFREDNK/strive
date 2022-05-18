// REACT
import React from 'react';

// LAYOUT
import App from 'layouts/App';

// COMPONENTS
import Button from 'components/Button';

// TYPES
import NextPageWithLayout from 'interfaces/NextPageWIthLayout';

// STYLES
import styles from 'styles/Friends.module.scss';

const Friends: NextPageWithLayout = () => {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div className={styles.headline}>
                    <h4 className={styles.title}>Friendslist</h4>
                    <p className={styles.text}>
                        Add new friends or begin exciting new projects with the ones you already have.
                    </p>
                </div>
                <Button text="Add friend" backgroundColor="cornflowerblue" color="#ffffff" className={styles.button} />
            </div>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tableHeading}>
                        <th>Name</th>
                        <th>Tag</th>
                        <th>Email</th>
                        <th>Collaborate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.friend}>
                        <td className={styles.name}>Isabella Mørck</td>
                        <td className={styles.tag}>#sød</td>
                        <td className={styles.mail}>isabella@is-ws.dk</td>
                        <td className={styles.share}>
                            <button>Share</button>
                        </td>
                    </tr>
                    <tr className={styles.friend}>
                        <td className={styles.name}>Fynboen</td>
                        <td className={styles.tag}>#fynerfin</td>
                        <td className={styles.mail}>fynbo@kat.miav</td>
                        <td className={styles.share}>
                            <button>Share</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

Friends.getLayout = function getLayout(page) {
    return (
        <App title="Friends" selected="FRIENDS">
            {page}
        </App>
    );
};

export default Friends;
