attribute vec3 aPosition;
attribute vec2 aUv0;

varying vec2 vUv0;
varying vec3 WorldPosition;

uniform mat4 matrix_model;
uniform mat4 matrix_viewProjection;

uniform float uTime;

void main(void)
{
    vUv0 = aUv0;   
    vec3 pos = aPosition;

    pos.y += cos(pos.z * 4.5 + uTime) * cos(pos.z * 4.5 + uTime) * sin(pos.x * 2.5 + uTime) * sin(pos.x * 2.5 + uTime) * 1.0;
    
    gl_Position = matrix_viewProjection * matrix_model * vec4(pos, 1.0);    
    
    WorldPosition = pos;
}
