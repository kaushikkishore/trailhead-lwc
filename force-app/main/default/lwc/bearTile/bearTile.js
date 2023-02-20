import { LightningElement, api } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
export default class BearTile extends LightningElement {
    @api bear;
    appResources = {
        bearSilhouette: `${ursusResources}/standing-bear-silhouette.png`,
    };

    handleOpenRecordClick() {
        const selectEvent = new CustomEvent('bearview', {
            detail: this.bear.Id
        });
        console.log(`Going to dispatch the event!!`);
        this.dispatchEvent(selectEvent);
        console.log(`Dispatched!!`)
    }
}