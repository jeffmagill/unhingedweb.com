
//gets all leaf elements. optional whitelist will collect any other matching tag names
export function leaves(t = {}, whitelist = []) {
    var results = [];

    //add elements on the whitelist even if they arent leaves
    if(whitelist.indexOf(t.tagName) >= 0) {
        results.push(t);
    }

    //if the element has children...
    if(t.children && t.children.length) {
    
        // recursively add its children
        results = results.concat([...t.children].flatMap((t) => {
            return leaves(t, whitelist);
        }));
    }
    else {
    
        // otherwise, add itself
        results.push(t)    
    }

    return results;
}
