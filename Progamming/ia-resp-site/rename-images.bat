@echo off
cd /d "%~dp0"

REM Création des dossiers s'ils n'existent pas
if not exist "asset\img\products" mkdir "asset\img\products"
if not exist "asset\img\backgrounds" mkdir "asset\img\backgrounds"
if not exist "asset\img\logo" mkdir "asset\img\logo"
if not exist "asset\img\about" mkdir "asset\img\about"

REM Déplacement des images de produits
move "asset\img\dinafem-mobydick-04_gallery_full.jpg" "asset\img\products\moby.jpg"
move "asset\img\fleurs-de-chanvre-violet-cannabis-medical.jpg" "asset\img\products\purple.jpg"
move "asset\img\bourgeons-de-marijuana-avec-joints-de-marijuana-et-huile-de-cannabis.jpg" "asset\img\products\buds.jpg"
move "asset\img\coup-isole-vertical-d-un-blunt-de-marijuana-sur-blanc.jpg" "asset\img\products\blunt.jpg"

REM Déplacement des images de fond
move "asset\img\plante-enchevetree-verte-sur-fond-blanc.jpg" "asset\img\backgrounds\about.jpg"
move "asset\img\gros-plan-de-la-plante-verte.jpg" "asset\img\backgrounds\hero.jpg"
move "asset\img\bouquet-d-articulations-thc-et-cbd-marijuana.jpg" "asset\img\backgrounds\cart.jpg"
move "asset\img\istockphoto-1428065883-612x612.jpg" "asset\img\backgrounds\header.jpg"

REM Déplacement des logos
move "asset\img\logo.jpg" "asset\img\logo\logo.png"
move "asset\img\varieter-logo.png" "asset\img\logo\logo2.png"
move "asset\img\vdfzmzb3muzp7iaegeoc.png" "asset\img\logo\logo3.png"

REM Déplacement des images à propos
move "asset\img\freepik__the-style-is-candid-image-photography-with-natural__19493.jpeg" "asset\img\about\shop1.jpg"
move "asset\img\freepik__the-style-is-candid-image-photography-with-natural__19492.jpeg" "asset\img\about\shop2.jpg"
move "asset\img\freepik__the-style-is-candid-image-photography-with-natural__19491.jpeg" "asset\img\about\shop3.jpg"

echo Renommage terminé !
pause 