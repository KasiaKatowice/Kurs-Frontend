const chopekInfo = [
    {
        src: "https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcja6/img/gada.gif?raw=true",
        alt: "pan cyfrowy gada",
        desc: "pan cyfrowy gada o JS"
    },
    {
        src: "https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcja6/img/intro.gif?raw=true",
        alt: "pan cyfrowy majta nogą",
        desc: "pan cyfrowy majta nogą bo się nudzi"
    },
    {
        src: "https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcja6/img/siada.gif?raw=true",
        alt: "pan cyfrowy siada",
        desc: "pan cyfrowy siada bo bolą go już nogi"
    },
    {
        src: "https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcja6/img/wstaje.gif?raw=true",
        alt: "pan cyfrowy wstaje",
        desc: "pan cyfrowy wstaje i idzie do domu"
    }
]

const div = document.querySelectorAll(".parent div");
for(const  [i,d] of div.entries() ){
 const img=d.querySelector("img");
 img. src=chopekInfo[i]. src;  
 d.onclick=function(){
     const div = document.querySelectorAll(".content div");
     div[1].innerHTML=chopekInfo[i].desc;
     const img=div[0].querySelector("img");
     img.src=chopekInfo[i]. src; 
 } 
}



