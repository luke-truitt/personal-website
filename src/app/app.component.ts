import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public static quote = 'Someday, you will be dead';
  public title = AppComponent.quote;
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
    this.title = AppComponent.quote;
  }

  public onClickHome() {
    this.setStates();
    this.home = true;
    this.router.navigate(['']);
    this.title = AppComponent.quote;
  }

  public onClickResume() {
    this.setStates();
    this.resume = true;
    this.router.navigate(['resume']);
    this.title = 'A bit about me';
  }

  public onClickEconomy() {
    this.setStates();
    this.economy = true;
    this.router.navigate(['economy']);
    this.title = 'Not in use currently';
  }

  public onClickTech() {
    this.setStates();
    this.tech = true;
    this.router.navigate(['tech']);
    this.title = 'Not in use currently';
  }

  public onClickPolitics() {
    this.setStates();
    this.politics = true;
    this.router.navigate(['politics']);
    this.title = 'Not in use currently';
  }

  public onClickPhilosophy() {
    this.setStates();
    this.philosophy = true;
    this.router.navigate(['philosophy']);
    this.title = 'A few thoughts...';
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
