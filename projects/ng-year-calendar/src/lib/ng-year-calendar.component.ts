import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import Calendar from "js-year-calendar";
import CalendarDayEventObject from "js-year-calendar/dist/interfaces/CalendarDayEventObject";
import CalendarContextMenuItem from "js-year-calendar/dist/interfaces/CalendarContextMenuItem";
import CalendarDataSourceElement from "js-year-calendar/dist/interfaces/CalendarDataSourceElement";

@Component({
  selector: "ng-year-calendar",
  template: ` <link
      rel="stylesheet"
      type="text/css"
      href="https://unpkg.com/js-year-calendar@latest/dist/js-year-calendar.min.css"
    />
    <div #jscalendar></div>`,
})
export class NgYearCalendarComponent<T extends CalendarDataSourceElement>
  implements AfterViewInit {
  @ViewChild("jscalendar", { static: true })
  jscalendar: ElementRef;

  //calendarOptions
  @Input()
  allowOverlap?: boolean;
  @Input()
  alwaysHalfDay?: boolean;
  @Input()
  contextMenuItems?: CalendarContextMenuItem<T>[];
  @Input()
  customDayRenderer?: (element: HTMLElement, currentDate: Date) => void;
  @Input()
  customDataSourceRenderer?: (
    element: HTMLElement,
    currentDate: Date,
    events: T[]
  ) => void;
  @Input()
  dataSource?:
    | T[]
    | ((currentYear: number) => T[] | Promise<T[]>)
    | ((currentYear: number, done: (result: T[]) => void) => void);
  @Input()
  disabledDays?: Date[];
  @Input()
  disabledWeekDays?: number[];
  @Input()
  hiddenWeekDays?: number[];
  @Input()
  displayDisabledDataSource?: boolean;
  @Input()
  displayWeekNumber?: boolean;
  @Input()
  displayHeader?: boolean;
  @Input()
  enableContextMenu?: boolean;
  @Input()
  enableRangeSelection?: boolean;
  @Input()
  language?: string;
  @Input()
  loadingTemplate: string;
  @Input()
  maxDate?: Date;
  @Input()
  minDate?: Date;
  @Input()
  roundRangeLimits?: boolean;
  @Input()
  startYear?: number;
  @Input()
  style?: string;
  @Input()
  weekStart?: number;

  // Events
  @Output()
  clickDay?: EventEmitter<CalendarDayEventObject<T>> = new EventEmitter();
  @Output()
  dayContextMenu?: EventEmitter<CalendarDayEventObject<T>> = new EventEmitter();
  @Output()
  mouseOnDay?: EventEmitter<CalendarDayEventObject<T>> = new EventEmitter();
  @Output()
  mouseOutDay?: EventEmitter<CalendarDayEventObject<T>> = new EventEmitter();
  @Output()
  renderEnd?: EventEmitter<any> = new EventEmitter();
  @Output()
  selectRange?: EventEmitter<any> = new EventEmitter();
  @Output()
  yearChanged?: EventEmitter<any> = new EventEmitter();

  ngAfterViewInit() {
    const calendar = new Calendar(this.jscalendar.nativeElement, {
      allowOverlap: this.allowOverlap,
      alwaysHalfDay: this.alwaysHalfDay,
      contextMenuItems: this.contextMenuItems,
      dataSource: this.dataSource,
      disabledDays: this.disabledDays,
      disabledWeekDays: this.disabledWeekDays,
      displayDisabledDataSource: this.displayDisabledDataSource,
      displayHeader: this.displayHeader,
      displayWeekNumber: this.displayWeekNumber,
      enableContextMenu: this.enableContextMenu,
      enableRangeSelection: this.enableRangeSelection,
      hiddenWeekDays: this.hiddenWeekDays,
      language: this.language,
      loadingTemplate: this.loadingTemplate,
      maxDate: this.maxDate,
      minDate: this.minDate,
      roundRangeLimits: this.roundRangeLimits,
      style: this.style,
      weekStart: this.weekStart,

      // Events
      clickDay: (e) => this.clickDay.emit(e),
      dayContextMenu: (e) => this.dayContextMenu.emit(e),
      mouseOnDay: (e) => this.mouseOnDay.emit(e),
      mouseOutDay: (e) => this.mouseOutDay.emit(e),
      renderEnd: (e) => this.renderEnd.emit(e),
      selectRange: (e) => this.selectRange.emit(e),
      yearChanged: (e) => this.yearChanged.emit(e),
    });
  }
  static locales = Calendar.locales;
}
