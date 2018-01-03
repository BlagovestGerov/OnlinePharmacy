import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/view-models/user';


const appKey = "kid_SkgxlSK-z" // APP KEY HERE;
const appSecret = "d69bd5a0d3fe489c8e90b7c8c68cb743" // APP SECRET HERE;
const userUrl =`https://baas.kinvey.com/user/${appKey}`;
const masterSecret = 'a2lkX1NrZ3hsU0stejpiOGFiOGQ4OGU5ZjE0YmMxODY0MWY0OWVjNWIzNDQzMw==';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(userModel:UserModel): Observable<UserModel> {
    return this.http.get<UserModel>(userUrl,
      {
        headers: this.createAuthHeaders('Kinvey')
      }

    )
  }

  deleteUser(targetId:string ): Observable<Object> {

        const id = targetId;
        const permanentDelete = '?hard=true'
        const url = `${userUrl}/${id}${permanentDelete}`;
        console.log(url)
        return this.http.delete(url, 
          { 
            headers:  new HttpHeaders({
                  'Authorization': `Basic ${btoa(`${appKey}:${masterSecret}`)}`,
                  'Content-Type': 'application/json'
                })
          }
        )
      }

      

  private createAuthHeaders(type : string) : HttpHeaders {
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      })
    }
    // else if(type === 'Master'){
    //   return new HttpHeaders({
    //     'Authorization': `Basic ${btoa(`${masterSecret}`)}`,
    //     'Content-Type': 'application/json'
    //   })
    // }
     else {
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      })
    }
  }

}
