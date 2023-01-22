import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DBoperation } from 'src/app/Services/db.operation';
import { EmployeeService } from 'src/app/Services/employee.service';
import { User } from 'src/app/Services/user.interface';
import Swal from 'sweetalert2';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  users: User[] = [];
  submitted: boolean = false;
  buttonText: string = "Submit";
  dbops: DBoperation = 1;




  constructor(
    private toastr: ToastrService,
    private routing: Router,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private employeeComponent: EmployeeComponent
  ) { }



  // getAllUser() {
  //   this.employeeService.getAllUsers().subscribe((data: any) => {
  //     console.log(data, "dataatattatattta");
  //     this.users = data;
  //    // this.Id = data.id ;
  //     this.submitted = false;
  //   })
  // }

  ngOnInit() {
    this.getallusers();
  }

  getallusers() {
    this.employeeService.getAllUsers().subscribe((x: any) => {
      console.log(x, "xxxxxxxxxxxxxxxxxxx");
      this.users = x
    })
  }

 

  onEdit(userid: number) {
    // alert(userid);
    this.buttonText = "Update";
    this.dbops = DBoperation.update;
   
    this.routing.navigate([`/form/${userid}`]);


    // this.employeeComponent.addForm.patchValue(user);
  }

  onDelete(userid: number) {

    this.employeeService.deleteUser(userid).subscribe((data: any) => {
      // data.id == userid;
      // console.log(data.id,"idiidiidiiidiidd");

      // this.toastr.success("Deleted Successfully !!","Employee Registration")
    });


    Swal.fire("hello world");
    Swal.fire({
      title: 'Are you sure?',
      text: 'you will not be able to recover this record !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'yes, delete it',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.employeeService.deleteUser(userid).subscribe((data: any) => {
          //this.employeeService.getAllUsers();
          this.toastr.success("Deleted Successfully !!", "Employee Registration")

          // Swal.fire(
          //   'Deleted!',
          //   'Your imaginary file has been deleted.',
          //   'success',
          // )
          this.getallusers();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your record file is safe :)',
          'error'
        )
      }
    })
  }

  goToForm() {
    this.routing.navigate(['/form']);

  }




}
