varying vec3 vPos;

uniform float time;

float rand(vec2 co) {
  return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 uv = gl_FragCoord.xy / vec2(500.0);
  vec2 vUv = uv;
  uv = floor(uv * 10.0) / time;
  float f = rand(uv);
  vec3 col = vec3(pow(distance(vec2(f), vUv), 100.0));
  
  float d = distance(col, vPos);
  if (d > 4.5) {discard; }
  vec3 color = vec3(d, 0.0, 0.5) / 10.0;
  gl_FragColor = vec4(color, 1.0);
}