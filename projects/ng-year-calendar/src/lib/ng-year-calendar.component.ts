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

  calendar: Calendar<any>;

  //calendarOptions
  _allowOverlap?: boolean;
  get allowOverlap(): boolean {
    return this._allowOverlap;
  }
  @Input() set allowOverlap(value: boolean) {
    this._allowOverlap = value;
    if (this.calendar) {
      this.calendar.setAllowOverlap(this._allowOverlap);
    }
  }

  _alwaysHalfDay?: boolean;
  get alwaysHalfDay(): boolean {
    return this._alwaysHalfDay;
  }
  @Input() set alwaysHalfDay(value: boolean) {
    this._alwaysHalfDay = value;
    if (this.calendar) {
      this.calendar.setAlwaysHalfDay(this._alwaysHalfDay);
    }
  }

  _contextMenuItems?: CalendarContextMenuItem<T>[];
  get contextMenuItems(): CalendarContextMenuItem<T>[] {
    return this._contextMenuItems;
  }
  @Input() set contextMenuItems(value: CalendarContextMenuItem<T>[]) {
    this._contextMenuItems = value;
    if (this.calendar) {
      this.calendar.setContextMenuItems(this._contextMenuItems);
    }
  }

  _customDayRenderer?: (element: HTMLElement, currentDate: Date) => void;
  get customDayRenderer(): (element: HTMLElement, currentDate: Date) => void {
    return this._customDayRenderer;
  }
  @Input() set customDayRenderer(
    value: (element: HTMLElement, currentDate: Date) => void
  ) {
    this._customDayRenderer = value;
    if (this.calendar) {
      this.calendar.setCustomDayRenderer(this._customDayRenderer);
    }
  }

  _customDataSourceRenderer?: (
    element: HTMLElement,
    currentDate: Date,
    events: T[]
  ) => void;
  get customDataSourceRenderer() {
    return this._customDataSourceRenderer;
  }
  @Input() set customDataSourceRenderer(
    value: (element: HTMLElement, currentDate: Date, events: T[]) => void
  ) {
    this._customDataSourceRenderer = value;
    if (this.calendar) {
      this.calendar.setCustomDataSourceRenderer(this._customDataSourceRenderer);
    }
  }

  _dataSource?:
    | []
    | ((currentYear: number) => [] | Promise<[]>)
    | ((currentYear: number, done: (result: []) => void) => void);
  get dataSource():
    | []
    | ((currentYear: number) => [] | Promise<[]>)
    | ((currentYear: number, done: (result: []) => void) => void) {
    return this._dataSource;
  }
  @Input() set dataSource(
    value:
      | []
      | ((currentYear: number) => [] | Promise<[]>)
      | ((currentYear: number, done: (result: []) => void) => void)
  ) {
    this._dataSource = value;
    if (this.calendar) {
      this.calendar.setDataSource(this._dataSource);
    }
  }

  _disabledDays?: Date[];
  get disabledDays() {
    return this._disabledDays;
  }
  @Input() set disabledDays(value: Date[]) {
    this._disabledDays = value;
    if (this.calendar) {
      this.calendar.setDisabledDays(this._disabledDays);
    }
  }

  _disabledWeekDays?: number[];
  get disabledWeekDays() {
    return this._disabledWeekDays;
  }
  @Input() set disabledWeekDays(value: number[]) {
    this._disabledWeekDays = value;
    if (this.calendar) {
      this.calendar.setDisabledWeekDays(this._disabledWeekDays);
    }
  }

  _hiddenWeekDays?: number[];
  get hiddenWeekDays() {
    return this._hiddenWeekDays;
  }
  @Input() set hiddenWeekDays(value: number[]) {
    this._hiddenWeekDays = value;
    if (this.calendar) {
      this.calendar.setHiddenWeekDays(this._hiddenWeekDays);
    }
  }

  _displayDisabledDataSource?: boolean;
  get displayDisabledDataSource() {
    return this._displayDisabledDataSource;
  }
  @Input() set displayDisabledDataSource(value: boolean) {
    this._displayDisabledDataSource = value;
    if (this.calendar) {
      this.calendar.setDisplayDisabledDataSource(
        this._displayDisabledDataSource
      );
    }
  }

  _displayWeekNumber?: boolean;
  get displayWeekNumber() {
    return this._displayWeekNumber;
  }
  @Input() set displayWeekNumber(value: boolean) {
    this._displayWeekNumber = value;
    if (this.calendar) {
      this.calendar.setDisplayWeekNumber(this._displayWeekNumber);
    }
  }

  _displayHeader?: boolean;
  get displayHeader() {
    return this._displayHeader;
  }
  @Input() set displayHeader(value: boolean) {
    this._displayHeader = value;
    if (this.calendar) {
      this.calendar.setDisplayHeader(this._displayHeader);
    }
  }

  _enableContextMenu?: boolean;
  get enableContextMenu() {
    return this._enableContextMenu;
  }
  @Input() set enableContextMenu(value: boolean) {
    this._enableContextMenu = value;
    if (this.calendar) {
      this.calendar.setEnableContextMenu(this._enableContextMenu);
    }
  }

  _enableRangeSelection?: boolean;
  get enableRangeSelection() {
    return this._enableRangeSelection;
  }
  @Input() set enableRangeSelection(value: boolean) {
    this._enableRangeSelection = value;
    if (this.calendar) {
      this.calendar.setEnableRangeSelection(this._enableRangeSelection);
    }
  }

  _language?: string;
  get language() {
    return this._language;
  }
  @Input() set language(value: string) {
    this._language = value;
    if (this.calendar) {
      this.calendar.setLanguage(this._language);
    }
  }

  _loadingTemplate: string;
  get loadingTemplate() {
    return this._loadingTemplate;
  }
  @Input() set loadingTemplate(value: string) {
    this._loadingTemplate = value;
    if (this.calendar) {
      this.calendar.setLoadingTemplate(this._loadingTemplate);
    }
  }

  _maxDate?: Date;
  get maxDate() {
    return this._maxDate;
  }
  @Input() set maxDate(value: Date) {
    this._maxDate = value;
    if (this.calendar) {
      this.calendar.setMaxDate(this._maxDate);
    }
  }

  _minDate?: Date;
  get minDate() {
    return this._minDate;
  }
  @Input() set minDate(value: Date) {
    this._minDate = value;
    if (this.calendar) {
      this.calendar.setMinDate(this._minDate);
    }
  }

  _roundRangeLimits?: boolean;
  get roundRangeLimits() {
    return this._roundRangeLimits;
  }
  @Input() set roundRangeLimits(value: boolean) {
    this._roundRangeLimits = value;
    if (this.calendar) {
      this.calendar.setRoundRangeLimits(this._roundRangeLimits);
    }
  }

  _startYear?: number;
  get startYear() {
    return this._startYear;
  }
  @Input() set startYear(value: number) {
    this._startYear = value;
  }

  _style?: string;
  get style() {
    return this._style;
  }
  @Input() set style(value: string) {
    this._style = value;
    if (this.calendar) {
      this.calendar.setStyle(this._style);
    }
  }

  _weekStart?: number;
  get weekStart() {
    return this._weekStart;
  }
  @Input() set weekStart(value: number) {
    this._weekStart = value;
    if (this.calendar) {
      this.calendar.setWeekStart(this._weekStart);
    }
  }

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
    this.calendar = new Calendar(this.jscalendar.nativeElement, {
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
