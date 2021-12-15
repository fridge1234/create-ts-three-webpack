import './style.sass';
import * as THREE from 'three';
import { WebglEngine } from './webgl';
import vertexShader from './vert.glsl';
import fragmentShader from './frag.glsl';

// // const importGLSL = (glsl: string) => `${glsl}`.replace(/#include < (.+) >/g, '#include <$1>');

const engine = new WebglEngine();

const customMaterial = new THREE.ShaderMaterial({
  vertexShader: /* glsl */ vertexShader,
  fragmentShader: /* glsl */ fragmentShader,
  side: THREE.DoubleSide,
  uniforms: {
    time: { value: 0 }
  }
});
customMaterial.needsUpdate = true;

const meshs = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 100, 100), customMaterial);
meshs.rotation.x = Math.PI / 2;

const mesh = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshPhysicalMaterial({
    color: 'white',
    transparent: true,
    opacity: 0.3
  })
);

engine.scene.add(mesh, meshs);
engine.animate(() => {
  customMaterial.uniforms.time.value += 0.05;
});
