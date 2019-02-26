import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'personal-website';
  public logo = '../assets/small-logo.ico';
  public home = false;
  public resume = false;
  public economy = false;
  public tech = false;
  public politics = false;
  public philosophy = false;

  constructor(
    private readonly router: Router,
  ) {
    this.home = true;
  }

  public onLogoClick() {
    this.setStates();
    this.home = true;
    this.router.navigate(['']);
  }

  public onClickHome() {
    this.setStates();
    this.home = true;
    this.router.navigate(['']);
  }

  public onClickResume() {
    this.setStates();
    this.resume = true;
    this.router.navigate(['resume']);
  }

  public onClickEconomy() {
    this.setStates();
    this.economy = true;
    this.router.navigate(['economy']);
  }

  public onClickTech() {
    this.setStates();
    this.tech = true;
    this.router.navigate(['tech']);
  }

  public onClickPolitics() {
    this.setStates();
    this.politics = true;
    this.router.navigate(['politics']);
  }

  public onClickPhilosophy() {
    this.setStates();
    this.philosophy = true;
    this.router.navigate(['philosophy']);
  }
  private setStates() {
  this.home = false;
  this.resume = false;
  this.economy = false;
  this.tech = false;
  this.politics = false;
  this.philosophy = false;
  }
}
