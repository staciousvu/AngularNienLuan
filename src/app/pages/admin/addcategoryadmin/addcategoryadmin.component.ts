import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../../services/category.service";
import {Router} from "@angular/router";
import {CategoryDTO} from "../../../models/CategoryDTO";

@Component({
  selector: 'app-addcategoryadmin',
  templateUrl: './addcategoryadmin.component.html',
  styleUrls: ['./addcategoryadmin.component.css']
})
export class AddcategoryadminComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      return; // Form is invalid, stop submission
    }

    const formValues = this.myForm.value;
    let categoryDTO: CategoryDTO = {
      name: formValues.name,
    };

    this.categoryService.createCategory(categoryDTO).subscribe({
      next: (response: any) => {
        console.log('Category added successfully');
        this.router.navigate(['/admin/category']);
      },
      error: (error: any) => {
        console.error('Error creating category:', error);
      }
    });
  }

}
