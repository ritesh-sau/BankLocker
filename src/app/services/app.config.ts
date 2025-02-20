import { provideHttpClient, withFetch, withInterceptors } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { loadingInterceptor } from "./loading.Interceptor";

export const appConfig : ApplicationConfig = {

    providers: [
        // provideRouter(routes),
        // provideAnimationsAsync(),
        provideHttpClient(
            withFetch(),
            withInterceptors([
                loadingInterceptor
            ])
        )
    ]
}