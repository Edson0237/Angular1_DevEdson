import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Section1Component } from './Components/section1/section1.component';
import { Section2Component } from './Components/section2/section2.component';
import { Section3Component } from './Components/section3/section3.component';
import { Section4Component } from './Components/section4/section4.component';
import { Section5Component } from './Components/section5/section5.component';
import { Section6Component } from './Components/section6/section6.component';
import { Section7Component } from './Components/section7/section7.component';
import { Section8Component } from './Components/section8/section8.component';
import { Section9Component } from './Components/section9/section9.component';
import { Section10Component } from './Components/section10/section10.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Section1Component, Section2Component,Section3Component,Section4Component, Section5Component,Section6Component,Section7Component,Section8Component,Section9Component,Section10Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP01_Anguar';
}
