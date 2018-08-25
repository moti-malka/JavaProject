import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCoupons(): Observable<any> {
    return this.http.get("/api/customer/get-all-coupons")
  }

  purchaseCoupon(customerId: string, couponId: string): Observable<any> {
    return this.http.get("/api/customer/purchase-coupon/" + couponId, {
      params: {
        "customer_id": customerId
      }
    }) 
  }

  getPurchasedCoupons(customerId: string): Observable<any> {
    return this.http.get("/api/customer/get-coupons/" + customerId)
  }

}
