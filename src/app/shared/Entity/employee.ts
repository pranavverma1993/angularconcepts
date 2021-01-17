export class CommonResponseDto {
    public responseCode: number;
    public responseMessage: string;
}

export class SaveEmployeeDetails {
    public userId : Number;
    public firstName : String;
    public lastName : String;
}

export class GetEmployeeDetails {
    public userId : Number;
    
}

export class GetEmployeeDetailsOP {
    public firstName : String;
    public lastName : String;
    
}

export class GetEmployeeDetailsOPList extends CommonResponseDto {
    public getEmployeeDetailsOPList: Array<GetEmployeeDetailsOP>;
    
}