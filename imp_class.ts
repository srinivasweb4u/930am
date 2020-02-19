var x:number =200;
var y:number = 600;
var z:number = x+y;
console.log(z);

//  interface , class , (property , method  = access specifiers  ) , impliments , extends (inhiritence, polumorphisum, constructor 

// public ,private , protected 
 // defination of class 
 interface fatherI{
     age:number;
}
class fatherC implements fatherI{
    private fname:string;
    protected assets:number;
    protected srname:string;
    public age:number;
    constructor(){
        this.fname='Swamy';
        this.assets=10000;
        this.srname="Malyala";
        this.age=65;
    }
}

 interface studentI {
    name:string;
    email:string;
    phone:number;
    address:Function;
}
 // memory constructor
class studentC extends fatherC implements studentI{
    public name:string; // property 
    public email:string;
    public phone:number;
    private password:string;
    protected username:string;
    constructor(){
        super();  // parent constructor
        this.name="srinivas";
        this.email="srinivas.itinfogroup@gmail.com";
        this.phone =9704522221;
        this.password="welcome";
        this.username="srinivasweb4u";
    }
    public address = () => { // method 
 console.log('dilshuknager , Hyderbad');
    }
    public destails = () => {
        console.log(this);
    }

}
let obj = new studentC();
console.log(obj);