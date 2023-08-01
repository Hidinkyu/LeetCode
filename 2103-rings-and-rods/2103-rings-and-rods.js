/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
//     init a count var assigned to 0
    let count = 0;
//     init a const obj var assigned to an empty obj
    const obj = {};
    
//     iterate over the rings string by 2
    for (let i = 0; i < rings.length; i += 2) {
        const color = rings[i];
        const rod = rings[i + 1];
        
//         if obj at the current index + 1 is falsy assign a new Set
        if(!obj[rod]) obj[rod] = new Set();
//         add the char at the current index to the set
        obj[rod].add(color);
    }
    
    for (rod in obj) {
        const colors = obj[rod];
        if (colors.has('R') && colors.has('G') && colors.has('B')) count++
    }
    return count
};

/*
    create a count
    my initial thougths are that we can use an object and assign the key as the rod number and the value coorilated to the key to a set 
    we iterate over the string by two 
        Now we can check in our object to see, do we not have anything a key value pair existing here? 
            lets create one using the current index plus 1 as its key and a new Set as its value
        now we can use the current index plus one as a key to input a new value in the Set which would be the char at the current index
    now we iterate over the object 
        if the set contains the values R G and B
            increment the count
    return the count
*/