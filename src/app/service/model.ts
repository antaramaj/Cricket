import { AnonymousSubject } from "rxjs";

export class id {
  student_ID: any;
  assessment_ID: number;
  question_ID: number;
}

export class send_data {
  id: id;
  assessment_PAnonymousSubject
  assessment_Start_TS: string;
  assessment_Progress_Status:any;
  last_Update_ID: string;
  last_Update_TS:any;

  studentAnswers: any[];
}

export class studentAnswersModel {
  id: id;
  last_Update_ID: string;
  last_Update_TS: string;
  option_ID: number;
  answer: string;
}
