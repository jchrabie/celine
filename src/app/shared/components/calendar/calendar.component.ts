import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements AfterViewInit{
  @ViewChild('calendar') calendar: ElementRef<HTMLElement> | undefined
  @Output() openChanged: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() calendarPath: 'naturopathie-reflexologie' | 'decouverte' = 'decouverte'

  ngAfterViewInit() {
    this.#initIframe();
  }

  close() {
    this.calendar?.nativeElement.removeChild(document.getElementsByTagName("iframe")[0])
    this.openChanged.emit(false);
  }

  #initIframe() {
    if (this.calendar?.nativeElement) {
      this.#showIframe();
    }
  }

  #showIframe() {
    const elem = document.createElement("iframe");
    elem.src = `https://on.sprintful.com/${this.calendarPath}?hide-logo=false&hide-message=false?embeded=inline`;
    elem.width = "100%";
    elem.height = "100%";
    elem.frameBorder = "0";

    this.calendar?.nativeElement.appendChild(elem);
  }
}
