import "./Notification.css"
import PropTypes from 'prop-types';

const Notification = ({message}) => {
    return(
        <div>
            <p className="notification__font-size">{message}</p>
        </div>
    )
}

Notification.propTypes = {
    message: PropTypes.string
}

export default Notification;