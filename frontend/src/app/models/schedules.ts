export class Schedules {
    constructor(_id = '', name = '', date = '', email = '', reminder = '') {
        this._id = _id;
        this.name = name;
        this.date = date;
        this.email = email;
        this.reminder = reminder;
    }

    _id: string;
    name: string;
    date: string;
    email: string;
    reminder: string;
}
