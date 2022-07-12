import NotificationBtn from "./../../assets/img/notification-icon.svg";
import './styles.css';

function NotificationButton() {
    return(
        <>
        < div className="dsmeta-red-btn" >
            <img src={NotificationBtn} alt="notification icon" />
        </div>
        </>
    )
}

export default NotificationButton