import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

interface Employee {
  company?: string;
  dob?: Date;
  education?: string;
  email?: string;
  experience?: number;
  firstname?: string;
  gender?: string;
  lastname?: string;
  package?: number;
  id?: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'crud-app';
//   displayedColumns: string[] = [
//     'id',
//     'firstname',
//     'lastname',
//     'email',
//     'dob',
//     'gender',
//     'education',
//     'company',
//     'experience',
//     'package',
//     'action',
//   ];
//   dataSource!: MatTableDataSource<any>;

//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   constructor(
//     private _dialog: MatDialog,
//     private _empService: EmployeeService,
//     private _http: HttpClient
//   ) {}
//   ngOnInit(): void {
//     this.getEmployeeList();
//   }

//   openAddEditEmpForm(employee?:Employee) {
//     const DialogRef = this._dialog.open(EmpAddEditComponent,{
//       data:employee
//     });
//     DialogRef.afterClosed().subscribe({
//       next: (val) => {
//         if (val) {
//           this.getEmployeeList();
//         }
//       },
//     });
//   }

//   allEmployees: Employee[] = [];

//   // getEmployeeList(): void {
//   //   this._empService.getEmployee().subscribe((employees) => {
//   //     this.allEmployees = employees;
//   //     console.log(this.allEmployees);
//   //   });
//   // }

//   getEmployeeList(): void {
//     this._empService.getEmployee().subscribe((employees) => {
//       this.allEmployees = employees;
//       this.dataSource = new MatTableDataSource(this.allEmployees);
//       this.dataSource.paginator = this.paginator;
//       this.dataSource.sort = this.sort;
//     });
//   }
//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }

//   deleteEmployee(employeeId: string) {
//     // Make a DELETE request to the Firebase endpoint with the specific contact ID
//     this._http
//       .delete(
//         `https://employee-form-77730-default-rtdb.asia-southeast1.firebasedatabase.app/employee/${employeeId}.json`
//       )
//       .subscribe(() => {
//         this.allEmployees = this.allEmployees.filter(
//           (employee) => employee.id !== employeeId
//         );
//         alert('employee deleted');
//       });
//   }
//   // openEditForm(employeeId:string){
//   //   const employeeToUpdate = this.dataSource.data.find(employee => employee.id === employeeId);
//   //   const DialogRef = this._dialog.open(EmpAddEditComponent,{
//   //     data:employeeToUpdate,
//   //   });
//   //   DialogRef.afterClosed().subscribe({
//   //     next: val => {
//   //       if(val){
//   //         this.getEmployeeList();
//   //       }
//   //     }
//   //   });
//   // selectedEmployee: Employee | null = null;
//   // editEmployee(employee: Employee) {
//   //   this.selectedEmployee = { ...employee }; // Assign the clicked contact to selectedEmployee for editing
//   // }
//   // cancelEdit() {
//   //   this.selectedEmployee = null; // Reset selectedEmployee to null to cancel editing
//   // }

//   // saveEditedContact() {
//   //   if (this.selectedEmployee) {
//   //     const updatedEmployee: Employee = {
//   //       id: this.selectedEmployee.id,
//   //       firstname: this.selectedEmployee.firstname,
//   //       lastname: this.selectedEmployee.lastname,
//   //       email: this.selectedEmployee.email,
//   //       experience: this.selectedEmployee.experience,
//   //       dob: this.selectedEmployee.dob,
//   //       package: this.selectedEmployee.package,
//   //       company: this.selectedEmployee.company,
//   //       education: this.selectedEmployee.education,
//   //       gender: this.selectedEmployee.gender,
//   //     };

//   //     // Make a PUT request to update the contact details in the database
//   //     this._http
//   //       .put(
//   //         `https://employee-form-77730-default-rtdb.asia-southeast1.firebasedatabase.app/employee.json/${this.selectedEmployee.id}`,
//   //         updatedEmployee
//   //       )
//   //       .subscribe(() => {
//   //         // After successful update, reset selectedEmployee to null to exit editing mode
//   //         this.selectedEmployee = null;
//   //         this.getEmployeeList();
//   //       });
//   //   }
//   // }

// //   openEditForm(employee:Employee) {
// //     const DialogRef = this._dialog.open(EmpAddEditComponent, {
// //       data: {employee}, // Wrap employeeToUpdate in an object
// //     });
// //     DialogRef.afterClosed().subscribe({
// //       next: val => {
// //         if (val) {
// //           this.getEmployeeList();
// //         }
// //       }
// //     });
// // }



}
