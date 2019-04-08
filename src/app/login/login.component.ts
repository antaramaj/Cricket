import { ApiService } from '../service/api.service';
import { UserService } from '../service/user.service';
import {ActivatedRoute, Router,ParamMap } from '@angular/router';
import { Observable } from  'rxjs/Observable';
import { HEROES } from '../url';
// import 'rxjs/add/operator/map';
import { Component, OnInit, Injectable } from '@angular/core';
import {
  HttpClient ,
  HttpRequest,
  HttpResponse,
  HttpParams ,
  HttpHeaders
  // HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { PARAMETERS } from '@angular/core/src/util/decorators';

 @Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id: string = '';
  password: string = '';
  error: string = '';
  mycont:any;
  myurl:any;
  base_urlarr:any;
  url:any;
  
  constructor(private http : HttpClient,
    private apiservice: ApiService,
  private userService: UserService,private router:Router, private route:ActivatedRoute) {


  }

  ngOnInit() {
    this.base_urlarr=HEROES;

    this.url=this.base_urlarr[0].base_url;
    localStorage.setItem("url",  this.url);
  }

   login(e){
	    let send_data ={
      "id": {
          "institutionUserId": "",
          "institutionUserName": this.id
      },
"institutionUserPassword": ""
};
 
 this.myurl=localStorage.getItem("url");
 
  this.http.post(this.myurl+"/LoginModule2/validateUser" , send_data).subscribe((res : Response) => {
    this.mycont=res; 
    console.log(this.mycont);
  if((this.mycont.attributes.status)=='success'){
     
      this.router.navigate(['/login-second/'+this.id]);
   }
   else{
    // alert('not a valid id');
   // this.router.navigate(['/login'])
	this.router.navigate(['/login-second/'+this.id]);
   }

  }
);


}

	

  
   }
   
  

