@echo off
cd asset\img

REM Déplacer les images de produits
move "moby-dick-1.jpg" "products\moby.jpg"
move "purple-haze-1.jpg" "products\purple.jpg"
move "cannabis-buds-1.jpg" "products\buds.jpg"
move "blunt-1.jpg" "products\blunt.jpg"

REM Déplacer les images de fond
move "istockphoto-1428065883-612x612.jpg" "backgrounds\header.jpg"
move "gros-plan-de-la-plante-verte.jpg" "backgrounds\hero.jpg"
move "bouquet-d-articulations-thc-et-cbd-marijuana.jpg" "backgrounds\cart.jpg"
move "plante-enchevetree-verte-sur-fond-blanc.jpg" "backgrounds\about.jpg"

REM Déplacer les logos
move "logo.jpg" "logo\logo.jpg"
move "varieter-logo.png" "logo\logo-alt.png"

REM Déplacer les images about
move "2.jpeg" "about\shop-1.jpg"
move "freepik__the-style-is-candid-image-photography-with-natural__19493.jpeg" "about\shop-2.jpg"
move "freepik__the-style-is-candid-image-photography-with-natural__19492.jpeg" "about\shop-3.jpg"
move "freepik__the-style-is-candid-image-photography-with-natural__19491.jpeg" "about\shop-4.jpg"
move "freepik__the-style-is-candid-image-photography-with-natural__19490.jpeg" "about\shop-5.jpg"
move "freepik__the-style-is-candid-image-photography-with-natural__19489.jpeg" "about\shop-6.jpg"
move "freepik__the-style-is-candid-image-photography-with-natural__19488.jpeg" "about\shop-7.jpg"
move "freepik__the-style-is-candid-image-photography-with-natural__19487.jpeg" "about\shop-8.jpg"
move "freepik__the-style-is-candid-image-photography-with-natural__19486.jpeg" "about\shop-9.jpg"
move "freepik__the-style-is-candid-image-photography-with-natural__19485.jpeg" "about\shop-10.jpg"
move "freepik__the-style-is-candid-image-photography-with-natural__19484.jpeg" "about\shop-11.jpg"
move "freepik__the-style-is-candid-image-photography-with-natural__19483.jpeg" "about\shop-12.jpg"
move "freepik__the-style-is-candid-image-photography-with-natural__19482.jpeg" "about\shop-13.jpg"

echo Organisation des images terminée !
pause 