
var productName =document.getElementById("productName")
var productPrice =document.getElementById("productPrice")
var productDes =document.getElementById("productDes")
var productCat =document.getElementById("productCat")
var productImg =document.getElementById("productImg")
var productRow =document.getElementById("productRow")
var addBtn=document.getElementById("addBtn")
var updateBtn =document.getElementById("updateBtn")
var searchinput =document.getElementById("searchinput")

var productlist=[]


 if(localStorage.getItem('list')){
   productlist=JSON.parse(localStorage.getItem('list'))
   display()
 }



function creatProduct(){

if(Validation(productName)&&Validation(productPrice)&&Validation(productCat)&&Validation(productDes)){

  var imgSrc = productImg.files[0]?.name || "OlP.webp"
 var productObj={
  pName:productName.value,
pPrice: productPrice.value,
pDes: productDes.value,
pCat: productCat .value,
pImg:"img/"+ imgSrc
}
productlist.push( productObj)
localStorage.setItem('list',JSON.stringify(productlist))
 display()
clearFun()
}
}




function clearFun(){
  productName.value=''
productPrice.value=''
productDes.value=''
productCat.value=''
productImg.value=''


}



function display(list=productlist){
  var box=''
 for(var i=0;i<list.length;i++)
 {
box+=`

<div class="col-3">

<div class="product-item">

<img src="${list[i].pImg}" class="w-100">
  <h3>${list[i].pName}</h3>
  <h4>${list[i].pPrice}</h4>
<p>${list[i].pCat}</p>
<p>${list[i].pDes} </p>

<div my-3 d-flex justify-content-between align-items-center>
<button onclick="deleteFun(${i})">delete</button>
<button onclick="handleUpdate(${i})">update</button>
</div>
</div>
</div>

`
 }
productRow.innerHTML=box
}

 function deleteFun(index){
productlist.splice(index,1);
localStorage.setItem('list',JSON.stringify(productlist))
display()
}

var globalIndex;
function handleUpdate(index){
 globalIndex=index
  productName.value=productlist[index].pName
  productPrice.value=productlist[index].pPrice
  productDes.value=productlist[index].pDes
    productCat.value=productlist[index].pCat

    addBtn.classList.add('d-none')
    updateBtn.classList.remove('d-none')
}


function updateFun()
{
productlist[globalIndex].pName=productName.value
productlist[globalIndex].pPrice=productPrice.value
productlist[globalIndex].pCat=productCat.value
productlist[globalIndex].pDes=productDes.value  

  updateBtn.classList.add('d-none')
  addBtn.classList.remove('d-none')

localStorage.setItem('list',JSON.stringify(productlist))
display()
}



function searchFun(){
  var term=searchinput.value.trim().toLowerCase()
  var searcharr=[]
for(var i=0;i<productlist.length;i++){
if(productlist[i].pName.toLowerCase().includes(term))
  searcharr.push(productlist[i])
}
display(searcharr)
}


function Validation(ele){
var regex ={
  productName:/^[A-Z][a-z]{2,10}$/,
  productPrice:/^\d+$/,
  productCat:/^(mobile|tv|toy|pc)$/,
    productDes:/^[A-Za-z0-9/s]{10,100}$/,
}
 var isValid=regex[ele.id].test(ele.value.trim())

  ele.classList.toggle('is-valid',isValid)
    ele.classList.toggle('is-invalid',!isValid)

    ele.nextElementSibling.classList.toggle('d-none',isValid)
    
  return isValid
}




var ele =document.getElementById('demo')

ele.style.cssText=`
background-color:#ccc;
color :white;
`



// var ps=document.getElementsByTagName('p')
// for(var i=0;i<ps.length ;i++){
//   ps[i].addEventListener('click',function(){
//     console.log("test")
//   }
// )
// }


var btn =document.getElementById('btn')
btn.addEventListener('click',addProduct)
function addProduct(){
  console.log('product')
}




var mainImg=document.querySelector(".big-img img")
var imgs =document.getElementsByTagName('img')
for(var i=0 ;i<imgs.length;i++){
  imgs[i].addEventListener('click',function(e)
  {
    for(var j=0 ;j<imgs.length;j++){
      imgs[j].classList.remove('active')
    }
    var imgSrc=e.target.getAttribute('src')
    mainImg .setAttribute('src',imgSrc)
    e.target.classList.add('active')
  })
}



// var imgs=document.querySelectorAll('img')
// for(var i=0;i<imgs.length;i++){
//   console.log(imgs[i].addEventListener.('click',function(e){
//     console.log(e.target.getAttribute('src'))
//   }));
// }



var group=document.querySelector('.group')
group.addEventListener('click',function(e){
  if(e.target.tagName=='IMG'){
    console.log(e.target.src)
  }
})




