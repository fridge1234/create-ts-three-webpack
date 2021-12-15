import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class WebglEngine {
  public renderer: THREE.WebGLRenderer;
  public camera: THREE.PerspectiveCamera;
  public scene: THREE.Scene;
  public controls: OrbitControls;
  private cb: Function = () => {};

  constructor() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(innerWidth, innerHeight);
//     this.renderer.setPixelRatio(2);
    document.body.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100000);
    this.scene = new THREE.Scene();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.sceneSetup();
    this.onWindowResize();
    window.addEventListener('resize', this.onWindowResize, false);
  }

  public onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private sceneSetup() {
    const light = new THREE.PointLight(new THREE.Color('blue'), 15, 100);
    const light2 = new THREE.AmbientLight('lightblue');
    light.position.set(50, 50, 50);
    this.camera.position.set(1.5, 1.5, 1.5);
    this.camera.lookAt(0, 0, 0);
    this.scene.add(light, this.camera, light2);
  }

  private render() {
    this.cb();
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => this.render());
  }

  public animate(cb: Function) {
    this.cb = cb;
    this.render();
  }
}
