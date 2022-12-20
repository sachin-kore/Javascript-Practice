const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'inrement':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return initialState;
    }
}

function counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            count:{state.count}
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>

        </>
    )
}