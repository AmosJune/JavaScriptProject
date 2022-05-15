// The next button after every question
function next (){
    document.getElementsByClassName("container")[id2];
    document.getElementsByClassName("container")[id3];
    document.getElementsByClassName("container");
    document.getElementsByClassName("container");
};

// The result button that displays the total
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
    alert("Your score is : " +total)

};
