var Quotation=new Array();

Quotation[0] = "One small blip for man, one giant wave for mankind";
Quotation[1] = "To wave and beyond!";
Quotation[2] = "Every wave is worth protecting";
Quotation[3] = "Every wave is worth watching";
Quotation[4] = "Approved by Chuck Norris";
Quotation[5] = "Trolls and phishers, we got your number";
Quotation[6] = "We got wave";
Quotation[7] = "Happy surfing, good waves";
Quotation[8] = "Because email is so last millenium";
Quotation[9] = "Once you go wave you never go back!";
Quotation[10] = "Wave you later!";
Quotation[11] = "Ask not what your wave can do for you but what you can do for your wave";
Quotation[12] = "Once a wave, always a wave!";
Quotation[13] = "Will it wave? That is the question";
Quotation[14] = "Because waves ain't gonna restore themselves";
Quotation[15] = "Wavers of the world, unite!";
Quotation[16] = "Wave... the Final Frontier";
Quotation[17] = "A wave a day keeps the email away";
Quotation[18] = "To boldly go where no wave has gone before";
Quotation[19] = "Don’t Stop, Keep waving On";
Quotation[20] = "Wave unto others as you would have them wave unto you";
Quotation[21] = "To wave or not to wave...To Wave!";
Quotation[22] = "Make wave not war";
Quotation[23] = "Come and wave it";
Quotation[24] = "We buzzed you in '10, We shall wave you in '11";
Quotation[25] = "Email is so 2001...";
Quotation[26] = "There are 2 types of trolls: those that have been defeated and those that will be defeated";
Quotation[27] = "Social Networks are so 2008...";
Quotation[28] = "If at first you don't succeed-log into Wave!";
Quotation[29] = "A journey of a thousand miles begins with the first Wave!";
Quotation[30] = "I think there shall be a day when many things are possible in Wave! :)";

var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));

function showQuotation() {
    document.write(Quotation[whichQuotation]);
}

showQuotation();
