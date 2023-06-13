let num = 12345;
let newnum = 0;
while(num!=0)
{
    let rem = num%10;
    num = Math.floor(num/10);

    newnum = newnum*10 + rem;
    

}
console.log(newnum);