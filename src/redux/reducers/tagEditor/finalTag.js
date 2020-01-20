let initialState = {
    finalTag: "..."
}

export default function finalTag(state = initialState, action) {
    switch (action.type) {
        case "FINAL_TAG_UPDATED":
            return {
                finalTag: action.payload
            }
    }
    return state;
}