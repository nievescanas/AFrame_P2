// Component:
// Input elements:
// Ej:

AFRAME.registerComponent('button_clone', {
  schema: {
     position: {type: 'vec3', default: {x:0, y:0, z:0}},
     id: {type: 'string'},
     parse: AFRAME.utils.styleParser.parse
  },
  init: function () {
    const data = this.data;
    const el = this.el;

    el.addEventListener(data.event, evt => {
      var obj_clone = el.cloneNode(true);
      obj_clone.setAttribute('position', data.position);
      obj_clone.removeAttribute('button_clone');

      // Modification of object position
      document.querySelector("#" + data.id).appendChild(obj_clone);

    });
  }
});
