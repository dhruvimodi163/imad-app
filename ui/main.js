function count(){
    var counter=0;
    var request=new XMLHttpRequest();
    request.onreadystatechange = function(){
     if (request.readyState == XMLHttpRequest.DONE){
         counter=counter+1;
         res.send(counter.toString());
     }  
    };
}
