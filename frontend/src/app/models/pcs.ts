export class Pcs {
    constructor(_id = '', model = '', mark = '', year = '', os = '') {
        this._id = _id;
        this.model = model;
        this.mark = mark;
        this.year = year;
        this.os = os;
    }

    _id: string;
    model: string;
    mark: string;
    year: string;
    os: string;
}
