export class Employee {
    constructor(
        private _id: number,
        private _name:string,
        private _phoneNumber:string,
        private _officeNumber:number,
        private _position:string,
        private _manager:string
        ){}

        public get name() : string {
            return this._name;
        }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get phoneNumber() : string {
        return this._phoneNumber;
    }
    public get officeNumber() : number {
        return this._officeNumber;
    }
    public get position() : string {
        return this._position;
    }
    public get manager() : string {
        return this._manager;
    }
    public set name(name:string){
        this._name=name;
    }
    public set phoneNumber(phoneNumber:string){
        this._phoneNumber=phoneNumber;
    }
    public set officeNumber(officeNumber:number){
        this._officeNumber=officeNumber;
    }
    public set position(position:string){
        this._position=position;
    }
    public set manager(manager:string){
        this._manager=manager;
    }
}