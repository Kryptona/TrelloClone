import React from 'react';
import lamp from '../../../img/lamp.jpg';
import styles from "./lamp.scss";

const Lamp = () => {
    return (
        <div className={styles.root}>
            <img src={lamp}/>
        </div>
    );
};

export default Lamp;