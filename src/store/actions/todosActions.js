export const addTask = (title) => {
    return {
        type: "ADD_TASK",
        payload: title,
    };
};

export const deleteTask = (id) => {
    return {
        type: "DELETE_TASK",
        payload: id,
    };
};

export const updateTask = (id, title) => {
    return {
        type: "UPDATE_TASK",
        payload: { id, title },
    };
};