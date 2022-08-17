// code your solution here
function saturdayFun (string = 'roller-skate'){
    return `This Saturday, I want to ${string}!`;
}


function mondayWork (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective (adj = "*"){
    return function(param = "special"){
        return `You are ${adj}${param}${adj}!`;
    }
    const encouragingPromptFunction = wrapAdjective("!!!")
}

