import {ALL_COURSE} from "../constants";

const initialState = {
    course: {},
    paymentDetails: { country: "Afghanistan" },
    paymentLoader: false
};

export const Loader = (state = initialState, { type, payload }) => {
    switch (type) {
        case ALL_COURSE: {
            state = {...state, course: {...payload}};
            return state;
        }
        default: {
            return state
        }
    }
};