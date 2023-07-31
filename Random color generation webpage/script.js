const btn = document.querySelector(".btn");
function randomcolor()
{
    let cons = "#";
    const val = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++)
    {
        cons = cons + val[Math.floor(Math.random()*16)];
    }
    return cons;
}
function changecolor()
{
    document.body.style.backgroundColor = randomcolor();
}

btn.addEventListener("click" , changecolor);