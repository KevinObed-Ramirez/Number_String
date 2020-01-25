"use strict"

var doc1 = document.getElementById("first");
var doc2 = document.getElementById("second");
var doc3 = document.getElementById("third");
var doc4 = document.getElementById("fourth");
var doc5 = document.getElementById("fifth");
var doc6 = document.getElementById("sixth");
var output = document.getElementById("output");


//function to set Largest number
function getLargest(){
    var first = parseFloat(doc1.value) ;
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var largest = Math.max(first,second,third,fourth,fifth,sixth);
    output.innerHTML = largest;
    return largest;
}

//function to get the mean
function mean(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var mean = (first+second+third+fourth+fifth+sixth)/6;
    output.innerHTML = mean;
    return mean;
}

//Function to get the range
function getRange(){
    output.innerHTML = getLargest()-getSmallest();
}
//Function to get the smallest 
function getSmallest(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var smallest = Math.min(first,second,third,fourth,fifth,sixth);
    output.innerHTML = smallest;
    return smallest;
}

//Function to get the median
function getMedian(){

}
//Function to get the mode
function getMode(){
    var first = parseFloat(doc1.value) ;
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var n1 = 1;
    var n2 = 1;
    var n3 = 1;
    var n4 = 1;
    var n5 = 1;
    var n6 = 1;

    if (one == two){
        n1 ++;
    }
    if
}