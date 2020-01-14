$("document").ready(function(){
    $("document").ready(function(){        
        var ch = 0;
        $(".news img").click(function(){
            var i = $(".news img").index(this);
            
            if(i == 0){
                ch--;
                if(ch < 0)ch = 1;
                
                
                
            }else{
                ch++;
                if(ch > 1) ch = 0;
                
            }
            $(".news-box").hide().eq(ch).show();
        })
        
        
        
        $(window).scroll(function(){
            var pos= $(window).scrollTop();
            console.log(pos)
            if(pos >= 500){
                $("aside").fadeIn(400)
            }else{
                $("aside").fadeOut(400)
            }
        })
        
    
})
    })