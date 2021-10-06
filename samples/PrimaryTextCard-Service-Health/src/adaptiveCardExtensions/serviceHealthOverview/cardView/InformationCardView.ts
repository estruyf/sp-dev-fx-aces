import {
    BasePrimaryTextCardView,
    IPrimaryTextCardParameters,
    IExternalLinkCardAction,
    IQuickViewCardAction,
    ICardButton
} from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'ServiceHealthOverviewAdaptiveCardExtensionStrings';
import { IServiceHealthOverviewAdaptiveCardExtensionProps, IServiceHealthOverviewAdaptiveCardExtensionState } from '../ServiceHealthOverviewAdaptiveCardExtension';

export class InformationCardView extends BasePrimaryTextCardView<IServiceHealthOverviewAdaptiveCardExtensionProps, IServiceHealthOverviewAdaptiveCardExtensionState> {

    public get cardButtons(): [ICardButton] | [ICardButton, ICardButton] | undefined {
        return [
            {
                title: "View details",
                action: {
                    type: 'ExternalLink',
                    parameters: {
                        target: 'https://admin.microsoft.com/#/servicehealth'
                    }
                }
            }
        ];
    }

    public get data(): IPrimaryTextCardParameters {

        //Add checks for messages
        return {
            primaryText: `Currently no issues`,
            description: `No services affected`,
            title: this.properties.title,
            iconProperty: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18 3C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3H18ZM16.4697 7.96967L10 14.4393L7.53033 11.9697C7.23744 11.6768 6.76256 11.6768 6.46967 11.9697C6.17678 12.2626 6.17678 12.7374 6.46967 13.0303L9.46967 16.0303C9.76256 16.3232 10.2374 16.3232 10.5303 16.0303L17.5303 9.03033C17.8232 8.73744 17.8232 8.26256 17.5303 7.96967C17.2374 7.67678 16.7626 7.67678 16.4697 7.96967Z' fill='%23009900'%3E%3C/path%3E%3C/svg%3E"
        };
    }

    public get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined {
        return {
            type: 'ExternalLink',
            parameters: {
                target: 'https://admin.microsoft.com/#/servicehealth'
            }
        };
    }
}
