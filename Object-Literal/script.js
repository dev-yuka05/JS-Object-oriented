const person = {
    name : "안녕세요",
    key : ["헉", "헐"],
    userName() {
        console.log(this);
    },
    keyWorld(){
        console.log(this.key[0]);
    }
};

person.userName();
person.keyWorld();
