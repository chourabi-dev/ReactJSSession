console.log("JS IS READY");

/*
var myInput = document.getElementById('my-input');
var preview = document.getElementById('preview');

myInput.addEventListener('keyup',(e)=>{
    
    const value = e.target.value;

    preview.innerHTML = value;


})*/

/*
var produit = [ 'apples',"KIWI","bannas","pinaples" ];
var fruitList = document.getElementById("my-fruit-list");
var search = document.getElementById("search-for");


produit.map((f)=>{
    var blocHTML = '<li>'+f+'</li>';
    fruitList.innerHTML = fruitList.innerHTML+  blocHTML;
})


search.addEventListener('keyup',(e)=>{
    const v = e.target.value.toLocaleLowerCase();

    var res = produit.filter((f)=> (f.toLocaleLowerCase().indexOf(v) != -1) );

    fruitList.innerHTML="";
    res.map((f)=>{
        var blocHTML = '<li>'+f+'</li>';
        fruitList.innerHTML = fruitList.innerHTML+  blocHTML;
    })
})*/


 
var imgs = [
    'https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
    'https://wallpaperaccess.com/full/755385.jpg',
    'https://wallpaperaccess.com/full/425119.png'
    
];

var img = document.getElementById("preview-img");
var previous = document.getElementById("previous-btn");
var next = document.getElementById("next");


// init image
var selectedIndex = 0;

img.setAttribute('src',imgs[selectedIndex])


next.addEventListener('click',()=>{
    selectedIndex++;

    if (selectedIndex == imgs.length) {
        
        selectedIndex = 0;
    }


    img.setAttribute('src',imgs[selectedIndex]);
})


previous.addEventListener('click',()=>{
    selectedIndex--;

    if (selectedIndex < 0) {
        selectedIndex = (imgs.length-1)
    }


    img.setAttribute('src',imgs[selectedIndex]);
})