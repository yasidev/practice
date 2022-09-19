const wannaPlay = confirm("میخوای بازی کنی؟")
if(wannaPlay){
    const randNum = Math.floor(Math.random())+1;
    let chances = 5;
    while(chances>=0){
        if(chances===0){
            alert(`متاسفانه باختی. عدد ${randNum} بود .`)
        }
        if(chances===5){
            let guess = prompt(`یک عدد بین یگ تا ده حدس بزن. ${'❤'.repeat(chances)}`)
            if (guess ==randNum){
                alert(`آفرین!!! با اولین شانس درست حدس زدی. عدد ${randNum} بود .`);
                break
            }
        }
        else{
            let guess = prompt(`اشتباه گفتی! یک بار دیگه حدس بزن. ${'❤'.repeat(chances)}`);
            if (guess == randNum){
                alert(`آفرین. درست حدس زدی. عدد ${randNum} بود .`);
                break
            }
        }
        chances--;
    }
}