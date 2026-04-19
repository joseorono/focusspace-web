

En el branch 'web-1st-prototype' queremos combinar varios elementos que están en otros branches y que nos gustaron en un Frankenstein:

- fern-landing-prototype es la de Fernando
- gaby-landing-prototype es la de Andreina Gabriela
- web-1st-prototype es el prototype actual, donde queremos unir todo.
- The Licence should be GPLv3.
- Don't forget web-1st-prototype is the target branch where you should be making changes, don't make changes in other branches.

En el branch de gaby-landing-prototype hay 2 versiones:

- <LandingPage /> que fué hecha por Windsurf (carga por defecto)
- <LandingPageGemini /> que fué hecha por Gemini (usa query params ?gemini)
- Nosotros te especificaremos cual usar. Si no especificamos, nos referimos a <LandingPage /> la hecha por Windsurf.

La mayoria de los estilos estan hechos con TailwindCSS así que deberia ser facil de integrar.

De la pagina de Fernando:

- El diseño de los elementos del hero (HeroSection) esta bueno, pero no me gustan el fondo que usó así que usa particles con la configuracion que está en src/constants/particles-bg.ts (heroParticlesBgConfig).
- Las cards que hizo Fernando debajo de "Everything you need to stay in flow" (FeaturesSection) y que esten translucidas estan muy cool.
- La sección de CTA de Fernando (src\components\ReadySection.tsx) es un buen comienzo pero..

Del Prototipo de Andreina (windsurf):

- The "GitHub" link in the navbar is PERFECT, but the "Add to Chrome" button should be replaced by Fernando's "Install Extension" button.
- I like Fernando's "Install Free Now" button but I want you to add Andreina's Chrome icon to it.
- The FAQ in Andreina's prototype is good but it should only take a half of the screen width, I'll leave it up to you what to do with the other column.
- The CategoriesSection is great and I want it in this new version.
- I like the QuoteSection and I want it in this new version, but the #trust-signal elements could just be on the bottom of the Hero with simpler icons like in Fernando's prototype.
- I think #open-source-notice should be on the top of the Hero just like in Andreina's branch, I want that in the final version.
- I like how she puts /icons/lineas.svg in the corner of section like it's part of the background
- I like how it uses bold text for some parts of the "One click clears the noise" paragraph.
- El footer de la version de Andreina de Winsurf me gusta
- La seccion de "Three steps to a distraction-free mind" de Andreina con Gemini es buena en concepto pero necesita que se muestren imagenes apropiadas de la carpeta 'public\screenshots'. For Step 02, use App-settings-view.png, for Step 03 use 'public\screenshots\App-main-view.png'.

For the Footer:

- Tiene que tener el "Created with care by Exologic and Ela Creativa." que puso Fernando y el "© 2026 All rights reserved."
- The "Star on GitHub" and the "Open To Contributions" links that Fernando added should stay, but we need to show those things elsewhere too.

The Navbar:
- Should be fixed, and look different after having scrolled down with a transition.
- Follow all the instructions above.