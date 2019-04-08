import { ApiService } from '../service/api.service';
import { UserService } from '../service/user.service';
import {ActivatedRoute, Router,ParamMap } from '@angular/router';
import { Observable } from  'rxjs/Observable';
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
  selector: 'app-login-second',
  templateUrl: './login-second.component.html',
  styleUrls: ['./login-second.component.css']
})
export class LoginSecondComponent implements OnInit {

  id: string = '';
  password: string = '';
  error: string = '';
  mycontent : any;
  myurl:any;
  imageUrl: string = '';
  lastName: string = '';

  constructor(private http : HttpClient,
    private apiservice: ApiService,
  private userService: UserService,private router:Router, private route:ActivatedRoute) {
    const uid = +this.route.snapshot.paramMap.get('uid');
   this.myurl=localStorage.getItem("url");
  }
  uid:any;
  ngOnInit() {
	  
    this.route.paramMap.subscribe (param=>{
     // this.uid=+param.get('uid'); 
     // this.selcategoryId=param.get('categoryId'); 
      this.uid=param.get('uid'); 
   //  alert("wwwwwwwwwwww"+this.uid);   
   }
	
    )}

   login(e){
	    let send_data ={
      "id": {
          "institutionUserId":"",
          "institutionUserName": this.uid
      },
"institutionUserPassword": this.password
};
 
//console.log(send_data);
  this.http.post(this.myurl+"/LoginModule2/validateUserPassword" , send_data).subscribe((res : Response) => {
  //  console.log('Souvick'+JSON.stringify(res));
this.mycontent=res;
                    if((this.mycontent.attributes.status)=='success'){
                  
                      
                          if(localStorage){
                        // Store data
                       // student_details
                        localStorage.setItem("userID", this.mycontent.attributes.student_details.institutionUserId);
                        localStorage.setItem("user_name", this.uid);
                        localStorage.setItem("firstName",this.mycontent.attributes.student_details.firstName);
                        localStorage.setItem("emailId", this.mycontent.attributes.student_details.emailId);
                        localStorage.setItem("imageUrl", this.mycontent.attributes.student_details.imageUrl);
                        localStorage.setItem("lastName", this.mycontent.attributes.student_details.lastName);
                        localStorage.setItem("dateOfBirth",this.mycontent.attributes.student_details.dateOfBirth);
                        localStorage.setItem("pincode",this.mycontent.attributes.student_details.pincode);
                        localStorage.setItem("primaryContactNumber",this.mycontent.attributes.student_details.primaryContactNumber);
                        localStorage.setItem("state",this.mycontent.attributes.student_details.state);
                        localStorage.setItem("streetAddress",this.mycontent.attributes.student_details.streetAddress);
                        localStorage.setItem("institutionId",this.mycontent.attributes.student_details.institutionId);
                        localStorage.setItem("institutionUserRoles",this.mycontent.attributes.student_details.institutionUserRoles);

                        
                        
                        
                      //  console.log(this.mycontent.attributes.student_details.institutionUserId);
                      //  console.log(this.mycontent.attributes.student_details.firstName);
                      //  console.log(this.mycontent.attributes.student_details.emailId);
                      //  console.log(this.mycontent.attributes.student_details.lastName);
                      //  console.log(this.mycontent.attributes.student_details.pincode);
                      //  console.log(this.mycontent.attributes.student_details.primaryContactNumber);
                      //  console.log(this.mycontent.attributes.student_details.state);
                      //  console.log(this.mycontent.attributes.student_details.streetAddress);
                      console.log(this.mycontent.attributes.student_details.institutionUserRoles);
                        // Retrieve data
                      
                    } else{
                        alert("Sorry, your browser do not support local storage.");

                    }
       this.router.navigate(['/Dashboard']);
    }
    else{
     //this.router.navigate(['/login'])
	 this.router.navigate(['/Dashboard']);
   }

  }
);
 

}

 

  
   }
   
  

