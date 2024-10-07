import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona, SharingService } from 'src/app/core/sevice/sharing.service';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {

  data$: Observable<Persona>;
  constructor(private sharingService: SharingService) {
    this.data$ = sharingService.sharingObservable;
  }

  ngOnInit() {
    this.sharingService.sharingObservable.subscribe(data => console.log(data))

  }

  btn() {
    this.sharingService.sharingObservableData = { name: 'cambio de nuevo' }
  }

}
