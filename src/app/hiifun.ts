import { InitializeService } from "./initialize.service";
import { ProviderService } from "./provider.service";

export function hiifun(one:InitializeService){
    return ()=>{
        return one.get()
    }
}