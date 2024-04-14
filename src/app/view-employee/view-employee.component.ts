import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component'; // Assuming EmpAddEditComponent is your add/edit employee dialog component
import { EmployeeService } from '../services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css'],
})
export class ViewEmployeeComponent implements OnInit {
  title = 'crud-app';
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'package',
    'action',
  ];
  dataSource!: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService,
    private _http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddEditEmpForm(employee?: Employee) {
    const dialogRef = this._dialog.open(EmpAddEditComponent, {
      data: employee
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getEmployeeList();
      }
    });
  }

  allEmployees: Employee[] = [];

  getEmployeeList(): void {
    this._empService.getEmployee().subscribe((employees: Employee[]) => {
      this.allEmployees = employees;
      this.dataSource = new MatTableDataSource<Employee>(this.allEmployees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(employeeId: string) {
    this._http
      .delete(
        `https://employee-form-77730-default-rtdb.asia-southeast1.firebasedatabase.app/employee/${employeeId}.json`
      )
      .subscribe(() => {
        this.allEmployees = this.allEmployees.filter(
          (employee) => employee.id !== employeeId
        );
        alert('Employee deleted');
      });
  }
}