export interface UserResponseData { 
    PRIVATE_TOKEN:string,
    message:string,
    user:{
        _id:string,
        email:string,
        password:string,
    }
    }

    export interface RootState {
        atm:[],
        queue:[],
        process:[]
    }
    
    export interface LoginFormData {
        email:string;
        password:string;
    }
    export interface ATM {
        id:string,
        status:string,
        removed:boolean,
        name:string,
        client?:string,
        transaction?:number
    }
    export interface ATMResponseData {
        atm:Array<ATM>,
        processedClient:Array<{
            clientName:string,
            atmName:string,
            atmId:string,
        }>,
        queue:Array<{
           transaction:string,
           name:string, 
        }>
    }