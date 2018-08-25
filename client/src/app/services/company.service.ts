import { Coupon } from './../models/coupon';
import { Company } from './../models/company';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8080/company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  coupon: Coupon = new Coupon()

  constructor(private http: HttpClient) { }

  getAllCoupons(companyId: string): Observable<any> {
    return this.http.get("/api/company/couponsGetAll", {
      params: {
        "company_id": companyId
      }
    })
  }

  createCoupon(coupon: Coupon, companyId: string): Observable<any> {
    return this.http.post("/api/company/couponCreate", coupon, {
      params: {
        "company_id": companyId
      }
    })
  }

  updateCoupon(coupon: Coupon): Observable<any> {
    return this.http.post("/api/company/couponUpdate", coupon)
  }

  getCoupon(couponId: string): Observable<any> {
    return this.http.get("/api/company/couponGet/" + couponId)
  }

  deleteCoupon(couponId: string): Observable<any> {
    return this.http.get("/api/company/couponDelete/" + couponId)
  }

  getCouponTypes(): Observable<any> {
    return this.http.get("/api/company/couponGetTypes")
  }

  setCouponModel(c: Coupon) {
    this.coupon = c
  }

  getCouponModel() {
    return this.coupon
  }
}
