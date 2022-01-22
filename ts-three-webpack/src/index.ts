import './style.sass';
import * as THREE from 'three';
import { WebglEngine } from './webgl';
import vertexShader from './vert.glsl';
import fragmentShader from './frag.glsl';

const engine = new WebglEngine();

const customMaterial = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  side: THREE.DoubleSide,
  uniforms: {
    time: { value: 0 }
  }
});
customMaterial.needsUpdate = true;

const mesh = new THREE.Mesh(new THREE.TorusKnotBufferGeometry(5, 2, 332, 32, 2, 6), customMaterial);

engine.scene.add(mesh);
engine.animate(() => {
  customMaterial.uniforms.time.value += 0.05;
});
