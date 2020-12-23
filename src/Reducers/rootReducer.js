const init_state = {
   location: 'main',
   init: false,
}

const rootReducer = (state = init_state, action) => {
   if (action.type === 'UPDATED_LOCATION') {
      return {
         ...state,
         location: action.loc,
         init: true,
      }
   }
   return state
}

export default rootReducer
