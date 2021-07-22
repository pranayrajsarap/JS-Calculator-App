function cal(result)
{
        //var value = "";
       // value = value + result;
        //console.log(value);
        var display = document.getElementById('display');
        
                        
        if(result == '=')
        {
                var len = display.value.length;
                var str = display.value;
                display.value = eval(str);
                display.addEventListener('keypress',function(e){
                        if(e.keyCode === 187){
                                display.value = eval(str);
                            }
                     
                });
        }   
        else
        {
                display.value = display.value + result;
        }
        
 
        if(result == 'C')
        {
                display.value = "";
        }

        
        

        
}