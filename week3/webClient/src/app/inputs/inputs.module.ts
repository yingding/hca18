import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { InputsRootComponent } from './inputs.root.component';
import { MoodsService} from './inputs.service';
import { InputMoodComponent } from './input.mood.component';
import { FetchMoodComponent } from './input.fetch.component';
import { RefreshSharedService } from './inputs.shared.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatIconModule
    ],
    exports: [
        InputsRootComponent // the component in sub-module shall be exported
    ],
    declarations: [
        InputsRootComponent,
        InputMoodComponent,
        FetchMoodComponent
    ],
    providers: [
        MoodsService,
        RefreshSharedService
    ],
    bootstrap: [InputsRootComponent]
})
export class AppInputsModule {
}