import { Component, Inject} from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray, AbstractControl} from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition  } from '@angular/material/snack-bar';

import { AppService } from '../app.service';
import { ProfileModel } from './profile.model';

@Component({
    selector: 'app-editprofile-dialog',
    templateUrl: 'edit-profile.dialog.html',
    styleUrls: ['edit-profile.dialog.css']
  })

  export class EditProfileDialogComponent {
    serviceResponseProgress = false;
    srpColor = 'primary';
    srpMode = 'indeterminate';
    srpValue = 60;

    userdId: number;
    profileData: ProfileModel;
    profileImageEncoded: string;

    newProfileForm: FormGroup;
    updatedProfile: ProfileModel = new ProfileModel();

    snackHPos: MatSnackBarHorizontalPosition = 'center';
    snackVPos: MatSnackBarVerticalPosition = 'top';

    constructor(private fb: FormBuilder, private dialogref: MatDialogRef<EditProfileDialogComponent>,
                @Inject(MAT_DIALOG_DATA) data, private appService: AppService, private snackBar: MatSnackBar) {
                  this.userdId = data.userId;
                  this.profileData = data.selectedProfileData as ProfileModel;
                  this.createForm();
                  this.profileImageEncoded = this.profileData.image;
    }

    createForm() {
      this.newProfileForm = this.fb.group({

        fullName: new FormControl(this.profileData.fullname, Validators.required),
        companyName: new FormControl(this.profileData.company_name, Validators.required),
        jobTitle: new FormControl(this.profileData.job_title, Validators.required),
        emailAddress: new FormControl(this.profileData.email_address, Validators.required),
        companyWebsite: new FormControl(this.profileData.company_website, Validators.required),
        linkedinUrl: new FormControl(this.profileData.linkedin_url, Validators.required),
        companyAddress: new FormControl(this.profileData.company_address, Validators.required),
        contactNo: new FormControl(this.profileData.contact_no, Validators.required),
        jobRole: new FormControl(this.profileData.job_role),
        strategicProrities: this.fb.array(this.profileData.strategic_priorities),
        techStack: this.fb.array(this.profileData.tech_stack),
        fundedInitiative: this.fb.array(this.profileData.funded_initiative),
        technologiesInterest: this.fb.array(this.profileData.technologies_interest),
        topicsInterest: this.fb.array(this.profileData.topics_interest)
      });
    }

    public uploadImage(event) {
      const fileList = event.target.files;
      const file = fileList[0];
      if (fileList && file) {
          const reader = new FileReader();
          reader.onload = (fileData) => {
              this.profileImageEncoded = String(reader.result);
          };
          reader.readAsDataURL(file);
      }
    }

    addPriorities(): void {
      (this.newProfileForm.get('strategicProrities') as FormArray).push(
        this.fb.control('')
      );
    }

    removePriorities() {
      const index = (this.newProfileForm.get('strategicProrities') as FormArray).controls.length - 1;
      (this.newProfileForm.get('strategicProrities') as FormArray).removeAt(index);
    }

    getStrategicPrioritesFormControls(): AbstractControl[] {
      return (this.newProfileForm.get('strategicProrities') as FormArray).controls;
    }

    addTechStack(): void {
      (this.newProfileForm.get('techStack') as FormArray).push(
        this.fb.control('')
      );
    }

    removeTechstack() {
      const index = (this.newProfileForm.get('techStack') as FormArray).controls.length - 1;
      (this.newProfileForm.get('techStack') as FormArray).removeAt(index);
    }

    getTechStackFormControls(): AbstractControl[] {
      return (this.newProfileForm.get('techStack') as FormArray).controls;
    }

    addInitiatives(): void {
      (this.newProfileForm.get('fundedInitiative') as FormArray).push(
        this.fb.control('')
      );
    }

    removeInitiatives() {
      const index = (this.newProfileForm.get('fundedInitiative') as FormArray).controls.length - 1;
      (this.newProfileForm.get('fundedInitiative') as FormArray).removeAt(index);
    }

    getInitiativeFormControls(): AbstractControl[] {
      return (this.newProfileForm.get('fundedInitiative') as FormArray).controls;
    }

    addTechnologies(): void {
      (this.newProfileForm.get('technologiesInterest') as FormArray).push(
        this.fb.control('')
      );
    }

    removeTechnologies() {
      const index = (this.newProfileForm.get('technologiesInterest') as FormArray).controls.length - 1;
      (this.newProfileForm.get('technologiesInterest') as FormArray).removeAt(index);
    }

    getTechnologiesFormControls(): AbstractControl[] {
      return (this.newProfileForm.get('technologiesInterest') as FormArray).controls;
    }

    addTopics(): void {
      (this.newProfileForm.get('topicsInterest') as FormArray).push(
        this.fb.control('')
      );
    }

    removeTopics() {
      const index = (this.newProfileForm.get('topicsInterest') as FormArray).controls.length - 1;
      (this.newProfileForm.get('topicsInterest') as FormArray).removeAt(index);
    }

    getTopicsFormControls(): AbstractControl[] {
      return (this.newProfileForm.get('topicsInterest') as FormArray).controls;
    }

    eventCallSkip() {
      this.dialogref.close('Skip');
    }

    eventCallUpdate() {
      if (!this.newProfileForm.valid) {
        this.snackBar.open('One or More madatory fields are missing', '', {
         duration: 5000,
         horizontalPosition: this.snackHPos,
         verticalPosition: this.snackVPos,
         panelClass: ['danger-snackbar'],
       });
     } else {
       this.serviceResponseProgress = true;

       this.updatedProfile = this.profileData;
       this.updatedProfile.modified_by = this.userdId;
       this.updatedProfile.modified_at = new Date();
       this.updatedProfile.fullname = this.newProfileForm.value.fullName;
       this.updatedProfile.company_name = this.newProfileForm.value.companyName;
       this.updatedProfile.image = this.profileImageEncoded;
       this.updatedProfile.job_title = this.newProfileForm.value.jobTitle;
       this.updatedProfile.email_address = this.newProfileForm.value.emailAddress;
       this.updatedProfile.company_address = this.newProfileForm.value.companyAddress;
       this.updatedProfile.company_website = this.newProfileForm.value.companyWebsite;
       this.updatedProfile.linkedin_url = this.newProfileForm.value.linkedinUrl;
       this.updatedProfile.contact_no = this.newProfileForm.value.contactNo;
       this.updatedProfile.job_role = this.newProfileForm.value.jobRole;
       this.updatedProfile.tech_stack = this.newProfileForm.value.techStack;
       this.updatedProfile.strategic_priorities = this.newProfileForm.value.strategicProrities;
       this.updatedProfile.topics_interest = this.newProfileForm.value.topicsInterest;
       this.updatedProfile.technologies_interest = this.newProfileForm.value.technologiesInterest;
       this.updatedProfile.funded_initiative = this.newProfileForm.value.fundedInitiative;

       this.appService.updateProfile(String(this.updatedProfile.id), this.updatedProfile).subscribe((data) => {
         this.serviceResponseProgress = false;
         this.dialogref.close('Successfully updated profile!!');
       },
       (error) => {
         this.serviceResponseProgress = false;
         this.dialogref.close('Failed to update profile!!');
       });
     }
    }
  }
