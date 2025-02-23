import { HttpContextToken } from "@angular/common/http";

export const skipLoadingservice = new HttpContextToken(
    () => false
)