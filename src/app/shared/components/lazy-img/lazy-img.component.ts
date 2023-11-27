import { AfterContentInit, Component, ContentChild, ElementRef, Inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ERROR_ELEMENT_IMG } from '../../parameters/global-img';
import { Subject, Subscription, fromEvent, interval, take, takeUntil } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'lazy-img',
  templateUrl: './lazy-img.component.html',
  styleUrls: ['./lazy-img.component.css']
})
export class LazyImgComponent implements OnInit, OnDestroy, AfterContentInit {
	@ContentChild("lazyImg") imgRef!: ElementRef<HTMLImageElement>;
	@Input() lazySrc: string = "";

  private destroy$ = new Subject<void>();
  private subscriptions: Subscription[] = [];
	private isReadyImgRef = false;

  constructor(private renderer: Renderer2, 
    @Inject(DOCUMENT) private document: Document,
    ) {}
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
		this.isReadyImgRef = true;
		this.settingImageErrorEvent();
		this.loadCorrectImage();
		this.loadInitialImage();
	}

  private loadInitialImage() {
    interval(1000)
    .pipe(
      takeUntil(this.destroy$),
      take(2)
    )
    .subscribe(() => {
      if (this.isValidBoundingClientRect() && this.shouldLoadCorrectImage()) {
        this.loadCorrectImage();
      }
    });
  }
  
  private settingImageErrorEvent() {
    fromEvent(this.imgRef.nativeElement, 'error')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.isReadyImgRef) {
          this.setImageSrc(ERROR_ELEMENT_IMG);
        }
      });
  }
  
  private shouldLoadCorrectImage() {
    const documentElement = this.document.documentElement;
    const documentScrollTop = documentElement.scrollTop;
    const bottomScroll = documentScrollTop;
    const windowHeight = window.innerHeight;
    const rect = this.imgRef.nativeElement.getBoundingClientRect();
    return bottomScroll + windowHeight > rect.top - 200;
  }

  private isValidBoundingClientRect() {
    const rect = this.imgRef.nativeElement.getBoundingClientRect();
    const { width, height, left, top, right, bottom } = rect;
    const validations = [!!width, !!height, !!left, !!right, !!top, !!bottom];
    return validations.some((validation) => validation);
  }

  private loadCorrectImage() {
    if (!this.lazySrc) {
      this.imgRef.nativeElement.dispatchEvent(new Event('error'));
      return;
    }
    this.setImageSrc(this.lazySrc);
  }

  private setImageSrc(src: string) {
    this.renderer.setAttribute(this.imgRef.nativeElement, 'src', src);
  }
}
