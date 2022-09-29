var elems=document.querySelectorAll(".elems");
var img=document.querySelector("#image");
var show=document.querySelector("#show")

elems.forEach(function(elem)
{
    elem.addEventListener("mouseenter",function(){
        let i=elem.getAttribute("data-image");
        let w=elem.getAttribute("data-width");
        let h=elem.getAttribute("data-height");
        img.style.backgroundImage=`url(${i})`
        img.style.width=w;
        img.style.height=h;
    })
    document.addEventListener("mousemove", function(move){
        // console.log(move.x);
        img.style.left=`${move.x-150}px`;
        img.style.top=`${move.y-100}px`;

    })
})