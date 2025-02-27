import { init, attributesModule, eventListenersModule, classModule, propsModule, VNode } from 'snabbdom';
import EditorCtrl from './ctrl';
import menuHover from 'common/menuHover';
import view from './view';
import { Chessground } from 'chessground';
import { EditorConfig } from './interfaces';

const patch = init([classModule, attributesModule, propsModule, eventListenersModule]);

export default function LichessEditor(element: HTMLElement, config: EditorConfig) {
  let vnode: VNode, ctrl: EditorCtrl;

  const redraw = () => {
    vnode = patch(vnode, view(ctrl));
  };

  ctrl = new EditorCtrl(config, redraw);
  element.innerHTML = '';
  const inner = document.createElement('div');
  element.appendChild(inner);
  vnode = patch(inner, view(ctrl));

  menuHover();

  return {
    getFen: ctrl.getFen.bind(ctrl),
    setOrientation: ctrl.setOrientation.bind(ctrl),
  };
}

// that's for the rest of lichess to access chessground
// without having to include it a second time
window.Chessground = Chessground;
