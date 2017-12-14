import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMessageComponent } from './input-message.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MessagesService } from '../Messages/messages.service';

describe('InputMessageComponent', () => {
  let component: InputMessageComponent;
  let fixture: ComponentFixture<InputMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMessageComponent ],
      imports: [
        BrowserModule,
        FormsModule
      ],
      providers: [MessagesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
