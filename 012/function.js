function summary(text,wordCounts){
    let sum = text.substr(0,wordCounts);
    return `${sum}...`;
}

function secretCard(cardNumber){
    const first12 = String(cardNumber).substring(0,12);
    return `${first12}****`;
}

function censor(text,word){
    const censoredText = text.replaceAll(word,'*'.repeat(word.length));
    return censoredText;
}

function level(expYears){
    if(expYears<=2){
        return 'junior';
    }
    else if(expYears<=5){
        return 'Mid level';
    }
    else{
        return 'senior';
    }
}