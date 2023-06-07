// age [0, 18, +inf]
// isMember (true, false)

function checkAccess(age, isMember) {
    if(age >= 18 && isMember){
        // full access
        return "all";
    }
    else if(age < 18 && isMember){
        // partial access
        return "partial/minor/member";
    }
    else if(age >= 18 && !isMember) {
        // adult partial access
        return "partial/adult/no-member"
    }
    else if(age < 18 && !isMember) {
        return "none";
    }
}

let minorAccess = checkAccess(17, true);
let adultAccess = checkAccess(19, false);

if (minorAccess.startsWith("partial")) {
    /// partial access
}

if (adultAccess.startsWith("partial")) {
    /// partial access
}

/// Plain JavaScript Object

let person = {
    name:"Jennifer Ahouefa",
    age:25,
    gender: "female"
}

person.age;
person.gender;

let name = person.name;

/// majuscule
name.toUpperCase();

///minuscule
name.toLowerCase();

/// decouper un string en un tableau de caracteres
name.split("");

/// ARRAYS
let notes = [10, 15, 30, 60]; ///number
let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; /// string

notes.join(" "); // "10 15 30 60"