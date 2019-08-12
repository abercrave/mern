import { connect } from 'react-redux'
import { removeMessage } from '../actions/message'
import Message from '../components/Message'

const mapStateToProps = state => {
  return {
    message: state.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeMessage: e => {
      if (e) {
        e.preventDefault();
      }

      dispatch(removeMessage())
    },
  }
}

const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message)

export default MessageContainer
