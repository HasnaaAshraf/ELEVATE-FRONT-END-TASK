import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/additions/footer/footer.component';
import { HomeComponent } from './layout/basic/home/home.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { FlowbiteService } from './shared/services/flowbite.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,HomeComponent,NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private spinner: NgxSpinnerService,private _flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this._flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}
