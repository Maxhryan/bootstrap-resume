displayPosition
let myName = "max ryan";
console.log("Name:" + myName.toUpperCase());
console.log("Career: JavaScript Dev");
console.log("Description: I like planes");
console.log(" ");

const myInterests = ['Rock Climbing', 'Driving', 'Coding', 'Working Out', 'Adventure'];
console.log('My Interests: ');
for(let i = 0; i < myInterests.length; i++){
    console.log('* ' + myInterests[i]);
}
console.log(' ');

console.log('My Previous Experience:')
displayPosition('Viper Imaging', 'Wood shop Box Builder', 'Built wooden crates for cameras to be shipped in.')

console.log('My Skills:')
const mySkills = [
    {
        skill:'Woodworking',
        isCool: true
    },
    {
        skill:'Flying Spaceships',
        isCool: true
    },
    {
        skill: 'Deep Sea Diving',
        isCool: true
    },
    {
        skill:'Racing',
        isCool:true
    },
    {
        skill:'Running',
        isCool:false
    }
]
for(i = 0; i < mySkills.length; i++){
    displaySkill(mySkills[i].skill, mySkills[i].isCool)
}

function displayPosition(companyName, jobTitle, jobDescription){
    console.log(jobTitle + ' at ' + companyName + ' - ' + jobDescription);

}

function displaySkill(skill, isCool){
    if(isCool == true){
        console.log('*BAM: ' + skill)
    } else{
        console.log('*' + skill)
    }
}