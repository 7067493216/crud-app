import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DBoperation } from 'src/app/Services/db.operation';
import { EmployeeService } from 'src/app/Services/employee.service';
import { User } from 'src/app/Services/user.interface';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class EmployeeComponent {

  public addForm!: FormGroup;
  users: User[] = [];
  submitted: boolean = false;
  Id: any;
  buttonText: string = "Submit";
  dbops: DBoperation = 1;
  employee: any;
  length:any;

  constructor(private toastr: ToastrService,
    private routing: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {

  }

  ngOnInit() {
    this.getAllUser();
    this.buildForm();
    this.activatedRoute.params.subscribe(param => {
      console.log(param, "parrraaammmmmm");
      this.Id = param["id"];
      console.log(this.Id, "this.Id");

    })
    if (this.Id > -1) {

      this.employeeService.getUser(this.Id).subscribe(data => {
        console.log(data, "fffffffffffffffffffffffffffffff");
        this.employee = data;
        console.log(this.employee, "zzzzzzzzzzzzzzzzzz");
        this.addForm.controls["id"].patchValue(this.employee.id);
        this.addForm.controls["title"].patchValue(this.employee.title);
        this.addForm.controls["firstName"].patchValue(this.employee.firstName);
        this.addForm.controls["lastName"].patchValue(this.employee.lastName);
        this.addForm.controls["email"].patchValue(this.employee.email);
        this.addForm.controls["dob"].patchValue(this.employee.dob);
        this.addForm.controls["password"].patchValue(this.employee.password);
        this.addForm.controls["confirmPassword"].patchValue(this.employee.confirmPassword);
        this.addForm.controls["acceptTerms"].patchValue(this.employee.acceptTerms);
      })

    }
  }

  getAllUser() {
    this.employeeService.getAllUsers().subscribe((data: any) => {
      //console.log(data, "dataatattatattta");
      this.users = data;
     // this.Id = data.id ;
      this.submitted = false;
      // this.length = this.users.length;
    })
  }

  buildForm() {
    this.buttonText = "Submit";
    this.dbops = DBoperation.create;

    this.addForm = this.fb.group({
      // id: new FormControl(0),
      // title: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      // firstName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])),
      // lastName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])),
      // email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])),
      // dob: new FormControl('', Validators.compose([Validators.required, Validators.pattern("/^(31[ \/ ](0[13578]|1[02])[ \/ ](18|19|20)[0-9]{2})|((29|30)[\/](01|0[3-9]|1[1-2])[\/](18|19|20)[0-9]{2})|((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[0-2])[\/](18|19|20)[0-9]{2})|(29[\/](02)[\/](((18|19|20)(04|08|[2468][048]|[13579][26]))|2000))$/")])), //Format is DD/MM/YYYY
      // password: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$')])), //Password should be at least 8 characters long and should contain one number,one character and one special character.
      // confirmPassword: new FormControl('', Validators.compose([Validators.required])),
      // acceptTerms: new FormControl(false, Validators.required),


      id:[0],
      title: [null],
      firstName: [null],
      lastName: [null],
      email: [null],
      dob: [null],
      password: [null],
      confirmPassword: [null],
      acceptTerms: [true],
    })

  }

  get v() {
    return this.addForm.controls;
  }

  

  onSubmit(e: any) {
    console.log(e, "eeeeeeeee");
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }

    if (!this.Id) {
      // this.buttonText = "Submit";
      // this.dbops = DBoperation.create;
      console.log(this.addForm.value, "this.addForm.valuethis.addForm.valuethis.addForm.valuethis.addForm.valuethis.addForm.value");

      this.employeeService.addUser(this.addForm.value).subscribe((res: any) => {
        this.toastr.success("Employee Added Successfully !!", "Employye Registration");
        //this.onCancel();
        //this.routing.navigate(['/']);
        this.getAllUser()
        // this.employeeService.getAllUsers().subscribe((y: any) => {
        //   console.log(y, "yyyyyyyyyyyyyyyyyyyyyyyyyyyy");
        //   this.users = y;
        //   console.log(this.users, "this.addForm.valuethis.addForm.value");


        // })
      });
     

    } else {
      // this.buttonText = "Update";
      // this.dbops = DBoperation.update;
      this.employeeService.updateUser(this.addForm.value).subscribe((data: any) => {
        this.toastr.success("Employee Updated Successfully !!", "Employye Registration")
        this.routing.navigate(['/']);

      })
    }

  }

 

  onCancel() {
    this.addForm.reset();
    this.buttonText = "Submit";
    this.dbops = DBoperation.create;
  }

  goToList() {
    this.routing.navigate(['/']);

  }





}
