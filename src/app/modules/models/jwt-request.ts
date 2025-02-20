export class Jwtrequest {
    constructor(private username: string, private password: string){
        this.username = username;
        this.password = password;
    }
}