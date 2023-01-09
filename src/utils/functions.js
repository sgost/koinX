export const resolveFunction = (title) => {
    return title?.toLowerCase().replace(/^\s+|\s+$/g, '_').replace(/ /g, "_")
}

export const handleImage = (imageUrl) => {
    const pathname = typeof window !== 'undefined' && window.location.href;
    console.log("pathname", pathname)
    return typeof pathname === 'string' && pathname?.includes('https://www.koinx.com/') ? `/r${imageUrl}` : imageUrl;
}