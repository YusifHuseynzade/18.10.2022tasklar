let arr = [3, 6, 9, 12, 15];
let arr1 = arr.map(mapfunction);

document.getElementById("map").innerHTML = arr1;

function mapfunction(x)
{
   return x*3;
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

let arr2 = [9, 16, 36, 64, 25];
document.getElementById("map2").innerHTML = arr2.map(Math.sqrt);

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

let arr4 = [3, 4, 5, 6, 8];
let arr5 = arr4.map(num=>num**2);

console.log(arr5);

console.log([1,3,5, , 7, ,11].map((x, index) => {
    console.log(`visit ${index}`);
    return x*3;
}));

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

let arr6 = [3,6,7,8,12,45,34,23];
let arr7 = arr6.map((num,index) => {
    if(index>3){
        return num;
    }
})
console.log(arr7);

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

let txt = document.getElementById("text");
let soz = "Istehsalat";
let newsoz = Array.prototype.map.call(soz,function(item)
{
    return item + "10";
}
)
console.log(newsoz);

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

let arr8 = [3,6,7,8,12,45,34,23];

let newarr = arr8.map((x,index) => {
    return {key:index, x:x*x}
})

console.log(newarr);

const indexvalue = 1;
showimg(indexvalue);
function btn_slider(a){showimg(indexvalue = a);}
function side_slider(a){showimg(indexvalue += a);}
function showimg(a) {
    let i;
    const img = document.querySelectorAll('img');
    const slider = document.querySelectorAll('.btn-slide span');
    if (a > img.length){indexvalue = 1}
    if (a < 1){indexvalue = img.length}
    for(i=0;i < img.length;i++) {
        img[i].style.display = "none";
    }
    for(i=0;i < img.length;i++) {
        slider[i].style.background = "red";
    }
    img[indexvalue-1].style.display = "block";
    slider[indexvalue-1].style.background = "white";
}