// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { 
            sectionNum: 1,
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T'
        },
        { 
            sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A'
        }
    ],
    changeEnrollment: function(sectionNum, change) {
        index = this.sections.findIndex((e) => e.sectionNum == sectionNum);
        console.log(index);

        if (index == -1)
            return;

        this.sections[index].enrolled += change;
    }
};


courseHTML = function(course) {
    courseName = document.querySelector('#courseName');
    courseCode = document.querySelector('#courseCode');
    courseName = course.name;
    courseCode = course.code;
}

sectionTemplate = function(section) {
    return `
    <tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
    </tr>
    `
}

courseSections = function(course) {
    sectionTable = document.querySelector('#sections');
    sectionTable.innerHTML = '';
    
    course.sections.forEach(section => {
        sectionTable.innerHTML += sectionTemplate(section);
    });
}

courseHTML(aCourse);
courseSections(aCourse);

input = document.querySelector('#sectionNumber');
document.querySelector('#enrollStudent').addEventListener('click', function(e) {
    aCourse.changeEnrollment(input.value, 1);
    courseSections(aCourse);
});
document.querySelector('#dropStudent').addEventListener('click', function(e) {
    aCourse.changeEnrollment(input.value, -1);
    courseSections(aCourse);
});