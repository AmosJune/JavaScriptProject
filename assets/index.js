function result(){
    var total = 0;
    if (document.getElementById("correct1").checked) {
        total++;
    }
    if (document.getElementById("correct2").checked) {
        total++;
    }
    if (document.getElementById("correct3").checked) {
        total++;
    }
    if (document.getElementById("correct4").checked) {
        total++;
    }
    if (document.getElementById("correct5").checked) {
        total++;
    }
    document.write("Your score is :" +score);

};
