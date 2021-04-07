// Code your solution here
function findMatching(arrayOfNames, name){
    let isNamed = arrayOfNames.filter(myFunction => myFunction.toLowerCase() == name.toLowerCase());
    

    return !!isNamed ? isNamed : [];
}

function fuzzyMatch(arrayOfNames, char){
    let isChar = arrayOfNames.filter(myFunction => myFunction.charAt(0) == char.charAt(0))
    return isChar
}

function matchName(arrayOfObjNames, stringName){
    let objName = arrayOfObjNames.filter(myFunction => myFunction.name == stringName);
    return objName;
}