import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  FrContac: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<MyFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();

  }

  ngOnInit() {
    this.FrContac = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      mail: new FormControl('', [Validators.required, Validators.minLength(5)]),
      mGroup: new FormGroup({
        password: new FormControl,
        cfPassword: new FormControl,
      }),
    });
  }
  onSubmit() {
    console.log(this.FrContac);
  }


}
