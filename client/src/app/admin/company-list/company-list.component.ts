import { Company } from './../../models/company';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Array<Company>

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.adminService.getAllCompanies().subscribe(data => {
      this.companies = data
    })
  }

  createCompany() {
    const company: Company = new Company()
    this.adminService.setCompanyModel(new Company())
    this.router.navigate(["admin/company-form"])
  }

  editCompany(id: string) {
    this.adminService.getCompany(id).subscribe(data => {
      const company: Company = data
      this.adminService.setCompanyModel(company)
      this.router.navigate(["admin/company-form"])
    })
  }

  removeCompany(id: string) {
    this.adminService.removeCompany(id).subscribe(data => {
      window.location.reload()
    })
  }
}
