export interface User {
    id: number,
    title: string, 
    firstName: string, 
    lastName: string , 
    email: string, 
   dob :string, 
   password :string ,
    confirmPassword:string, 
    acceptTerms: boolean 
}



//step-1 => npm i bootstrap
//step-2 => npm i font-awesome
//step-3 =>
//step-4 =>
//step-5 =>
//step-6 =>
//step-7 =>
//step-8 =>
//step-9 =>

 // Swal.fire("hello world");
  // Swal.fire({
  //   title:'Are you sure?',
  //   text: 'you will not be able to recover this record !',
  //   icon: 'warning',
  //   showCancelButton: true,
  //   confirmButtonText: 'yes, delete it',
  //   cancelButtonText: 'No, keep it'
  // }).then((result)=> {
  //   if(result.value){
  //     Swal.fire(
  //       'Deleted!',
  //        'Your imaginary file has been deleted.',
  //        'success',

  //     )
  //   } else if(result.dismiss === Swal.DismissReason.cancel){
  //     Swal.fire(
  //       'Cancelled',
  //       'Your record file is safe :)',
  //        'error'
  //     )
  //   }
  // })