import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OptionService {

  constructor(
    private _http: Http
  ) { }

  update(id: string, callback){
    this._http.put(`options/${id}`, {}).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

}
