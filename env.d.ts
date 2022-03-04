/// <reference types="vite/client" />

// Vue y demás
declare module '*.vue';

// sass (css)
declare module '*.scss' {
  const css: { [key: string]: string };
  export default css;
}
declare module '*.sass' {
  const css: { [key: string]: string };
  export default css;
}

// Imágenes
declare module '*.webp';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';