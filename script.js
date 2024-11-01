// const daysOfWeek = {  
//   ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],  
//   en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']  
// };  
// const daysToShow = confirm("Отобразить список дней недели на английском?") ? daysOfWeek.en : daysOfWeek.ru;  
// const ul = document.createElement('ul');  
// daysToShow.forEach(day => {  
//   const li = document.createElement('li');  
//   li.textContent = day;  
//   ul.appendChild(li);  
// });  
// document.body.appendChild(ul); 


// function Person(fullName, age, height) {  
//   this.fullName = fullName;  
//   this.age = age;  
//   this.height = height;  
//   this.displayData = function() {  
//       return `  
//           <tr>  
//               <td>${this.fullName}</td>  
//               <td>${this.age}</td>  
//               <td>${this.height}</td>  
//           </tr>  
//       `;  
//   };  
// }  
// let input;  
// let tableRows;
// do {  
//   input = prompt("Введите ФИО, возраст и рост через запятую ('Отмена' для завершения):");   
//   if (input) {  
//       const [fullName, age, height] = input.split(',');  
//       const person = new Person(fullName, age, height);  
//       tableRows += person.displayData();
//   }  
// } while (input !== null);  
// const tableHeader = `  
//   <table>  
//       <thead>  
//           <tr>  
//               <th>ФИО</th>  
//               <th>Возраст</th>  
//               <th>Рост</th>  
//           </tr>  
//       </thead>  
//       <tbody>  
// `;   
// const tableFooter = `  
//       </tbody>  
//   </table>  
// `;  
// document.getElementById('container').innerHTML = tableHeader + tableRows + tableFooter;  


class Person {  
    constructor(fullName, age) {  
        this.fullName = fullName; 
        this.age = age;  
    }  
    getFieldStr() {  
        return `  
            <p>ФИО: ${this.fullName}</p>  
            <p>Возраст: ${this.age}</p>  
        `;  
    }  
    getDataStr() {  
        const fieldsHtml = this.getFieldStr();  
        return `  
            <div>  
                ${fieldsHtml}  
            </div>  
        `;  
    }  
}  
// Дочерний класс Employee  
class Employee extends Person {  
    constructor(fullName, age, position) {  
        super(fullName, age); 
        this.position = position; 
    }  
    getDataStr() {  
        const fieldsHtml = this.getFieldStr();  
        return `  
            <div>  
                ${fieldsHtml}  
                <p>Должность: ${this.position}</p>  
            </div>  
        `;  
    }  
}  

const people = [  
    new Person("Иванов Иван Иванович", 30),  
    new Person("Петров Петр Петрович", 25),  
    new Employee("Сидоров Сидор Сидорович", 40, "Junior front-end developer"),  
    new Employee("Алексеева Анна Ивановна", 35, "Грузчик")  
];  

people.forEach(person => {  
    document.write(person.getDataStr());  
});
