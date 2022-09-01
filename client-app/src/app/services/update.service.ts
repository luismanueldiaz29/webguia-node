import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private URL = 'https://localhost:3000';

  constructor(
    private http : HttpClient
  ) { }

  post(file: FormData): Observable<any>{
    console.log(this.URL+'/api/upload')
    return this.http.post<any>(URL+'/api/upload', file);
  }
}
