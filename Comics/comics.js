function checkViewportWidth() {
    const x = 500;
    const thing = document.getElementById("thingcomic")
    const big_style={
        width: '66%'
    }
    const small_style={
        width: '100%'
    }
    if (window.innerWidth > x) {
        Object.assign(thing.style,big_style);
    } 
    if (window.innerWidth < x){
        Object.assign(thing.style,small_style);
    } else {
        Object.assign(thing.style,big_style);
    }
}
window.addEventListener('load', checkViewportWidth);
window.addEventListener('resize', checkViewportWidth);

function submit_Comment() {
    document.getElementById('Post_Comment')
}
