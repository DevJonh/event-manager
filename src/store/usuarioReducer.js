const INITIAL_STATE = {
  usuarioEmail: ''
}

const usuarioReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOG_IN':
      localStorage.setItem('@event_manager:login', true)
      return {
        ...state,
        usuarioEmail: action.usuarioEmail
      }
    case 'LOG_OUT':
      localStorage.removeItem('@event_manager:login')
      return {
        ...state,
        usuarioEmail: ''
      }
    default:
      return state
  }
}

export default usuarioReducer
