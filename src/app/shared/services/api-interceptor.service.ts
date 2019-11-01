import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { SharedService } from './shared.service';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ApiInterceptorService implements HttpInterceptor {
  public loading;
  constructor(
    private router: Router,
    private ss: SharedService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.params.get("loader") === "true") {
      this.ss.showLoader();
    }
    if (request.params.get("header") === "true") {
      const token = localStorage.getItem("token");
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: token
          }
        });
      }
      if (!request.headers.has("Content-Type")) {
        request = request.clone({
          setHeaders: {
            "content-type": "application/json"
          }
        });
      }
      request = request.clone({
        headers: request.headers.set("Accept", "application/json")
      });
      // request = request.clone({
      //   headers: request.headers.set('appVersion', environment.appVersion.toString())
      // });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        setTimeout(() => {this.ss.hideLoader(); }, 5000);
        if (event instanceof HttpResponse) {
          console.log("event--->>>", event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        setTimeout(() => {this.ss.hideLoader(); }, 5000);
        if (error.status === 404) {
          this.ss.showAlert('Server Error', 'OK');
        } else if (error.status === 500 ) {
            this.ss.showAlert('Server Error', 'OK');
        } else if (error.status === 401) {
          if (error.error.success === false) {
            this.ss.showAlert("Login failed");
          } else {
            this.router.navigate(["login"]);
          }
        } else if (error.status === 0) {
          this.ss.showAlert("Network not found, Please check your connection.", "Try Again", () => { location.reload(); });
        } else if (error.status === 400) {
          this.ss.presentToast("No more data.");
        }
        return throwError(error);
      })
    );
  }
}
