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

function Person (name, email) {
    this.name = name;
    this.email = email;
}

function Teacher (name, email, subject, hobbies, ) {
    this.subject = subject;
    this.hobbies = hobbies;

    //the function below calls on the person
    Person.call(this, name, email);

    this.get_info = function() {
        console.log(name + '' + email + subject + '' + hobbies);
    }
}

//the function below is used to extend the function above

Teacher.prototype = Object.create(Person.prototype);


function Student (grade, hobbies) {
    this.grade = grade;
    this.hobbies = hobbies;
}

//the function below is used to extend the function above

Student.prototype = Object.create(Person.prototype);


function School () {
    this.students = [];
    this.teachers = [];
}

this.addStudent = function(add) {
    this.students.push(add);
}

//the function below is used to extend the function above

School.prototype.printInfo = function() {
    console.log(this.students + '' + this.teachers);
}


//remember that whenever you see 'new' it means an instance 
var phillySchool = new School();
phillySchool.addStudent(new Student("joe", "chad", "lori", "sally"))
phillySchool.addTeacher (new Teacher("John", "Smith"))
