varying vec3 vPos;

uniform float time;

void main() {
  vec3 transformed = position;
  transformed.z = cos(transformed.y * 5.0 + time) / 10.0 - sin(transformed.x * 6.0 + time) / 10.0;
  vPos = transformed;
  vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
  gl_Position = projectionMatrix * mvPosition;
}