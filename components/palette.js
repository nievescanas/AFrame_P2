// Component:
// Input elements:
// Ej:


AFRAME.registerComponent('palette', {
  schema: {
     default: '',
     parse: AFRAME.utils.styleParser.parse,
     main : {type:'bool', default:false },
     colors: {type:'String',
              default:'#a3c1bc,#ff6b6c,#ffb90f,#40ea54,#ffffff,#000000,#7180f2,#f97c46,#8df939'
            }
  },

  init: function () {
    const data = this.data;
    const el = this.el;
    var sceneEl = document.querySelector('a-scene');

    const color = data.colors.split(",")
    console.log(color[1]);

    // var color1 = '#a3c1bc'; // Gris azulado
    // var color2 = '#ff6b6c'; // Rosa
    // var color3 = '#ffb90f'; // Amarillo huevo
    // var color4 = '#40ea54'; // Verde
    // var color5 = '#ffffff'; // Blanco
    // var color6 = '#000000'; // Negro
    // var color7 = '#7180f2'; // Azul
    // var color8 = '#f97c46'; // Naranja
    // var color9 = '#8df939'; // Verde amarillo

    // var position1 = new THREE.Vector3(0, 0, 0) ;
    // var position2 = new THREE.Vector3() ;
    // var position3 = new THREE.Vector3() ;
    // var position4 = new THREE.Vector3() ;
    // var position5 = new THREE.Vector3() ;
    // var position6 = new THREE.Vector3() ;
    // var position7 = new THREE.Vector3() ;
    // var position8 = new THREE.Vector3() ;
    // var position9 = new THREE.Vector3() ;
    //
    // var colors = [color1,color2,color3,color4,color5,color6,color7,color8,color9];
    // var position = [position1,position2,position3,position4,position5,position6,position7,position8,position9];

    el.addEventListener(data.event, evt => {

      // Create.
        // obj_colors = new THREE.Object3D(); //the parent object
        // obj_colors.name="colors"

        // for(var a=0;a<10;a++)
        //      {
        //        obj = new THREE.Object3D();
        //        var SecGeo = new THREE.CylinderGeometry( 0.2, 0.2, 2, 20 );
        //        var SecMaterial = new THREE.MeshBasicMaterial( {color: colors[a]} );
        //        var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
        //        obj.add(mesh1);
        //        obj.position=(position[a]);
        //        obj_colors.add(obj);
        //      }

        colors = new THREE.Object3D(); //the parent object
        colors.name="colors"

        colors1 = new THREE.Object3D();
        var SecGeo = new THREE.CylinderGeometry( 0.3, 0.3, 2, 20 );
        var SecMaterial = new THREE.MeshBasicMaterial( {color: color[0]} );
        var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
        colors1.add(mesh1);
        colors1.position.x=0;
        colors1.position.z=0;
        colors.add(colors1);

        colors2 = new THREE.Object3D();
        var SecGeo = new THREE.CylinderGeometry( 0.2, 0.2, 2, 20 );
        var SecMaterial = new THREE.MeshBasicMaterial( {color: color[1]} );
        var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
        colors2.add(mesh1);
        colors2.position.x=0.6;
        colors2.position.z=0;
        colors.add(colors2);

        colors3 = new THREE.Object3D();
        var SecGeo = new THREE.CylinderGeometry( 0.2, 0.2, 2, 20 );
        var SecMaterial = new THREE.MeshBasicMaterial( {color: color[2]} );
        var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
        colors3.add(mesh1);
        colors3.position.x=0;
        colors3.position.z=-0.6;
        colors.add(colors3);

        colors4 = new THREE.Object3D();
        var SecGeo = new THREE.CylinderGeometry( 0.2, 0.2, 2, 20 );
        var SecMaterial = new THREE.MeshBasicMaterial( {color: color[3]} );
        var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
        colors4.add(mesh1);
        colors4.position.x=-0.6;
        colors4.position.z=0;
        colors.add(colors4);

        colors5 = new THREE.Object3D();
        var SecGeo = new THREE.CylinderGeometry( 0.2, 0.2, 2, 20 );
        var SecMaterial = new THREE.MeshBasicMaterial( {color: color[4]} );
        var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
        colors5.add(mesh1);
        colors5.position.x=0;
        colors5.position.z=0.6;
        colors.add(colors5);

        colors6 = new THREE.Object3D();
        var SecGeo = new THREE.CylinderGeometry( 0.2, 0.2, 2, 20 );
        var SecMaterial = new THREE.MeshBasicMaterial( {color: color[5]} );
        var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
        colors6.add(mesh1);
        colors6.position.x=0.45;
        colors6.position.z=0.45;
        colors.add(colors6);

        colors7 = new THREE.Object3D();
        var SecGeo = new THREE.CylinderGeometry( 0.2, 0.2, 2, 20 );
        var SecMaterial = new THREE.MeshBasicMaterial( {color: color[6]} );
        var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
        colors7.add(mesh1);
        colors7.position.x=-0.45;
        colors7.position.z=0.45;
        colors.add(colors7);

        colors8 = new THREE.Object3D();
        var SecGeo = new THREE.CylinderGeometry( 0.2, 0.2, 2, 20 );
        var SecMaterial = new THREE.MeshBasicMaterial( {color: color[7]} );
        var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
        colors8.add(mesh1);
        colors8.position.x=0.45;
        colors8.position.z=-0.45;
        colors.add(colors8);

        colors9 = new THREE.Object3D();
        var SecGeo = new THREE.CylinderGeometry( 0.2, 0.2, 2, 20 );
        var SecMaterial = new THREE.MeshBasicMaterial( {color: color[8]} );
        var mesh1 = new THREE.Mesh( SecGeo, SecMaterial);
        colors9.add(mesh1);
        colors9.position.x=-0.45;
        colors9.position.z=-0.45;
        colors.add(colors9);

      // Append to scene.
      el.setObject3D('TimerMesh', colors);
      data.main = true;

    });
  },

  GetColorObj:function(){
    const data = this.data;
    const el = this.el;

    el.addEventListener(data.event, evt => {
      const post_evt = evt.detail.intersection.point.x
      const obj = document.querySelector("#" + data.id).firstChild;

      if ( post_evt < el.getAttribute('position').x){
        if (obj != null){
          obj.setAttribute('color', '#93b5d9');
        }

         // Go over the submeshes and modify materials we want.
         // obj.traverse(node => {
         //    if (node.name.indexOf('Tile03') !== -1) {
         //      node.material.color.set('#93b5d9');
         //   }})
       }
    });
  },

  // tick: function () {
  //     // newcolor.object3D.translateY(0.1);
  // },

  update: function(oldData){
    const data = this.data

    // Si el menu de colores se ha cargado se selecciona color
    if (data.main !== false){
      this.GetColorObj();
    }
  },

});
