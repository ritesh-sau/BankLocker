import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { AuthenticationService } from '../services/auth.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HeaderType } from '../modules/enums/header-type.enum';
import { Subscription } from 'rxjs';
import { Jwtrequest } from '../modules/models/jwt-request';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm!: FormGroup;
  loading = Inject(LoadingService);
  private sunbcription: Subscription[] = [];

  constructor(private fb: FormBuilder,
    private router: Router,
    private authservice: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  credentials = {
    username: '',
    password: ''
  }


  submitForm() {
    var username = this.loginForm.get('username')?.value;
    var password = this.loginForm.get('password')?.value;

    // this.credentials.username = this.loginForm.get('username')?.value;
    // this.credentials.password = this.loginForm.get('password')?.value;

    this.credentials = {
      username: username,
      password: password
    };

     var authRequest = new Jwtrequest(username,password);



    // if (this.credentials.username != '' && this.credentials.password != '') {
    //   console.log("inside the login page")
    //   this.sunbcription.push(
    //     this.authservice.login(authRequest).subscribe({
    //       next: (response: HttpResponse<any>) => {
    //         console.log("RESPONSE-----" + response)

    //         const tempheder = response.headers.get(HeaderType.JWT_TOKEN);
    //         const token = tempheder;
    //         console.log("Token-----" + token);

    //       },

    //       error: (errorResponse: HttpErrorResponse) => {
    //         debugger
    //         console.log("ERROr-----" + errorResponse.error)
    //       }
    //     }
    //     )
    //   );
    // }

    if (username === "ritesh" && password === "1234") {
      this.router.navigateByUrl('/master/product/addProduct').then(() => {
        //this.loading.loadingOn();
        window.location.reload()
        localStorage.setItem("loginstatus", 'true')
      });
    }

  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

}
