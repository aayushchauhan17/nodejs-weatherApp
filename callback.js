        

function callbackFun(x, y, callback){
    setTimeout(()=>{
        callback(x+y);
    })
}


callbackFun(1,2, (data)=>{
    output= data;
})
