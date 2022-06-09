Function.prototype.myBind = function (context) {
    const callFunc = this;
    return (...arguments) => callFunc.call(context, ...arguments);
}

const obj1 = {
    a: 2,
    b: 3,
};

const callFunction = function (c) {
    console.log(this.a + this.b + c);
};

const call = callFunction.myBind(obj1);

call(2);
