function arrayReducer(array, action) {
    switch (action.type) {
        case 'push':
            return [...array, action.value]
        case 'deleteByIndex':
            let deleteByIndex = array.filter((x, i) => i != action.index)
            return deleteByIndex
        case 'updateByIndex':
            let updateByIndex = [...array]
            updateByIndex[action.index] = action.value
            return updateByIndex
        default:
            throw new Error()
    }
}

export default function useArray(initialState){
    return useReducer(arrayReducer, initialState)
}
