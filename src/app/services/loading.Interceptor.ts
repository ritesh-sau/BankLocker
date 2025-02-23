import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Inject } from "@angular/core";
import { LoadingService } from "./loading.service";
import { finalize } from "rxjs";
import { skipLoadingservice } from "./skip.loading.service";


export const loadingInterceptor: HttpInterceptorFn =
    (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
        
        if(req.context.get(skipLoadingservice)){   // use for skip the loading
            return next(req);
        }
        const loadingService = Inject(LoadingService);
        loadingService.loadingOn();

        return next(req)
        .pipe(
            finalize(() => {
                loadingService.loadingOff()
            })
        )
    }