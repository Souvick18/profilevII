import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // API_CONTEXT = 'https://buyer-profile-rest.azurewebsites.net/buyerprofile/v1/';
  API_CONTEXT = 'http://13.76.186.166:8000/buyerprofile/v1/';

  constructor(private apiClient: HttpClient) { }

  public retrieveUserbyID(userId: string) {
    let API_URL: string = this.API_CONTEXT.concat('user/:userId');
    API_URL = API_URL.replace(':userId', userId);
    return this.apiClient.get(API_URL);
  }

  public loginUser(userCredential: string) {
    const API_URL: string = this.API_CONTEXT.concat('user/login');
    const API_PARAMS = {cred: userCredential};
    return this.apiClient.get(API_URL, {params : API_PARAMS});
  }

  public retrieveAllBooklets() {
    const API_URL: string = this.API_CONTEXT.concat('booklet');
    return this.apiClient.get(API_URL);
  }

  public retrieveBookletbyID(bookletId: string) {
    let API_URL: string = this.API_CONTEXT.concat('booklet/:bookletId');
    API_URL = API_URL.replace(':bookletId', bookletId);
    return this.apiClient.get(API_URL);
  }

  public retrieveAllProfilesByBookletID(bookletId: string) {
    const API_URL: string = this.API_CONTEXT.concat('profile');
    const API_PARAMS = {bklt: bookletId};
    return this.apiClient.get(API_URL, {params : API_PARAMS});
  }

  public createProfile(profile: any) {
    const API_URL: string = this.API_CONTEXT.concat('profile');
    return this.apiClient.post(API_URL, profile);
  }

  public retrieveProfilebyId(profileId: string) {
    let API_URL: string = this.API_CONTEXT.concat('profile/:profileId');
    API_URL = API_URL.replace(':profileId', profileId);
    return this.apiClient.get(API_URL);
  }

  public retrieveBookletCompositebyId(bookletId: string) {
    let API_URL: string = this.API_CONTEXT.concat('booklet-composite/:bookletId');
    API_URL = API_URL.replace(':bookletId', bookletId);
    return this.apiClient.get(API_URL);
  }

  public deactivateProfile(profileId: string, request: any) {
    let API_URL: string = this.API_CONTEXT.concat('profile/:profileId/deactivate_profile');
    API_URL = API_URL.replace(':profileId', profileId);
    return this.apiClient.put(API_URL, request);
  }

  public updateProfile(profileId: string, profile: any) {
    let API_URL: string = this.API_CONTEXT.concat('profile/:profileId');
    API_URL = API_URL.replace(':profileId', profileId);
    return this.apiClient.put(API_URL, profile);
  }
}
