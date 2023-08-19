function test()
{
    var string="welcome to it department"
    var str=""
    var longest=""
    for(let i=0;i<string.length;i++)
    {
        if(string[i]!==" ")
        {
            str=str+string[i]          
        } 
        else if(string[i]==" ")
        {
          if(str.length>longest.length)
          {
            longest=str;       
        }
        str=""    
    }
    if(str.length>longest.length)
          {
            longest=str;
          }
    }
 console.log(longest)
}
test()