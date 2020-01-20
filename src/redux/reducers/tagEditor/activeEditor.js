let initialState = {
    activeEditor: "text"
}

const activeEditor = (state = initialState, action) => {
    switch (action.type) {
        case "TEXT_EDITOR_OPENED":
            return {
                activeEditor: "text"
            };
        case "LINK_EDITOR_OPENED":
            return {
                activeEditor: "link"
            };
        case "IMAGE_EDITOR_OPENED":
            return {
                activeEditor: "image"
            };
    }
    return state;
}

export default activeEditor;