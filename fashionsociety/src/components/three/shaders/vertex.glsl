precision mediump float;
#define GLSLIFY 1
attribute vec3 position;
attribute vec2 uv;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float u_diff;
uniform float u_progress;
uniform float uScale;

uniform vec2 u_pos;
uniform vec2 u_focusSize;
uniform vec2 u_res;

varying vec2 vUv;

void main(){
vec3 pos = position;

pos.xy *= uScale;

vec4 mPos = modelViewMatrix * vec4(pos, 1.);

vUv = uv;
gl_Position = projectionMatrix * mPos;
}