import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-listeprojetcs',
  templateUrl: './listeprojetcs.component.html',
  styleUrl: './listeprojetcs.component.css'
})
export class ListeprojetcsComponent  implements OnInit {
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.src = 'assets/js/pcoded.min.js';
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(this.document.body, script);
  }}