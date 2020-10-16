import { ProfileModel } from '../profile/profile.model';

export class BookletCompositeModel {
  id: number;
  // tslint:disable-next-line: variable-name
  created_by: number;
  // tslint:disable-next-line: variable-name
  created_at: Date;
  title: string;
  // tslint:disable-next-line: variable-name
  header_image: string;
  // tslint:disable-next-line: variable-name
  footer_image: string;
  // tslint:disable-next-line: variable-name
  profile_header_image: string;
  // tslint:disable-next-line: variable-name
  profile_footer_image: string;
  profiles: ProfileModel[];
}
