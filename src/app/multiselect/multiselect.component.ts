import { Pipe, PipeTransform, Component, Input, Output } from "@angular/core";
import { EventEmitter } from "events";

@Pipe({
    name: "searchText"
})

export class SearchTextPipe implements PipeTransform{
    transform(items: any, args:string[]) {
        return items;
        // let [searchKey, label] = args;
        // if (searchKey == '' || searchKey == undefined) {
        //     return items;
        // }
        // return items.filter((item: any) => item[label].indexOf(searchKey) !== -1);
    }
}

@Component({
    selector: 'multiselect',
    templateUrl: './multiselect.component.html',
    styleUrls: ['./multiselect.component.css']
})

export class MultiselectComponent {

    @Input('collection') collection: any;
    @Input('multiple') multiple: boolean;
    @Input('label') label: string;
    @Input('header') header: string;
    @Input('mutiselectModel') mutiselectModel: any;
    toggleSelectState: string = 'none';
    multiselectHeader: string = '';
    selectedItem:any;
    isSelectedAll:boolean = false;  

    @Output()
    modelUpdated = new EventEmitter();

    ngOnInit() {
        this.multiselectHeader = this.header || 'Select'
    }

    toggleSelect() {
        if (this.toggleSelectState == 'none') {
           this.toggleSelectState = 'block';
        } else {
           this.toggleSelectState = 'none';
        }
    }

    checkAll() {
        if (this.multiple != true) {
            return;
        }
        this.collection.forEach((t: any) => {
            t.checked = true;
        });
        this.isSelectedAll = true;
        this.updateMultipleModel();
    }

    unCheckAll() {
        this.collection.forEach((t: any) => t.checked = false);
        this.isSelectedAll = false;
        this.updateMultipleModel();
    }

    selectItem(item: any, index:number) {
        console.log(item,index);
        this.selectedItem = item;
        item.checked = !item.checked;
        if (this.multiple != true) {
            this.updateSingleModel(item);
        } else {
            this.updateMultipleModel();
        }
    }

    updateSingleModel(item: any) {
        this.mutiselectModel = item;
        this.updateSimpleHeader();
        this.modelUpdated.emit(this.mutiselectModel);
    }

    updateMultipleModel() {
        this.mutiselectModel = [];
        for (let value of this.collection) {
            if (value.checked) {
                this.mutiselectModel.push(value);
            }
        }
        this.updateMultipleHeader();
        this.modelUpdated.emit(this.mutiselectModel);

    }

    updateMultipleHeader() {
        if (this.mutiselectModel.length > 0) {
            this.multiselectHeader = this.mutiselectModel.length
        } else {
            this.multiselectHeader = this.header;
        }

    }

    updateSimpleHeader() {
        this.multiselectHeader = this.mutiselectModel[this.label]
    }
}