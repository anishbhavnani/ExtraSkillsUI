import { Component, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive, Routes } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'dialog-component',
  templateUrl: 'dialog.component.html',
})
export class DialogComponent implements OnInit, OnDestroy {

  selectedIndex;


  onNoClick(): void {
    // this.dialogRef.close();
  }

  selectedIndexChange(val: number) {
    this.selectedIndex = val;
    console.log('this is selected index: ', val);
  }

  isViewInitialized = false;

  navLinks = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef,
    @Optional() public dialogRef: MatDialogRef<DialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {

    this.navLinks = (
      this.route.routeConfig && this.route.routeConfig.children ?
        this.buildNavItems(this.route.routeConfig.children) :
        []
    );
    console.warn('----nav links founded: ', this.navLinks);
  }

  ngOnDestroy() {
    console.warn('---- Dialog was destroyed ----');
    this.router.navigate(['']);
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.changeDetector.detectChanges();
  }

  buildNavItems(routes: Routes) {
    return (routes)
      .filter(route => route.data)
      .map(({ path = '', data }) => ({
        path: path,
        label: data.label,
        icon: data.icon
      }));
  }

  isLinkActive(rla: RouterLinkActive): boolean {
    const routerLink = rla.linksWithHrefs.first;

    return this.router.isActive(routerLink.urlTree, false);
  }

}