import { ACCOUNT_READ } from '../Actions/ActionTypes'

initialState = {
    accountInfo: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        picture: null,
        location: null,
    },
}
export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACCOUNT_READ:
            return {
                ...state,
                accountInfo: {
                    ...state.accountInfo,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    email: action.email,
                    password: action.password,
                    picture: action.picture,
                    location: action.location
                }
            }
        default:
            return state;
    }
}