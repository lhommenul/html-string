const siteUrl = "https://www.filmstreaming.plus/";
const axios = require("axios");
function data(){
    return `<!DOCTYPE html>
    <html xmlns:fb="http://ogp.me/ns/fb#" lang="fr-FR">
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>1er site Film Streaming 100% Gratuit, Stream Complet VF HD</title>
                    <link rel="canonical" href="https://www.filmstreaming.plus/" />
                    <script>
                document.write("<style type=\"text\/css\" media=\"screen\">@import url( https:\/\/www.filmstreaming.plus\/assets\/css\/styles.css?ver=1.9.9 );<\/style>");
                document.write("<!--[if IE ]>");
                document.write("	<link rel=\"stylesheet\" href=\"https:\/\/www.filmstreaming.plus\/assets\/css\/style-ie.css\" type=\"text\/css\" media=\"screen\" \/>");
                document.write("	<link href='https:\/\/fonts.googleapis.com\/css?family=Oswald&v1' rel='stylesheet' type='text\/css'>");
                document.write("<![endif]-->");
                document.write("");
            </script>
            <style type="text/css">@media screen and (-webkit-min-device-pixel-ratio:0) {#searchbox {float:left;margin-top:10px;padding: 1px 0px 3px 5px;}#searchbutton {margin: 4px 0px 0px 8px;}#subbox {float:left;margin: 8px 0px 0px 15px;}#subbutton {margin:5px 0px 0px 15px;}}</style>
            <link rel="shortcut icon" href="https://www.filmstreaming.plus/assets/images/fav.ico" />
            <script type="text/javascript" src="https://www.filmstreaming.plus/assets/js/jquery.js?ver=1.7.1.4"></script>
            <meta property="og:site_name" content="Film Streaming" />
            <meta name="twitter:card" content="summary" />
                    <meta property="og:image" content="https://www.filmstreaming.plus/assets/images/site.png" />
            <meta property="og:title" content="Film Streaming" />
            <meta name="twitter:title" content="Film Streaming" />
            <meta name="twitter:image" content="https://www.filmstreaming.plus/assets/images/site.png" />
                    <meta property="og:url" content="https://www.filmstreaming.plus/" />
                    <meta property="og:type" content="website" />
                    <meta property="og:description" content="Nº1, Meilleur site pour regarder les derniers films en streaming VF HD, voir film c'est gratuit, complet et en français, plus de 11000 films sur FilmStreaming Plus" />
            <meta name="twitter:description" content="Nº1, Meilleur site pour regarder les derniers films en streaming VF HD, voir film c'est gratuit, complet et en français, plus de 11000 films sur FilmStreaming Plus" />
                                    <meta name="keywords" content="film, gratuit, streaming, complet, hd, en, vk, vf,en ligne, voir, regarder, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, français, stream complet, streamcomplet, voir film, voirfilms, film streaming, film gratuit, film complet, streaming vf" />
                            <meta name="description" content="Nº1, Meilleur site pour regarder les derniers films en streaming VF HD, voir film c'est gratuit, complet et en français, plus de 11000 films sur FilmStreaming Plus" />
                    <meta name="robots" content="noodp,noydir" />
            <script type="application/ld+json">
                { "@context" : "http://schema.org",
                "@type" : "Organization",
                "legalName" : "Film Streaming",
                "url" : "https://www.filmstreaming.plus",
                "logo" : "https://www.filmstreaming.plus/assets/images/site.png"
                }
            </script>
            <script type="application/ld+json">
                {
                "@context" : "http://schema.org",
                "@type" : "WebSite", 
                "name" : "Film Streaming",
                "url" : "https://www.filmstreaming.plus",
                "potentialAction" : {
                "@type" : "SearchAction",
                "target" : "https://www.filmstreaming.plus/?s={search_term}",
                "query-input" : "required name=search_term"
                }                     
                }
            </script>
                    <!-- Histats.com  START  (aync)-->
    <script type="text/javascript">var _Hasync= _Hasync|| [];
    _Hasync.push(['Histats.start', '1,4325896,4,0,0,0,00000000']);
    _Hasync.push(['Histats.fasi', '1']);
    _Hasync.push(['Histats.track_hits', '']);
    (function() {
    var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
    })();</script>
    <noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?4325896&101" alt="website page counter" border="0"></a></noscript>
    <!-- Histats.com  END  -->
        </head>
        <body bgcolor="#272727">
            <div id="wrap">
                <div id="topnavbar">
                    <div class="topnavbarleft">
                        <!-- top left -->
                    </div>
                    <div class="topnavbarright">
                        <div class="toplamfilm">Streaming Gratuit de 11 930 Films Complets en VF.</div>
                    </div>
                </div>
                <div id="header">
                    <div class="headerleft">
                        <a href="https://www.filmstreaming.plus"><img src="https://www.filmstreaming.plus/assets/images/logo.png" alt="Film Streaming" /></a>
                    </div>
                    <div class="headerright">
                        <form id="searchform" method="get" action="https://www.filmstreaming.plus/">
                            <input type="text" value="" name="s" id="searchbox" autocomplete="off" placeholder="Recherche..." />
                            <input type="submit" id="searchbutton" value="" />
                            <div id="search-result">
                                <ul></ul>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="navbarborder">
                    <div id="navbar">
                        <div id="navbarleft">
                            <ul id="nav">
                                <li><a href="https://www.filmstreaming.plus">Accueil</a></li>
                                <ul id="menu-menu" class="menu"><li id="menu-item-148" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-148"><a href="https://www.filmstreaming.plus/films/action.html">Action</a></li>
                                    <li id="menu-item-161" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-161"><a href="https://www.filmstreaming.plus/films/thriller.html">Thriller</a></li>
                                    <li id="menu-item-152" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-152"><a href="https://www.filmstreaming.plus/films/drame.html">Drame</a></li>
                                    <li id="menu-item-151" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-151"><a href="https://www.filmstreaming.plus/films/comedie.html">Comedie</a></li>
                                    <li id="menu-item-149" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-149"><a href="https://www.filmstreaming.plus/films/animation.html">Animation</a></li>
                                    <li id="menu-item-159" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-159"><a href="https://www.filmstreaming.plus/films/policier.html">Policier</a></li>
                                    <li id="menu-item-154" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-154"><a href="https://www.filmstreaming.plus/films/science-fiction.html">Fiction</a></li>
                                    <li id="menu-item-157" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-157"><a href="https://www.filmstreaming.plus/films/horreur.html">Horreur</a></li>
                                    <li id="menu-item-156" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-156"><a href="https://www.filmstreaming.plus/films/historique.html">Historique</a></li>
                                    <li id="menu-item-155" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-155"><a href="https://www.filmstreaming.plus/films/guerre.html">Guerre</a></li>
                                    <li id="menu-item-164" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-164"><a href="https://www.filmstreaming.plus/films/aventure.html">Aventure</a></li>
                                    <li id="menu-item-158" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-158"><a href="https://www.filmstreaming.plus/films/musical.html">Musique</a></li>
                                    <li id="menu-item-160" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-160"><a href="https://www.filmstreaming.plus/films/romance.html">Romance</a></li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
                <div id="content">
                        <div class="filmborder single slider">
            <div class="filmcontent">
                <div class="moviefilm">
        <a href="https://www.filmstreaming.plus/fast-furious-hobbs-shaw.html">
            <img src="https://www.filmstreaming.plus/poster/fast-furious-hobbs-shaw-3717.jpg" alt="Film Streaming Fast & Furious : Hobbs & Shaw" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/fast-furious-hobbs-shaw.html"><h3>Fast & Furious : Hobbs & Shaw</h3></a>
            <p>Film Streaming Fast & Furious : Hobbs & Shaw</br>Le juriste Luke Hobbs et Deckard Shaw, exclu, forment une alliance improbable lorsqu'un méchant cyber-génétiquement amélioré menace l'avenir de l'humanité.</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/spider-man-far-from-home.html">
            <img src="https://www.filmstreaming.plus/poster/spider-man-far-from-home-3385.jpg" alt="Film Streaming Spider-Man: Far From Home" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/spider-man-far-from-home.html"><h3>Spider-Man: Far From Home</h3></a>
            <p>Film Streaming Spider-Man: Far From Home</br>L'araignée sympa du quartier décide de rejoindre ses meilleurs amis Ned, MJ, et le reste de la bande pour des vacances en Europe. Cependant, le projet de Peter de laisser son costume de super-héros derrière lui pendant quelques semaines est rapidement compromis quand il accepte à contrecoeur d'aider Nick Fury à découvrir le mystère de plusieurs attaques de créatures, qui ravagent le continent !</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/malefique-le-pouvoir-du-mal.html">
            <img src="https://www.filmstreaming.plus/poster/malefique-le-pouvoir-du-mal-7041.jpg" alt="Film Streaming Maléfique : Le Pouvoir du Mal" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/malefique-le-pouvoir-du-mal.html"><h3>Maléfique : Le Pouvoir du Mal</h3></a>
            <p>Film Streaming Maléfique : Le Pouvoir du Mal</br>Plusieurs années après avoir découvert pourquoi la plus célèbre méchante Disney avait un cœur si dur et ce qui l’avait conduit à jeter un terrible sort à la princesse Aurore, « MALEFIQUE : LE POUVOIR DU MAL » continue d’explorer les relations complexes entre la sorcière et la future reine, alors qu’elles nouent d’autres alliances et affrontent de nouveaux adversaires dans leur combat pour protéger leurs terres et les créatures magiques qui les peuplent.</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/annabelle-la-maison-du-mal.html">
            <img src="https://www.filmstreaming.plus/poster/annabelle-la-maison-du-mal-3888.jpg" alt="Film Streaming Annabelle – La Maison Du Mal" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/annabelle-la-maison-du-mal.html"><h3>Annabelle – La Maison Du Mal</h3></a>
            <p>Film Streaming Annabelle – La Maison Du Mal</br>Déterminés à empêcher Annabelle de causer encore plus de dégâts, les démonologues Ed et Lorraine Warren apportent la poupée possédée dans la pièce réservée aux artefacts verrouillée dans leur maison, la plaçant "en sécurité" derrière un verre sacré et enrôlant la sainte bénédiction d'un prêtre. Mais Annabelle réveille les esprits maléfiques de la salle qui attendent tous une nuit d'horreur impie, qui se dirigent tous vers une nouvelle cible: la fille des Warrens, Judy, et ses amis.</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/brightburn-lenfant-du-mal.html">
            <img src="https://www.filmstreaming.plus/poster/brightburn-lenfant-du-mal-4081.jpg" alt="Film Streaming Brightburn - L'enfant du mal" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/brightburn-lenfant-du-mal.html"><h3>Brightburn - L'enfant du mal</h3></a>
            <p>Film Streaming Brightburn - L'enfant du mal</br>Et si un enfant d’un autre monde s’écrochait sur la Terre, mais au lieu de devenir un héros pour l’humanité, il se révélait être bien plus sinistre?</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/men-in-black-international.html">
            <img src="https://www.filmstreaming.plus/poster/men-in-black-international-7518.jpg" alt="Film Streaming Men In Black: International" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/men-in-black-international.html"><h3>Men In Black: International</h3></a>
            <p>Film Streaming Men In Black: International</br>Les Men In Black ont toujours protégé la Terre de la vermine de l’univers. Dans cette nouvelle aventure, ils s’attaquent à la menace la plus importante qu’ils aient rencontrée à ce jour : une taupe au sein de l’organisation Men In Black.</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/godzilla-2-roi-des-monstres.html">
            <img src="https://www.filmstreaming.plus/poster/godzilla-2-roi-des-monstres-5851.jpg" alt="Film Streaming Godzilla 2 - Roi des Monstres" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/godzilla-2-roi-des-monstres.html"><h3>Godzilla 2 - Roi des Monstres</h3></a>
            <p>Film Streaming Godzilla 2 - Roi des Monstres</br>La nouvelle histoire suit les efforts héroïques de l'agence crypto-zoologique Monarch alors que ses membres affrontent une batterie de monstres à la taille de Dieu, y compris le puissant Godzilla, qui entre en collision avec Mothra, Rodan, et son ultime ennemi, le roi Ghidorah à trois têtes. Lorsque ces anciennes super-espèces, considérées comme de simples mythes, ressuscitent, elles se disputent toutes pour la suprématie, laissant en suspens l'existence même de l'humanité.</p>
        </div>
    </div>        </div>
        </div>
    <div class="leftC">
        <div class="filmborder single">
            <div class="filmcontent">
                                <h1 class="yazitip">FS Plus est le 1er site Film Streaming GRATUIT 2019 en français et complet</h1>
                            <div class="moviefilm">
        <a href="https://www.filmstreaming.plus/lying-and-stealing.html">
            <img src="https://www.filmstreaming.plus/poster/lying-and-stealing-4535.jpg" alt="Film Streaming Lying and Stealing" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/lying-and-stealing.html"><h3>Lying and Stealing</h3></a>
            <p>Film Streaming Lying and Stealing</br>Un couple de voleurs décide de faire un dernier gros coup...</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/made-in-china.html">
            <img src="https://www.filmstreaming.plus/poster/made-in-china-3367.jpg" alt="Film Streaming Made In China" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/made-in-china.html"><h3>Made In China</h3></a>
            <p>Film Streaming Made In China</br>François, jeune trentenaire d’origine asiatique, n’a pas remis les pieds dans sa famille depuis 10 ans après une violente dispute avec son père Meng. Depuis, il essaie toujours d’éviter les questions sur ses origines, jusqu’à mentir en faisant croire qu’il a été adopté.Mais lorsqu’il apprend qu’il va être père, il réalise qu’il va devoir renouer avec son passé et ses origines. Poussé par sa compagne Sophie, il se décide à reprendre contact avec les siens et retourne dans son XIIIème arrondissement natal pour leur annoncer la bonne nouvelle, accompagné de son meilleur ami Bruno. François est accueilli à bras ouverts par sa famille, à l’exception de son père et de son jeune frère.Le retour dans sa communauté ne va pas être si simple…</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/luce.html">
            <img src="https://www.filmstreaming.plus/poster/luce-6180.jpg" alt="Film Streaming Luce" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/luce.html"><h3>Luce</h3></a>
            <p>Film Streaming Luce</br>Un ancien enfant-soldat africain est adopté par une famille bourgeoise américaine.</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/10-minutes-gone.html">
            <img src="https://www.filmstreaming.plus/poster/10-minutes-gone-4801.jpg" alt="Film Streaming 10 Minutes Gone" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/10-minutes-gone.html"><h3>10 Minutes Gone</h3></a>
            <p>Film Streaming 10 Minutes Gone</br>A la suite d'un braquage de banque qui tourne mal, un homme perd 10 minutes de sa mémoire.</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/aniara.html">
            <img src="https://www.filmstreaming.plus/poster/aniara-7603.jpg" alt="Film Streaming Aniara" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/aniara.html"><h3>Aniara</h3></a>
            <p>Film Streaming Aniara</br>Après avoir fini d'exploiter la Terre, ce qui reste de la population humaine lance plusieurs vaisseaux dans l'espace pour transporter des colons vers leur nouvelle maison : Mars. Un de ces vaisseaux s'appelle Aniara. L'engin, qui ressemble à un immense centre commercial, offre tous les services nécessaires à satisfaire une société profondément consumériste et destructrice. Tout semble bien se passer jusqu'à ce qu'un accident le fasse dévier de sa trajectoire.</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/skin-2018.html">
            <img src="https://www.filmstreaming.plus/poster/skin-2018-5.jpg" alt="Film Streaming Skin (2018)" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/skin-2018.html"><h3>Skin (2018)</h3></a>
            <p>Film Streaming Skin (2018)</br>Basé sur le documentaire MSNBC de 2012, Bryon Widner était l'un des suprématistes blancs les plus recherchés par le FBI. Recouvert de tatouages racistes de la tête aux pieds qu'il a gagnés en commettant des crimes motivés par la haine, il mène une vie destructrice et se dirige vers le chemin du non-retour. Lorsqu'il rencontre Julie et ses trois jeunes filles de relations précédentes, les responsabilités de la paternité lui donnent le désir de quitter le mouvement. Il subit les menaces de mort et le harcèlement de son ancien gang tout en essayant de changer de vie. Avec l'aide du FBI et du SPLC, il subit 25 chirurgies de retrait de tatouage brutales en échange du décodage des tatouages recouvrant son corps, ce qui aboutit à l'arrestation et à la condamnation de son ancien gang.</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/little-monsters-2019.html">
            <img src="https://www.filmstreaming.plus/poster/little-monsters-2019-39.jpg" alt="Film Streaming Little Monsters (2019)" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/little-monsters-2019.html"><h3>Little Monsters (2019)</h3></a>
            <p>Film Streaming Little Monsters (2019)</br>Dave a décidé de se remettre de sa récente rupture en cherchant refuge chez son neveu Félix, en l'accompagnant lors d'une sortie scolaire, entre autres, afin de pouvoir se rapprocher de l'une des enseignantes, Mlle Caroline. Tout semble normal, du moins jusqu'à ce qu'une invasion de zombies éclate qui menace les plans de Dave. La nouvelle icône du film d'horreur, Lupita Nyong'o, en fait un mélange de comédie et de gore.</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/private-war.html">
            <img src="https://www.filmstreaming.plus/poster/private-war-6103.jpg" alt="Film Streaming Private War" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/private-war.html"><h3>Private War</h3></a>
            <p>Film Streaming Private War</br>Dans un monde dévasté par les conflits, Marie Colvin est l'une des correspondantes de guerre les plus célèbres de notre époque. Son esprit intrépide et rebelle, sa volonté de donner la parole aux sans voix, sa capacité à constamment tester ses limites font d’elle une frondeuse qu’aucune élite ni dictateur n’effraient. Jusqu’au jour où, accompagnée du photographe de guerre Paul Conroy, elle entreprend la mission la plus dangereuse de sa vie dans la ville syrienne assiégée de Homs.</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/the-art-of-self-defense.html">
            <img src="https://www.filmstreaming.plus/poster/the-art-of-self-defense-5064.jpg" alt="Film Streaming The Art Of Self-Defense" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/the-art-of-self-defense.html"><h3>The Art Of Self-Defense</h3></a>
            <p>Film Streaming The Art Of Self-Defense</br>Après s'être fait attaquer dans la rue en pleine nuit par un gang de motards, le timide comptable Casey décide de s'inscrire à des cours de karaté afin de pouvoir se protéger en cas de nouvelle agression. Sous l'oeil bienveillant de son charismatique professeur, Sensei, Casey découvre un sentiment nouveau ; la confiance en soi. Mais l'image auréolée de son instructeur tombe quand le jeune homme participe aux cours du soir de son mentor...</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/la-legende-du-roi-salomon.html">
            <img src="https://www.filmstreaming.plus/poster/la-legende-du-roi-salomon-7849.jpg" alt="Film Streaming La Légende du roi Salomon" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/la-legende-du-roi-salomon.html"><h3>La Légende du roi Salomon</h3></a>
            <p>Film Streaming La Légende du roi Salomon</br>Fils du roi David et héritier du trône de Jérusalem, le jeune Salomon est chassé loin de son royaume par le diabolique Asmodeus. Perdu dans le désert d’Arabie, Salomon fait la rencontre de la princesse Naama. Ensemble, ils ont le même rêve : retourner à Jérusalem pour délivrer le royaume de la tyrannie imposée par Asmodeus…</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/teen-spirit-2019.html">
            <img src="https://www.filmstreaming.plus/poster/teen-spirit-2019-21.jpg" alt="Film Streaming TEEN SPIRIT (2019)" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/teen-spirit-2019.html"><h3>TEEN SPIRIT (2019)</h3></a>
            <p>Film Streaming TEEN SPIRIT (2019)</br>Violet, une adolescente passionnée par le chant, rêve de quitter sa petite ville et de devenir pop star.
    Affublée d'un mentor improbable, elle participe aux auditions de TEEN SPIRIT, un télé crochet musical national, une expérience qui mettra à l'épreuve son intégrité, son talent et son ambition…</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/the-art-of-racing-in-the-rain.html">
            <img src="https://www.filmstreaming.plus/poster/the-art-of-racing-in-the-rain-7714.jpg" alt="Film Streaming The Art of Racing in the Rain" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/the-art-of-racing-in-the-rain.html"><h3>The Art of Racing in the Rain</h3></a>
            <p>Film Streaming The Art of Racing in the Rain</br>Enzo n'est pas un chien comme les autres. Philosophe dans l'âme, il aime s'instruire devant la télévision et écouter attentivement les leçons de vie de son maître, Denny Swift, un pilote automobile. Aujourd'hui, Enzo se souvient de tout ce que sa famille et lui-même ont traversé au cours des années...</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/south-wind.html">
            <img src="https://www.filmstreaming.plus/poster/south-wind-5929.jpg" alt="Film Streaming South Wind" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/south-wind.html"><h3>South Wind</h3></a>
            <p>Film Streaming South Wind</br>Peter est un jeune délinquant de Belgrade plein d’ambition, spécialisé dans le vol de voitures. Mais le jour où il se trompe de véhicule il se met à dos le chef des narcotrafiquants de la ville. Son erreur va mettre sa vie en danger mais aussi celle de ses proches. Pour Peter, la descente aux enfers ne fait que commencer…</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/le-formidable-envol-de-motti-wolkenbruch.html">
            <img src="https://www.filmstreaming.plus/poster/le-formidable-envol-de-motti-wolkenbruch-16.jpg" alt="Film Streaming Le formidable envol de Motti Wolkenbruch" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/le-formidable-envol-de-motti-wolkenbruch.html"><h3>Le formidable envol de Motti Wolkenbruch</h3></a>
            <p>Film Streaming Le formidable envol de Motti Wolkenbruch</br>Le jeune juif orthodoxe Mordechai Wolkenbruch, appelé Motti, a un grave problème: toutes les femmes, que sa mère lui présente comme femmes potentielles, lui ressemblent. Alors que Laura, son camarade de classe, ne le fait pas du tout - mais malheureusement, elle est une schikse: elle porte un pantalon, a de jolies tuches, boit du gin-tonic et jure. Motti commence à avoir des doutes: le chemin prédéterminé donné par ses parents est-il le chemin à suivre? Son obéissance aux méthodes dérangeantes de sa mère commence à s'estomper, alors que sa passion pour Laura grandit en même temps. Alors les choses suivent leur cours. Et très vite, Motti arrive à la conclusion: même Schiksen peut être totalement fou.</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/the-gallows-act-ii.html">
            <img src="https://www.filmstreaming.plus/poster/the-gallows-act-ii-4242.jpg" alt="Film Streaming The Gallows Act II" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/the-gallows-act-ii.html"><h3>The Gallows Act II</h3></a>
            <p>Film Streaming The Gallows Act II</br>Ana Rue est transférée dans une préstigieuse école d'art dramatique. Elle réveille un esprit malveillant en participant à un challenge viral.</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/dolemite-is-my-name.html">
            <img src="https://www.filmstreaming.plus/poster/dolemite-is-my-name-4823.jpg" alt="Film Streaming Dolemite Is My Name" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/dolemite-is-my-name.html"><h3>Dolemite Is My Name</h3></a>
            <p>Film Streaming Dolemite Is My Name</br>Quand Hollywood l'a écarté dans les années 1970, le talentueux Rudy Ray Moore décide de se produire ses propres œuvres, dont le célèbre film de blaxpoitation "Dolemite".</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/la-morsure-du-crotale.html">
            <img src="https://www.filmstreaming.plus/poster/la-morsure-du-crotale-4039.jpg" alt="Film Streaming La Morsure du crotale" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/la-morsure-du-crotale.html"><h3>La Morsure du crotale</h3></a>
            <p>Film Streaming La Morsure du crotale</br>Afin de sauver la vie de sa petite fille, mordue par un crotale, une mère célibataire accepte l'aide d'une mystérieuse et inconnue femme. La jeune mère va découvrir que cette main tendue n'est pas sans condition. En effet, elle va devoir prendre la vie d'un étranger dans la ville de Tulia au Texas.</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/persona-non-grata.html">
            <img src="https://www.filmstreaming.plus/poster/persona-non-grata-3990.jpg" alt="Film Streaming Persona non grata" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/persona-non-grata.html"><h3>Persona non grata</h3></a>
            <p>Film Streaming Persona non grata</br>José Nunes et Maxime Charasse sont amis et associés minoritaires dans une entreprise de BTP en difficulté. Devant la nécessité de protéger leurs intérêts, ils prennent une décision radicale et se retrouvent liés par un sombre secret.
    Alors qu’ils commencent à entrevoir un avenir meilleur, un étrange personnage fait irruption dans leurs vies, leur rappelant que rien ne peut complètement s’effacer.</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/angry-birds-copains-comme-cochons.html">
            <img src="https://www.filmstreaming.plus/poster/angry-birds-copains-comme-cochons-7569.jpg" alt="Film Streaming Angry Birds : Copains comme cochons" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/angry-birds-copains-comme-cochons.html"><h3>Angry Birds : Copains comme cochons</h3></a>
            <p>Film Streaming Angry Birds : Copains comme cochons</br>Les oiseaux et les cochons continuent de se battre sans relâche. Mais la menace d’un nouvel adversaire vient perturber les voisins ennemis. Red, Chuck, Bombe et l’Aigle Vaillant recrutent Silver, la sœur de Chuck et s’associent aux cochons Léonard, son assistante Courtney et Garry (le geek), pour former une équipe improbable et tenter de sauver leurs foyers !</p>
        </div>
    </div><div class="moviefilm">
        <a href="https://www.filmstreaming.plus/a-cinderella-story-christmas-wish.html">
            <img src="https://www.filmstreaming.plus/poster/a-cinderella-story-christmas-wish-48.jpg" alt="Film Streaming A Cinderella Story: Christmas Wish" height="125px" width="180px" />
        </a>
        <div class="movief">
            <a href="https://www.filmstreaming.plus/a-cinderella-story-christmas-wish.html"><h3>A Cinderella Story: Christmas Wish</h3></a>
            <p>Film Streaming A Cinderella Story: Christmas Wish</br>Kat Emerson pourrait vraiment utiliser un miracle de Noël! La future chanteuse-compositrice a peut-être de grands rêves, mais elle a encore plus de problèmes. Traitée comme une servante par sa vaillante belle-mère et ses demi-sœurs auto-impliquées, Kat est forcée de devenir démoralisante en tant qu'elfe chantante chez le milliardaire Terrence Wintergardenâ € ™ s Santa Land. Mais il y a un point positif dans le travail: Nick, le beau nouveau Père Noël sur le terrain arboré. Lorsque Kat est invitée au prestigieux gala de Noël Wintergarden, sa belle-famille est déterminée à l'empêcher d'assister à sa propre invitation. Un chien attentif, une BFF fidèle et une pincée de magie des fêtes pourraient-ils aider à changer la situation de Kat? Rejoignez Laura Marano (Disney Austin & Ally), Gregg Sulkin (Marvel TM Runaways) et Isabella Gomez (Un jour à la fois) dans cette reconstitution moderne du classique chéri, avec musique originale et favoris des fêtes.</p>
        </div>
    </div>        </div>
        </div>
        <div class="filmborder">
            <div class="filmcontent">
                <div class='wp-pagenavi'>
                    <span class="pages">Page 1 sur 597</span><span class="current">1</span><a href='https://www.filmstreaming.plus/films/page-2.html'>2</a><a href='https://www.filmstreaming.plus/films/page-3.html'>3</a><a href='https://www.filmstreaming.plus/films/page-4.html'>4</a><a href='https://www.filmstreaming.plus/films/page-5.html'>5</a><a href='https://www.filmstreaming.plus/films/page-6.html'>6</a><a href='https://www.filmstreaming.plus/films/page-7.html'>7</a><span class="extend">…</span><a href='https://www.filmstreaming.plus/films/page-596.html'>596</a><a href='https://www.filmstreaming.plus/films/page-597.html'>597</a><a class="nextpostslink" href="https://www.filmstreaming.plus/films/page-2.html">suivante »</a><a class="last" href="https://www.filmstreaming.plus/films/page-597.html">»»</a>            </div>
            </div>
        </div>
    </div><div id="sidebar">
        <div class="sidebarborder">
            <div class="sidebar-right">
                <h2>TOP FILM STREAMING 2019 - 2018 EN VF</h2>
                <ul>
                                        <li>
                            <a href="https://www.filmstreaming.plus/toy-story-4.html" title="Film Streaming Toy Story 4">Toy Story 4</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/le-roi-lion-2019.html" title="Film Streaming LE ROI LION (2019)">LE ROI LION (2019)</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/joker-2019.html" title="Film Streaming JOKER (2019)">JOKER (2019)</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/ca-chapitre-2.html" title="Film Streaming Ça : Chapitre 2">Ça : Chapitre 2</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/shazam.html" title="Film Streaming Shazam!">Shazam!</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/sang-froid.html" title="Film Streaming Sang froid">Sang froid</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/captain-marvel.html" title="Film Streaming Captain Marvel">Captain Marvel</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/le-retour-de-mary-poppins.html" title="Film Streaming Le Retour de Mary Poppins">Le Retour de Mary Poppins</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/les-salopes-ou-le-sucre-naturel-de-la-peau.html" title="Film Streaming Les Salopes ou le sucre naturel de la peau">Les Salopes ou le sucre naturel de la peau</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/beyond-white-space.html" title="Film Streaming Beyond White Space">Beyond White Space</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/hellboy-2019.html" title="Film Streaming HELLBOY (2019)">HELLBOY (2019)</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/john-wick-parabellum.html" title="Film Streaming John Wick Parabellum">John Wick Parabellum</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/aladdin-2019.html" title="Film Streaming ALADDIN (2019)">ALADDIN (2019)</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/x-men-dark-phoenix.html" title="Film Streaming X-Men : Dark Phoenix">X-Men : Dark Phoenix</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/pokemon-detective-pikachu.html" title="Film Streaming Pokémon Détective Pikachu">Pokémon Détective Pikachu</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/avengers-endgame.html" title="Film Streaming Avengers: Endgame">Avengers: Endgame</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/after-chapitre-1.html" title="Film Streaming After - Chapitre 1">After - Chapitre 1</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/us.html" title="Film Streaming Us">Us</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/dumbo-2019.html" title="Film Streaming DUMBO (2019)">DUMBO (2019)</a>
                        </li>
                                        <li>
                            <a href="https://www.filmstreaming.plus/alita-battle-angel.html" title="Film Streaming Alita : Battle Angel">Alita : Battle Angel</a>
                        </li>
                                </ul>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div style="clear:both;"></div>
    <div class="footborder"></div>
    <div id="footer">
        <div class="footer clearfix">
            <div class="footerleft">
                Copyright &copy; 2019            <a href="https://www.filmstreaming.plus"><strong>film streaming</strong></a>
                <a href="https://www.filmstreaming.plus"><strong>voir film</strong></a>
                <br><span><strong>Voir</strong> les meilleurs films en version fran&#231;aise gratuit.</span>
            </div>
            <div class="footeright">
                <a href="https://www.google.fr/" title="google" target="_blank"><img src="https://www.filmstreaming.plus/assets/images/google.jpg" alt="google" /></a>
            </div>
            <div style="clear:both;"></div>
            <p class="ending-p">
                FilmStreaming Plus est un excellent site de diffusion de film et de <a href="https://www.filmstreaming.plus"><strong>voir film</strong></a> gratuit en streaming, il ne nécessite pas d'inscription juste tape votre nom de film préféré et Profitez de regarder gratuitement en streaming sur votre site FilmStreaming Plus, il est facile de naviguer avec une interface réactive et propre, et il est facile à utiliser pour choisie votre version de vidéo VO, VOSTFR ou VF en streaming . FilmStreaming Plus est le meilleur site pour regarder les derniers films complet en streaming gratuit français avec un haute qualité. Vous pouvez diffuser en ligne en streaming sur n'importe quel appareil (ordinateur portable, tablette, smartphone, Android, iPhone) Ne manquez pas la meilleur moyen de passer votre temps libre et commencez à regarder sur FilmStreaming Plus            <br /><br />Avertissement: Ce site (FilmStreaming Plus) ne stocke aucun fichier sur son serveur. Tous les contenus sont fournis par des tiers non affiliés.
            </p>
        </div>
    </div>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-144698453-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'UA-144698453-1');
    </script>
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5daba2ae5e232977"></script>
    </body>
    </html>  `
}
    // yes()
    // async function yes(){
    //   const result = await axios.get(siteUrl);
    //   res.send(result.data);
    // };   
    
    var resu = foundTags(data())
    console.log(foundClass(resu,'filmborder moviefilm'));
    
    res.send(data())

function foundTags(string_html) {
    var done = false, from = null,obj = [];
    while (done == false) tagFinder(string_html);
    function tagFinder(string_html) {
        if (from == null) {
            // debut du tag        
            var first = string_html.indexOf('<'), last = string_html.indexOf('>',first);
            // fin du tag        
            obj.push({
                start:first,
                end:last,
                tag:string_html.slice(first,last+1)
            })
            from = last;            
        }else{
            // debut du tag
            var first = string_html.indexOf('<',from), last = string_html.indexOf('>',first)
            if (first == -1){ done = true}
            else{
                obj.push({
                    start:first,
                    end:last,
                    tag:string_html.slice(first,last+1)
                })
                from = last;
            }
            // fin du tag
        }
    }
    for (let index = 0; index < obj.length; index++) {
        const element = obj[index].tag;
        var src = element.indexOf('src='), href = element.indexOf('href='),name = element.indexOf('name='),id = element.indexOf('id='),class_name =  element.indexOf('class=');
        if (class_name != -1) {
            // console.log(obj[index].tag);                     
            var starter = obj[index].tag.indexOf('"',class_name), ending = obj[index].tag.indexOf('"',starter+1);
            if (starter == -1) {
                starter = obj[index].tag.indexOf("'",class_name)
                ending = obj[index].tag.indexOf("'",starter+1);
            }            
            var result = obj[index].tag.slice(starter+1,ending);
            obj[index].class_name = result.split(" ");
                    
        }
        if (id != -1) {
            var starter = obj[index].tag.indexOf('"',id), ending = obj[index].tag.indexOf('"',starter+1);
            if (starter == -1) {
                starter = obj[index].tag.indexOf("'",id)
                ending = obj[index].tag.indexOf("'",starter+1);
            }            
            var result = obj[index].tag.slice(starter+1,ending);   
            obj[index].id = result.split(" ");   
        }
        if (name != -1) {
            var starter = obj[index].tag.indexOf('"',name), ending = obj[index].tag.indexOf('"',starter+1);
            if (starter == -1) {
                starter = obj[index].tag.indexOf("'",name)
                ending = obj[index].tag.indexOf("'",starter+1);
            }            
            var result = obj[index].tag.slice(starter+1,ending);
            name = result.split(" ");                 
            obj[index].name = result.split(" ");
        }    
        if (src != -1) {
            var starter = obj[index].tag.indexOf('"',src), ending = obj[index].tag.indexOf('"',starter+1);
            if (starter == -1) {
                starter = obj[index].tag.indexOf("'",src)
                ending = obj[index].tag.indexOf("'",starter+1);
            }            
            var result = obj[index].tag.slice(starter+1,ending);
            src = result.split(" ");                                  
            obj[index].src = result.split(" ");
        }
        if (href != -1) {
            var starter = obj[index].tag.indexOf('"',href), ending = obj[index].tag.indexOf('"',starter+1);
            if (starter == -1) {
                starter = obj[index].tag.indexOf("'",href)
                ending = obj[index].tag.indexOf("'",starter+1);
            }            
            var result = obj[index].tag.slice(starter+1,ending);
            obj[index].href = result.split(" ");
        }               
    }
    return obj;
}
function foundClass(data,classes = String){
    var classe = [];    
    check(classes)
    function check(params) {
        var size = params.split(' ');
        for (let index = 0; index < size.length; index++) {
            const element = size[index];
            classe.push(element)
        }
    }
    function found() {        
        var result = [];
        for (let index = 0; index < classe.length; index++) {
            const element = classe[index];
            for (let compteur = 0; compteur < data.length; compteur++) {
                const elem = data[compteur].class_name;
                if (element == elem) {
                    result.push(data[compteur])
                }
            }
        }
        return result;
    }
    return found();
}

