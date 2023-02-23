
function outermost(){
    var c=30;
    function outer(name){
    
        console.log(a,name,c);
        function inner(){
            console.log(a,name,c);
        }
        var a = 10;
        return inner;
    }

    return outer;

}

outermost()("Nikki")();


function IncrementCounter(){
    var counter=0;
    this.incrementCounter= function (){
    counter++;
    console.log(counter);
    }
    this.decrementCounter= function (){
        counter--;
        console.log(counter);
        }
}

var res=new IncrementCounter();
res.incrementCounter();
res.incrementCounter();
res.decrementCounter();
//IncrementCounter()();

