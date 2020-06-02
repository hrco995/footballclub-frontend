import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseURL = 'http://localhost:8080/api/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
  }

  getAll(){
    return this.http.get(baseURL);
  }

  get(id){
    return this.http.get(`${baseURL}/${id}`);
  }

  create(data){
    return this.http.post(`${baseURL}/save`, data);
  }

  update(data){
    return this.http.put(`${baseURL}/update/`, data);
  }

  delete(id){
    return this.http.delete(`${baseURL}/delete/${id}`);
  }
}
