
//CONSTANTS or ACTION TYPES

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//ACTION CREATORS

export function increment(amt) {
    return {
        type: INCREMENT,
        payload: amt
    }
}

export function decrement(amt) {
    return {
        type: DECREMENT,
        payload: amt
    }
}


const initialState = {
    currentValue: 0
};



export default function counter(state = initialState, action){

    switch(action.type){
        case INCREMENT:
            // return Object.assign({}, state, {
            //     currentValue: state.currentValue + action.payload
            // });
            return {
                ...state, 
            currentValue: state.currentValue + action.payload
            }
        case DECREMENT:
        return {...state, currentValue: state.currentValue - action.payload}
        
        default:
            return state;
    }
}