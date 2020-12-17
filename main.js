var statement="";
function getpara1() {
    var inputs= [];
    for (var i=1 ; i<=6 ; i++){
        statement=document.getElementById("para1_input_box_" + i).value;
        inputs.push(statement);
        console.log(inputs);
    }
    inputs.join(" . ");
    document.getElementById("showp1").innerHTML=inputs.join(" . ")
}
var statement2="";
function getpara2() {
    var inputs2= [];
    for (var j=1 ; j<=6 ; j++){
        statement2=document.getElementById("para2_input_box_" + j).value;
        inputs2.push(statement2);
        console.log(inputs2);
    }
    inputs2.join(" . ");
    document.getElementById("showp2").innerHTML=inputs2.join(" . ")
}