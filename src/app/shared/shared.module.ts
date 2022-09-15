import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbAlertModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { BestDealComponent } from '../components/best-deal/best-deal.component';
import { DeallCardComponent } from '../components/deall-card/deall-card.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeroComponent } from '../components/hero/hero.component';
import { JoinUsComponent } from '../components/join-us/join-us.component';
import { LongTextComponent } from '../components/long-text/long-text.component';
import { OpenNewTabComponent } from '../components/open-new-tab/open-new-tab.component';
import { PartnersComponent } from '../components/partners/partners.component';
import { PlatformComponent } from '../components/platform/platform.component';
import { TitleComponent } from '../components/title/title.component';
import { PartnerCardComponent } from '../components/partner-card/partner-card.component';
import { PlatformContentComponent } from '../components/platform-content/platform-content.component';
import { PlatformLinksComponent } from '../components/platform-links/platform-links.component';
import { NavBarSmallComponent } from '../components/nav-bar-small/nav-bar-small.component';
import { ButtonComponent } from '../components/button/button.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { RegisterPageComponent } from '../pages/register-page/register-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { DealSwitchComponent } from '../components/deal-switch/deal-switch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from '../pages/login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NavBarComponent,
    PartnersComponent,
    HeroComponent,
    OpenNewTabComponent,
    LongTextComponent,
    PlatformComponent,
    BestDealComponent,
    DeallCardComponent,
    JoinUsComponent,
    FooterComponent,
    TitleComponent,
    PartnerCardComponent,
    PlatformContentComponent,
    PlatformLinksComponent,
    NavBarSmallComponent,
    ButtonComponent,
    TabsComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    DealSwitchComponent,
  ],

  exports: [
    NavBarComponent,
    NgbModule,
    PartnersComponent,
    HeroComponent,
    OpenNewTabComponent,
    LongTextComponent,
    PlatformComponent,
    BestDealComponent,
    DeallCardComponent,
    JoinUsComponent,
    FooterComponent,
    TitleComponent,
    PartnerCardComponent,
    PlatformContentComponent,
    PlatformLinksComponent,
    NavBarSmallComponent,
    ButtonComponent,
    TabsComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    DealSwitchComponent,
  ],
})
export class SharedModule {}
