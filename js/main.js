let users = [
    {
        name: "Avazbek",
        age: "25"
    },
    {
        name: "Umid",
        age: "21"
    },
    {
        name: "O'ktam",
        age: "22"
    },
    {
        name: "Valijon",
        age: "19"
    },
    {
        name: "Sarvar",
        age: "27"
    },
    {
        name: "Sardor",
        age: "17"
    },
    {
        name: "Toxir",
        age: "16"
    }
]

function findBigUsers(array, minAge){
    var obj = [];
    for(i = 0; i < Object(array).length; i++){
        var age = Object.values(array[i]);

        if(age[1] >= minAge){
            console.log(age);
        }
    }
}

console.log(findBigUsers(users, 19));