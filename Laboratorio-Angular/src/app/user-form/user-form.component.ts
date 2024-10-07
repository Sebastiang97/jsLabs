import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private userService: UserService) {
    console.log('1. Primero sucederá esto');
  }

  /* Ciclo de Vida */
  ngOnInit() {
    console.log('2. Luego esto');
    this.initForm();
  }

  /* Ciclo de Vida */
  ngAfterViewInit(): void {
    console.log('3. Seguido de esto');
  }

  /* Ciclo de Vida */
  ngOnDestroy() {
    console.log('4. Finalmente esto (cuando el componente sea destruido)');
    this.clearDataForm();
  }

  initForm() {
    this.form = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      member: new FormControl(null),
      gender: new FormControl(''),
      age: new FormControl(''),
    });
  }

  submitForm() {
    let isMember;
    if (this.form.value.member == '' || null) {
      isMember = false;
    } else {
      isMember = true;
    }

    this.userService.addUsers({
      Name: this.form.value.username,
      Email: this.form.value.email,
      Cellphone: this.form.value.phone,
      Member: isMember,
      Gender: this.form.value.gender,
      age: this.form.value.age
    })
    this.clearDataForm();
  }

  clearDataForm() {
    this.form.reset();
  }

  checkData() {
    console.log(this.form.value);
    this.form.reset();
  }
}
