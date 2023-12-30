export const utils = {
    isNullOrUndefinedOrEmpty,

}

function isNullOrUndefinedOrEmpty (input){
    if(typeof input === 'object'){
        return (Object.keys(input).length === 0);
    } else{
        return (input === null || input === undefined || input.length === 0);
    }
}

