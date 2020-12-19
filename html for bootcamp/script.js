// Created by 🌲 ASHU 🔥

function $id(x){
    return document.getElementById(x);
}

var funny=2;
var scale=0.7;
var age=1;

alert("Rules:\n -Tap your Pet to make him/her happy.\n -If he/she is happy enough , he can Level Up by upgrading the happyness bar.\n -Do not let the hunger , thirst or happyness bars to be emptied.")

//hp section
function sad(){
    if ($id("hp").value > 0){
        $id("hp").value -= funny;
        if ($id("hp").value > 95){
            $id("b").style.border="2px ridge red"
        }
        else $id("b").style.border="2px solid #ddd"
    }
    else{
        document.write("Your Pet died by sadness.");
        clearInterval(dr);
        clearInterval(hp);
        clearInterval(hu);
    }
}

function happy(){
    if ($id("hp").value > 96){
        if (scale <= 1.6){
            scale += 0.1;
            age++;
            $id("age").innerText="Age: "+age; $id("image").style.transform="scale("+scale+")"
            $id("hp").value -= 80
        }
        else{
            age++
            $id("age").innerText = "Age: "+age;
            $id("hp").value -= 80
        }
        
    }
    else alert("You can not Level Up your pet yet.\nTap your pet and rise it's happiness. 😁");
}

function beHappy(){
    $id("hp").value += 5;
}
//end here.


//food
function hunger(){
    if ($id("hunger").value >= 2){
        $id("hunger").value -= 2;
        if ($id("hunger").value < 18) funny = 5;
        else funny = 2;
    }
    else{
        document.write("Your Pet died by Hunger");
        clearInterval(hp);
        clearInterval(hu);
        clearInterval(dr);
    }
}
function food(){
    $id("hunger").value += 8;
    $id("hp").value -= 5;
}
//end here.


//Water
function thirst(){
    if ($id("drink").value >= 2){
        $id("drink").value -= 2;
        if ($id("drink").value < 20) funny = 6;
        else funny = 2;
    }
    else{
        clearInterval(dr);
        clearInterval(hu);
        clearInterval(hp);
        document.write("Your Pet died by Thirst");
    }
}
function water(){
    $id("drink").value += 7;
    $id("hp").value -= 6;
}
//end here.

var dr=setInterval(thirst,600);
var hu=setInterval(hunger,850);
var hp=setInterval(sad,1000);