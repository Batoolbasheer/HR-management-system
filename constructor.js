'use strict';
let ID =999;
const arr =[];

function EmployeeInfo(EmployeeId,Name,Department,imge,Level,salary){
this.Name=Name;
this.EmployeeId=EmployeeId;
this.Department=Department;
this.Level=Level;
this.imge=imge;
this.salary=salary;

this.uniqueId=function (counter){
           
    this.EmployeeId=counter+1;
  
++ID;
};
this.getRandomsalary=function(max,min) {
    let salary= Math.floor(Math.random() * (max - min) + min);
    let netSalary=salary-(salary*0.075);
    this.salary=netSalary;
  };
arr.push(this);
};


EmployeeInfo.prototype.render= function(){
document.write(`<p> Employee Name : ${this.Name} <br>Department :  ${this.Department} <br>Employee Salary : ${this.salary} jd</p>`);
};


let Employee1 = new EmployeeInfo(1000,"Ghazi Samer","Administration","img/ghazi.jpj","Senior",0);
let Employee2= new EmployeeInfo(1001,"Lana Ali","Finance","img/lana.jpg","Senior",2000);
let Employee3=new EmployeeInfo(1002,"Tamara Ayoub","Marketing","img/tamara.jpg","Senior",2000);
let Employee4= new EmployeeInfo(1003,"Safi Walid","Administration","img/safi.jpg","Mid-Senior",1500);
let Employee5= new EmployeeInfo(1004,"Omar Zaid","Development","img/omar.jpg",2000);
let Employee6= new EmployeeInfo(1005,"Rana Saleh","Development","img/rana.jpg","junior",1000);
let Employee7= new EmployeeInfo(1006,"Hadi Ahmad","Finance","hadi.jpg","Mid-Senior",1500);


Employee1.uniqueId(ID);
Employee1.getRandomsalary(2000,1500);
Employee2.uniqueId(ID);
Employee2.getRandomsalary(2000,1500);
Employee3.uniqueId(ID);
Employee3.getRandomsalary(2000,1500);
Employee4.uniqueId(ID);
Employee4.getRandomsalary(1500,1000);
Employee5.uniqueId(ID);
Employee5.getRandomsalary(2000,1500);
Employee6.uniqueId(ID);
Employee6.getRandomsalary(1000,500);
Employee7.uniqueId(ID);
Employee7.getRandomsalary(1500,1000);


Employee1.render();
Employee2.render();
Employee3.render();
Employee4.render();
Employee5.render();
Employee6.render();
Employee7.render();