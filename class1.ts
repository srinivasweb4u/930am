// 1 type declaration   data types 
// 2 Generic data types 

let a:any =200;
 a='srinivas';

 function abc(x:number):any{
 return 'srinivass';
 }
 abc(300)
 

 function xyz(a :number,b :number ) : number{
     var answer:number= a+b;
     return answer;
 }
 var answer = xyz(20,30);
 console.log(answer);

 function pqr(a :string,b :string ) : string{
    var answer:string= a+b;
    return answer;
}
var answer2 = pqr('srinivas','vasu');
console.log(answer2);

function logic<vasu>(a :vasu ,b :vasu ) : vasu {
    var answer:vasu= a + b;
    return answer;
}
var answer3 = logic<string>('online ',' Training');
var answer4 = logic<number>(6700,300);
console.log(answer3);
console.log(answer4);