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
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var p1 = 0;
    var p2 = 0;
    var p3 = 0;
    var p4 = 0;
    var p5 = 0;
    var p6 = 0;

    p1 = Math.min(first, second, third, fourth, fifth, sixth);

    if(p1 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth
    }
    if( p1 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }

}
//Function to get the mode
function getMode(){
    var first = parseFloat(doc1.value);
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
    var isaiah = Math.max(n1,n2,n3,n4,n5,n6)

    if(isaiah === n1){
        output.innerHTML = " " +first + "is the mode and appears " + n1;
    }

    if (one === two){
        n1 ++;
    }
    if (one === three){
        n1 ++;
    }
    if (one === four){
        n1 ++;
    }
    if (one === five){
        n1 ++;
    }
    if (one === six){
        n1 ++;
    }
    

    if (two === three){
        n2 ++;
    }
    if (two === four){
        n2 ++;
    }
    if (two === five){
        n2 ++;
    }
    if (two === five){
        n2 ++;
    }
    if (two === six){
        n2 ++;
    }
    
    if (three === four){
        n3 ++;
    }if (three === five){
        n3 ++;
    }if (three === six){
        n3 ++;
    }
    
    
    if (four === five){
        n4 ++;
    }
    if (four === six){
        n4 ++;
    }
    
}
//Function for the order
function getOrder(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    
    var list = [first, second,third,fourth,fifth,sixth];
    var sorted = list.sort((a,b) => a-b);
}

