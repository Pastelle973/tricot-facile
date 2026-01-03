/**
 * Tricot Facile - Dictionnaire Technique Tricot EN → FR
 * Plus de 200 termes techniques avec explications
 */

const KNITTING_DICTIONARY = {
    // ============================================
    // Mailles de base / Basic Stitches
    // ============================================
    'knit': { fr: 'maille endroit', alt: ['tricoter à l\'endroit'], note: 'K dans les abréviations' },
    'purl': { fr: 'maille envers', alt: ['tricoter à l\'envers'], note: 'P dans les abréviations' },
    'k': { fr: 'm. end.', alt: ['maille endroit'], note: 'Abréviation de knit' },
    'p': { fr: 'm. env.', alt: ['maille envers'], note: 'Abréviation de purl' },
    'knit stitch': { fr: 'maille endroit', alt: [], note: '' },
    'purl stitch': { fr: 'maille envers', alt: [], note: '' },
    'stitch': { fr: 'maille', alt: ['m.'], note: 'st ou sts au pluriel' },
    'stitches': { fr: 'mailles', alt: ['m.'], note: '' },
    'st': { fr: 'm.', alt: ['maille'], note: 'Abréviation de stitch' },
    'sts': { fr: 'm.', alt: ['mailles'], note: 'Abréviation de stitches' },

    // ============================================
    // Points / Stitch Patterns
    // ============================================
    'stockinette stitch': { fr: 'jersey endroit', alt: ['point jersey'], note: 'St st' },
    'stockinette': { fr: 'jersey', alt: ['jersey endroit'], note: '' },
    'stocking stitch': { fr: 'jersey endroit', alt: [], note: 'Terme britannique' },
    'reverse stockinette': { fr: 'jersey envers', alt: [], note: '' },
    'garter stitch': { fr: 'point mousse', alt: [], note: 'Tricoter toutes les mailles à l\'endroit' },
    'seed stitch': { fr: 'point de riz', alt: ['point de blé'], note: 'Alterner end./env.' },
    'moss stitch': { fr: 'point de riz double', alt: ['point mousse irlandais'], note: '' },
    'rib': { fr: 'côtes', alt: [], note: '' },
    'ribbing': { fr: 'côtes', alt: ['bordure côtes'], note: '' },
    '1x1 rib': { fr: 'côtes 1/1', alt: [], note: '1 m. end., 1 m. env.' },
    '2x2 rib': { fr: 'côtes 2/2', alt: [], note: '2 m. end., 2 m. env.' },
    'cable': { fr: 'torsade', alt: [], note: '' },
    'cable stitch': { fr: 'point de torsade', alt: [], note: '' },
    'lace': { fr: 'dentelle', alt: ['point dentelle'], note: '' },
    'lace pattern': { fr: 'motif dentelle', alt: [], note: '' },
    'eyelet': { fr: 'jour', alt: ['trou décoratif'], note: '' },
    'bobble': { fr: 'nope', alt: ['bourrelet'], note: '' },
    'popcorn stitch': { fr: 'point pop-corn', alt: [], note: '' },
    'basket weave': { fr: 'point de vannerie', alt: [], note: '' },
    'honeycomb': { fr: 'point nid d\'abeilles', alt: [], note: '' },
    'brioche': { fr: 'point brioche', alt: [], note: '' },
    'fisherman\'s rib': { fr: 'côtes anglaises', alt: ['fausses côtes anglaises'], note: '' },
    'herringbone': { fr: 'chevrons', alt: ['point chevron'], note: '' },
    'chevron': { fr: 'chevron', alt: [], note: '' },
    'diamond': { fr: 'losange', alt: [], note: '' },
    'leaf pattern': { fr: 'motif feuille', alt: [], note: '' },
    'heart pattern': { fr: 'motif cœur', alt: [], note: '' },
    'fair isle': { fr: 'jacquard', alt: ['Fair Isle'], note: 'Technique de tricot coloré' },
    'stranded': { fr: 'jacquard', alt: ['fil flottant'], note: '' },
    'intarsia': { fr: 'intarsia', alt: [], note: 'Technique pour grands motifs colorés' },
    'colorwork': { fr: 'jacquard', alt: ['tricot multicolore'], note: '' },

    // ============================================
    // Montage et rabattage / Cast On & Bind Off
    // ============================================
    'cast on': { fr: 'monter les mailles', alt: ['montage'], note: 'CO' },
    'co': { fr: 'monter', alt: ['montage'], note: 'Abréviation de cast on' },
    'bind off': { fr: 'rabattre les mailles', alt: ['rabattage'], note: 'BO - Terme US' },
    'cast off': { fr: 'rabattre les mailles', alt: ['rabattage'], note: 'Terme UK' },
    'bo': { fr: 'rabattre', alt: [], note: 'Abréviation de bind off' },
    'long tail cast on': { fr: 'montage à l\'italienne', alt: ['montage avec fil double'], note: '' },
    'cable cast on': { fr: 'montage tricoté', alt: [], note: '' },
    'provisional cast on': { fr: 'montage provisoire', alt: [], note: '' },
    'tubular cast on': { fr: 'montage tubulaire', alt: [], note: '' },
    'stretchy bind off': { fr: 'rabattage élastique', alt: [], note: '' },
    'three needle bind off': { fr: 'rabattage à trois aiguilles', alt: [], note: '' },
    'grafting': { fr: 'greffage', alt: ['point de kitchener'], note: '' },
    'kitchener stitch': { fr: 'point de kitchener', alt: ['greffage'], note: '' },

    // ============================================
    // Augmentations / Increases
    // ============================================
    'increase': { fr: 'augmentation', alt: ['augmenter'], note: 'inc' },
    'inc': { fr: 'aug.', alt: ['augmentation'], note: '' },
    'make one': { fr: 'augmentation intercalaire', alt: ['relever le brin'], note: 'M1' },
    'm1': { fr: 'aug. intercalaire', alt: [], note: '' },
    'm1l': { fr: 'aug. intercalaire gauche', alt: [], note: 'Make one left' },
    'm1r': { fr: 'aug. intercalaire droite', alt: [], note: 'Make one right' },
    'kfb': { fr: 'tricoter 2 fois la même maille', alt: [], note: 'Knit front and back' },
    'knit front and back': { fr: 'tricoter dans le brin avant et arrière', alt: [], note: '' },
    'pfb': { fr: 'tricoter 2 fois à l\'envers', alt: [], note: 'Purl front and back' },
    'yarn over': { fr: 'jeté', alt: [], note: 'YO' },
    'yo': { fr: 'jeté', alt: [], note: '' },
    'lifted increase': { fr: 'augmentation relevée', alt: [], note: '' },

    // ============================================
    // Diminutions / Decreases
    // ============================================
    'decrease': { fr: 'diminution', alt: ['diminuer'], note: 'dec' },
    'dec': { fr: 'dim.', alt: ['diminution'], note: '' },
    'knit two together': { fr: 'tricoter 2 mailles ensemble', alt: ['2 m. ens. end.'], note: 'K2tog' },
    'k2tog': { fr: '2 m. ens. end.', alt: [], note: 'Diminution penchée à droite' },
    'purl two together': { fr: '2 mailles ensemble envers', alt: ['2 m. ens. env.'], note: 'P2tog' },
    'p2tog': { fr: '2 m. ens. env.', alt: [], note: '' },
    'slip slip knit': { fr: 'surjet simple', alt: ['glisser, glisser, tricoter ens.'], note: 'SSK' },
    'ssk': { fr: 'surjet simple', alt: ['GGT'], note: 'Diminution penchée à gauche' },
    'slip slip purl': { fr: 'surjet simple envers', alt: [], note: 'SSP' },
    'ssp': { fr: 'surjet simple envers', alt: [], note: '' },
    'slip knit pass': { fr: 'glisser, tricoter, passer', alt: [], note: 'SKP' },
    'skp': { fr: 'surjet simple', alt: [], note: '' },
    'sk2p': { fr: 'surjet double', alt: [], note: 'Slip 1, k2tog, pass slipped stitch over' },
    'slip 1 knit 2 together pass slipped stitch over': { fr: 'surjet double', alt: [], note: '' },
    'central double decrease': { fr: 'diminution double centrale', alt: [], note: 'CDD' },
    'cdd': { fr: 'dim. double centrale', alt: [], note: '' },
    's2kp': { fr: 'surjet double', alt: [], note: '' },
    'k3tog': { fr: '3 m. ens. end.', alt: [], note: '' },
    'p3tog': { fr: '3 m. ens. env.', alt: [], note: '' },

    // ============================================
    // Techniques diverses / Various Techniques
    // ============================================
    'slip stitch': { fr: 'maille glissée', alt: ['glisser une maille'], note: 'sl st' },
    'slip': { fr: 'glisser', alt: [], note: 'sl' },
    'sl': { fr: 'gl.', alt: ['glisser'], note: '' },
    'slip purlwise': { fr: 'glisser comme pour tricoter à l\'envers', alt: [], note: '' },
    'slip knitwise': { fr: 'glisser comme pour tricoter à l\'endroit', alt: [], note: '' },
    'wyif': { fr: 'fil devant', alt: [], note: 'With yarn in front' },
    'wyib': { fr: 'fil derrière', alt: [], note: 'With yarn in back' },
    'pass slipped stitch over': { fr: 'passer la maille glissée par-dessus', alt: [], note: 'PSSO' },
    'psso': { fr: 'passer la m. gl. par-dessus', alt: [], note: '' },
    'pick up': { fr: 'relever', alt: ['relever des mailles'], note: '' },
    'pick up and knit': { fr: 'relever et tricoter', alt: [], note: '' },
    'pick up stitches': { fr: 'relever des mailles', alt: [], note: '' },
    'turn': { fr: 'tourner', alt: [], note: '' },
    'wrap and turn': { fr: 'enrouler et tourner', alt: [], note: 'W&T - Short rows' },
    'w&t': { fr: 'enrouler et tourner', alt: [], note: '' },
    'short row': { fr: 'rang raccourci', alt: [], note: '' },
    'short rows': { fr: 'rangs raccourcis', alt: [], note: '' },
    'join': { fr: 'joindre', alt: ['fermer en rond'], note: '' },
    'join in the round': { fr: 'joindre en rond', alt: [], note: '' },
    'work in the round': { fr: 'tricoter en rond', alt: [], note: '' },
    'in the round': { fr: 'en rond', alt: [], note: '' },
    'flat': { fr: 'à plat', alt: [], note: '' },
    'work flat': { fr: 'tricoter à plat', alt: [], note: '' },
    'back and forth': { fr: 'en aller-retour', alt: ['à plat'], note: '' },
    'seamless': { fr: 'sans couture', alt: [], note: '' },
    'seam': { fr: 'couture', alt: ['coudre'], note: '' },
    'mattress stitch': { fr: 'couture invisible', alt: ['point de matelas'], note: '' },
    'block': { fr: 'bloquer', alt: ['mise en forme'], note: '' },
    'blocking': { fr: 'blocage', alt: ['mise en forme'], note: '' },
    'weave in ends': { fr: 'rentrer les fils', alt: [], note: '' },
    'weave in': { fr: 'rentrer', alt: [], note: '' },
    'ends': { fr: 'fils', alt: ['bouts de fil'], note: '' },
    'tail': { fr: 'fil', alt: ['bout de fil'], note: '' },
    'fringe': { fr: 'franges', alt: [], note: '' },
    'tassel': { fr: 'pompon', alt: ['gland'], note: '' },
    'pom pom': { fr: 'pompon', alt: [], note: '' },

    // ============================================
    // Torsades / Cables
    // ============================================
    'cable needle': { fr: 'aiguille à torsade', alt: ['aiguille auxiliaire'], note: 'CN' },
    'cn': { fr: 'aig. aux.', alt: ['aiguille auxiliaire'], note: '' },
    'hold in front': { fr: 'laisser devant', alt: [], note: '' },
    'hold in back': { fr: 'laisser derrière', alt: [], note: '' },
    'c4f': { fr: 'torsade 4 m. à gauche', alt: [], note: 'Cable 4 front' },
    'c4b': { fr: 'torsade 4 m. à droite', alt: [], note: 'Cable 4 back' },
    'c6f': { fr: 'torsade 6 m. à gauche', alt: [], note: '' },
    'c6b': { fr: 'torsade 6 m. à droite', alt: [], note: '' },
    'twist': { fr: 'torsade simple', alt: [], note: '' },
    'left twist': { fr: 'torsade à gauche', alt: [], note: 'LT' },
    'right twist': { fr: 'torsade à droite', alt: [], note: 'RT' },
    'lt': { fr: 'torsade gauche', alt: [], note: '' },
    'rt': { fr: 'torsade droite', alt: [], note: '' },

    // ============================================
    // Parties du vêtement / Garment Parts
    // ============================================
    'body': { fr: 'corps', alt: [], note: '' },
    'front': { fr: 'devant', alt: [], note: '' },
    'back': { fr: 'dos', alt: [], note: '' },
    'left front': { fr: 'devant gauche', alt: [], note: '' },
    'right front': { fr: 'devant droit', alt: [], note: '' },
    'sleeve': { fr: 'manche', alt: [], note: '' },
    'sleeves': { fr: 'manches', alt: [], note: '' },
    'left sleeve': { fr: 'manche gauche', alt: [], note: '' },
    'right sleeve': { fr: 'manche droite', alt: [], note: '' },
    'neckline': { fr: 'encolure', alt: [], note: '' },
    'neckband': { fr: 'bordure d\'encolure', alt: ['col'], note: '' },
    'collar': { fr: 'col', alt: [], note: '' },
    'crew neck': { fr: 'col ras-du-cou', alt: [], note: '' },
    'v-neck': { fr: 'col V', alt: [], note: '' },
    'boat neck': { fr: 'col bateau', alt: [], note: '' },
    'turtleneck': { fr: 'col roulé', alt: [], note: '' },
    'mock neck': { fr: 'col cheminée', alt: [], note: '' },
    'cowl neck': { fr: 'col bénitier', alt: [], note: '' },
    'shoulder': { fr: 'épaule', alt: [], note: '' },
    'shoulders': { fr: 'épaules', alt: [], note: '' },
    'shoulder shaping': { fr: 'mise en forme des épaules', alt: [], note: '' },
    'armhole': { fr: 'emmanchure', alt: [], note: '' },
    'armscye': { fr: 'emmanchure', alt: [], note: '' },
    'underarm': { fr: 'sous-bras', alt: ['dessous de bras'], note: '' },
    'yoke': { fr: 'empiècement', alt: [], note: '' },
    'raglan': { fr: 'raglan', alt: [], note: '' },
    'set-in sleeve': { fr: 'manche montée', alt: [], note: '' },
    'drop shoulder': { fr: 'épaule tombante', alt: [], note: '' },
    'saddle shoulder': { fr: 'épaule à selle', alt: [], note: '' },
    'cuff': { fr: 'poignet', alt: ['manchette'], note: '' },
    'hem': { fr: 'ourlet', alt: [], note: '' },
    'waist': { fr: 'taille', alt: [], note: '' },
    'waist shaping': { fr: 'cintrages à la taille', alt: [], note: '' },
    'hip': { fr: 'hanche', alt: [], note: '' },
    'bust': { fr: 'poitrine', alt: ['buste'], note: '' },
    'bust dart': { fr: 'pince poitrine', alt: [], note: '' },
    'button band': { fr: 'bande de boutonnage', alt: [], note: '' },
    'buttonhole': { fr: 'boutonnière', alt: [], note: '' },
    'placket': { fr: 'patte de boutonnage', alt: [], note: '' },
    'pocket': { fr: 'poche', alt: [], note: '' },
    'hood': { fr: 'capuche', alt: [], note: '' },
    'belt': { fr: 'ceinture', alt: [], note: '' },
    'tie': { fr: 'lien', alt: [], note: '' },

    // ============================================
    // Accessoires et projets / Items
    // ============================================
    'sweater': { fr: 'pull', alt: ['pull-over'], note: '' },
    'pullover': { fr: 'pull', alt: [], note: '' },
    'jumper': { fr: 'pull', alt: [], note: 'Terme britannique' },
    'cardigan': { fr: 'gilet', alt: ['cardigan'], note: '' },
    'vest': { fr: 'gilet sans manches', alt: ['débardeur'], note: '' },
    'tank top': { fr: 'débardeur', alt: [], note: '' },
    'top': { fr: 'haut', alt: [], note: '' },
    'tee': { fr: 't-shirt', alt: [], note: '' },
    'shawl': { fr: 'châle', alt: [], note: '' },
    'scarf': { fr: 'écharpe', alt: [], note: '' },
    'cowl': { fr: 'snood', alt: ['col'], note: '' },
    'hat': { fr: 'bonnet', alt: [], note: '' },
    'beanie': { fr: 'bonnet', alt: [], note: '' },
    'beret': { fr: 'béret', alt: [], note: '' },
    'headband': { fr: 'bandeau', alt: [], note: '' },
    'mittens': { fr: 'moufles', alt: [], note: '' },
    'gloves': { fr: 'gants', alt: [], note: '' },
    'fingerless gloves': { fr: 'mitaines', alt: [], note: '' },
    'fingerless mitts': { fr: 'mitaines', alt: [], note: '' },
    'socks': { fr: 'chaussettes', alt: [], note: '' },
    'sock': { fr: 'chaussette', alt: [], note: '' },
    'slippers': { fr: 'chaussons', alt: [], note: '' },
    'blanket': { fr: 'couverture', alt: ['plaid'], note: '' },
    'throw': { fr: 'plaid', alt: [], note: '' },
    'afghan': { fr: 'couverture', alt: ['afghan'], note: '' },
    'pillow': { fr: 'coussin', alt: [], note: '' },
    'cushion': { fr: 'coussin', alt: [], note: '' },
    'bag': { fr: 'sac', alt: [], note: '' },
    'tote': { fr: 'cabas', alt: [], note: '' },
    'washcloth': { fr: 'lavette', alt: ['carré vaisselle'], note: '' },
    'dishcloth': { fr: 'lavette', alt: [], note: '' },
    'coaster': { fr: 'dessous de verre', alt: [], note: '' },

    // ============================================
    // Layette / Baby Items
    // ============================================
    'baby blanket': { fr: 'couverture bébé', alt: [], note: '' },
    'booties': { fr: 'chaussons bébé', alt: [], note: '' },
    'baby booties': { fr: 'chaussons bébé', alt: [], note: '' },
    'onesie': { fr: 'grenouillère', alt: ['body'], note: '' },
    'romper': { fr: 'barboteuse', alt: [], note: '' },
    'bonnet': { fr: 'béguin', alt: ['bonnet bébé'], note: '' },
    'baby hat': { fr: 'bonnet bébé', alt: [], note: '' },
    'bib': { fr: 'bavette', alt: ['bavoir'], note: '' },
    'rattle': { fr: 'hochet', alt: [], note: '' },
    'lovey': { fr: 'doudou', alt: [], note: '' },
    'stuffed toy': { fr: 'peluche', alt: ['doudou'], note: '' },
    'toy': { fr: 'jouet', alt: [], note: '' },

    // ============================================
    // Mesures et échantillon / Measurements & Gauge
    // ============================================
    'gauge': { fr: 'échantillon', alt: [], note: 'Tension en anglais UK' },
    'tension': { fr: 'échantillon', alt: [], note: 'Terme britannique' },
    'gauge swatch': { fr: 'échantillon', alt: [], note: '' },
    'swatch': { fr: 'échantillon', alt: [], note: '' },
    'row gauge': { fr: 'échantillon en rangs', alt: [], note: '' },
    'stitch gauge': { fr: 'échantillon en mailles', alt: [], note: '' },
    'rows': { fr: 'rangs', alt: [], note: '' },
    'row': { fr: 'rang', alt: [], note: '' },
    'round': { fr: 'tour', alt: [], note: 'En tricot circulaire' },
    'rounds': { fr: 'tours', alt: [], note: '' },
    'rnd': { fr: 'tour', alt: [], note: '' },
    'rnds': { fr: 'tours', alt: [], note: '' },
    'repeat': { fr: 'répéter', alt: ['répétition'], note: 'rep' },
    'rep': { fr: 'rép.', alt: ['répéter'], note: '' },
    'times': { fr: 'fois', alt: [], note: '' },
    'inches': { fr: 'pouces', alt: [], note: '1 pouce = 2.54 cm' },
    'inch': { fr: 'pouce', alt: [], note: '' },
    'centimeters': { fr: 'centimètres', alt: [], note: '' },
    'cm': { fr: 'cm', alt: [], note: '' },
    'length': { fr: 'longueur', alt: [], note: '' },
    'width': { fr: 'largeur', alt: [], note: '' },
    'circumference': { fr: 'circonférence', alt: ['tour'], note: '' },
    'chest': { fr: 'poitrine', alt: ['tour de poitrine'], note: '' },
    'finished measurements': { fr: 'dimensions finies', alt: [], note: '' },
    'ease': { fr: 'aisance', alt: [], note: '' },
    'positive ease': { fr: 'aisance positive', alt: [], note: 'Plus grand que le corps' },
    'negative ease': { fr: 'aisance négative', alt: [], note: 'Plus petit que le corps' },
    'size': { fr: 'taille', alt: [], note: '' },
    'sizes': { fr: 'tailles', alt: [], note: '' },
    'small': { fr: 'petit', alt: ['S'], note: '' },
    'medium': { fr: 'moyen', alt: ['M'], note: '' },
    'large': { fr: 'grand', alt: ['L'], note: '' },
    'extra large': { fr: 'très grand', alt: ['XL'], note: '' },

    // ============================================
    // Fil et matériel / Yarn & Materials
    // ============================================
    'yarn': { fr: 'laine', alt: ['fil'], note: '' },
    'wool': { fr: 'laine', alt: [], note: '' },
    'fiber': { fr: 'fibre', alt: [], note: '' },
    'fibre': { fr: 'fibre', alt: [], note: 'Orthographe britannique' },
    'skein': { fr: 'écheveau', alt: [], note: '' },
    'hank': { fr: 'écheveau', alt: [], note: '' },
    'ball': { fr: 'pelote', alt: [], note: '' },
    'cake': { fr: 'pelote enroulée', alt: [], note: '' },
    'yardage': { fr: 'métrage', alt: [], note: '' },
    'meterage': { fr: 'métrage', alt: [], note: '' },
    'weight': { fr: 'épaisseur', alt: ['poids'], note: 'Catégorie du fil' },
    'yarn weight': { fr: 'épaisseur du fil', alt: [], note: '' },
    'lace weight': { fr: 'laine dentelle', alt: [], note: 'Catégorie 0' },
    'fingering weight': { fr: 'fingering', alt: ['laine à chaussettes'], note: 'Catégorie 1' },
    'fingering': { fr: 'fingering', alt: [], note: '' },
    'sock yarn': { fr: 'laine à chaussettes', alt: [], note: '' },
    'sport weight': { fr: 'sport', alt: [], note: 'Catégorie 2' },
    'dk weight': { fr: 'DK', alt: ['double knitting'], note: 'Catégorie 3' },
    'dk': { fr: 'DK', alt: [], note: '' },
    'worsted weight': { fr: 'worsted', alt: ['laine peignée'], note: 'Catégorie 4' },
    'worsted': { fr: 'worsted', alt: [], note: '' },
    'aran weight': { fr: 'aran', alt: [], note: 'Entre DK et worsted' },
    'aran': { fr: 'aran', alt: [], note: '' },
    'bulky': { fr: 'grosse laine', alt: ['chunky'], note: 'Catégorie 5' },
    'chunky': { fr: 'grosse laine', alt: [], note: '' },
    'super bulky': { fr: 'très grosse laine', alt: [], note: 'Catégorie 6' },
    'jumbo': { fr: 'laine XXL', alt: [], note: 'Catégorie 7' },
    'ply': { fr: 'brin', alt: [], note: '' },
    '4-ply': { fr: '4 brins', alt: ['fingering'], note: '' },
    '8-ply': { fr: '8 brins', alt: ['DK'], note: '' },
    'single ply': { fr: 'fil simple', alt: [], note: '' },
    'plied': { fr: 'retors', alt: [], note: '' },
    'superwash': { fr: 'superwash', alt: ['lavable machine'], note: '' },
    'hand wash': { fr: 'lavage à la main', alt: [], note: '' },
    'machine washable': { fr: 'lavable en machine', alt: [], note: '' },
    'merino': { fr: 'mérinos', alt: [], note: '' },
    'cashmere': { fr: 'cachemire', alt: [], note: '' },
    'alpaca': { fr: 'alpaga', alt: [], note: '' },
    'mohair': { fr: 'mohair', alt: [], note: '' },
    'silk': { fr: 'soie', alt: [], note: '' },
    'cotton': { fr: 'coton', alt: [], note: '' },
    'linen': { fr: 'lin', alt: [], note: '' },
    'acrylic': { fr: 'acrylique', alt: [], note: '' },
    'nylon': { fr: 'nylon', alt: ['polyamide'], note: '' },
    'blend': { fr: 'mélange', alt: [], note: '' },

    // ============================================
    // Aiguilles / Needles
    // ============================================
    'needles': { fr: 'aiguilles', alt: [], note: '' },
    'needle': { fr: 'aiguille', alt: [], note: '' },
    'straight needles': { fr: 'aiguilles droites', alt: [], note: '' },
    'circular needles': { fr: 'aiguilles circulaires', alt: [], note: '' },
    'circulars': { fr: 'aiguilles circulaires', alt: [], note: '' },
    'double pointed needles': { fr: 'aiguilles double pointes', alt: ['DPN'], note: '' },
    'dpns': { fr: 'aiguilles double pointes', alt: [], note: '' },
    'dpn': { fr: 'aiguille double pointe', alt: [], note: '' },
    'interchangeable needles': { fr: 'aiguilles interchangeables', alt: [], note: '' },
    'cable': { fr: 'câble', alt: [], note: 'Pour aiguilles circulaires' },
    'cord': { fr: 'câble', alt: [], note: '' },
    'stitch markers': { fr: 'marqueurs de mailles', alt: [], note: '' },
    'marker': { fr: 'marqueur', alt: [], note: '' },
    'markers': { fr: 'marqueurs', alt: [], note: '' },
    'pm': { fr: 'placer un marqueur', alt: [], note: 'Place marker' },
    'sm': { fr: 'glisser le marqueur', alt: [], note: 'Slip marker' },
    'stitch holder': { fr: 'arrêt de mailles', alt: [], note: '' },
    'waste yarn': { fr: 'fil de contraste', alt: ['fil de réserve'], note: '' },
    'tapestry needle': { fr: 'aiguille à laine', alt: ['aiguille à tapisserie'], note: '' },
    'darning needle': { fr: 'aiguille à repriser', alt: [], note: '' },
    'crochet hook': { fr: 'crochet', alt: [], note: '' },
    'row counter': { fr: 'compte-rangs', alt: [], note: '' },
    'scissors': { fr: 'ciseaux', alt: [], note: '' },
    'measuring tape': { fr: 'mètre ruban', alt: [], note: '' },
    'blocking mats': { fr: 'tapis de blocage', alt: [], note: '' },
    'blocking pins': { fr: 'épingles de blocage', alt: [], note: '' },
    't-pins': { fr: 'épingles en T', alt: [], note: '' },

    // ============================================
    // Instructions générales / General Instructions
    // ============================================
    'pattern': { fr: 'modèle', alt: ['patron'], note: '' },
    'instructions': { fr: 'instructions', alt: ['explications'], note: '' },
    'notes': { fr: 'notes', alt: [], note: '' },
    'abbreviations': { fr: 'abréviations', alt: [], note: '' },
    'chart': { fr: 'grille', alt: ['diagramme'], note: '' },
    'schematic': { fr: 'schéma', alt: [], note: '' },
    'beginning': { fr: 'début', alt: [], note: 'beg' },
    'beg': { fr: 'déb.', alt: ['début'], note: '' },
    'end': { fr: 'fin', alt: [], note: '' },
    'ending': { fr: 'terminant', alt: [], note: '' },
    'continue': { fr: 'continuer', alt: [], note: 'cont' },
    'cont': { fr: 'cont.', alt: ['continuer'], note: '' },
    'remaining': { fr: 'restant(es)', alt: [], note: 'rem' },
    'rem': { fr: 'rest.', alt: ['restant'], note: '' },
    'approximately': { fr: 'environ', alt: [], note: 'approx' },
    'approx': { fr: 'env.', alt: ['environ'], note: '' },
    'alternate': { fr: 'alterner', alt: [], note: 'alt' },
    'alt': { fr: 'alt.', alt: ['alterner'], note: '' },
    'every': { fr: 'tous les', alt: [], note: '' },
    'each': { fr: 'chaque', alt: [], note: '' },
    'both': { fr: 'les deux', alt: [], note: '' },
    'same time': { fr: 'en même temps', alt: [], note: 'AT' },
    'at the same time': { fr: 'en même temps', alt: [], note: '' },
    'at': { fr: 'en même temps', alt: [], note: 'At the same time' },
    'right side': { fr: 'endroit', alt: ['côté endroit'], note: 'RS' },
    'rs': { fr: 'end.', alt: ['endroit'], note: '' },
    'wrong side': { fr: 'envers', alt: ['côté envers'], note: 'WS' },
    'ws': { fr: 'env.', alt: ['envers'], note: '' },
    'next': { fr: 'suivant', alt: [], note: '' },
    'following': { fr: 'suivant(s)', alt: [], note: 'foll' },
    'foll': { fr: 'suiv.', alt: ['suivant'], note: '' },
    'previous': { fr: 'précédent', alt: [], note: '' },
    'through': { fr: 'à travers', alt: [], note: '' },
    'through back loop': { fr: 'par le brin arrière', alt: [], note: 'TBL' },
    'tbl': { fr: 'par le brin arrière', alt: [], note: '' },
    'into': { fr: 'dans', alt: [], note: '' },
    'together': { fr: 'ensemble', alt: [], note: 'tog' },
    'tog': { fr: 'ens.', alt: ['ensemble'], note: '' },
    'across': { fr: 'sur tout le rang', alt: [], note: '' },
    'between': { fr: 'entre', alt: [], note: '' },
    'evenly': { fr: 'régulièrement', alt: [], note: '' },
    'evenly spaced': { fr: 'répartis régulièrement', alt: [], note: '' },
    'place': { fr: 'placer', alt: [], note: '' },
    'hold': { fr: 'tenir', alt: [], note: '' },
    'work': { fr: 'tricoter', alt: [], note: '' },
    'work even': { fr: 'tricoter droit', alt: [], note: '' },
    'keeping in pattern': { fr: 'en continuant le motif', alt: [], note: '' },
    'as established': { fr: 'comme établi', alt: [], note: '' },
    'simultaneously': { fr: 'simultanément', alt: [], note: '' },
    'once': { fr: 'une fois', alt: [], note: '' },
    'twice': { fr: 'deux fois', alt: [], note: '' },
    'only': { fr: 'seulement', alt: [], note: '' },
    'then': { fr: 'puis', alt: ['ensuite'], note: '' },
    'until': { fr: 'jusqu\'à', alt: [], note: '' },
    'while': { fr: 'pendant que', alt: [], note: '' },
    'when': { fr: 'quand', alt: ['lorsque'], note: '' },
    'before': { fr: 'avant', alt: [], note: '' },
    'after': { fr: 'après', alt: [], note: '' },
    'from': { fr: 'depuis', alt: ['à partir de'], note: '' },
    'to': { fr: 'jusqu\'à', alt: [], note: '' },
    'or': { fr: 'ou', alt: [], note: '' },
    'and': { fr: 'et', alt: [], note: '' },
    'with': { fr: 'avec', alt: [], note: '' },
    'without': { fr: 'sans', alt: [], note: '' },
    'using': { fr: 'en utilisant', alt: [], note: '' },
    'make sure': { fr: 'veiller à', alt: ['s\'assurer que'], note: '' },
    'be careful': { fr: 'faire attention', alt: [], note: '' },
    'do not': { fr: 'ne pas', alt: [], note: '' },
    'optional': { fr: 'optionnel', alt: [], note: '' },
    'see': { fr: 'voir', alt: [], note: '' },
    'refer to': { fr: 'se référer à', alt: [], note: '' }
};

// Créer une version normalisée pour la recherche
const DICTIONARY_NORMALIZED = {};
for (const [key, value] of Object.entries(KNITTING_DICTIONARY)) {
    DICTIONARY_NORMALIZED[key.toLowerCase()] = { original: key, ...value };
}

/**
 * Traduit un terme technique
 * @param {string} term - Terme anglais
 * @returns {object|null} - Traduction ou null
 */
function translateTerm(term) {
    const normalized = term.toLowerCase().trim();
    return DICTIONARY_NORMALIZED[normalized] || null;
}

/**
 * Recherche des termes dans un texte et les traduit
 * @param {string} text - Texte à analyser
 * @returns {Array} - Liste des termes trouvés et traduits
 */
function findAndTranslateTerms(text) {
    const found = [];
    const textLower = text.toLowerCase();

    // Trier les clés par longueur décroissante pour matcher les termes longs d'abord
    const sortedKeys = Object.keys(DICTIONARY_NORMALIZED).sort((a, b) => b.length - a.length);

    for (const key of sortedKeys) {
        // Chercher le terme avec des limites de mot
        const regex = new RegExp(`\\b${escapeRegex(key)}\\b`, 'gi');
        let match;
        while ((match = regex.exec(textLower)) !== null) {
            found.push({
                original: match[0],
                position: match.index,
                translation: DICTIONARY_NORMALIZED[key]
            });
        }
    }

    // Trier par position
    found.sort((a, b) => a.position - b.position);

    // Supprimer les doublons qui se chevauchent
    const filtered = [];
    let lastEnd = -1;
    for (const item of found) {
        if (item.position >= lastEnd) {
            filtered.push(item);
            lastEnd = item.position + item.original.length;
        }
    }

    return filtered;
}

/**
 * Échappe les caractères spéciaux pour les regex
 */
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        KNITTING_DICTIONARY,
        DICTIONARY_NORMALIZED,
        translateTerm,
        findAndTranslateTerms
    };
}
