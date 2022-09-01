import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Site } from '../models/site';


@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private URL = environment.URL;

  constructor(private http : HttpClient) { }

  get(): Observable<Site[]>{
    return this.http.get<Site[]>(`${this.URL}/api/site`);
  }

  getId(id: number): Observable<Site>{
    return this.http.get<Site>(`${this.URL}/api/site/${id}`);
  }

  post(site: Site): Observable<Site>{
    return this.http.post<Site>(`${this.URL}/api/site/gallery`, site);
  }

  // update(site: site, id: number): Observable<site>{
  //   return this.http.put<site>(`${this.URL}/api/site/`, site)
  // }
}
