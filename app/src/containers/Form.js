import { connect } from 'react-redux'
import { addMessage, removeMessage } from '../actions/message'
import Form from '../components/Form'

const mapStateToProps = state => {
  return {
    message: state.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeMessage: () => {
      dispatch(removeMessage())
    },
    addMessage: message => {
      dispatch(addMessage(message))
    }
  }
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default FormContainer
