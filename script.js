let htmlinput = document.querySelector(".input-html");
let cssinput = document.querySelector(".input-css");
let jsinput = document.querySelector(".input-js");
let savebtn = document.querySelector(".save");
let result = document.querySelector("#result");
let fullscreen = document.querySelector(".bigger");
let outputbox = document.querySelector(".output-box");
let copy = document.querySelectorAll(".copy");

savebtn.addEventListener('click' ,() =>{

    result.contentDocument.body.innerHTML = htmlinput.value;
    result.contentDocument.head.innerHTML = `<style>${cssinput.value}</style>`;
    result.contentWindow.eval(jsinput.value);

});

fullscreen.addEventListener('click',() =>
{
    outputbox.classList.toggle("output-full-screen");

    if(outputbox.classList.contains("output-full-screen"))  // return true or false
    {
        fullscreen.style.transform="rotate(180deg)"; 
    }
    else{
        fullscreen.style.transform="rotate(0deg)";  
    }

});


copy.forEach((e) =>
    {
    e.addEventListener('click',()=>
    {
     

        if(e.classList.contains("copy1"))
        {
            navigator.clipboard.writeText(htmlinput.value);
        }
        else if(e.classList.contains("copy2"))
            {
                navigator.clipboard.writeText(cssinput.value);
            }
            else
            {
                navigator.clipboard.writeText(jsinput.value);
            }


    });
    })







