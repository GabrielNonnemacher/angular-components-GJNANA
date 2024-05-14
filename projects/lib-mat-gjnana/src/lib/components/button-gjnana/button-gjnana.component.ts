import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-gjnana',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button-gjnana.component.html',
  styleUrl: './button-gjnana.component.scss'
})
export class ButtonGjnanaComponent {
  @Input() variant: "primary" | "secondary" | "tertiary" | "quaternary"
    | "success" | "info" | "warning" | "danger" = "primary";
  @Input() size: "sm" | "md" | "lg" | "xlg" | "xxlg" = "md";

}
