export function drop(items, duration) {
    if(items == null || items.length === 0) {
        return;
    }

    if(typeof(duration) !== 'function') {
        var value = duration;
        duration = () => value;
    }
    
    items.forEach( (el, index) => setTimeout( () => { 
        if(index % 2 === 0) {
            el.classList.add('dropping--right');
        }
        el.classList.add('dropping')
    }, duration()));
}

