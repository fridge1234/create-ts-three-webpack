varying vec3 vPos;

void main() {
  float d = distance(vec3(0.0), vPos);
  if (d > 1.0) {discard; }
  vec3 color = vec3(d, d * d, 1.0);
  gl_FragColor = vec4(color, 1.0);
}