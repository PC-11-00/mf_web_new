/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

/** Custom Services */
// import { GroupsService } from '../../groups.service';
import { GroupsService } from '@fineract/client';

/**
 * Groups Add Role Component
 */
@Component({
  selector: 'mifosx-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {

  /** Groups Add Role Form */
  groupsAddRoleForm: FormGroup;
  /** Client Member Data */
  clientMemberData: any;
  /** Role Data */
  roleData: any;
  /** Groups Account and Template Data */
  groupAndTemplateData: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {GroupsService} groupsService Groups Service
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   */
  constructor(private formBuilder: FormBuilder,
              private groupsService: GroupsService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.data.subscribe((data: { groupAndTemplateData: any }) => {
      this.groupAndTemplateData = data.groupAndTemplateData;
    });
  }

  ngOnInit() {
    this.clientMemberData = this.groupAndTemplateData.activeClientMembers;
    this.roleData = this.groupAndTemplateData.availableRoles;
    this.createGroupsAddRoleForm();
  }

  /**
   * Creates the add group role form.
   */
  createGroupsAddRoleForm() {
    this.groupsAddRoleForm = this.formBuilder.group({
      'clientId': ['', Validators.required],
      'role': ['', Validators.required]
    });
  }

  /**
   * Submits the form and assigns the group role.
   */
  submit() {
    this.groupsService.activateOrGenerateCollectionSheet(this.groupAndTemplateData.id, this.groupsAddRoleForm.value, 'assignRole').subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
