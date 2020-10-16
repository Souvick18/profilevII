export class BookletModel {
    id: number;
    // tslint:disable-next-line: variable-name
    created_by: {id: number, name: string};
    // tslint:disable-next-line: variable-name
    created_at: Date;
    title: string;
}
