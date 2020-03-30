export default class index {

    private _fullName: string = null;

    constructor(
        fullName: string,
        public age: number,
        private emailId: string
    ) {
        this._fullName = fullName;
    }

    testMethod(): void {
        console.log(this._fullName);
        console.log(this.age);
        console.log(this.emailId);

    }

}