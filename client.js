// The application should have an input form that collects _employee 
// first name, last name, ID number, job title, annual salary_.

let EmployeeArray = [];
let MonthlyTotal = 0;

$(document).ready(readyNow);

function readyNow(){
    appendDom();
    $('.container').on('click', '#submitBtn', handlesubmitBtn);
    $('.container').on('click', '#DeleteButn', handleDeleteButn);
    PrintResult();

}

function appendDom(){
    let header = $(`<h1>jQuery Salary Calculator</h1></br>`)
    $('.container').append(header);

    let inputTitle = $(`<h3>Add Employee</h3>`)
    $('.container').append(inputTitle);


    $('.container').append(`<input type="text" placeholder ="First Name" id = "firstName">`)
    $('.container').append(`<input type="text" placeholder ="Last Name" id = "lastName">`)
    $('.container').append(`<input type="text" placeholder ="ID" id = "ID">`)
    $('.container').append(`<input type="text" placeholder ="Title" id = "Title">`)
    $('.container').append(`<input type="text" placeholder ="Annual Salary" id = "EmployeeSalary">`)
    $('.container').append(`<button id = "submitBtn">Submit</button>`)



    let tableName = $(`<h3>Employees</h3>`)
    $('.container').append(tableName);

    let table = $(`<table></table>`);
    table.append('<thead><tr><th id = "FirstName">First Name</th><th id = "LastName">Last Name</th><th id = "ID">ID</th><th id = "Title">Title</th><th id = "Salary">Annual Salary</th><th></th></thead>')
    
    let tbody = $('<tbody id="tableBody"></tbody>');
    table.append(tbody);
    $('.container').append(table);
}

function handlesubmitBtn(){
    let Fname = $('#firstName').val();
    let Lname = $('#lastName').val();
    let EmployeeID = $('#ID').val();
    let EmployeeTitle = $('#Title').val();
    let EmployeeAnnualSalary = $('#EmployeeSalary').val();

    let object = {
        FirstName:Fname,
        LastName: Lname,
        Employee_ID: EmployeeID,
        Employee_Title: EmployeeTitle,
        Employee_AnnualSalary:EmployeeAnnualSalary
    }
    EmployeeArray.push(object);
    PrintResult();

     $('#firstName').val('');
     $('#lastName').val('');
     $('#ID').val('');
     $('#Title').val('');
     $('#EmployeeSalary').val('');

}

function PrintResult(){
    $('#tableBody').empty();
    EmployeeArray.forEach(function(person){
        let $listItem = $(`<tr><td>`+ person.FirstName + `</td>`+`<td>` + person.LastName +`</td>` + `<td>` + person.Employee_ID + `</td>` + `<td>` + person.Employee_Title +`</td>` + `<td>`+ person.Employee_AnnualSalary + `<td>` +`<button id = "DeleteButn">Delete</button)`+`</td>`+`</tr></td>`)
        $('#tableBody').append($listItem);

    })
}

function handleDeleteButn(){
    console.log('hello');
}
