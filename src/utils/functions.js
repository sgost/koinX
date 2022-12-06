export const resolveFunction = (title) => {
    return title?.toLowerCase().replace(/^\s+|\s+$/g, '_').replace(/ /g, "_")
}