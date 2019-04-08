import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ApiService } from '../service/api.service';
import { RequestOptions, Headers, Http } from '@angular/http';
import { 
  HttpClient , 
  HttpRequest,
  HttpResponse,
  HttpParams ,
  HttpHeaders
  // HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable()

export class UserService {
public url;
  constructor( private http : HttpClient,  private apiservice: ApiService) {
   this.url = localStorage.getItem('url');
    //alert(url);
  }


  listTypes(selActivity,selcategoryId) {
    
  
    let send_data = {};
    send_data['user_type'] = 1;
    
    let api_url =  this.url+"/CreamsonIntelliLanguagelabservices-0.0.2-SNAPSHOT/lab-activities/getCategory/"+selActivity+"/"+selcategoryId;

    return this.apiservice.get(api_url);
  }
//Sub Content types

  listSUbTypes(selActivity,selcategoryId,selectedTyId) {

    let send_data = {};
    send_data['user_type'] = 1;
    
    let api_url =  this.url+"/CreamsonIntelliLanguagelabservices-0.0.2-SNAPSHOT/lab-activities/"+selActivity+"/"+selcategoryId+"/"+selectedTyId;

    return this.apiservice.get(api_url);
  }
  
  listNOSUbTypes(selActivity,selcategoryId,selectedTyId,subtypeid) {

    let stid=1;
    selActivity=4;
    selcategoryId=1;
    selectedTyId=4;

    //let stid=localStorage.getItem('userID');
    
    let api_url =  this.url+"/CreamsonIntelliLanguagelabservices-0.0.2-SNAPSHOT/lab-activities/"+selActivity+"/"+selcategoryId+"/"+selectedTyId+"/"+0+"/"+stid;

    return this.apiservice.get(api_url);
  }
  
  // getting Main Content
  getContent(selContentId) {
	    let api_url=this.url+"/CreamsonIntelliLanguagelabservices-0.0.2-SNAPSHOT/lab-activities/getContent/"+selContentId;
		// let api_url="http://192.168.31.196:8090/CreamsonIntelliLanguagelabservices-0.0.2-SNAPSHOT/lab-activities/getContent/"+selContentId;
	//	console.log(api_url);
  //  let api_url =  "http://192.168.31.196:8080/lab-activities/"+selActivity+"/"+selcategoryId+"/"+selectedTyId+"/"+subtypeid;
  //alert( api_url); 
    return this.apiservice.get(api_url);
  }
  // getting Main Progress bar
  
  getMainProgerssbar(stid){
	//   let api_url=" http://192.168.31.150:8080/lab-activities/getOverallProgressStatus/"+stid;
	 let api_url=this.url+"/CreamsonIntelliLanguagelabservices-0.0.1-SNAPSHOT/lab-activities/getOverallProgressStatus/"+stid;
	   return this.apiservice.get(api_url);
  }
  
  // getting Individual Progress bar
   getIndProgerssbar(stid){
	   let api_url=this.url+"/CreamsonIntelliLanguagelabservices-0.0.1-SNAPSHOT/lab-activities/getIndividualProgressStatusList/"+stid;
	 //  let api_url="http://192.168.31.150:8080/lab-activities/getIndividualProgressStatusList/"+stid;
	   return this.apiservice.get(api_url);
  }
  
	 // getting Strategy List
  

  getStList(selActivity,selcategoryId){
	   let api_url=this.url+"/CreamsonIntelliLanguagelabservices-0.0.1-SNAPSHOT/lab-activities/getStrategyContent/"+selActivity+"/"+selcategoryId;
	 //  let api_url="http://192.168.31.196:8090/CreamsonintelliLanguageLabServices-0.0.1-SNAPSHOT/lab-activities/getStrategyContent/"+selActivity+"/"+selcategoryId;
	   return this.apiservice.get(api_url);
  }
  //// getting LEVEL Types 
  
    levelTypes(selActivity,selcategoryId) {

    let api_url =  this.url+"/CreamsonIntelliLanguagelabservices-0.0.2-SNAPSHOT/lab-activities/getCategory/"+selActivity+"/"+selcategoryId;

    return this.apiservice.get(api_url);
  }
  
   //// getting LEVEL List
   
   listOFContantLebel(selActivity,selcategoryId,selectedTyId) {

    let api_url =  this.url+"/CreamsonIntelliLanguagelabservices-0.0.1-SNAPSHOT/lab-activities/getLevelContent/"+selActivity+"/"+selcategoryId+"/"+selectedTyId;
	// let api_url = "http://192.168.31.150:8080/lab-activities/getLevelContent/"+selActivity+"/"+selcategoryId+"/"+selectedTyId;
    return this.apiservice.get(api_url);
  }
  
  
  //For Assessment
   listOFassessment(cid) {
 
 // let api_url = "http://192.168.31.168:8080/lab-activities/content/assessments/"+cid;
	 let api_url = this.url+"/AssessmentModule/lab-activities/content/assessments/"+cid;
    return this.apiservice.get(api_url);
  }
  //For  Assessment Details
   AssessmentContant(cid) {
  // let api_url = this.url+"/AssessmentModule/lab-activities/assessment/"+cid;
   let api_url = this.url+"/AssessmentModule/lab-activities/assessment/"+cid;
 
    return this.apiservice.get(api_url);
  }
  StudentOverallActivity(sid) {
//let api_url = "http://192.168.31.150:8080/lab-activities/getActivitiesCompletedByStudentType/"+sid;
    let api_url = this.url+"/CreamsonIntelliLanguagelabservices-0.0.1-SNAPSHOT/lab-activities/getActivitiesCompletedByStudentType/"+sid;
     return this.apiservice.get(api_url);
   }
   studentSpeakingActivity(sid,activityid) {
   // let api_url = "http://192.168.31.150:8080/lab-activities/getActivitiesCompletedByStudent_IdAndActivity_Id/"+sid+"/"+activityid;
   let api_url = this.url+"/CreamsonIntelliLanguagelabservices-0.0.1-SNAPSHOT/lab-activities/getActivitiesCompletedByStudent_IdAndActivity_Id/"+sid+"/"+activityid;
     return this.apiservice.get(api_url);
   }
   
   getpuzContent(cid) {
    let api_url = this.url+"/CreamsonIntelliLanguageLabServiceCrossword-0.0.1-SNAPSHOT/getWordsAndHindUsingClassId/"+cid;
   // let api_url ="http://192.168.31.168:8080/lab-activities/assessment/"+cid;
   
     return this.apiservice.get(api_url);
   }
   getSpeakingcontent(cid){
    // alert(cid);
    let api_url = this.url+"/CreamsonIntelliLanguagelabservices-0.0.2-SNAPSHOT/lab-activities/getContentGroupedByContentSeqId/"+cid;
    return this.apiservice.get(api_url);
  }

   getCrosscontent(cid){
   
//    let api_url = this.url+"/CreamsonIntelliLanguagelabservices-0.0.2-SNAPSHOT/lab-activities/getContentGroupedByContentSeqId/"+cid;
//    
      let api_url = "http://192.168.31.19:8060/getcrossv_id_Using_cross_id/11";
      //alert(api_url);
      return this.apiservice.get(api_url);
  }

  // Audio Recorder File

  saveAudio(audioFile: any) {
    const formData = new FormData();
    formData.append('audioBlobFile', audioFile);

    const headers = new Headers({ 'Content-Type': 'multipart/form-data'});
    const options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:8010/api/rest/audio/save', formData);
  }

  saveAudioAsJson(audioFile: any) {
    const formData = new FormData();
    formData.append('audioBlobFile', audioFile);

    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });

    return this.http.post('http://192.168.31.37:8090/PostService/lab-activities/addEmployee"', audioFile);
  }

  getAudio() {
    return this.http.get('http://localhost:8010/api/rest/audio/get');
  }


getStudentDetails(id){
  let api_url = this.url+"/CreamsonIntelliLanguagelabB2CServices/StudentDetails/"+id;
 
  //alert(api_url);
  return this.apiservice.get(api_url);
}

getCertificationDetails(id){
  let api_url = this.url+"/CreamsonIntelliLanguagelabB2CServices/CertificationDetails/"+id;
  return this.apiservice.get(api_url);
}

getFetchProgressDetails(id){
  let api_url = this.url+"/CreamsonIntelliLanguagelabB2CServices/FetchProgressDetail/"+id;
  return this.apiservice.get(api_url);
}

}
//http://192.168.31.196:8090/CreamsonIntelliLanguagelabservices-0.0.2-SNAPSHOT/lab-activities/ ............. dada
// http://192.168.31.19:8080/lab-activities/
