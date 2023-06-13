var s = "arpit manuja";
 s = s.toLowerCase();

var count = 0;
for(var i=0;i<s.length;i++)
{
    
    if(s[i]=="a" || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u')
    count++;
}

console.log(count);