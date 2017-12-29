import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CategoryModel } from './../../core/models/view-models/category'


import { MessageService } from './message.service';

const appKey = "kid_SkgxlSK-z" // APP KEY HERE;
const appSecret = "d69bd5a0d3fe489c8e90b7c8c68cb743" // APP SECRET HERE;
const categoryUrl =`https://baas.kinvey.com/appdata/${appKey}/categories`;



// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };  

@Injectable()
export class CategoryService {




 constructor(

    private http: HttpClient,
    private messageService: MessageService) { }

//  getCategories(): Observable<CategoryModel[]> {
//    // Todo: send the message _after_ fetching the heroes
//    this.messageService.add('HeroService: fetched heroes');
//     return of(Categories);
//  }
 getCategories (categoryModel:CategoryModel): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(categoryUrl,
      {
        headers: this.createAuthHeaders('Kinvey')
      }

    )
    //   .pipe(
    //     tap(categories => this.log(`fetched heroes`)),
    //     catchError(this.handleError('getCategories', []))
    //   );
  }


     /** POST: add a new hero to the server */
  // addCategory (category: CategoryModel): Observable<CategoryModel> {
  //   return this.http.post<CategoryModel>(categoryUrl,
  //     {
  //       headers: this.createAuthHeaders('Kinvey')
  //     }
  //     ).pipe(
  //     tap((category: CategoryModel) => this.log(`added category w/ id=${category.id}`)),
  //     catchError(this.handleError<CategoryModel>('addCategory'))
  //   );
  // }
  addCategory (categoryModel: CategoryModel): Observable<Object> {
    return this.http.post(
      categoryUrl, 
      JSON.stringify(categoryModel),
      { 
        headers: this.createAuthHeaders('Kinvey')
      }
    )
  }

  // deleteCategory (categoryModel: CategoryModel): Observable<CategoryModel> {
  //   id= ;
  //   const url = `${categoryUrl}/${id}`;
  
  //   return this.http.delete<CategoryModel>(url,
  //   { 
  //     headers: this.createAuthHeaders('Kinvey')
  //   })
    //.pipe(
    //   tap(_ => this.log(`deleted hero id=${id}`)),
    //   catchError(this.handleError<CategoryModel>('deleteHero'))
    // );
  // }
   
    
  deleteCategory (targetId:string ): Observable<Object> {

    const id = targetId;
    const url = `${categoryUrl}/${id}`;
    return this.http.delete(url, 
      { 
        headers: this.createAuthHeaders('Kinvey')
      }
    )
  }
    /** PUT: update the hero on the server */
    // updateCategory (categoryModel: CategoryModel): Observable<any> {
    //   return this.http.put(categoryUrl, categoryModel,
    //     {
    //       headers: this.createAuthHeaders('Kinvey')
    //     }
    //   ).pipe(
    //     tap(_ => this.log(`updated category id=${categoryModel.id}`)),
    //     catchError(this.handleError<any>('updateCategory'))
    //   );
    // }

  /** Log a HeroService message with the MessageService */
  // private log(message: string) {
  //   this.messageService.add('CategoryService: ' + message);
  // }

  private createAuthHeaders(type : string) : HttpHeaders {
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      })
    } else {
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      })
    }
  }

}