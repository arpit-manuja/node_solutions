function myrandom(){
    return new Promise((resolve, reject) =>{


        var x = Math.floor(Math.random()*10)+1;
        resolve(x);
  


})
    
}



myrandom()
.then((data)=>{
    if(data<5)
    console.log("data rejected" , data)
    else
    console.log("Data accepted" , data)
})
.catch((err)=>{
    console.log("error" , err)
});