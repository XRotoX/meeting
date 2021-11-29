import { useReducer, useState } from "react"

export const ACTIONS = {
    SET_LOADING: "set-loading",
    SET_ITEM: "set-item",
}

function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.SET_LOADING:
            return {
                ...state,
                loading: payload.loading,
            }
        case ACTIONS.SET_ITEM:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}

export function useForm() {
    const [loading, setLoading] = useState(true)

    const [state, dispatch] = useReducer(reducer, {
        date: new Date(),
        time: new Date(),
        timezone: '',
        firstName: '',
        lastName: '',
        email: '',
        company: '',
    })

    console.log(state);

    return [state, dispatch]
}