var inout_ = document.getElementById("calculator");
var notAbleOnStart = ["+","/","*","%"];
var operators = ["+","-","/","*","%"]
function bttn(num){
    if(inout_.value.replace("-","") === ""){
        if(notAbleOnStart.includes(num)){
            
        }else{
            var lastIndex = inout_.value.slice(inout_.value.length -1)
            if(operators.includes(lastIndex)&&operators.includes(num)){
                inout_.value=inout_.value.replace(lastIndex, num)
            }else{
                inout_.value += num
            }
        }
    }else{
        var lastIndex=inout_.value.slice(inout_.value.length -1)
        if(operators.includes(lastIndex)&&operators.includes(num)){
            inout_.value=inout_.value.replace(lastIndex, num)
        }else{
            inout_.value += num
        }
    }


}

function calcolate(){
    inout_.value = eval(inout_.value);
    if(inout_.value === "undefined"){
        inout_.value = ""; 
    }
}

function Allclear(){
    inout_.value = "";
}

function Delete_(){
   var dd =inout_.value.slice(0, -1);
   inout_.value = dd;
}