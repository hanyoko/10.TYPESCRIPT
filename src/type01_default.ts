//string, number, boolean, null, undefined,
//Array, Object
//기본타입

let booleanType:boolean = true;
let numType:number = 30;
let stringType:string = "green";
let undefinedType:undefined = undefined;
let nullType:null = null;
let objType:object = {};
let anyType:any = 123;

// stringType = 20;     오류발생 why? 숫자열이 아닌 문자열만 가능하다.
numType = 30000;
anyType = "aa";
anyType = true;


//배열
//구문 number [], Array<number>
let arr:number[] = [0,1,2,3,4,5];
let arr2:Array<number> = [1,2,3,4,5];
let strArr:string[] = ["a","b","c","d","e"];
let strArr2: Array<string> = ["가","나","다","라","마"];
let anyArr: any [] = [30,"a",true];

//유니언타입(다중타입)
let numStr: number | string;
numStr = 30;
numStr = "A";

let numStrArr: (number | string) [] = [12,"a","b"];
//객체는 프로퍼티에 대한 타입을 지정함
//옵셔널 프로퍼티 --> ?있어도 되고 없어도 된다.
//읽기전용 프로퍼티 --> readonly 키워드

//interface IUser {}
interface IUser {
    readonly name:string;
    age:number;
    isJob?:boolean;
}
let user: IUser = {
    name: "green",
    age: 30,
    isJob: true
}
let user2: IUser = {
    name: "blue",
    age: 30,
    isJob: true
}

// user.name = "bbb";  readonly가 있으면 입력 불가능
console.log(user.name); //콘솔에는 가능
user.age = 23