export interface Topic {
  explanation: string;
  example: string;
  code: string;
}
export const topicContent: Record<string, Topic> = {
  "Esquinas Redondeadas": {
    explanation:
      "La propiedad border-radius de CSS te permite crear esquinas redondeadas en los elementos. Puede tomar de uno a cuatro valores, definiendo el radio de cada esquina.",
    example:
      "https://mgearon.com/wp-content/uploads/2020/07/css-border-radius.png",
    code: `
.rounded-box {
  border-radius: 10px;
}

.rounded-top-left {
  border-top-left-radius: 20px;
}
.rounded-different {
  border-radius: 10px 20px 30px 40px;
}
    `,
  },
  "Imágenes de Borde": {
    explanation:
      "Las imágenes de borde te permiten usar imágenes como bordes para los elementos. Puedes cortar, repetir o estirar la imagen para que se ajuste al área del borde.",
    example:
      "https://www.cssmine.com/content/dist/images/original/border-image.svg",
    code: `
.border-image-example {
  border: 15px solid transparent;
  border-image: url('border-image.png') 30 round;
}

.border-image-slice {
  border-image-slice: 30%;
}

.border-image-repeat {
  border-image-repeat: round;
}
    `,
  },
  Fondos: {
    explanation:
      "Los fondos CSS pueden ser colores sólidos, gradientes o imágenes. Puedes controlar su tamaño, posición y repetición.",
    example:
      "https://freefrontend.com/assets/img/css-background-patterns/1-element-card-background-patterns.png",
    code: `
.bg-color {
  background-color: #3498db;
}

.bg-image {
  background-image: url('pattern.png');
  background-repeat: repeat-x;
  background-position: center;
}

.bg-gradient {
  background: linear-gradient(to right, #3498db, #2ecc71);
}
    `,
  },
  Colores: {
    explanation:
      "CSS soporta varios formatos de color incluyendo nombres de colores, hexadecimal, RGB, RGBA, HSL y HSLA.",
    example:
      "https://codrops-1f606.kxcdn.com/codrops/wp-content/uploads/2015/01/hsl-color-wheel.png?x10427",
    code: `
.color-name {
  color: red;
}

.color-hex {
  color: #00ff00;
}

.color-rgb {
  color: rgb(0, 0, 255);
}

.color-rgba {
  color: rgba(255, 0, 0, 0.5);
}
    `,
  },
  "Palabras Clave de Color": {
    explanation:
      "CSS proporciona un conjunto de palabras clave de color predefinidas que puedes usar en tus hojas de estilo.",
    example:
      "https://wildlearner.com/learn-static/courses/course-6683a98c-8ae3-4a0b-9a55-512692e38f1b/section-4738194c-2fd2-488a-8f9e-65fd444cf9dd/lesson-5e0b9f3c-307e-46d7-b917-83e384792653/quiz-c8d56f4e-8d15-42c0-9a55-c64c6f995dd8/images_1652106886272.jpg",
    code: `
.color-transparent {
  color: transparent;
}

.color-currentcolor {
  color: currentcolor;
}
    `,
  },
  Gradientes: {
    explanation:
      "Los gradientes CSS te permiten mostrar transiciones suaves entre dos o más colores especificados.",
    example:
      "https://lenguajecss.com/css/gradientes/que-son/linear-radial-conic-gradient.png",
    code: `
.gradient-linear {
  background: linear-gradient(to right, red, yellow);
}

.gradient-radial {
  background: radial-gradient(circle, red, yellow);
}
    `,
  },
  Sombras: {
    explanation:
      "CSS puede crear efectos de sombra en texto y elementos usando las propiedades text-shadow y box-shadow.",
    example:
      "https://www.arsys.es/blog/wp-content/uploads/2022/05/sombras-inset.jpg",
    code: `
.box-shadow {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
    `,
  },
  "Efectos de Texto": {
    explanation:
      "CSS ofrece varias propiedades para estilizar texto, incluyendo text-shadow, text-overflow, word-wrap y más.",
    example:
      "https://freefrontend.com/assets/img/css-text-effects/2024-pure-css-text-effect-no-firefox.jpg",
    code: `
.text-overflow {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.word-wrap {
  word-wrap: break-word;
}
    `,
  },
  "Fuentes Web": {
    explanation:
      "Las fuentes web te permiten usar fuentes personalizadas en tus páginas web, expandiendo más allá de las fuentes del sistema.",
    example:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVfdYLEclyk3MHq6yYHO5PnUJRx2zDEAINZuS2ejFDyvvT5Z7503aBbAlgm4_bEQKBpprhu08RKXEPIpNzSjlEKINK-oiQR14MvW8ZYrsCgxjDzvin3yVX1bpcOM3QOGgtZbK8hGlenjM/s1600/fontFamily.png",
    code: `
@font-face {
  font-family: 'MiFuentePersonalizada';
  src: url('mifuente.woff2') format('woff2');
}

.custom-font {
  font-family: 'MiFuentePersonalizada', sans-serif;
}
    `,
  },
  "Transformaciones 2D": {
    explanation:
      "Las transformaciones 2D te permiten mover, rotar, escalar e inclinar elementos en el espacio bidimensional.",
    example:
      "https://lenadesign.org/wp-content/uploads/2021/06/CSS-2d-transforms.gif",
    code: `
.transform-2d {
  transform: rotate(45deg) scale(1.5);
}
    `,
  },
  "Transformaciones 3D": {
    explanation:
      "Las transformaciones 3D extienden las transformaciones 2D, permitiéndote manipular elementos en el espacio tridimensional.",
    example:
      "https://miro.medium.com/v2/resize:fit:1200/1*WnnTtpzcd691KA2qO0b16w.gif",
    code: `
.transform-3d {
  transform: rotateY(45deg) translateZ(100px);
}
    `,
  },
  Transiciones: {
    explanation:
      "Las transiciones CSS te permiten cambiar los valores de las propiedades suavemente durante una duración especificada.",
    example: "https://loading.io/assets/img/p/transition/thumbnail.gif",
    code: `
.transition-example {
  transition: all 0.3s ease-in-out;
}
    `,
  },
  Animaciones: {
    explanation:
      "Las animaciones CSS te permiten animar transiciones de una configuración de estilo CSS a otra.",
    example:
      "https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/11/pop-in.gif?fit=900%2C450&ssl=1",
    code: `
@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.animation-example {
  animation: slide-in 1s ease-in-out;
}
    `,
  },
};
