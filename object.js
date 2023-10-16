function details(name,age,place)
{
    this.name="name",
    this.age=22,
    this.place="thrissur"
    this.display=function(){
        console.log("name="+this.name,"age"+this.age)
    }
}

var dilshad =new details("dilshad",22,"thrissur");

dilshad.display()