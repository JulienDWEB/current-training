@echo off
cd /d "%~dp0"

REM Création des dossiers
mkdir "asset\img\products" 2>nul
mkdir "asset\img\backgrounds" 2>nul
mkdir "asset\img\logo" 2>nul
mkdir "asset\img\about" 2>nul

REM Déplacement des images de produits
move "asset\img\moby-dick-1.jpg" "asset\img\products\moby.jpg"
move "asset\img\purple-haze-1.jpg" "asset\img\products\purple.jpg"
move "asset\img\cannabis-buds-1.jpg" "asset\img\products\buds.jpg"
move "asset\img\blunt-1.jpg" "asset\img\products\blunt.jpg"

REM Déplacement des images de fond
move "asset\img\istockphoto-1428065883-612x612.jpg" "asset\img\backgrounds\header.jpg"
move "asset\img\gros-plan-de-la-plante-verte.jpg" "asset\img\backgrounds\hero.jpg"
move "asset\img\bouquet-d-articulations-thc-et-cbd-marijuana.jpg" "asset\img\backgrounds\cart.jpg"
move "asset\img\plante-enchevetree-verte-sur-fond-blanc.jpg" "asset\img\backgrounds\about.jpg"

REM Déplacement des logos
move "asset\img\logo.jpg" "asset\img\logo\logo.jpg"
move "asset\img\varieter-logo.png" "asset\img\logo\logo-alt.png"

REM Déplacement des images about
move "asset\img\2.jpeg" "asset\img\about\shop-1.jpg"
move "asset\img\freepik__the-style-is-candid-image-photography-with-natural__19493.jpeg" "asset\img\about\shop-2.jpg"
move "asset\img\freepik__the-style-is-candid-image-photography-with-natural__19492.jpeg" "asset\img\about\shop-3.jpg"
move "asset\img\freepik__the-style-is-candid-image-photography-with-natural__19491.jpeg" "asset\img\about\shop-4.jpg"
move "asset\img\freepik__the-style-is-candid-image-photography-with-natural__19490.jpeg" "asset\img\about\shop-5.jpg"
move "asset\img\freepik__the-style-is-candid-image-photography-with-natural__19489.jpeg" "asset\img\about\shop-6.jpg"
move "asset\img\freepik__the-style-is-candid-image-photography-with-natural__19488.jpeg" "asset\img\about\shop-7.jpg"
move "asset\img\freepik__the-style-is-candid-image-photography-with-natural__19487.jpeg" "asset\img\about\shop-8.jpg"
move "asset\img\freepik__the-style-is-candid-image-photography-with-natural__19486.jpeg" "asset\img\about\shop-9.jpg"
move "asset\img\freepik__the-style-is-candid-image-photography-with-natural__19485.jpeg" "asset\img\about\shop-10.jpg"
move "asset\img\freepik__the-style-is-candid-image-photography-with-natural__19484.jpeg" "asset\img\about\shop-11.jpg"
move "asset\img\freepik__the-style-is-candid-image-photography-with-natural__19483.jpeg" "asset\img\about\shop-12.jpg"
move "asset\img\freepik__the-style-is-candid-image-photography-with-natural__19482.jpeg" "asset\img\about\shop-13.jpg"

echo Organisation des images terminée !
pause 