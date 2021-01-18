import { Injectable } from "@angular/core"

@Injectable()
export class CounterService{
    clicks: number = 0
    
    clicker() {
        this.clicks++
        console.log(this.clicks);
    }
}