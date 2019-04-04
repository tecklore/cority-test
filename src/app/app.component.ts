import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  d = new Date();
  nd = this.d.toDateString();
  newPanels;
  newPanelNum = 0;
  collapsePanel;
  removableItem;

  panel = `
        <div class="panel__body--controls-activated">
          <div class="panel__body--controls-trash" onClick="deletePanel()"></div>
          <div class="panel__body--controls-cloud" onClick="closeNav()"></div>
        </div>
        <div class="panel__body--border-left new">
          <div class="logo-container">
            <img class="logo" src="assets/images/logo-1.png">
          </div>
          <div class="panel__body--text">
            <h3>Curabitur rutrum ut</h3>
            <p>Vivamus quis enim vitae est</p>
            <p class="elipsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.</p>
            <p>
              <img src="assets/images/calendar-icon.gif" alt="logo one">
              {{ nd }}
            </p>
          </div>
          <div class="panel__body--controls" onClick="openNav()">
          </div>
        </div>
        <div class="clearfix">&nbsp;</div>
      `

  ngOnInit(){
    this.countNew();
    this.addEventListeners();
  }
  openNav() {
    let targetParent = event.target.closest('.panel__body');
    targetParent.classList.add('active');
  }

  closeNav() {
    let targetParent = event.target.closest('.panel__body');
    targetParent.classList.remove('active');
  }

  countNew() {
    this.newPanels = document.querySelectorAll('.new');
    this.newPanelNum = this.newPanels.length;
  }

  toggleItems() {
    this.collapsePanel = document.querySelector('.panel-list');
    this.collapsePanel.classList.toggle('collapsed');
  }

  deletePanel() {
    let targetParent = event.target.closest('.panel__body');
    targetParent.remove();
    this.countNew();
  }
  addPanel() {
    let panelToInsert = document.createElement("DIV");
    let panelToReceive = document.querySelector('.panel-list');
    panelToInsert.setAttribute('class', 'panel__body');
    panelToInsert.innerHTML = this.panel;
    panelToReceive.appendChild(panelToInsert);
    this.countNew();
    this.addEventListeners();
  }

  addEventListeners() {
    const listenList1 = document.querySelectorAll('.panel__body--controls');
    const listenList2 = document.querySelectorAll('.panel__body--controls-trash');
    const listenList3 = document.querySelectorAll('.panel__body--controls-cloud');
    listenList1.forEach(element => {
      element.addEventListener('click', () => this.openNav());
    });
    listenList2.forEach(element => {
      element.addEventListener('click', () => this.deletePanel());
    });
    listenList3.forEach(element => {
      element.addEventListener('click', () => this.closeNav());
    });
  }
}
