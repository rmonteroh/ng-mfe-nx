import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'ng-microfrontend-mfe-navbar-host',
  templateUrl: './navbar-host.component.html',
  styleUrls: ['./navbar-host.component.scss']
})
export class NavbarHostComponent implements OnInit {

  constructor(private cfr: ComponentFactoryResolver, private vcref: ViewContainerRef) { }

  async ngOnInit() {
    const { NavbarComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'home',
      exposedModule: './NavbarComponent'
    });

    const componentRef: ComponentRef<typeof NavbarComponent> = this.vcref.createComponent(
      this.cfr.resolveComponentFactory(NavbarComponent)
    );

    componentRef.instance.basicUrl = 'http://localhost:4200/'
  }

}
