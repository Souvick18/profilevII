export class UserModel {
    id: number;
    firstname: string;
    middlename: string;
    lastname: string;
    // tslint:disable-next-line: variable-name
    created_by: number;
    // tslint:disable-next-line: variable-name
    created_at: Date;
    type: string;
    // tslint:disable-next-line: variable-name
    job_title: string;
    // tslint:disable-next-line: variable-name
    linkedin_url: string;
    // tslint:disable-next-line: variable-name
    email_address: string;
}
