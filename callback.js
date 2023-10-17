var hello=function(data)
{
    console.log("data:"+data)
}

var hey=function(callbacks)
{
    callbacks('sandra')
}

hey(hello);