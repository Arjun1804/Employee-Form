import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

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
  id?: string
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  addEmployee(data: any): Observable<any> {
    console.log(data);

    return this._http.post('https://employee-form-77730-default-rtdb.asia-southeast1.firebasedatabase.app/employee.json',data);
    
    //return this._http.post('http://localhost:3000/employees',data);
  
  // getEmployeeList(): Observable<any> {
  //   return this._http.get('https://employee-form-77730-default-rtdb.asia-southeast1.firebasedatabase.app/employee.json');
    //return this._http.get('http://localhost:3000/employees');
  }
  getEmployee(): Observable<Employee[]> {
    return this._http.get<{ [key: string]: Employee }>('https://employee-form-77730-default-rtdb.asia-southeast1.firebasedatabase.app/employee.json')
      .pipe(
        map(responseData => {
          const employeeArray: Employee[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              employeeArray.push({ ...responseData[key], id: key });
            }
          }
          return employeeArray;
        })
      );
  }

  updateEmployee(id: string, data: any): Observable<any> {
    return this._http.put(`https://employee-form-77730-default-rtdb.asia-southeast1.firebasedatabase.app/employee/${id}.json`,data);
    //return this._http.put(`http://localhost:3000/employees/${id}`,data);
  }


  deleteEmployee(id: string):Observable<any> {
    return this._http.delete(`https://employee-form-77730-default-rtdb.asia-southeast1.firebasedatabase.app/employee.json/${id}`);
    //return this._http.delete(`http://localhost:3000/employees/${id}`);

  }

}
