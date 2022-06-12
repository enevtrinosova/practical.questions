function ParentClass() {}

ParentClass.prototype.lolkek = () => console.log('lolkek');

function ChildClass() {
    this._super();
    this.childLolkek = () => {
        console.log('childLolkek');
    }
}

const extend = (Parent, Child) => {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype._super = Parent;

    return Child;
}

const ExtChild = extend(ParentClass, ChildClass);
const child = new ExtChild();

child.lolkek();
child.childLolkek();
