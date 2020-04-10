
const message1 = document.querySelector('#message1');
const message2 = document.querySelector('#message2');
const mylocation = document.querySelector('#location');

 document.addEventListener('submit',(event)=>
{
    event.preventDefault();
    message1.textContent = ('Loading...')
    message2.textContent = ('Loading..')
    const loc = (mylocation.value);
    fetch('http://localhost:3000/whether?address='+loc).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            $("#locationbox2").show();
            $("#locationbox").show();
            message1.textContent = ("Enter a valid location")
            console.log("Try another search");
            message1.textContent = ("Cannot find temperature")
            console.log("Try another search");
        }
        else
        {
            $("#locationbox2").show();
            $("#locationbox").show();
            console.log(data.Location);
            message1.textContent = (data.Location);
            console.log(data.Temperature);
            $("#message2").html(data.Summary+"<br>Current :"+data.Temperature+"&deg;C <br> Min : "+data.Min+"&deg;C<br> Max : "+data.Max+"&deg;C")
        }
    })
})
})
       