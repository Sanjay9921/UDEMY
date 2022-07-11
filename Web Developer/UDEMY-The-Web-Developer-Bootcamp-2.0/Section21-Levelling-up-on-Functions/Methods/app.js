const myMath = {
    PI: 3.14,
    square: function(num){
        return num * num;
    },
    cube: function(num){
        return num ** 3;
    }
}

myMath.PI;

myMath.square(2);//4

myMath.cube(2);//8

myMath["cube"](4);//64

