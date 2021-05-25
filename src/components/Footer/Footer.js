import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles"

const Footer = ({ count }) => (<footer>
<div className={styles.footer}>items left: {count}</div>
<div className={styles.button}>
    <Button href="#text-buttons" color="#d3d3d3">
    All
    </Button>
    <Button href="#text-buttons" color="#d3d3d3">
    Active
    </Button>
    <Button href="#text-buttons" color="#d3d3d3">
    Completed
    </Button>
    <Button href="#text-buttons" color="#d3d3d3">
    Clear completed
    </Button>
</div>
</footer>)

export default withStyles (styles) (Footer);