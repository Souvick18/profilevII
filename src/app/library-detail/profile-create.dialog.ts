import { Component, Inject } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray, AbstractControl} from '@angular/forms';
import { ProfileModel } from '../profile/profile.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition  } from '@angular/material/snack-bar';

import { AppService } from '../app.service';

@Component({
    selector: 'app-profile-create',
    templateUrl: 'profile-create.dialog.html',
    styleUrls: ['profile-create.dialog.css']
  })

  export class ProfileCreateDialogComponent {

    serviceResponseProgress = false;
    srpColor = 'primary';
    srpMode = 'indeterminate';
    srpValue = 60;

    newProfile: ProfileModel = new ProfileModel();
    newProfileForm: FormGroup;
    // tslint:disable-next-line: max-line-length
    profileImageEncoded = 'data:image/png;base64,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';
    userId: number;
    bookletId: number;

    snackHPos: MatSnackBarHorizontalPosition = 'center';
    snackVPos: MatSnackBarVerticalPosition = 'top';

    constructor(private fb: FormBuilder,
                private appService: AppService,
                private snackBar: MatSnackBar,
                private dialogref: MatDialogRef<ProfileCreateDialogComponent>,
                @Inject(MAT_DIALOG_DATA) data) {
        this.createForm();
        console.log(data);
        this.userId = data.userId;
        this.bookletId = data.bookletid;
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

    createForm() {
      this.newProfileForm = this.fb.group({

        fullName: new FormControl('', Validators.required),
        companyName: new FormControl('', Validators.required),
        jobTitle: new FormControl('', Validators.required),
        emailAddress: new FormControl('', Validators.required),
        companyWebsite: new FormControl('', Validators.required),
        linkedinUrl: new FormControl('', Validators.required),
        companyAddress: new FormControl('', Validators.required),
        contactNo: new FormControl('', Validators.required),
        jobRole: new FormControl(''),
        strategicProrities: this.fb.array([]),
        techStack: this.fb.array([]),
        fundedInitiative: this.fb.array([]),
        technologiesInterest: this.fb.array([]),
        topicsInterest: this.fb.array([])
      });
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

    addProfile() {

      if (!this.newProfileForm.valid) {
         this.snackBar.open('One or More madatory fields are missing', '', {
          duration: 5000,
          horizontalPosition: this.snackHPos,
          verticalPosition: this.snackVPos,
          panelClass: ['danger-snackbar'],
        });
      } else {
        this.serviceResponseProgress = true;

        this.newProfile.booklet_id = this.bookletId;
        this.newProfile.created_by = this.userId,
        this.newProfile.fullname = this.newProfileForm.value.fullName;
        this.newProfile.company_name = this.newProfileForm.value.companyName;
        this.newProfile.image = this.profileImageEncoded;
        this.newProfile.job_title = this.newProfileForm.value.jobTitle;
        this.newProfile.email_address = this.newProfileForm.value.emailAddress;
        this.newProfile.company_address = this.newProfileForm.value.companyAddress;
        this.newProfile.company_website = this.newProfileForm.value.companyWebsite;
        this.newProfile.linkedin_url = this.newProfileForm.value.linkedinUrl;
        this.newProfile.contact_no = this.newProfileForm.value.contactNo;
        this.newProfile.job_role = this.newProfileForm.value.jobRole;
        this.newProfile.tech_stack = this.newProfileForm.value.techStack;
        this.newProfile.strategic_priorities = this.newProfileForm.value.strategicProrities;
        this.newProfile.topics_interest = this.newProfileForm.value.topicsInterest;
        this.newProfile.technologies_interest = this.newProfileForm.value.technologiesInterest;
        this.newProfile.funded_initiative = this.newProfileForm.value.fundedInitiative;

        // console.log(this.newProfile);

        this.appService.createProfile(this.newProfile).subscribe((data) => {
          this.serviceResponseProgress = false;
          this.dialogref.close('Successfully added New Profile');
        },
        (error) => {
          this.serviceResponseProgress = false;
          this.snackBar.open('Failed to add New Profile', '', {
            duration: 5000,
            horizontalPosition: this.snackHPos,
            verticalPosition: this.snackVPos,
            panelClass: ['danger-snackbar'],
          });
        });
      }
    }

    resetForm() {
      // tslint:disable-next-line: max-line-length
      this.profileImageEncoded = 'data:image/png;base64,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';
      this.newProfileForm.reset();
    }

  }
