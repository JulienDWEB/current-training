$basePath = "C:\Users\utilisateur\Desktop\Formation Devellopement WEB\cour-current-training\current-training-1\Progamming\ia-resp-site"
Set-Location $basePath

# Création des dossiers
$folders = @(
    "asset\img\products",
    "asset\img\backgrounds",
    "asset\img\logo",
    "asset\img\about"
)

foreach ($folder in $folders) {
    $fullPath = Join-Path $basePath $folder
    if (-not (Test-Path $fullPath)) {
        New-Item -ItemType Directory -Path $fullPath -Force | Out-Null
        Write-Host "Création du dossier $folder"
    }
}

# Déplacement des images
$moves = @(
    # Produits
    @("moby-dick-1.jpg", "products\moby.jpg"),
    @("purple-haze-1.jpg", "products\purple.jpg"),
    @("cannabis-buds-1.jpg", "products\buds.jpg"),
    @("blunt-1.jpg", "products\blunt.jpg"),
    
    # Backgrounds
    @("istockphoto-1428065883-612x612.jpg", "backgrounds\header.jpg"),
    @("gros-plan-de-la-plante-verte.jpg", "backgrounds\hero.jpg"),
    @("bouquet-d-articulations-thc-et-cbd-marijuana.jpg", "backgrounds\cart.jpg"),
    @("plante-enchevetree-verte-sur-fond-blanc.jpg", "backgrounds\about.jpg"),
    
    # Logos
    @("logo.jpg", "logo\logo.jpg"),
    @("varieter-logo.png", "logo\logo-alt.png"),
    
    # About
    @("2.jpeg", "about\shop-1.jpg"),
    @("freepik__the-style-is-candid-image-photography-with-natural__19493.jpeg", "about\shop-2.jpg"),
    @("freepik__the-style-is-candid-image-photography-with-natural__19492.jpeg", "about\shop-3.jpg"),
    @("freepik__the-style-is-candid-image-photography-with-natural__19491.jpeg", "about\shop-4.jpg"),
    @("freepik__the-style-is-candid-image-photography-with-natural__19490.jpeg", "about\shop-5.jpg"),
    @("freepik__the-style-is-candid-image-photography-with-natural__19489.jpeg", "about\shop-6.jpg"),
    @("freepik__the-style-is-candid-image-photography-with-natural__19488.jpeg", "about\shop-7.jpg"),
    @("freepik__the-style-is-candid-image-photography-with-natural__19487.jpeg", "about\shop-8.jpg"),
    @("freepik__the-style-is-candid-image-photography-with-natural__19486.jpeg", "about\shop-9.jpg"),
    @("freepik__the-style-is-candid-image-photography-with-natural__19485.jpeg", "about\shop-10.jpg"),
    @("freepik__the-style-is-candid-image-photography-with-natural__19484.jpeg", "about\shop-11.jpg"),
    @("freepik__the-style-is-candid-image-photography-with-natural__19483.jpeg", "about\shop-12.jpg"),
    @("freepik__the-style-is-candid-image-photography-with-natural__19482.jpeg", "about\shop-13.jpg")
)

foreach ($move in $moves) {
    $source = Join-Path $basePath "asset\img\$($move[0])"
    $destination = Join-Path $basePath "asset\img\$($move[1])"
    
    if (Test-Path $source) {
        try {
            Move-Item -Path $source -Destination $destination -Force
            Write-Host "Déplacé: $($move[0]) -> $($move[1])"
        }
        catch {
            Write-Host "Erreur lors du déplacement de $($move[0]) : $_"
        }
    }
    else {
        Write-Host "Fichier source non trouvé: $($move[0])"
    }
}

Write-Host "Organisation des images terminée !"
Read-Host "Appuyez sur Entrée pour continuer..." 