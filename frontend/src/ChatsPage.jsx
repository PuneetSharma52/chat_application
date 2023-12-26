import { PrettyChatWindow } from 'react-chat-engine-pretty';
import PropTypes from 'prop-types';

const ChatsPage = (props) => {
    return ( 
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId = "eacfd285-c2c0-4fb5-94c7-9c62abd84f13"
                username = {props.user.username}
                secret = {props.user.secret}
                style={{ height: '100vh' }}
            />
        </div>
    )
}

ChatsPage.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        secret: PropTypes.string.isRequired
    }).isRequired
};

export default ChatsPage