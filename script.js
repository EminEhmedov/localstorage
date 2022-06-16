let form1 =document.querySelector('form')
let inp=document.querySelector('input')
let ul=document.querySelector('ul')
let arr=[]
let li=''


    form1.addEventListener('submit',test)


function test(e){
    if(inp.value!=''){

        e.preventDefault();
arr.push(inp.value)
localStorage.setItem('gelen',JSON.stringify(arr))
   
li=''
    for(let i=0;i<arr.length;i++){
        li+=`<li><p>${arr[i]}</p> <button  onclick='sil(this)' > Delete</button></li>`
    }
    ul.innerHTML=li

    }

    
  inp.value=''

}
onload=function(){
  let lstor=JSON.parse(localStorage.getItem('gelen'))
  console.log(lstor);
    if(lstor!=null){
      
        arr=lstor
       for(let i=0;i<arr.length;i++){
           li+=`<li><p>${arr[i]}</p> <button  onclick='sil(this)' > Delete</button></li>`
       }
       ul.innerHTML=li
   
    }
    else{
        if(inp.value!=''){

            e.preventDefault();
    arr.push(inp.value)
    localStorage.setItem('gelen',JSON.stringify(arr))
       
    li=''
        for(let i=0;i<arr.length;i++){
            li+=`<li><p>${arr[i]}</p> <button onclick='sil(this)'> Delete</button></li>`
        }
        ul.innerHTML=li
    
        }
    
        
      inp.value=''
    }
}


   function sil(element){
    console.log(element.parentElement.firstChild.textContent);
    element.parentElement.remove()

let regem =arr.indexOf(`${element.parentElement.firstChild.textContent}`);
arr.splice(regem,1)
console.log(arr);
localStorage.clear()
localStorage.setItem('gelen',JSON.stringify(arr))
   }

   