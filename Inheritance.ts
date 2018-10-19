class Human {

    name: string;
    age: number;

    /**
     *
     */
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    calculation(): boolean {
        if (this.age < 21) {
            return true;
        }
        else {
            return false;
        }
    }

}

class Students extends Human {
    name: string;
    age: number;
    /**
     *
     */
    constructor(name: string, age: number) {
        super(name, age);
        this.name = name;
        this.age = age;
    }


    tostring(): void {
        if (this.calculation) {
            console.log('${this.name} is student');
        }
        else {
            console.log('${this.name} is not student');
        }
    }
}

var students = new Students('Rahul',22);
students.tostring();