const text = document.getElementById('text')
const words = document.getElementById('words')
const char = document.getElementById('char')

text.addEventListener("input" , (e)=> {
    const word = e.target.value.split(' ')
  
console.log(words.innerHTML)
   
let totword =0
let totchar = 0
word.forEach(wd => {
    if(wd != ''){
        totword++
    }
    totchar += wd.length
});
words.innerHTML=`${totword}`
char.innerHTML=`${totchar}`

})
