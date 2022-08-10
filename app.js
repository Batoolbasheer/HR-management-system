'use strict'
var ID=999;

const Emp1={
    EmployeeID:0,
    fullName:"Ghazi Samer",
    Department :"Administration",
    "Image URL":"img/ghazi",
    Level:"Senior",
    salary :0,
    uniqueId: function (counter){
           
            this.EmployeeID=counter+1;
            console.log("EmployeeID----"+this.EmployeeID)
++ID;
        },
        getRandomSenior: function() {
            let salary= Math.floor(Math.random() * (2000 - 1500) + 1500);
            let netSalary=salary-(salary*0.075);
            this.salary=netSalary;
            
            console.log("Employee Name  "+this.fullName)
            console.log("salary   "+salary);
           
          }
};
Employee1.uniqueId(ID);

Employee1.getRandomSenior();





const Employee2={
    EmployeeID:1001,
    fullName:"Lana Ali",
    Department :"Finance",
    "Image URL":"img/lana.jpg",
    Level:"Senior",
    salary : 2000,
    uniqueId: function (counter){
           
        this.EmployeeID=counter+1;
++ID;
console.log("EmployeeID----"+this.EmployeeID)
    },
    getRandomSenior: function() {
        let salary= Math.floor(Math.random() * (2000 - 1500) + 1500);
        let netSalary=salary-(salary*0.075);
        this.salary=netSalary;
        console.log("Employee Name  "+this.fullName)
        console.log("salary   "+salary);
       
      }
};


Employee2.uniqueId(ID);
Employee2.getRandomSenior();




const Employee3={
    EmployeeID:1002,
    fullName:"Tamara Ayoub",
    Department :"Marketing",
    "Image URL":"img/tamara.jpg",
    Level:"Senior",
    salary :2000,
    uniqueId: function (counter){
           
        this.EmployeeID=counter+1;
++ID;
console.log("EmployeeID----"+this.EmployeeID)
    },
    getRandomSenior: function() {
        let salary= Math.floor(Math.random() * (2000 - 1500) + 1500);
        let netSalary=salary-(salary*0.075);
        this.salary=netSalary;
        console.log("Employee Name  "+this.fullName)
        console.log("salary   "+salary);
       
      }
};


Employee3.uniqueId(ID);
Employee3.getRandomSenior();

const Employee4={
    EmployeeID:1003,
    fullName:"Safi Walid",
    Department :"Administration",
    Level:"Mid-Senior",
    "Image URL":"img/safi.jpg",
    salary : 1500,
    uniqueId: function (counter){
           
        this.EmployeeID=counter+1;
++ID;
console.log("EmployeeID----"+this.EmployeeID)
    },

    getRandomSenior: function() {
        let salary= Math.floor(Math.random() * (1500 - 1000) + 1000);
        let netSalary=salary-(salary*0.075);
        this.salary=netSalary;
        console.log("Employee Name  "+this.fullName)
        console.log("salary   "+salary);
       
      }
};

Employee4.uniqueId(ID);
Employee4.getRandomSenior();

const Employee5={
    EmployeeID:1004,
    fullName:"Omar Zaid",
    Department :"Development",
    "Image URL":"img/omar.jpg",
    Level:"Senior",
    salary:2000,
    uniqueId: function (counter){
           
        this.EmployeeID=counter+1;
++ID;
console.log("EmployeeID----"+this.EmployeeID)
    },

    getRandomSenior: function() {
        let salary= Math.floor(Math.random() * (2000 - 1500) + 1500);
        let netSalary=salary-(salary*0.075);
        this.salary=netSalary;
        console.log("Employee Name  "+this.fullName)
        console.log("salary   "+salary);
       
      }
};
Employee5.uniqueId(ID);
Employee5.getRandomSenior();


const Employee6={
    EmployeeID:1005,
    fullName:"Rana Saleh",
    Department :"Development",
    "Image URL":"img/rana.jpg",
    Level:"junior",
    salary:1000,
    uniqueId: function (counter){
           
        this.EmployeeID=counter+1;
++ID;
console.log("EmployeeID----"+this.EmployeeID)
    },

    getRandomSenior: function() {
        let salary= Math.floor(Math.random() * (1000 - 500) + 500);
        let netSalary=salary-(salary*0.075);
        this.salary=netSalary;
        console.log("Employee Name  "+this.fullName)
        console.log("salary   "+salary);
       
      }  
};
Employee6.uniqueId(ID);
Employee6.getRandomSenior();


const Employee7={
    EmployeeID:1006,
    fullName:"Hadi Ahmad",
    Department :"Finance",
    Level:"Mid-Senior",
    salary:1500,
    "Image URL":"img/hadi.jpg",
    uniqueId: function (counter){
           
        this.EmployeeID=counter+1;
++ID;
console.log("EmployeeID----"+this.EmployeeID)
    },

    getRandomSenior: function() {
        let salary= Math.floor(Math.random() * (1500 - 1000) + 1000);
        let netSalary=salary-(salary*0.075);
        this.salary=netSalary;
        console.log("Employee Name  "+this.fullName)
        console.log("salary   "+salary);
       
      }
    
};
Employee7.uniqueId(ID);
Employee7.getRandomSenior();