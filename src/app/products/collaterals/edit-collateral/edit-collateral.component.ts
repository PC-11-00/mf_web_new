/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

/** Custom Services */
import { ProductsService } from 'app/products/products.service';
import { SettingsService } from 'app/settings/settings.service';
import { CollateralManagementService } from '@fineract/client';

@Component({
  selector: 'mifosx-edit-collateral',
  templateUrl: './edit-collateral.component.html',
  styleUrls: ['./edit-collateral.component.scss']
})
export class EditCollateralComponent implements OnInit {

  /** Colalteral Data */
  collateralData: any;
  /** Collateral Template */
  collateralTemplateData: any;
  /** Collateral Form */
  collateralForm: FormGroup;

  /**
   * Retrieves the Collateral Data from `resolve`
   * @param {ProductsService} productsService Products Service.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {SettingsService} settingsService Settings Service.
   */
  constructor(private collateralManagementService: CollateralManagementService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private settingsService: SettingsService) {
                this.route.data.subscribe((data: { collateral: any, collateralTemplate: any }) => {
                  this.collateralData = data.collateral;
                  this.collateralTemplateData = data.collateralTemplate;
                });
               }

  ngOnInit(): void {
    this.editCollateralForm();
  }

  /**
   * Edit Collateral Form
   */
  editCollateralForm() {
    this.collateralForm = this.formBuilder.group({
      'name': [this.collateralData.name, Validators.required],
      'quality': [this.collateralData.quality, Validators.required],
      'unitType': [this.collateralData.unitType, Validators.required],
      'basePrice': [this.collateralData.basePrice, Validators.required],
      'pctToBase': [this.collateralData.pctToBase, Validators.required],
      'currency': [this.collateralData.currency, Validators.required],
    });
  }

  /**
   * Submits the updated Collateral Form
   */
  submit() {
    const collateral = this.collateralForm.value;
    collateral.locale = this.settingsService.language.code;
    this.collateralManagementService.updateCollateral2(this.collateralData.id, collateral)
      .subscribe((response: any) => {
        this.router.navigate(['../'], { relativeTo: this.route });
      });
  }

}
