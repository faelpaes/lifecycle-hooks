import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  // Expose this property to the world
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input () name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  // Called after a bound input property changes
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  // Called once the component is initialized
  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('TextContent: ' + this.header.nativeElement.textContent);
    console.log('TextContent of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  // Called during every changge detection run
  ngDoCheck(): void {
    console.log('ngDoCheck call!');
  }

  // Called after content (ng-content) has been projected into view
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit call!');
    console.log('TextContent of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  // Called every time the project content has been checked
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked call!');
  }

  // Called after the components view (and child views) has been initialized
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit call!');
    console.log('TextContent: ' + this.header.nativeElement.textContent);
  }

  // Called every time the view (and child views) have been checked
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked call!');
  }

  // Called once the component is about to be destroyed
  ngOnDestroy(): void {
    console.log('ngOnDestroy call!');
  }

}
