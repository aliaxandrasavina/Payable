import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.scss']
})
export class AddClientDialogComponent {
  form: FormGroup;
  isEditing: boolean;

  genders = ['Male', 'Female'];

  // get appointmentsFormArray(): FormArray {
  //   return this.form.controls.appointments as FormArray;
  // }

  // get appointmentsFormGroups(): FormGroup[] {
  //   return this.appointmentsFormArray.value as FormGroup[];
  // }
  
  constructor(
    public dialogRef: MatDialogRef<AddClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();

  }

  initForm(): void {
    this.form = this.fb.group({
      id: 0,
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      email: '',
      phoneNumber: '',
      instagramUsername: '',
      telegramUsername: '',
      // appointments: this.fb.array([
      //   this.fb.group({
      //     // id: 0,
      //     title: 'test1',
      //     start: '',
      //     // duration: 0,
      //   }),
      //   this.fb.group({
      //     // id: 1,
      //     title: 'test 2',
      //     start: '',
      //     // duration: 0,
      //   })
      // ]),
    })
  }

  onSubmit() {

  }
  close() {
    this.dialogRef.close();
  }

  // addAppointment() {
  //   this.appointmentsFormArray.push(
  //     this.fb.group({ title: 'new item '})
  //   )
  // }
}
