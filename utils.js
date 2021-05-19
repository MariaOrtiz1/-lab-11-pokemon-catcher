export function findById(exampleArray, exampleId) {
// We're making the string have a number value 
    const numberId = Number(exampleId);
    // this is going to compare the exampleId to the actualId and make sure that they are the the same in order to return the value
    for (let item of exampleArray) {
        if (item.id === numberId) {return item;}
    }
// If the exampleId does not match the actualId then return null
    return null;
}