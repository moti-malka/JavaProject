import { Customer } from './../models/customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  company: Company
  customer: Customer

  constructor(private http: HttpClient) { }

  // Companies

  getAllCompanies(): Observable<any> {
    return this.http.get("/api/admin/get-all-companies")
  }

  getCompany(id: string): Observable<any> {
    return this.http.get("/api/admin/get-company/" + id)
  }

  saveCompany(company: Company): Observable<any> {
    return this.http.post("/api/admin/save-company", company)
  }

  removeCompany(id: string): Observable<any> {
    return this.http.get("/api/admin/delete-company/" + id)
  }
  
  setCompanyModel(c: Company) {
    this.company = c
  }

  getCompanyModel(): Company {
    return this.company
  }
  
  // Customers

  getAllCustomers(): Observable<any> {
    return this.http.get("/api/admin/get-all-customers")
  }

  getCustomer(id: string): Observable<any> {
    return this.http.get("/api/admin/get-customer/" + id)
  }

  saveCustomer(company: Company): Observable<any> {
    return this.http.post("/api/admin/save-customer", company)
  }

  removeCustomer(id: string): Observable<any> {
    return this.http.get("/api/admin/delete-customer/" + id)
  }

  setCustomerModel(c: Customer) {
    this.customer = c
  }

  getCustomerModel(): Customer {
    return this.customer
  }

}
