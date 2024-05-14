import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-gjnana',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './header-gjnana.component.html',
  styleUrl: './header-gjnana.component.scss'
})
export class HeaderGjnanaComponent {
  @Input() title?: string;
  @Input() variant: "primary" | "secondary" | "tertiary" | "quaternary" = "primary";
  @Input() size: "sm" | "md" | "lg" = "md";
}
