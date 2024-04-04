precision mediump float;
#define GLSLIFY 1

uniform float uAlpha;
uniform sampler2D tMap;
uniform vec2 u_res;
varying vec2 vUv;
void main() {
  vec2 uv = vUv;
  vec4 texture = texture2D(tMap, uv);
  gl_FragColor = texture * uAlpha;
}