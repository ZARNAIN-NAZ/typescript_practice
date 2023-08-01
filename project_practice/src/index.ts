// console.log("typescript is her e")
// console.log("typescript is amzaing")

//CLASSES--------------------------------------
// class User{
//     public email:string
//    private  name:string //#name would also make it private in JS.
//       readonly city: string ="karachi"
//      constructor(email:string,name:string){
//          this.email =email;
//          this.name=name;
//      }
//  }
 
//private public 
// class User{
//     protected _courseCount = 1;
//      readonly city: string ="karachi"
//     constructor(
//         public email:string,
//         public name:string,
//         // private userId : string
//     ){
      
//     }

    //PRIVATE method
    // private deleteToken(){
    //     console.log("token deleted")
    // }
    //getter setter
    // get getAppleEmail():string{
    //     return `apple ${this.email}`
    // }
    // get courseCount():number{
    //     return this._courseCount
    // }
    // set courseCount(courseNum){
        // if(courseNum <=1){
        //     throw new Error("course count should be more than one ");
        // }
        // this._courseCount=courseNum;
    // } //setter not allowed to return anything in TS.
// }

//protected "inheritance" protected  can be used in any inherited class
// class subUser extends User{
//     isFamil  :boolean =true
//     changeCourseCount(){
//         this._courseCount=4
//     }
// }

// const myVar = new User("z@gmail.com" ,"dd")
// myVar.city 

//--------------more on interface
// interface TakePhoto{ //interface are things that should always used in methods or in class
//     cameraMode :string
//     filter:string
//     burst:number
// }
// interface Story{
//     createStory():void
// }
// class Instagram implements TakePhoto{ //when we implement interface we used word implement
//     constructor(
//         public cameraMode:string,
//         public filter :string,
//         public burst:number
//     ){}
// }
// class Youtube implements TakePhoto , Story{
//     constructor(
//         public cameraMode:string,
//         public filter :string,
//         public burst:number,
//         public short:string
//     ){}
//     createStory(): void {
//         console.log("story is cretaed")
//     }
// }


// ------------------abstract class----------------
abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter :string
    ){}
    abstract getSepia():void
      getReelTime():number{
      //some calculation
      return 8
      }
}
// const myVar = new TakePhoto("tset" , "wew") //it gives error if we write abstract in class name if thers no abstract then its fine no error is here
class Instagram extends TakePhoto{
constructor(public cameraMode:string,
   public filter:string,
   public burst : number
    ){
        super(cameraMode , filter)
    }
    getSepia(): void {
      console.log("sepia")  
    }

}
const myVar = new Instagram("tset" , "wew" , 9)  //now we can use abstract class in extended class but not anywhere else
myVar.getReelTime()
