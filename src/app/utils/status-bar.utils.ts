import * as application from 'application';
import * as platform from 'platform';

declare var android: any;
export function setStatusBar(action) {
  
  if (application.android && platform.device.sdkVersion >= '21') {
    var activity = application.android.startActivity;
    var window = activity.getWindow();
    let decorView = window.getDecorView();
    let View = android.view.View;
    if (action === 'hide') {
      decorView.setSystemUiVisibility(
        View.SYSTEM_UI_FLAG_LAYOUT_STABLE
        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
        | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
    } else if (action === 'show') {
      decorView.setSystemUiVisibility(
        View.SYSTEM_UI_FLAG_VISIBLE);
    } else if (action === 'light' && platform.device.sdkVersion >= '23') {
      decorView.setSystemUiVisibility(
        View.SYSTEM_UI_FLAG_LAYOUT_STABLE
        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
        | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
        | View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
    }
  }

}