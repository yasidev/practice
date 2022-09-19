const person= {
    firstName: 'yasaman',
    lastName : 'rashidi',
    age: 26,
    jobTitle :'Web Developer',
    fullName : function(){
        return `${this.firstName} ${this.lastName}`
    },
    bio : function(){
        return `${this.fullName} is a ${this.jobTitle} with ${this.age} years old.`
    },
    ageInDays : function(){
        return this.age*365;
    }
}