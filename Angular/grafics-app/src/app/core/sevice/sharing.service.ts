import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Persona {
    name: string
}

@Injectable()
export class SharingService {
    private sharingobservablePrivate: BehaviorSubject<Persona> = new BehaviorSubject<Persona>({ name: 'Gentleman Programming' })

    get sharingObservable() {
        return this.sharingobservablePrivate.asObservable();
    }
    set sharingObservableData(data: Persona) {
        this.sharingobservablePrivate.next(data);
    }
}
