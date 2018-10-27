import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {Material} from './material/material.model'
import {URL_MATERIAL_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class MaterialService{

    constructor(private http: Http){ }

    materiais(): Observable<Material[]>{
        return this.http.get(`${URL_MATERIAL_API}/materials`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }


}