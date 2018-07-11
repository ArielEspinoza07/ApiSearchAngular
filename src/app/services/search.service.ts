import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  readonly url = 'http://search-api.local/api/v1/search';
  private httpOptions;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('my_email:12345'),
      },
      auth: {
        username: 'my_email',
        password: '12345'
      },
    };
  }

  getAll(data: any) {
    return this.http.post(this.url,  data, this.httpOptions);
  }

  getSong(data: any) {
    return this.http.post(this.url + '/song', data, this.httpOptions);
  }

  getVideo(data: any) {
    return this.http.post(this.url + '/video',  data, this.httpOptions);
  }
}
