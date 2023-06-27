/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

/** Custom Services */
import { ProductsService } from '../../products.service';
import { ProductMixService } from '@fineract/client';

/**
 * Edit Product mix component.
 */
@Component({
  selector: 'mifosx-edit-product-mix',
  templateUrl: './edit-product-mix.component.html',
  styleUrls: ['./edit-product-mix.component.scss']
})
export class EditProductMixComponent implements OnInit {

  /** Product mix form. */
  productMixForm: FormGroup;
  /** Products mix template data. */
  productMixData: any;
  /** Product option data. */
  productOptionData: any;
  /** Product data. */
  productData: any;

  /**
   * Retrieves the Products mix template data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ProductsService} productsService Products Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  constructor(private formBuilder: FormBuilder,
    private productMixService: ProductMixService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.data.subscribe((data: { productMix: any }) => {
      this.productMixData = data.productMix;
    });
  }

  /**
   * Creates the product mix form and sets data of the product mix form.
   */
  ngOnInit() {
    this.createProductMixForm();
    this.setFormData();
  }

  /**
   * Creates the product mix form
   */
  createProductMixForm() {
    this.productMixForm = this.formBuilder.group({
      'productId': [{ value: this.productMixData.productName, disabled: true}],
      'restrictedProducts': ['', Validators.required]
    });
  }

  /**
   * Sets the conditional controls of the product mix form.
   */
  setFormData() {
    const restrictedProductsData: {}[] = this.productMixData.restrictedProducts;
    this.productData = [...restrictedProductsData, ...this.productMixData.allowedProducts];
    this.productMixForm.get('restrictedProducts').setValue([...restrictedProductsData.map((restrictedProduct: any) => restrictedProduct.id)]);
  }

  /**
   * Submits the product mix form and edits product mix,
   * if successful redirects to products mix.
   */
  productMixId:any;
  productMix:any;
  submit() {
    this.productMix = {
      restrictedProducts: this.productMixForm.value.restrictedProducts
    };
    this.productMixId = this.productMixData.productId;
    this.productMixService.updateProductMix(this.productMixId,this.productMix).subscribe((response: any) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
