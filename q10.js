const fs =  require('fs');

fs.appendFile('mynewfile1.txt' , 'Hello content!' , ()=>{
    console.log("append complete!");
})

fs.open('/mynewfile2.txt' , 'w' , (err , fd)=>{
    if(err)
    {
        console.error("Error opening in file" , err)
        return
    }
    console.log(" file open successfuly ", fd)
})