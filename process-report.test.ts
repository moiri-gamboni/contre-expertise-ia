import { fixEmphasis } from './process-report';

describe('Markdown Emphasis Fixing', () => {
  test('should fix real input 1', () => {
    expect(
      fixEmphasis(
        `    * Les _LLM _sont fondamentalement opaques [[53]](https://paperpile.com/c/V0trIA/d33wU). Les algorithmes menant d'une entrée à un résultat sont invisibles, même pour leurs créateurs.`,
      ),
    ).toBe(
        `    * Les _LLM_ sont fondamentalement opaques [[53]](https://paperpile.com/c/V0trIA/d33wU). Les algorithmes menant d'une entrée à un résultat sont invisibles, même pour leurs créateurs.`,
    )
  });

  test('should fix real input 2', () => {
    expect(
      fixEmphasis(
        `    * Les _LLM _ne sont pas "programmés" au sens traditionnel, mais plutôt "cultivés" à travers un processus d'entraînement sur d'énormes quantités de données. Contrairement à un logiciel classique où chaque fonction est explicitement codée, les comportements d'un _LLM _émergent de manière complexe et imprévisible à partir de son apprentissage.`,
      ),
    ).toBe(
        `    * Les _LLM_ ne sont pas "programmés" au sens traditionnel, mais plutôt "cultivés" à travers un processus d'entraînement sur d'énormes quantités de données. Contrairement à un logiciel classique où chaque fonction est explicitement codée, les comportements d'un _LLM_ émergent de manière complexe et imprévisible à partir de son apprentissage.`,
    )
  });

  test('should fix real input 3', () => {
    expect(
      fixEmphasis(
        `    * Les expériences du passé éclairent peu sur les capacités futures de ces systèmes. Il est, d'une part, difficile d'anticiper quelles capacités émergentes vont survenir lors des prochaines générations de modèles. D'autre part, la continuité des _scaling laws [[62]](https://paperpile.com/c/V0trIA/3HmY)_, les lois prédisant l'amélioration des _LLMs _en fonction de leur taille et de la quantité de calcul investie pour leur entraînement, fiable jusqu'à présent, doit plutôt nous faire anticiper une amélioration des capacités des modèles plutôt qu'une stagnation [[63]](https://paperpile.com/c/V0trIA/fObp).`,
      ),
    ).toBe(
        `    * Les expériences du passé éclairent peu sur les capacités futures de ces systèmes. Il est, d'une part, difficile d'anticiper quelles capacités émergentes vont survenir lors des prochaines générations de modèles. D'autre part, la continuité des _scaling laws [[62]](https://paperpile.com/c/V0trIA/3HmY)_, les lois prédisant l'amélioration des _LLMs_ en fonction de leur taille et de la quantité de calcul investie pour leur entraînement, fiable jusqu'à présent, doit plutôt nous faire anticiper une amélioration des capacités des modèles plutôt qu'une stagnation [[63]](https://paperpile.com/c/V0trIA/fObp).`,
    )
  });

  test('should fix real input 4', () => {
    expect(
      fixEmphasis(
        `* Les _LLM _ont tendance à mémoriser une grande partie des données sur lesquelles ils sont entraînés. Ces informations se retrouvent encodées dans les milliards de paramètres du modèle.`,
      ),
    ).toBe(
        `* Les _LLM_ ont tendance à mémoriser une grande partie des données sur lesquelles ils sont entraînés. Ces informations se retrouvent encodées dans les milliards de paramètres du modèle.`,
    )
  });

  test('should fix real input 5', () => {
    expect(
      fixEmphasis(
        `1. **Le _Gladstone Report _**[[93]](https://paperpile.com/c/V0trIA/i9pT)** **: Commandé par le Département d'État américain, ce rapport offre une évaluation approfondie des risques liés à l'IA avancée. Il se distingue par son analyse détaillée des risques catastrophiques et propose un plan d'action gouvernemental inédit, structuré autour de cinq axes d'effort.`,
      ),
    ).toBe(
        `1. **Le _Gladstone Report_**[[93]](https://paperpile.com/c/V0trIA/i9pT)** **: Commandé par le Département d'État américain, ce rapport offre une évaluation approfondie des risques liés à l'IA avancée. Il se distingue par son analyse détaillée des risques catastrophiques et propose un plan d'action gouvernemental inédit, structuré autour de cinq axes d'effort.`,
    )
  });

  test('should fix real input 6', () => {
    expect(
      fixEmphasis(
        `3. **La loi européenne sur l’IA_ [[94]](https://paperpile.com/c/V0trIA/qEt2) _**: C'est la première réglementation complète sur l'intelligence artificielle proposée par un régulateur majeur. Initié par la Commission européenne, cet acte législatif vise à établir un cadre juridique pour le développement et l'utilisation de l'IA au sein de l'Union européenne. Il adopte une approche basée sur les risques, catégorisant les applications d'IA selon leur niveau de danger potentiel.`,
      ),
    ).toBe(
        `3. **La loi européenne sur l’IA _[[94]](https://paperpile.com/c/V0trIA/qEt2)_**: C'est la première réglementation complète sur l'intelligence artificielle proposée par un régulateur majeur. Initié par la Commission européenne, cet acte législatif vise à établir un cadre juridique pour le développement et l'utilisation de l'IA au sein de l'Union européenne. Il adopte une approche basée sur les risques, catégorisant les applications d'IA selon leur niveau de danger potentiel.`,
    )
  });

  test('should fix real input 7', () => {
    expect(
      fixEmphasis(
        `Les deux rapports (_Gladstone Report _et _ISR_) abordent en profondeur de nombreux risques fondamentaux. Ils font appel à de nombreux spécialistes et à une littérature abondante, évaluent les arguments pour et contre différents scénarios, et **expriment leurs conclusions en partageant leurs degrés d'incertitude**. Les deux textes législatifs (loi européenne sur l’IA_ _et _Executive Order_), quant à eux, font un effort d'anticipation des risques très important tout en cherchant à respecter la libre entreprise.`,
      ),
    ).toBe(
        `Les deux rapports (_Gladstone Report_ et _ISR_) abordent en profondeur de nombreux risques fondamentaux. Ils font appel à de nombreux spécialistes et à une littérature abondante, évaluent les arguments pour et contre différents scénarios, et **expriment leurs conclusions en partageant leurs degrés d'incertitude**. Les deux textes législatifs (loi européenne sur l’IA et _Executive Order_), quant à eux, font un effort d'anticipation des risques très important tout en cherchant à respecter la libre entreprise.`,
    )
  });

  test('should fix real input 8', () => {
    expect(
      fixEmphasis(
        `Le  _Gladstone report (p. 24 et 36-37) _et _l'ISR (section 4.2.3)_, examinent sérieusement la possibilité de perdre le contrôle d'IAs de niveau humain ou supérieur tandis que la loi européenne sur l’IA (chapitre 3) et l'_Executive Order_ américain proposent des mesures concrètes pour évaluer ces risques et contrôler le développement des modèles.`,
      ),
    ).toBe(
        `Le  _Gladstone report (p. 24 et 36-37)_ et _l'ISR (section 4.2.3)_, examinent sérieusement la possibilité de perdre le contrôle d'IAs de niveau humain ou supérieur tandis que la loi européenne sur l’IA (chapitre 3) et l'_Executive Order_ américain proposent des mesures concrètes pour évaluer ces risques et contrôler le développement des modèles.`,
    )
  });

  test('should fix real input 9', () => {
    expect(
      fixEmphasis(
        `Le _Gladstone report (p. 21) _et _l'ISR (section 4.1.4) _décrivent des scénarios où un modèle de fondation futur serait utilisé pour transmettre des informations critiques dans la fabrication d'armes biologiques, voire d'automatiser leur production. Les risques de facilitation des cyberattaques sont également reconnus par l'_ISR_, qui reste serein concernant les modèles publiés au moment de la rédaction du rapport (4.1.3). Le _Gladstone report_ prend ce risque au sérieux (ex. p. 24) et recommande la création d'institutions surveillant ces capacités, comme un Observatoire de l'IA (p. 51). La loi européenne sur l’IA classe ces modèles comme présentant des "risques systémiques" (_Recital_ 110) et exige des contrôles stricts. L'Executive Order reconnaît ces dangers et propose des mesures pour les évaluer et les atténuer.`,
      ),
    ).toBe(
        `Le _Gladstone report (p. 21)_ et _l'ISR (section 4.1.4)_ décrivent des scénarios où un modèle de fondation futur serait utilisé pour transmettre des informations critiques dans la fabrication d'armes biologiques, voire d'automatiser leur production. Les risques de facilitation des cyberattaques sont également reconnus par l'_ISR_, qui reste serein concernant les modèles publiés au moment de la rédaction du rapport (4.1.3). Le _Gladstone report_ prend ce risque au sérieux (ex. p. 24) et recommande la création d'institutions surveillant ces capacités, comme un Observatoire de l'IA (p. 51). La loi européenne sur l’IA classe ces modèles comme présentant des "risques systémiques" (_Recital_ 110) et exige des contrôles stricts. L'Executive Order reconnaît ces dangers et propose des mesures pour les évaluer et les atténuer.`,
    )
  });

  test('should fix real input 10', () => {
    expect(
      fixEmphasis(
        `L'_ISR_ reconnaît les risques liés aux _deepfakes _et à la désinformation (p. 41-43), précisant qu'aucune technique robuste n'existe pour les prévenir (p. 76, 77, 82, 83). Le _Gladstone report _souligne l'inquiétude des chercheurs concernant la manipulation de l'opinion publique (p. 35, 43, Annexe F), et propose des systèmes de détection en amont (p. 273). La loi européenne sur l’IA interdit le déploiement de modèles d'IAs utilisant des techniques de désinformation et reconnaît les risques liés aux _deepfakes _(_Recitals_ 132 et 133).`,
      ),
    ).toBe(
        `L'_ISR_ reconnaît les risques liés aux _deepfakes_ et à la désinformation (p. 41-43), précisant qu'aucune technique robuste n'existe pour les prévenir (p. 76, 77, 82, 83). Le _Gladstone report_ souligne l'inquiétude des chercheurs concernant la manipulation de l'opinion publique (p. 35, 43, Annexe F), et propose des systèmes de détection en amont (p. 273). La loi européenne sur l’IA interdit le déploiement de modèles d'IAs utilisant des techniques de désinformation et reconnaît les risques liés aux _deepfakes_ (_Recitals_ 132 et 133).`,
    )
  });

  test('should fix real input 11', () => {
    expect(
      fixEmphasis(
        `* La création et la mise à disposition du public de capacités de création d'armes autonomes (_Gladstone report_ p. 84, _ISR _p.12, 16)`,
      ),
    ).toBe(
        `* La création et la mise à disposition du public de capacités de création d'armes autonomes (_Gladstone report_ p. 84, _ISR_ p.12, 16)`,
    )
  });

  test('should fix real input 12', () => {
    expect(
      fixEmphasis(
        `Le _Gladstone report _préconise la mise en place d'une Agence Internationale de l'IA et un contrôle international sur la chaîne d'approvisionnement globale de l'IA (p.19). La loi européenne sur l’IA_ _(chapitre III et IX)_ _et l'_Executive Order_ recommandent la mise en place de régulations et de systèmes de vérification des données d'entraînement et du comportement des modèles.`,
      ),
    ).toBe(
        `Le _Gladstone report_ préconise la mise en place d'une Agence Internationale de l'IA et un contrôle international sur la chaîne d'approvisionnement globale de l'IA (p.19). La loi européenne sur l’IA (chapitre III et IX) et l'_Executive Order_ recommandent la mise en place de régulations et de systèmes de vérification des données d'entraînement et du comportement des modèles.`,
    )
  });

  test('should fix real input 13', () => {
    expect(
      fixEmphasis(
        `L'influence de LeCun s'étend bien au-delà du monde académique. Avec plus de 800 000 _followers _sur Twitter [[105]](https://paperpile.com/c/V0trIA/KG7rp) et 782 000 sur LinkedIn [[106]](https://paperpile.com/c/V0trIA/PzRyk), il est une voix prédominante dans le débat public sur l'IA. Sa présence médiatique est considérable, avec des centaines d'apparitions et mentions dans les médias en 2023. Cette influence a été reconnue par le magazine TIME, qui l'a inclus dans sa liste "Time 100 AI" [[107]](https://paperpile.com/c/V0trIA/4WMYq) des personnes les plus influentes dans le monde de l'IA. Son rayonnement atteint les sphères politiques et économiques les plus élevées, comme en témoignent ses rencontres avec le Président Emmanuel Macron [[108]](https://paperpile.com/c/V0trIA/8FO1b) et sa participation au Forum économique mondial de Davos [[109]](https://paperpile.com/c/V0trIA/xA2H1). Cette stature exceptionnelle dans les milieux scientifiques, médiatiques et politiques suggère que les opinions de LeCun pourraient avoir un poids significatif au sein de la Commission.`,
      ),
    ).toBe(
        `L'influence de LeCun s'étend bien au-delà du monde académique. Avec plus de 800 000 _followers_ sur Twitter [[105]](https://paperpile.com/c/V0trIA/KG7rp) et 782 000 sur LinkedIn [[106]](https://paperpile.com/c/V0trIA/PzRyk), il est une voix prédominante dans le débat public sur l'IA. Sa présence médiatique est considérable, avec des centaines d'apparitions et mentions dans les médias en 2023. Cette influence a été reconnue par le magazine TIME, qui l'a inclus dans sa liste "Time 100 AI" [[107]](https://paperpile.com/c/V0trIA/4WMYq) des personnes les plus influentes dans le monde de l'IA. Son rayonnement atteint les sphères politiques et économiques les plus élevées, comme en témoignent ses rencontres avec le Président Emmanuel Macron [[108]](https://paperpile.com/c/V0trIA/8FO1b) et sa participation au Forum économique mondial de Davos [[109]](https://paperpile.com/c/V0trIA/xA2H1). Cette stature exceptionnelle dans les milieux scientifiques, médiatiques et politiques suggère que les opinions de LeCun pourraient avoir un poids significatif au sein de la Commission.`,
    )
  });

  test('should fix real input 14', () => {
    expect(
      fixEmphasis(
        `Les _LLM _(_Large Language Model _- Grand modèle de langage)_ _sont entraînés à prédire l'élément suivant dans un texte en fonction d’un contexte, utilisant des estimations probabilistes pour générer du contenu cohérent. Cet entraînement produit une matrice vectorielle gigantesque, contenant toutes les relations observées entre les tokens (séries de caractères) sur lesquels le modèle est entraîné. Ces tokens, générés par un autre modèle d’intelligence artificielle, peuvent être des mots, des portions de mots ou des phrases.`,
      ),
    ).toBe(
        `Les _LLM_ (_Large Language Model_ - Grand modèle de langage) sont entraînés à prédire l'élément suivant dans un texte en fonction d’un contexte, utilisant des estimations probabilistes pour générer du contenu cohérent. Cet entraînement produit une matrice vectorielle gigantesque, contenant toutes les relations observées entre les tokens (séries de caractères) sur lesquels le modèle est entraîné. Ces tokens, générés par un autre modèle d’intelligence artificielle, peuvent être des mots, des portions de mots ou des phrases.`,
    )
  });

  test('should fix real input 15', () => {
    expect(
      fixEmphasis(
        `Les _LLM_ sont particuliers car ils sont entraînés sur le langage humain, qui contient de nombreuses connaissances et modélisations du monde. Cela leur permet de développer des capacités de compréhension générale bien plus étendues que les modèles spécialisés en classification d’images ou reconnaissance d’objets. Cette compréhension du monde, et le fait qu’il soit possible de spécialiser des _LLM _par « réglage fin » (_fine tuning_) sur des données plus restreintes, conduit à les utiliser comme « modèles de fondation » à la base de toutes sortes d’applications spécialisées.`,
      ),
    ).toBe(
        `Les _LLM_ sont particuliers car ils sont entraînés sur le langage humain, qui contient de nombreuses connaissances et modélisations du monde. Cela leur permet de développer des capacités de compréhension générale bien plus étendues que les modèles spécialisés en classification d’images ou reconnaissance d’objets. Cette compréhension du monde, et le fait qu’il soit possible de spécialiser des _LLM_ par « réglage fin » (_fine tuning_) sur des données plus restreintes, conduit à les utiliser comme « modèles de fondation » à la base de toutes sortes d’applications spécialisées.`
    )
  });

  test('should fix real input 16', () => {
    expect(
      fixEmphasis(
        `Le _scaffolding _des modèles multimodaux sera un élément clé des systèmes destinés à améliorer leurs compétences. Enfin, les paradigmes précédents de l’histoire l'IA ne sont pas oubliés et un effort important est fourni pour tenter de les appliquer aux modèles actuels, produisant des phénomènes de "cross-pollinisation" pouvant déboucher rapidement sur la création de superintelligences.`,
      ),
    ).toBe(
        `Le _scaffolding_ des modèles multimodaux sera un élément clé des systèmes destinés à améliorer leurs compétences. Enfin, les paradigmes précédents de l’histoire l'IA ne sont pas oubliés et un effort important est fourni pour tenter de les appliquer aux modèles actuels, produisant des phénomènes de "cross-pollinisation" pouvant déboucher rapidement sur la création de superintelligences.`,
    )
  });

  test('should fix real input 17', () => {
    expect(
      fixEmphasis(
        `* **Création artistique : **Sans citer aucune source ni référence, le rapport affirme que “L'IA ne met pas en danger l'originalité de la création”. Cette déclaration ignore les rapports alarmants qui émergent sur l'impact de l'IA dans le domaine artistique, et occulte les transformations profondes qu’elle impose dès aujourd’hui à ce secteur.`,
      ),
    ).toBe(
        `* **Création artistique :** Sans citer aucune source ni référence, le rapport affirme que “L'IA ne met pas en danger l'originalité de la création”. Cette déclaration ignore les rapports alarmants qui émergent sur l'impact de l'IA dans le domaine artistique, et occulte les transformations profondes qu’elle impose dès aujourd’hui à ce secteur.`,
    )
  });

  test('should fix real input 18', () => {
    expect(
      fixEmphasis(
        `* **Absence d'anticipation : **Le rapport évalue systématiquement les risques en se basant uniquement sur les capacités passées des IA, supposant implicitement un arrêt soudain du progrès technologique. Cette approche amplifie tous les problèmes précédents : les risques déjà sous-estimés pour l'emploi, la cybersécurité et la création artistique sont décuplés si l'on considère l'évolution rapide et continue des capacités de l'IA.`,
      ),
    ).toBe(
        `* **Absence d'anticipation :** Le rapport évalue systématiquement les risques en se basant uniquement sur les capacités passées des IA, supposant implicitement un arrêt soudain du progrès technologique. Cette approche amplifie tous les problèmes précédents : les risques déjà sous-estimés pour l'emploi, la cybersécurité et la création artistique sont décuplés si l'on considère l'évolution rapide et continue des capacités de l'IA.`,
    )
  });

  test('should fix real input 19', () => {
    expect(
      fixEmphasis(
        `Ces manquements s'expliquent en grande partie par la composition même de la Commission, marquée par **des conflits d'intérêts majeurs** et un **manque de diversité d'opinions et d'expertises. **La Commission ne compte aucun expert en sécurité de l'IA et est dominée par des représentants de l'industrie favorables à, et favorisés par, un développement accéléré et peu régulé de l'IA.`,
      ),
    ).toBe(
        `Ces manquements s'expliquent en grande partie par la composition même de la Commission, marquée par **des conflits d'intérêts majeurs** et un **manque de diversité d'opinions et d'expertises.** La Commission ne compte aucun expert en sécurité de l'IA et est dominée par des représentants de l'industrie favorables à, et favorisés par, un développement accéléré et peu régulé de l'IA.`,
    )
  });

  test('should fix real input 20', () => {
    expect(
      fixEmphasis(
        `L'accueil par la France du Sommet pour l'action sur l'IA début 2025 offre l'occasion de prendre une position de leadership sur les enjeux de sécurité de l'IA.** Ces enjeux ne représentent rien de moins que l'avenir de notre société et, potentiellement, de l'humanité elle-même.** Il est impératif que la France prenne la mesure réelle des défis et des dangers que pose cette technologie, et agisse en conséquence. `,
      ),
    ).toBe(
        `L'accueil par la France du Sommet pour l'action sur l'IA début 2025 offre l'occasion de prendre une position de leadership sur les enjeux de sécurité de l'IA. **Ces enjeux ne représentent rien de moins que l'avenir de notre société et, potentiellement, de l'humanité elle-même.** Il est impératif que la France prenne la mesure réelle des défis et des dangers que pose cette technologie, et agisse en conséquence. `,
    )
  });

  test('should fix real input 21', () => {
    expect(
      fixEmphasis(
        `1. **Validation : **L'expert confirme l'exactitude et la pertinence de l'analyse présentée. Cette validation peut s'appliquer à l'ensemble du document ou à des sections spécifiques relevant de l'expertise de l'expert.`,
      ),
    ).toBe(
        `1. **Validation :** L'expert confirme l'exactitude et la pertinence de l'analyse présentée. Cette validation peut s'appliquer à l'ensemble du document ou à des sections spécifiques relevant de l'expertise de l'expert.`,
    )
  });

  test('should fix real input 22', () => {
    expect(
      fixEmphasis(
        `**Hypothèse erronée d'un arrêt du progrès technologique. **`,
      ),
    ).toBe(
        `**Hypothèse erronée d'un arrêt du progrès technologique.**`)
  });

  test('should fix real input 23', () => {
    expect(
      fixEmphasis(
        `2. **L’_International Scientific Report on the Safety of Advanced AI_ (_ISR_) **[[84]](https://paperpile.com/c/V0trIA/C2ny) : Cette initiative scientifique mondiale réunit des experts de 30 pays, de l'UE et de l'ONU. Ce rapport intérimaire se concentre sur les systèmes d'IA à usage général, comme les grands modèles de langage. Il examine en profondeur les capacités actuelles et futures de l'IA, les méthodologies d'évaluation, les risques potentiels et les approches techniques pour les atténuer.`,
      ),
    ).toBe(
        `2. **L’_International Scientific Report on the Safety of Advanced AI_ (_ISR_)** [[84]](https://paperpile.com/c/V0trIA/C2ny) : Cette initiative scientifique mondiale réunit des experts de 30 pays, de l'UE et de l'ONU. Ce rapport intérimaire se concentre sur les systèmes d'IA à usage général, comme les grands modèles de langage. Il examine en profondeur les capacités actuelles et futures de l'IA, les méthodologies d'évaluation, les risques potentiels et les approches techniques pour les atténuer.`,
    )
  });

  test('should fix real input 24', () => {
    expect(
      fixEmphasis(
        `4. **L'_Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence_ (_Executive Order_) **américain sur l'IA [[95]](https://paperpile.com/c/V0trIA/wgii) : Signé par le président Joe Biden, ce décret exhaustif couvre un large éventail de domaines, de la sécurité nationale à la protection des consommateurs. Il établit des principes directeurs pour le développement responsable de l'IA, impose de nouvelles exigences aux entreprises développant des systèmes d'IA puissants, et mandate de nombreuses actions spécifiques des agences fédérales.`,
      ),
    ).toBe(
        `4. **L'_Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence_ (_Executive Order_)** américain sur l'IA [[95]](https://paperpile.com/c/V0trIA/wgii) : Signé par le président Joe Biden, ce décret exhaustif couvre un large éventail de domaines, de la sécurité nationale à la protection des consommateurs. Il établit des principes directeurs pour le développement responsable de l'IA, impose de nouvelles exigences aux entreprises développant des systèmes d'IA puissants, et mandate de nombreuses actions spécifiques des agences fédérales.`,
    )
  });

  test('should fix real input 25', () => {
    expect(
      fixEmphasis(
        `1. **Lobbying de Cédric O : **L'ancien secrétaire d'État au Numérique, devenu conseiller de Mistral AI, a été accusé de conflit d'intérêt dans son opposition à la loi européenne sur l’IA.`,
      ),
    ).toBe(
        `1. **Lobbying de Cédric O :** L'ancien secrétaire d'État au Numérique, devenu conseiller de Mistral AI, a été accusé de conflit d'intérêt dans son opposition à la loi européenne sur l’IA.`,
    )
  });

  test('should fix real input 26', () => {
    expect(
      fixEmphasis(
        `1. **Validation : **L'expert confirme l'exactitude et la pertinence de l'analyse présentée pour l'ensemble du document ou pour des sections spécifiques.`,
      ),
    ).toBe(
        `1. **Validation :** L'expert confirme l'exactitude et la pertinence de l'analyse présentée pour l'ensemble du document ou pour des sections spécifiques.`,
    )
  });

  test('should fix real input 27', () => {
    expect(
      fixEmphasis(
      `**Joëlle Barral \\\n**Voir section 4.2.4)`
    ),
    ).toBe(
      `**Joëlle Barral**\nVoir section 4.2.4)`,
    )
  });
});
