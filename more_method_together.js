const students = [
    
        {name: "can", point:40},
        {name: "tuba", point:60},
        {name: "elif", point:30},
        {name: "osman", point:100},
        {name: "can", point:40},
        {name: "hakan", point:60},
        {name: "deniz  ", point:30},
];


const filtered =students.filter(student => student.point <50);

const plusPoint=filtered.map(student =>{
    return `${student.name} adli ogrencinin yeni notu ${student.point +15};
         `
})

console.log(plusPoint);


const newNotes=students.filter(student => student.point <50).map(student =>
    `${student.name} adli ogrencinin yeni notu ${student.point +15} `
)

console.log(newNotes);
