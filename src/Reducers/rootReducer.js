const init_state = {
   location: 'main',
}

const rootReducer = (state = init_state, action) => {
   if (action.type === 'UPDATED_LOCATION') {
      return {
         ...state,
         location: action.loc,
      }
   }
   return state
}

export default rootReducer
