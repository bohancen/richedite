var ul = document.querySelectorAll('.nav-docs-section')
console.log(ul)
var arr = Array.prototype.slice.call(ul).map((el)=>{
   var name = el.querySelector('h3').innerText
   var item = []
   li = Array.prototype.slice.call(el.querySelectorAll('li a'))
   item = li.map((el)=>{
      return {
         name : el.innerText,
         cname:''
      }
   })
   return {cname:'',name,item}
})
console.log(arr)
console.log(JSON.stringify(arr))