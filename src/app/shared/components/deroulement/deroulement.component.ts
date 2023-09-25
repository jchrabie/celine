import {Component, Input} from '@angular/core';
import {Step} from "../../models/step";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-deroulement',
  templateUrl: './deroulement.component.html',
  styleUrls: ['./deroulement.component.scss'],
  standalone: true,
  imports: [NgFor]
})
export class DeroulementComponent {
  @Input() steps: Step[] = [];
}
