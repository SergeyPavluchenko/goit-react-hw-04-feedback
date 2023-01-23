import PropTypes from 'prop-types';
import { NotificatinText } from './Notification.styled';

const Notification = ({ message }) => {
  return <NotificatinText>{message}</NotificatinText>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;