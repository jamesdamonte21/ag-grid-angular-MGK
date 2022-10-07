import { Component } from '@angular/core';
import { ColDef, GridReadyEvent, ColumnApi, GridApi } from 'ag-grid-community';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<ag-grid-angular
    style="width: 100%; height: 100%;"
    class="ag-theme-alpine"
    [columnDefs]="columnDefs"
    [defaultColDef]="defaultColDef"
    [rowData]="rowData"
    [groupHeaderHeight]="groupHeaderHeight"
    [headerHeight]="headerHeight"
    [floatingFiltersHeight]="floatingFiltersHeight"
    [pivotGroupHeaderHeight]="pivotGroupHeaderHeight"
    [pivotHeaderHeight]="pivotHeaderHeight"
    
  ></ag-grid-angular> `,
})
export class AppComponent {
  defaultColDef = {
    resizable: true,
  };

  columnDefs = [
    {
      headerName: 'Locations',
      children: [
        {
          field: 'CompanyName',
          cellClass: 'cell-border cell-vertical-align-text-left',
          filter: 'agTextColumnFilter',
          minWidth: 360,
          sortable: true,
          floatingFilter: true,
          cellRenderer: function (params) {
            return '<strong>' + params.value + '</strong>';
          },
        },
        {
          field: 'CompanyID',
          cellClass: 'cell-border cell-vertical-align-text-left',
          sortable: true,
          filter: 'agTextColumnFilter',
          floatingFilter: true,
        },
        {
          field: 'Address',
          sortable: true,
          cellClass: 'cell-border cell-vertical-align-text-left',
          filter: true,
        },
        {
          field: 'Role',
          sortable: true,
          cellClass: 'cell-border cell-vertical-align-text-left',
          filter: true,
        },
        {
          field: 'Name',
          filter: 'agTextColumnFilter',
          cellClass: 'cell-border cell-vertical-align-text-left',
          sortable: true,
          floatingFilter: true,
        },
        {
          field: 'Email',
          sortable: true,
          cellClass: 'cell-border cell-vertical-align-text-left',
          filter: true,
          cellRenderer: function (params) {
            return (
              '<a href="mailto:' +
              params.value +
              '" target="_blank">' +
              params.value +
              '</a>'
            );
          },
        },
        {
          field: 'Action',
          cellClass: 'cell-border cell-vertical-align-text-left',
          cellRenderer: function (params) {
            return '<a href="#">' + params.value + '</a>';
          },
        },
      ],
    },
  ];

  rowData = [
    {
      CompanyName: 'Underwriters Laboratories B.V.',
      CompanyID: '1153266',
      Address: 'Westervoortsedijk 60, Arnhem 6827 AT',
      Role: 'Master Gatekeeper',
      Name: 'Bob Smith',
      Email: 'bob.smith@ullab1.com',
      Action: 'Edit',
    },
    {
      CompanyName: 'UL - Underwriter Laboratories Inc.',
      CompanyID: '1480932',
      Address: '333 Pfingsten Road, Northbrook IL 60062',
      Role: 'Gatekeeper',
      Name: 'Jane Jones',
      Email: 'jane.jones@ullab2.com',
      Action: 'Edit',
    },
    {
      CompanyName: 'UL AG',
      CompanyID: '1527663',
      Address: 'Dubai Science Park, Dubai',
      Role: 'Master Gatekeeper',
      Name: 'Annie Wang',
      Email: 'annie.wang@ullab2.com',
      Action: 'Edit',
    },
    {
      CompanyName: 'UL AG, TAIWAN BRANCH',
      CompanyID: '772121',
      Address: '260 Da-Yeh Road, Taipei 112',
      Role: 'Master Gatekeeper',
      Name: 'Xing Kong',
      Email: 'xing.kong@ullab2.com',
      Action: 'Edit',
    },
    {
      CompanyName: 'UNDERWRITER LABORATORIES, INC',
      CompanyID: '157893',
      Address: '333 Pfingsten Road, Northbrook IL 60062',
      Role: 'Master Gatekeeper',
      Name: 'Jenny Gomez',
      Email: 'jenny.gomez@ullab2.com',
      Action: 'Edit',
    },
    {
      CompanyName: 'Underwriter Laboratories (Thailand) Limited',
      CompanyID: '1826898',
      Address: '888, Moo 5, Tambor, Samong 333',
      Role: 'Gatekeeper',
      Name: 'Brian Evans',
      Email: 'brain.evans@ullab2.com',
      Action: 'Edit',
    },
    {
      CompanyName: 'Underwriters Laboratories of Canada',
      CompanyID: '2396014',
      Address: '1040 Parsons Road SW, Edmonton T6X 0J4',
      Role: 'Gatekeeper',
      Name: 'Tom Toles',
      Email: 'tom.toles@ullab2.com',
      Action: 'Edit',
    },
  ];
}
