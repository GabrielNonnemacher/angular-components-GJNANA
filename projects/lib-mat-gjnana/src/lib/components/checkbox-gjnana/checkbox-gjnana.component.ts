import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'checkbox-gjnana',
  standalone: true,
  imports: [NgClass],
  templateUrl: './checkbox-gjnana.component.html',
  styleUrl: './checkbox-gjnana.component.scss'
})
export class CheckBoxComponent {

  protected classes: string[] = [] as string[];
  @Input() title?: string;
  @Input() variant: "basic" | "primary" | "secondary" | "tertiary" | "quaternary" = "basic";
  @Input() size: "sm" | "md" | "lg" = "sm";
  @Input() disabled = false;
  @Input() value = false;
  @Output() check = new EventEmitter();

  public ngOnInit(): void {
    this.comporClasse();
  }

  private comporClasse(): void {
    this.classes = [
      this.size,
      this.value ? this.variant : ''
    ]
  }

  public changeCheck(): void {
    this.value = !this.value;
    this.comporClasse();
    this.check.emit(this.value);
  }
}
