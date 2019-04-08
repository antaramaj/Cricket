import { Injectable } from '@angular/core';
import { 
  HttpClient , 
  HttpRequest,
  HttpResponse,
  HttpParams ,
  HttpHeaders
  // HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
//import { AuthService } from "../auth/auth.service";

// const API_BASE_URL = Constants.API_BASE_URL;

export interface Payload { }

@Injectable()
export class ApiService {

  private endPoint: string;

  constructor(
    private http: HttpClient
  ) {}

  // isUserLoggedIn(): boolean {
  //   return this.auth.isUserAuthenticated();
  // }

   /**
    * setApiEndpoint - This method will create and set the resolved api endpoint
    * @param route 
    * @param useRouteAsFullyQualifiedUrl 
   */
  //  setApiEndpoint(route: string): void {
  //    this.endPoint = API_BASE_URL + "/" + route;
  //  }

  /**
   * getApiEndPoint - this method returns the set endpoint
   */
  //  getApiEndPoint(): string {
  //    return this.endPoint;
  //  }
  
  payloadToQueryParams(paramsPayload: Payload): HttpParams {
    let querParams = new HttpParams();
    for (let key in paramsPayload) {
      if (paramsPayload.hasOwnProperty(key)) {
        querParams = querParams.append(key, paramsPayload[key]);
      }
    }
    return querParams;
  }

//       var requestHeaders = {
//   headers: new HttpHeaders({
//     "Content-Type": "application/x-www-form-urlencoded"
//     //'Content-Type': 'application/json'                                                        
//     // 'Authorization': 'Basic YWRtaW46MTIzNA==',
//     // 'rest_key_name': 'X-API-KEY',
//     // 'rest_realm':'REST API'
//   })  text/html; charset=UTF-8

// };

  getDefaultHeaders(): HttpHeaders {
    let defaultHeaders = new HttpHeaders();
    defaultHeaders = defaultHeaders.set("Content-Type", "application/json");
    // if (this.storageservice.fetch('userDetails')) {
    //  // console.log(JSON.parse(this.storageservice.fetch('userDetails')).authtoken);
    //   defaultHeaders = defaultHeaders.set('authtoken', JSON.parse(this.storageservice.fetch('userDetails')).authtoken);
    // }
    return defaultHeaders;
  }
  
  
  // getFileHeaders(): HttpHeaders {
  //   let defaultHeaders = new HttpHeaders();
  // //  defaultHeaders = defaultHeaders.set('Content-Type', 'multipart/form-data');
  //   if (this.storageservice.fetch('userDetails')) {
  //     // console.log(JSON.parse(this.storageservice.fetch('userDetails')).authtoken);
  //     defaultHeaders = defaultHeaders.set('authtoken', JSON.parse(this.storageservice.fetch('userDetails')).authtoken);
  //   }
  //   return defaultHeaders;
  // }



  // private extractData(res: Response) {
  //   // let body = res.json();
  //   // return body || {};

  //   return res;
  // }

  // private handleError(error: any): Promise<any> {
  //   console.log('An error occurred', error);
  //   return Promise.reject( error);
  // }

  // postPromise(route: string, paramsPayload: Payload): Promise<any> {



  //   this.setApiEndpoint(route);
  //   let httpRequestOptions = { headers: this.getDefaultHeaders() };



  //   return this.http.post(this.getApiEndPoint(), paramsPayload, httpRequestOptions)
  //     .toPromise()
  //     .then(this.extractData)
  //     .catch(this.handleError);


  // }



  get(route: string): Observable<any> {
    //this.setApiEndpoint(route);
    let httpRequestOptions = {
                              headers: this.getDefaultHeaders(),
                            //  params: this.payloadToQueryParams(paramsPayload)
                            };
    // if(this.isUserLoggedIn()){
    //   httpRequestOptions['withCredentials'] = true;
    // }
    //return this.http.get(this.getApiEndPoint(), httpRequestOptions);
  //  return this.http.get(route,httpRequestOptions);
    return this.http.get(route);
  }

  post(route: string, paramsPayload: Payload): Observable<any> { 
   // console.log(paramsPayload);
    //this.setApiEndpoint(route);
    let httpRequestOptions = { headers: this.getDefaultHeaders() };
    //let payload={ paramsPayload };
    // if(this.isUserLoggedIn){
    //   httpRequestOptions['withCredentials'] = true;
    // }
    //return this.http.post(this.getApiEndPoint(), paramsPayload, httpRequestOptions);
    return this.http.post(route,paramsPayload);
  }


  // imagePost(route: string, paramsPayload: Payload): Observable<any> {
  //   this.setApiEndpoint(route);
  //   let httpRequestOptions = { headers: this.getFileHeaders() };
  //   // if(this.isUserLoggedIn){
  //   //   httpRequestOptions['withCredentials'] = true;
  //   // }
  //   return this.http.post(this.getApiEndPoint(), paramsPayload, httpRequestOptions);
  // }

  // imagePostPromise(route: string, paramsPayload: Payload): Promise<any> {

  //   this.setApiEndpoint(route);
  //   let httpRequestOptions = { headers: this.getFileHeaders() };

  //   return this.http.post(this.getApiEndPoint(), paramsPayload, httpRequestOptions)
  //     .toPromise()
  //     .then(this.extractData)
  //     .catch(this.handleError);

  // }
  
  
  // put(route: string): Observable<any> {
  //   this.setApiEndpoint(route);
  //   return this.http.get(route);
  // }
  
  // delete(route: string): Observable<any> {
  //   this.setApiEndpoint(route);
  //   return this.http.delete(this.getApiEndPoint());
  // }

}
