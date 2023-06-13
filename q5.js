var s = "racecaf"

var i = 0;
var j = s.length-1;
var k =0;
while(i<j)
{
    if(s[i]!=s[j])
    {
    k++;
    break;
}
    i++;
    j--;

}

if(k==0)
console.log("String is palindrome")
else
console.log("String is not palindrome")