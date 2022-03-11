import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Breadcrumb, BreadcrumbModule } from './breadcrumb';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('Breadcrumb', () => {

	let breadcrumb: Breadcrumb;
	let fixture: ComponentFixture<Breadcrumb>;
	const event = new Event("click");

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes([
					{ path: 'test', component: Breadcrumb }
				]),
				NoopAnimationsModule,
				BreadcrumbModule
			]
		});

		fixture = TestBed.createComponent(Breadcrumb);
		breadcrumb = fixture.componentInstance;
	});

	it('should calls itemClick', () => {
		const item = { disabled : false }
		breadcrumb.itemClick(event, item);
	});

	it('should calls onHomeClick', () => {
		breadcrumb.onHomeClick(event);
	});

	it('should calls itemClick disabled', () => {
		const item = { disabled : true }
		breadcrumb.itemClick(event, item);
	});

	it('should calls itemClick command', () => {
		const item = { command : function(){ // 
		} }
		breadcrumb.itemClick(event, item);
	});

	it('should calls onHomeClick home', () => {
		breadcrumb.home = { command : function(){ // 
		} }
		breadcrumb.onHomeClick(event);
	});
});