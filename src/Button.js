import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text, fn}){
    return <button className={styles.btn} onClick={fn}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;