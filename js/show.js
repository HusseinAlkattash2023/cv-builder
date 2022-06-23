const btn=document.querySelector('#btn1');
const item_2=document.querySelector("#item-2");

window.onscroll=()=>{
    if(scrollY>=400){
        btn.style.display="block";
    }else{
        btn.style.display="none";
    }
    setTimeout(()=>{
        if(scrollY>=500 && scrollY<=930){
        item_2.classList.add("active_2");
        }
        else{
            item_2.classList.remove("active_2");
        }
    }
        ,1000)
    
}
    btn.onclick=()=>{
        scroll({
            left:0,
            top:0,
            behavior:"smooth"
        });
}