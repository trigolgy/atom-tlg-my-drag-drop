'use babel';

import TlgMyDragDropView from './tlg-my-drag-drop-view';
import { CompositeDisposable } from 'atom';

export default {

  tlgMyDragDropView: null,
  modalPanel: null,
  subscriptions: null,

  config: {
  "gitlabUrl": {
    "description": "If you rely on a private Gitlab server, please type your base URI here (default: https://gitlab.com).",
    "type": "string",
    "default": "https://gitlab.com"
  } ,
  "tolgaGitlabUrl": {
    "description": "If you rely on a private Gitlab server, please type your base URI here (default: https://gitlab.com).",
    "type": "string",
    "default": "https://gitlab.com"
  }
},

  activate(state) {
    this.tlgMyDragDropView = new TlgMyDragDropView(state.tlgMyDragDropViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.tlgMyDragDropView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'tlg-my-drag-drop:toggle': () => this.toggleTlg()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.tlgMyDragDropView.destroy();
  },

  serialize() {
    return {
      tlgMyDragDropViewState: this.tlgMyDragDropView.serialize()
    };
  },

  toggle() {
    console.log('TlgMyDragDrop was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  },

  toggleTlg() {
    console.log('Soktugumun calismasi lazim!!!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
