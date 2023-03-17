class test0{
    constructor(msg){
     
    }
}

class test2 extends test0{
    constructor(msg){
        super('fd')
        
    }

}

class test extends test2{
    constructor(msg){
        console.log(new.target)
        super('fd')
    }
}
  
var a =  new test("fefefe")
//console.log(a.stack)
