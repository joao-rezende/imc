import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight: number = 0
  height: number = 0
  imc: number = 0
  imcFormatted: string = "0"
  classification: string = "-"

  constructor(private toastCtrl: ToastController) {}

  onCalculate() {
    if (this.height <= 0 || this.weight <= 0) {
      return
    }
    
    this.imc = this.weight / (this.height * this.height)
    this.imcFormatted = this.imc.toFixed(2)
    this.classification = this.verifyClassifIMC()
  }

  verifyClassifIMC() {
    if (this.imc < 18.5) return "Magreza";
    if (this.imc < 24.9) return "Normal";
    if (this.imc < 29.9) return "Sobrepeso";
    if (this.imc < 39.9) return "Obesidade";
    return "Obesidade Grave"
  }


}
