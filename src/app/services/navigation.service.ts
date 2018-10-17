import { RouterExtensions } from 'nativescript-angular';
import { Injectable } from "@angular/core";

@Injectable()
export class NavigationService {
	constructor(private _router: RouterExtensions) { }

	public backToPreviousPage() {
		if (this._router.canGoBack()) {
			this._router.back();
		} else {
			this.navigateToMain(true);
		}
	}

	public navigateToMain(clearHistory: boolean = false) {
		this._router.navigate(["/main"], { clearHistory: clearHistory });
	}
}