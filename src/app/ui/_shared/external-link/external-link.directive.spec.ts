import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ExternalLinkDirective } from './external-link.directive';

@Component({ template: '<div appExternalLink></div>' })
class TestComponent {}

describe('ExternalLinkDirective', () => {
  let directive: ExternalLinkDirective;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [ExternalLinkDirective, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges();

    directive = fixture.debugElement
      .query(By.directive(ExternalLinkDirective))
      .injector.get(ExternalLinkDirective);
  });

  it('should create', () => {
    expect(directive).toBeTruthy();
  });
});
