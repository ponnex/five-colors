import { Component, OnInit } from "@angular/core";
import { setStatusBar } from "~/app/utils/status-bar.utils";
import { Constants } from "~/app/constants";
import * as platform from 'platform';
import { NavigationService } from "~/app/services/navigation.service";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "control-page",
    moduleId: module.id,
    templateUrl: "./main-page.component.html",
    styleUrls: ["./main-page-common.css"]
})
export class MainPageComponent implements OnInit {

    public constructor(private _page: Page, private _navigationService: NavigationService) { }

    ngOnInit() {
        if (platform.isAndroid) {
            if (platform.device.sdkVersion >= '23') {
                setStatusBar(Constants.STATUS_BAR_LIGHT);
            } else {
                setStatusBar(Constants.STATUS_BAR_HIDE);
            }
        }

        this._page.actionBarHidden = true;
    }

}