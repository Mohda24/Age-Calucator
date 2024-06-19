// Select elements
const firstp=document.querySelectorAll(".firstp");
const inputs=document.querySelectorAll("input")
const year=document.querySelector(".year input");
const day=document.querySelector(".day input");
const month=document.querySelector(".month input");
const Show_day=document.getElementById("day");
const Show_month=document.getElementById("month");
const Show_year=document.getElementById("year");
const btn=document.querySelector("img");
let now=new Date();
// function
function error(){
    firstp.forEach(el=>{
        el.style.color="red";
        el.nextElementSibling.innerHTML=""
    })
    inputs.forEach(elm=>{
        elm.style.border="1px solid red"
    })
}
function add(){
    Show_day.innerHTML="- -"
    Show_month.innerHTML="- -"
    Show_year.innerHTML="- -"
}
btn.addEventListener("click",function(){
    // Empty Values
    if(!day.value||!month.value||!year.value){
        add()
        error()
        inputs.forEach(elm=>{
            !elm.value ? elm.nextElementSibling.innerHTML="This field is required":elm.nextElementSibling.innerHTML="";
        })
        
    }else{
        if(isNaN(month.value)||parseInt(month.value)<1||parseInt(month.value)>12){
            error()
            month.nextElementSibling.innerHTML="Must be a valid Month"
            
        }else{
            month.nextElementSibling.innerHTML=""
        }
        if(isNaN(day.value)||parseInt(day.value)<1||parseInt(day.value)>31||parseInt(day.value)>new Date(parseInt(year.value),parseInt(month.value),0).getDate()){
            add()
            error()
            day.nextElementSibling.innerHTML="Must be a valid Day";

        }else{
            add()
            day.nextElementSibling.innerHTML="";
        }
        if(isNaN(year.value)||parseInt(year.value)>new Date().getFullYear()){
            add()
            error()
            year.nextElementSibling.innerHTML="Must be in the past";
        }else{
            add()
            year.nextElementSibling.innerHTML="";
        }


        if(!day.nextElementSibling.innerHTML && !month.nextElementSibling.innerHTML &&  !year.nextElementSibling.innerHTML){
            cur_year=now.getFullYear()-parseInt(year.value);
            cur_month=now.getMonth()-parseInt(month.value)+1;
            cur_day=now.getDate()-parseInt(day.value);

            if(cur_day<0){
                cur_month--;
                cur_day=new Date(0,cur_month,0).getDate()+cur_day
                
            }
            if (cur_month<0){
                cur_year--
                cur_month+=12

            }
            inputs.forEach(elm=>{
                elm.style.border="1px solid hsl(0, 0%, 86%)"
            })
            firstp.forEach(el=>{
                el.style.color="rgb(113,111,111)";
            })
            Show_day.innerHTML=cur_day
            Show_month.innerHTML=cur_month
            Show_year.innerHTML=cur_year
        }

    }





})

