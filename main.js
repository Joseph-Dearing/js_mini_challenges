//this is problem one 
function Multiplier() {
    this.currentValue = 1;

    this.multiply = function(number) {
        this.currentValue = number * this.currentValue;
        return this.currentValue;
    }
    this.getCurrentValue = function(number) {
        return this.currentValue;
    }
}

var y = new Multiplier();

//y.multiply(4); 
// Or basically you would multiply by any number greater then 1 
// And whatever the answer is will be your number that you will keep multiplying with

//this problem two which is the photo alblum
//this is the first constructor
function Alblum(photo1, photo2, photo3) {
    //this is a set up of an empty array
    this.photos = [] 
 //set up add photos function
    this.addPhotos = function(pic) {
        this.photos.push(pic);
    }
    //set up list photo function with add loop
    this.listphotos = function(){
        for(let pic of this.photos)
        pic.info();

    }
}
//photo constructor 
function Photo (file, location) {
    this.file = file;
    this.location = location;
//info on indiv photo functions
    this.info = function(){
        console.log(this.file + this.location);
    }
}
//those are new instances below
var foto = new Alblum();
foto.addPhotos(new Photo('pic.jpeg', 'car'));
foto.addPhotos(new Photo('pic2.jpeg', 'car'));
foto.addPhotos(new Photo('pic3.jpeg', 'car'));
foto.addPhotos(new Photo('pic4.jpeg', 'car'));
foto.addPhotos(new Photo('pic5.jpeg', 'car'));
foto.addPhotos(new Photo('pic6.jpeg', 'car'));

foto.listphotos();


//this will be problem 3 which is creating a prototypical Person object


function Person(name, email) {
    this.name = name;
    this.email = email;
}

function Teacher(name, email, subjectTaught) {
    this.subjectTaught = subjectTaught;

    Person.call(this, name, email);

// Those objects must have attributes and methods that are relevant to what they describe.
    this.getInfo = function() {
        return name + ' , ' + email + ' , ' + subjectTaught;
    }

    Teacher.prototype = Object.create(Person.prototype);
}

function Student(name, email, classes) {
    this.classes = classes;

    Person.call(this, name, email);

// Those objects must have attributes and methods that are relevant to what they describe.
    this.getInfo = function() {
        return name + ' , ' + email + ' , ' + classes;
    }

    Student.prototype = Object.create(Person.prototype);

    }

// This is a School object that stores instances for people
function School(name, location) {
    this.name = name;
    this.location = location;
    this.students = [];


    this.addStudents = function(students) {
        this.students.push(students);
    }

    this.sortStudents = function() {
        for (let index of this.students) {
            return index;
        }
    }
}

// After the process above you would want to create code that checks
// that those objects are working correctly and are stored correctly. 

var smith = new Teacher("science", "10th", "Smith", "smithteacherdude@gmail.com");
var chad  = new Teacher("history", "111th", "chadstuckinthepast@gmail.com");

var kim = new Student("gym", "9th", "Kim", "kim@gmail.com");
var joseph = new Student("math", "11th", "Joseph", "joseph@gmail.com");

var phillySchool = new School("Philly High School", "Philly");
var phillySchool2 = new School("Philly High School", "Philly");

//the function below is used to extend the function above

// School.prototype.printInfo = function() {
//     console.log(this.students + '' + this.teachers);
// }


//remember that whenever you see 'new' it means an instance 
phillySchool.addStudents(smith);
phillySchool.addStudents(chad);
phillySchool2.addStudents(kim);
phillySchool2.addStudents(joseph);