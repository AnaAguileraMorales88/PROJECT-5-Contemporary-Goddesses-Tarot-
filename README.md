# Diosas Místicas

## Descripción

Tarot Virtual es una aplicación interactiva que combina la experiencia de un tarot digital con un homenaje a mujeres contemporáneas referentes en STEM. Los usuarios pueden descubrir su pasado, presente y futuro a través de estas cartas.

El proyecto busca fomentar la creatividad y visibilizar mujeres líderes en campos mayormente masculinized, todo en una aplicación responsiva y accesible.

## Capturas del Proyecto

<img width="1516" height="781" alt="Captura de pantalla 2025-09-03 a las 12 42 58" src="https://github.com/user-attachments/assets/703d3b86-c315-410b-b82a-3d23ec29a03b" />

<img width="1498" height="654" alt="Captura de pantalla 2025-09-03 a las 12 43 23" src="https://github.com/user-attachments/assets/95969b48-431c-47e2-ae18-1ff2ec29c16b" />

## Objetivos del Proyecto

- Es un juego de tarot: al completar el formulario, se genera una tirada de tres cartas que representan el pasado, el presente y el futuro.

- Cada carta muestra un significado de cada mujer contemporánea referentes a STEM.

- Al final de la tirada, el usuario puede reflexionar sobre el mensaje que cada carta aporta y cómo se relaciona con su propio recorrido personal.
  
## Tecnologías

- Frontend: HTML5, CSS3, JavaScript, React.js versión:19.1.1 , Vite versión:7.1.3

- Gestión de datos: JSON-server versión: 1.0.0-beta.3 , Axios versión:1.11.0

- Testing: Vitest versión: 3.2.4

## Herramientas

- Figma (diseño UI/UX)

- Visual Studio Code (desarrollo)

- Trello / Jira (gestión ágil)

- Git / GitHub (control de versiones)


## Endpoints de la API

Obtener todas las cartas:
https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot

Obtener carta por ID:
https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot/:id

## Metodología y Fases

- Trabajo en equipo usando Scrum y Kanban.

- Presentación en dos sprints, con revisiones y entregas parciales.

- Iteración basada en feedback continuo para mejorar la experiencia del usuario.

## Pruebas Unitarias (Vitest)

Este proyecto utiliza Vitest para realizar pruebas unitarias.

### Versión
Versión de Vitest:V3.2.4

### Cómo ejecutar las pruebas
Para expulsar las pruebas unitarias: npm run test

## Uso 
- Abrir la aplicación en el navegador.

- Introducir el nombre de usuario.

- Escoger 3 cartas: pasado, presente y futuro.

- Consultar el significado de cada carta y la diosa asociada.

- Guardar la lectura en el historial.

- Visualizar las cartas de tarot.
  
- Visualizar , editar , actualizar o eliminar el historial de tiradas.


## Instalación
- Clona este repositorio:

 ```bash 
 git clone https://github.com/LuMorenoM/Contemporary-Goddesses-Tarot.git 
 ```
- Puedes guardarlo donde tengas tu proyecto.

- Instala el proyecto:
  ```bash
  cd Contemporary-Goddesses-Tarot
  
  npm install
  npm install react-router-dom
  npm install react-icons
  npx json-server --watch db.json --port 3001
  npm run dev
  ```
  ¡Listo! Empieza a explorar la web!

## Dependencias principales

react-router-dom
 → Navegación en la aplicación.

axios
 → Cliente HTTP para consumir la API.

json-server
 → Simulación de API REST.

## Colaboradoras
- Ana Aguilera - https://github.com/AnaAguileraMorales88 

- Andrea Olivera - https://github.com/andreaonweb

- Luisa Moreno - https://github.com/LuMorenoM

- Montse Muñoz - https://github.com/Montc027

- Sofía Toro - https://github.com/sofiatoroviafara01
