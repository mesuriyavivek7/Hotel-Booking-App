

const DarkModeReducer=(state,action)=>{
    switch(action.type){

        case 'LIGHT':
            return {
                darkMode:false
            }
        break;

        case 'DARK':
            return {
                darkMode:true
            }
        break;

        case 'TOGGLE':
            return {
                darkMode:!state.darkMode
            }
        break

        default:
            return state


    }
}

export default DarkModeReducer