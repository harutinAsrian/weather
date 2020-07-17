export const byId = (id, value) => {
    document.getElementById(id).innerHTML = value
}

export const setImg = (id, imgSrc) => {
    document.getElementById(id).src = imgSrc
}