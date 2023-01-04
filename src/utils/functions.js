export const resolveFunction = (title) => {
    return title?.toLowerCase().replace(/^\s+|\s+$/g, '_').replace(/ /g, "_")
}

export const handleImage = (imageUrl) => {
    const pathname = typeof window !== 'undefined' && window.location.href;
    return pathname.includes('www.koinx.com') ? `r${imageUrl}` : imageUrl;
}