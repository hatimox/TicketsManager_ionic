import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { NavController , ToastController} from 'ionic-angular';
import { SimpleSPage } from '../simple-s/simple-s';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  image :any = 0;
  constructor(public navCtrl: NavController,
    public toast : ToastController, 
    public camera : Camera,
  public userProvider : UsersProvider) {

  }

  creatToast(message, duration , position ){
    let toast = this.toast.create({
      message : message,
      duration : duration,
      position : position
    });

    toast.present();

  }

  load_users(){
    this.userProvider.get_ticket();
  }
  set_users(){
    this.userProvider.new_ticket();
  }

  display(message, duration , position){
    this.creatToast(message, duration , position);
  }

  go_to(id){
    this.navCtrl.push(SimpleSPage, {id : id,name:'hatim'});
    console.log(this.navCtrl);
  }

  take_pic(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }

}
