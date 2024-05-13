import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-gjnana-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './comp-gjnana-button.component.html',
  styleUrl: './comp-gjnana-button.component.scss'
})
export class CompGjnanaButtonComponent {
  @Input() variant: "primary" | "secondary" | "tertiary"
    | "quaternary" | "success" | "info" | "warning" | "danger" = "primary";
  @Input() size: "sm" | "md" | "lg" | "xlg" | "xxlg" = "md";
}
