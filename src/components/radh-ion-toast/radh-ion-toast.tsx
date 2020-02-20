import "@ionic/core";
import { Component, Prop } from "@stencil/core";

@Component({
  tag: "radh-ion-toast",
  styleUrl: "radh-ion-toast.css"
})
export class RadhIonToast {
  @Prop({ connect: "ion-toast-controller" })
  toastCtrl;

  async componentDidLoad() {
    console.log("Cargo el radh io toast");
    const toast = await this.toastCtrl.create({
      message: "This does not actually send a support request.",
      duration: 3000,
      cssClass: "toast-container-my",
      position: "top"
    });
    toast.present();
  }

  render() {
    return;
  }
}
