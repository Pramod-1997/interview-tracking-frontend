import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoints } from '../../constants/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) {

  }

  getQuestions() {
    return this.http.post(ApiEndpoints.Question.getQuestions,{}, { observe: 'response' });
  }

  addQuestion(payload: any) {
    return this.http.post(ApiEndpoints.Question.addQuestion, payload, { observe: 'response' });
  }

  getSubject() {
    return this.http.get(ApiEndpoints.Question.getSubject, { observe: 'response' });
  }

  addSubject(payload: any) {
    return this.http.post(ApiEndpoints.Question.addSubject, payload, { observe: 'response' });
  }

  getTopic() {
    return this.http.get(ApiEndpoints.Question.getTopic, { observe: 'response' });
  }

  addTopic(payload: any) {
    return this.http.post(ApiEndpoints.Question.getTopic, payload, { observe: 'response' });
  }

  mapTopic(payload: any) {
    return this.http.post(ApiEndpoints.Question.mapTopic, payload, { observe: 'response' });
  }
}
