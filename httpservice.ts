import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BenefitPlanConfigurationService {
    constructor(private http: Http) { }

    public GetAll(apiurl: string): Observable<any[]> {
        return this.http.get(apiurl).map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public GetById(apiurl: string, id: string): Observable<any[]> {
        return this.http.get(apiurl + '?' + id).map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public Create(apiurl: string, model: any): Observable<any[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options = new RequestOptions({ headers }); // Create a request option

        return this.http.post(apiurl, model, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public Put(apiurl: string, model: any): Observable<any[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options = new RequestOptions({ headers }); // Create a request option

        return this.http.put(apiurl, model, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public Patch(apiurl: string, model: any): Observable<any[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options = new RequestOptions({ headers }); // Create a request option

        return this.http.patch(apiurl, model, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public Delete(apiurl: string, id: string): Observable<any[]> {

        return this.http.delete(apiurl + '?' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
