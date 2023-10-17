class sample{
    sampleHello(){
        console.log("hloo")
    }
}

class hello extends sample{
 
    constructor(num1,num2)
    {
        super(hello)
        this.num1="num1"
        this.num2="num2"
hello()
{
    console.log("tdft"+(this.num1+this.num2))
}
    }
}
hello.sampleHello()

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("Ford", "Mustang");
  document.getElementById("demo").innerHTML = myCar.show();