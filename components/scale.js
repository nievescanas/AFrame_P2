// Component:
// Input elements:
// Ej: move_object=

AFRAME.registerComponent('scale_obj', {
  schema: {
    default: '',
    parse: AFRAME.utils.styleParser.parse
  },

  // Start looking at the entity's content
  init: function () {
    this.paused = false;
    },

  scale_obj: function(x_prev,y_prev,x_next,y_next){
    const el = this.el;
    const obj = el.firstChild;
    var num_scale = obj.getAttribute('scale');

        if(x_prev < x_next || x_prev > x_next){
          // num_scale = num_scale.x + (x_next - x_prev);
          num_scale.x = num_scale.x + 0.01;
          obj.setAttribute('scale', num_scale);
        }
        if(y_prev < y_next || y_prev > y_next){
          num_scale.y = num_scale.y + 0.01;
          obj.setAttribute('scale', num_scale);
        }
  },

  // Mouse click and drag detection
  mousemove: function(){
      const el = this.el;
      const obj = el.firstChild;
      var scale = false;
      // The item is clicked. We started
      obj.addEventListener('mousedown', evt => {  //https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event
        x_prev = evt.offsetX;
        y_prev = evt.offsetY;
        scale = true;
      })
      // The element is dragged. Scale
      document.addEventListener('mousemove', evt => {
        // If we click and drag outside the element it does not work
        if (scale == true) {
          this.scale_obj(x_prev,y_prev,evt.offsetX, evt.offsetY);
          x_prev = evt.offsetX;
          y_prev = evt.offsetY;
        }
      })

      // lift the click. End scale
      document.addEventListener('mouseup', evt => {
        if (scale == true) {
          this.scale_obj(x_prev,y_prev,evt.offsetX, evt.offsetY);
          x_prev = 0;
          y_prev = 0;
          scale = false;
        }
      })
    },

    // See if the entity is empty or full
    findChild: function(){
      const el = this.el;
      const obj = el.firstChild;
      // If you have a child, stop looking and take out the object
      if(obj!=null){
        this.mousemove(),
        this.paused=true;
      }
    },

    // Update in each frame the information of the entity's content
    tick : function() {
      if(this.paused==false){
        this.findChild();
      }
    },


});
