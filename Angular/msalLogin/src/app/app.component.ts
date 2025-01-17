import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { Subject, filter, takeUntil } from 'rxjs';
import { AzureAdDemoService } from './azure-ad-demo.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isUserLoggedIn: boolean = false;
  private readonly _destroy = new Subject<void>();
  constructor(@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private msalBroadCastService: MsalBroadcastService,
    private authService: MsalService,
    private azureAdDemoService: AzureAdDemoService,
    private http: HttpClient) {

  }
  ngOnInit(): void {
    this.msalBroadCastService.inProgress$.pipe(
      filter((interactionStatus: InteractionStatus) => interactionStatus === InteractionStatus.None),
      takeUntil(this._destroy))
      .subscribe(x => {
        this.isUserLoggedIn = this.authService.instance.getAllAccounts().length > 0
        this.azureAdDemoService.isUserLoggedIn.next(this.isUserLoggedIn)
      })
  }

  ngOnDestroy(): void {
    this._destroy.next(undefined);
    this._destroy.complete();
  }

  login() {
    if (this.msalGuardConfig.authRequest) {
      this.authService.loginRedirect({ ...this.msalGuardConfig.authRequest } as RedirectRequest)
    } else {
      this.authService.loginRedirect();
    }
  }

  getProfile() {
    this.http.get(environment.auth.graphDataUser)
      .subscribe((profile: any) => {
        console.log({ profile })
        // const name = profile.displayName?.split(' ') || '';
        // this._name = name[0] + ' ' + name[2];
      });
  }

  logout() {
    this.authService.logoutRedirect({ postLogoutRedirectUri: environment.auth.redirectUri })
  }
}
