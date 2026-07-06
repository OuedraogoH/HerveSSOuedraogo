/* ============================================================
   Hervé Ouédraogo — site behaviour & bilingual dictionary
   ============================================================ */
const I18N = {
  en:{
    skip:"Skip to content",
    nav_about:"About", nav_moments:"Moments", nav_focus:"Focus", nav_journey:"Journey",
    nav_impact:"Impact", nav_life:"Life", nav_pubs:"Publications", nav_contact:"Contact",

    hero_eyebrow:"Food and Agriculture Organization · Africa",
    hero_h1a:"Strengthening results, partnerships and",
    hero_h1b:"agrifood systems transformation", hero_h1c:"across Africa.",
    hero_sub:"Regional Programme Officer, FAO Regional Office for Africa — over 20 years in international development.",
    hero_cta1:"View curriculum vitae", hero_cta2:"Get in touch",
    hero_m2:"FAO Regional Office for Africa", hero_m3:"bilingual, pan-African focus", badge:"Regional Programme Officer",

    about_eyebrow:"About",
    about_h2:"A practitioner shaped by the field, the region and the system.",
    about_p1:"Hervé Ouédraogo is an accomplished development practitioner and leader with over 20 years of experience, including 14 years within the United Nations system. He has worked at country, subregional, regional and headquarters levels, as well as across the private sector, international financial institutions, academia and governments.",
    about_p2:"At the Food and Agriculture Organization of the United Nations (FAO), he leads the preparation and implementation of strategic instruments — Common Country Analysis (CCA), United Nations Sustainable Development Cooperation Frameworks (UNSDCF), Country Programming Frameworks (CPF) and UN INFO — and programmes for the Africa region. He advises on and oversees the allocation and management of an annual programme budget of USD 50 million, leading a team of more than 60 personnel across multiple countries.",
    about_quote:"Results are not paperwork — they are the promise we make to the people we serve, kept and measured.",
    about_p3:"His expertise spans strategic planning, resource mobilization and systems-based practice to enable agrifood systems transformation, with particular attention to climate change, natural resource management and the partnerships that turn ambition into delivery.",
    glance_title:"At a glance",
    glance_1:"years in international development",
    glance_2:"annual regional programme budget advised",
    glance_3:"personnel led across multiple countries",
    glance_4:"languages spoken",

    moments_eyebrow:"Moments",
    moments_h2:"In the field, at the table, across the region.",
    moments_sub:"A selection of recent engagements — convening partners, addressing governing bodies and supporting FAO country offices.",
    cap_ticad:"Speaking at the Hand-in-Hand Initiative event, TICAD9, Yokohama, 2025.",
    cap_rabat:"Addressing the 33rd FAO Regional Conference for Africa, Rabat, 2024.",
    cap_harare:"Capacity-development workshop with country offices, Harare, 2025.",
    cap_rome:"With colleagues at FAO headquarters, Rome.",
    cap_som:"At the Senior Officers’ Meeting, FAO Regional Conference for Africa.",
    cap_capacity:"Exchanging on capacity building and global outreach.",
    cap_agritech:"Exploring agricultural technology and innovation.",
    cap_office:"At work, FAO Regional Office for Africa, Accra.",

    focus_eyebrow:"Focus areas",
    focus_h2:"Where the work concentrates.",
    focus_p:"From results frameworks to financing, a set of interlocking competencies built across two decades.",
    f1_t:"Results-based management", f1_d:"Corporate monitoring, evaluation and reporting that connect activities to measurable outcomes.",
    f2_t:"Strategic planning", f2_d:"CCA, UNSDCF, CPF and UN INFO — the instruments that align FAO with national priorities.",
    f3_t:"Agrifood systems transformation", f3_d:"Programmes addressing climate change, natural resource management and food security.",
    f4_t:"Resource mobilization", f4_d:"Positioning within the donor community and structuring partnerships with resource partners and IFIs.",
    f5_t:"Hand-in-Hand Initiative", f5_d:"Regional Focal Point for Francophone countries, supporting investment and finance planning.",
    f6_t:"Digital transformation", f6_d:"Driving the SCOPE initiative and data-driven delivery within country programming.",
    f7_t:"Capacity development", f7_d:"Theory of change, project cycle management and the mentoring of country-level teams.",
    f8_t:"Partnerships & coordination", f8_d:"Inter-agency collaboration across the United Nations system and with regional bodies.",

    journey_eyebrow:"Career journey",
    journey_h2:"Two decades, four continents of collaboration.",
    present:"present",
    j1_t:"Regional Programme Officer (Results Management)", j1_o:"FAO Regional Office for Africa (RAF), Accra",
    j1_d:"Co-leads strategic development and advises on a USD 50 million annual programme budget; Regional Focal Point for the Hand-in-Hand Initiative (Francophone countries).",
    j2_t:"Regional Monitoring and Evaluation Officer for Africa", j2_o:"FAO Regional Office for Africa (RAF)",
    j2_d:"Backstopped 47 country offices and four subregional offices; positioned FAO with donors, supporting USD 55 million in mobilized resources.",
    j3_t:"Subregional Monitoring and Evaluation Officer", j3_o:"FAO Subregional Office for Eastern Africa (SFE)",
    j3_d:"Established monitoring and evaluation frameworks for eight countries and mobilized USD 4 million for subregional projects.",
    j4_t:"Junior Professional Officer", j4_o:"FAO Headquarters, Rome",
    j4_d:"Supported emergency prevention systems and inter-agency early-warning and food-security assessment missions.",
    j5_t:"Lecturer in Project Management", j5_o:"Université de Ouagadougou (IGEDD)",
    j5_d:"Delivered graduate courses on project cycle management, results-based management and theory of change.",
    j6_t:"Earlier roles — evaluation & development", j6_o:"JICA · UNDP/GEF · USAID/RTI International · CNRST · UNEP/GEF/ICRISAT",
    j6_d:"Economist, evaluation team leader and monitoring officer across bilateral, multilateral and research institutions.",

    impact_eyebrow:"Impact & recognition",
    impact_h2:"Scale, measured in outcomes.",
    s1:"Annual regional programme budget advised and overseen.",
    s2:"Resources mobilized through donor negotiations (2015–2017).",
    s3:"People reached by a health programme he managed logistics and M&E for.",
    s4:"Health agents and officials trained across national campaigns.",
    honours_title:"Selected honours",
    h1:"FAO Best Team of the Year — multiple awards (2020, 2022, 2023, 2025)",
    h2:"FAO Employee of the Year, top 100 worldwide (2020 and 2021)",
    h3:"Top 200 FAO Employees worldwide (2019)",
    h4:"FAO Highly Talented Junior Professional Programme (2011)",

    insights_eyebrow:"Insights & speaking",
    insights_h2:"Sharing what the work teaches.",
    insights_t:"Articles, talks and statements",
    insights_p:"A space for reflections on results management, agrifood systems and country programming. New pieces and speaking engagements will appear here.",
    insights_cta:"Invite Hervé to speak",

    life_eyebrow:"Beyond work",
    life_h2:"Keeping perspective — and passing it on.",
    life_lede:"Time with my family keeps the work in perspective. I make a point of <em>introducing my children to nature</em> — the wildlife, the land and the animals at the heart of the agrifood systems I work on every day.",
    cap_nature:"Watching wildlife together on a forest walk.",
    cap_golf:"On the green together.", cap_sunset:"A quiet moment by the ocean.",

    pubs_eyebrow:"Publications",
    pubs_h2:"Selected peer-reviewed and applied research.",
    p1_t:"Efficiency of onion and potato producers in the Saïs region, Morocco.", p1_s:"Agronomie Africaine, Vol. 20, No. 3 (2008).",
    p2_t:"Determinants of households’ fish demand in Burkina Faso.", p2_s:"Tropicultura (Belgium, 2008).",
    p3_t:"Technical audit of the AfDB-funded PADAZ agricultural project, Niger.", p3_s:"(2008).",
    p4_t:"Monograph of agriculture and value chains in West Africa: the case of Burkina Faso.", p4_s:"CMA/AOC, Ouagadougou (2007).",
    p5_t:"Impact assessment of FAO’s Farmer Field School methodology for Integrated Pest Management.", p5_s:"with the University of Hannover (2005).",

    contact_eyebrow:"Contact",
    contact_h2:"Let’s start a conversation.",
    contact_intro:"For partnership, speaking or advisory enquiries, the most reliable way to reach me is by email or LinkedIn.",
    email:"Email Hervé", linkedin:"Connect on LinkedIn", contact_cv:"Read the full CV",
    form_name:"Name", form_email:"Email", form_msg:"Message", form_send:"Send message",

    disclaimer:"This is a personal website. The views expressed are those of Hervé Ouédraogo in his personal capacity and do not necessarily reflect the views or policies of the Food and Agriculture Organization of the United Nations or the United Nations.",
    foot_rights:"All rights reserved."
  },
  fr:{
    skip:"Aller au contenu",
    nav_about:"À propos", nav_moments:"Moments", nav_focus:"Domaines", nav_journey:"Parcours",
    nav_impact:"Impact", nav_life:"Équilibre", nav_pubs:"Publications", nav_contact:"Contact",

    hero_eyebrow:"Organisation des Nations Unies pour l’alimentation et l’agriculture · Afrique",
    hero_h1a:"Renforcer les résultats, les partenariats et la",
    hero_h1b:"transformation des systèmes agroalimentaires", hero_h1c:"à travers l’Afrique.",
    hero_sub:"Fonctionnaire régional chargé des programmes, Bureau régional de la FAO pour l’Afrique — plus de 20 ans dans le développement international.",
    hero_cta1:"Consulter le CV", hero_cta2:"Me contacter",
    hero_m2:"Bureau régional de la FAO pour l’Afrique", hero_m3:"bilingue, optique panafricaine", badge:"Fonctionnaire régional chargé des programmes",

    about_eyebrow:"À propos",
    about_h2:"Un praticien façonné par le terrain, la région et le système.",
    about_p1:"Hervé Ouédraogo est un praticien et responsable du développement chevronné, fort de plus de 20 ans d’expérience, dont 14 ans au sein du système des Nations Unies. Il a exercé aux niveaux national, sous-régional, régional et au siège, ainsi qu’auprès du secteur privé, des institutions financières internationales, du monde académique et des gouvernements.",
    about_p2:"À l’Organisation des Nations Unies pour l’alimentation et l’agriculture (FAO), il dirige l’élaboration et la mise en œuvre d’instruments stratégiques — bilan commun de pays (CCA), cadres de coopération des Nations Unies pour le développement durable (UNSDCF), cadres de programmation par pays (CPF) et UN INFO — ainsi que des programmes pour la région Afrique. Il conseille et supervise l’allocation et la gestion d’un budget-programme annuel de 50 millions d’USD et encadre une équipe de plus de 60 personnes dans plusieurs pays.",
    about_quote:"Les résultats ne sont pas de la paperasse : ils sont la promesse faite aux populations que nous servons, tenue et mesurée.",
    about_p3:"Son expertise couvre la planification stratégique, la mobilisation de ressources et l’approche systémique au service de la transformation des systèmes agroalimentaires, avec une attention particulière au changement climatique, à la gestion des ressources naturelles et aux partenariats qui transforment l’ambition en résultats.",
    glance_title:"En bref",
    glance_1:"années dans le développement international",
    glance_2:"budget-programme régional annuel suivi",
    glance_3:"personnes encadrées dans plusieurs pays",
    glance_4:"langues parlées",

    moments_eyebrow:"Moments",
    moments_h2:"Sur le terrain, à la table, à travers la région.",
    moments_sub:"Une sélection d’engagements récents — réunir les partenaires, intervenir devant les organes directeurs et appuyer les bureaux de pays de la FAO.",
    cap_ticad:"Intervention lors d’un événement de l’Initiative Main dans la main, TICAD9, Yokohama, 2025.",
    cap_rabat:"Allocution à la 33ᵉ Conférence régionale de la FAO pour l’Afrique, Rabat, 2024.",
    cap_harare:"Atelier de développement des capacités avec les bureaux de pays, Harare, 2025.",
    cap_rome:"Avec des collègues au siège de la FAO, Rome.",
    cap_som:"Réunion des hauts responsables, Conférence régionale de la FAO pour l’Afrique.",
    cap_capacity:"Échanges sur le développement des capacités et la sensibilisation mondiale.",
    cap_agritech:"À la découverte des technologies et de l’innovation agricoles.",
    cap_office:"Au travail, Bureau régional de la FAO pour l’Afrique, Accra.",

    focus_eyebrow:"Domaines d’expertise",
    focus_h2:"Là où le travail se concentre.",
    focus_p:"Des cadres de résultats au financement, un ensemble de compétences imbriquées, bâties sur deux décennies.",
    f1_t:"Gestion axée sur les résultats", f1_d:"Suivi, évaluation et rapports institutionnels reliant les activités à des résultats mesurables.",
    f2_t:"Planification stratégique", f2_d:"CCA, UNSDCF, CPF et UN INFO — les instruments qui alignent la FAO sur les priorités nationales.",
    f3_t:"Transformation des systèmes agroalimentaires", f3_d:"Des programmes traitant du changement climatique, de la gestion des ressources naturelles et de la sécurité alimentaire.",
    f4_t:"Mobilisation de ressources", f4_d:"Positionnement auprès des donateurs et structuration de partenariats avec les partenaires financiers et les IFI.",
    f5_t:"Initiative Main dans la main", f5_d:"Point focal régional pour les pays francophones, en appui à la planification des investissements et du financement.",
    f6_t:"Transformation numérique", f6_d:"Animation de l’initiative SCOPE et d’une mise en œuvre fondée sur les données dans la programmation-pays.",
    f7_t:"Développement des capacités", f7_d:"Théorie du changement, gestion du cycle de projet et accompagnement des équipes de pays.",
    f8_t:"Partenariats et coordination", f8_d:"Collaboration interinstitutions au sein du système des Nations Unies et avec les organismes régionaux.",

    journey_eyebrow:"Parcours professionnel",
    journey_h2:"Deux décennies, quatre continents de collaboration.",
    present:"aujourd’hui",
    j1_t:"Fonctionnaire régional chargé des programmes (gestion des résultats)", j1_o:"Bureau régional de la FAO pour l’Afrique (RAF), Accra",
    j1_d:"Copilote le développement stratégique et conseille sur un budget-programme annuel de 50 millions d’USD ; point focal régional de l’Initiative Main dans la main (pays francophones).",
    j2_t:"Fonctionnaire régional chargé du suivi et de l’évaluation pour l’Afrique", j2_o:"Bureau régional de la FAO pour l’Afrique (RAF)",
    j2_d:"Appui technique à 47 bureaux de pays et quatre bureaux sous-régionaux ; positionnement de la FAO auprès des donateurs, contribuant à 55 millions d’USD mobilisés.",
    j3_t:"Fonctionnaire sous-régional chargé du suivi et de l’évaluation", j3_o:"Bureau sous-régional de la FAO pour l’Afrique de l’Est (SFE)",
    j3_d:"Mise en place de cadres de suivi-évaluation pour huit pays et mobilisation de 4 millions d’USD pour des projets sous-régionaux.",
    j4_t:"Administrateur auxiliaire (JPO)", j4_o:"Siège de la FAO, Rome",
    j4_d:"Appui aux systèmes de prévention des urgences et aux missions interinstitutions d’alerte précoce et d’évaluation de la sécurité alimentaire.",
    j5_t:"Enseignant en gestion de projet", j5_o:"Université de Ouagadougou (IGEDD)",
    j5_d:"Cours de troisième cycle sur la gestion du cycle de projet, la gestion axée sur les résultats et la théorie du changement.",
    j6_t:"Premières fonctions — évaluation et développement", j6_o:"JICA · PNUD/FEM · USAID/RTI International · CNRST · PNUE/FEM/ICRISAT",
    j6_d:"Économiste, chef d’équipe d’évaluation et chargé de suivi au sein d’institutions bilatérales, multilatérales et de recherche.",

    impact_eyebrow:"Impact et reconnaissance",
    impact_h2:"L’échelle, mesurée en résultats.",
    s1:"Budget-programme régional annuel suivi et supervisé.",
    s2:"Ressources mobilisées par la négociation avec les donateurs (2015-2017).",
    s3:"Personnes touchées par un programme de santé dont il a assuré la logistique et le suivi-évaluation.",
    s4:"Agents de santé et responsables formés lors de campagnes nationales.",
    honours_title:"Distinctions choisies",
    h1:"FAO — Meilleure équipe de l’année, distinctions multiples (2020, 2022, 2023, 2025)",
    h2:"FAO — Employé de l’année, top 100 mondial (2020 et 2021)",
    h3:"Top 200 des employés de la FAO dans le monde (2019)",
    h4:"Programme FAO des jeunes cadres à haut potentiel (2011)",

    insights_eyebrow:"Réflexions et interventions",
    insights_h2:"Partager ce que le travail enseigne.",
    insights_t:"Articles, conférences et déclarations",
    insights_p:"Un espace de réflexion sur la gestion des résultats, les systèmes agroalimentaires et la programmation-pays. De nouveaux contenus et interventions y figureront.",
    insights_cta:"Inviter Hervé à intervenir",

    life_eyebrow:"En dehors du travail",
    life_h2:"Garder le cap — et le transmettre.",
    life_lede:"Le temps passé en famille me permet de garder le travail en perspective. Je tiens à <em>faire découvrir la nature à mes enfants</em> — la faune, la terre et les animaux au cœur des systèmes agroalimentaires sur lesquels je travaille chaque jour.",
    cap_nature:"Observer la faune ensemble lors d’une promenade en forêt.",
    cap_golf:"Sur le green, ensemble.", cap_sunset:"Un moment de calme au bord de l’océan.",

    pubs_eyebrow:"Publications",
    pubs_h2:"Travaux choisis, évalués par les pairs et appliqués.",
    p1_t:"Efficacité des producteurs d’oignon et de pomme de terre dans la région du Saïs, Maroc.", p1_s:"Agronomie Africaine, Vol. 20, nᵒ 3 (2008).",
    p2_t:"Déterminants de la demande de poisson des ménages au Burkina Faso.", p2_s:"Tropicultura (Belgique, 2008).",
    p3_t:"Audit technique du projet agricole PADAZ financé par la BAD, Niger.", p3_s:"(2008).",
    p4_t:"Monographie de l’agriculture et des chaînes de valeur en Afrique de l’Ouest : le cas du Burkina Faso.", p4_s:"CMA/AOC, Ouagadougou (2007).",
    p5_t:"Évaluation de l’impact de la méthodologie des champs-écoles des producteurs de la FAO pour la lutte intégrée.", p5_s:"avec l’Université de Hanovre (2005).",

    contact_eyebrow:"Contact",
    contact_h2:"Entamons la conversation.",
    contact_intro:"Pour toute demande de partenariat, d’intervention ou de conseil, le plus simple est de me joindre par courriel ou via LinkedIn.",
    email:"Écrire à Hervé", linkedin:"Se connecter sur LinkedIn", contact_cv:"Lire le CV complet",
    form_name:"Nom", form_email:"Courriel", form_msg:"Message", form_send:"Envoyer le message",

    disclaimer:"Ceci est un site personnel. Les opinions exprimées sont celles de Hervé Ouédraogo, à titre personnel, et ne reflètent pas nécessairement les vues ou les politiques de l’Organisation des Nations Unies pour l’alimentation et l’agriculture ni de l’Organisation des Nations Unies.",
    foot_rights:"Tous droits réservés."
  },
  zh:{
    skip:"跳到正文",
    nav_about:"关于", nav_moments:"瞬间", nav_focus:"专长", nav_journey:"经历",
    nav_impact:"成果", nav_life:"生活", nav_pubs:"著述", nav_contact:"联系",

    hero_eyebrow:"联合国粮食及农业组织 · 非洲",
    hero_h1a:"为非洲的成效、伙伴关系与",
    hero_h1b:"农业食物系统转型", hero_h1c:"贡献力量。",
    hero_sub:"联合国粮农组织非洲区域办事处区域项目官员——在国际发展领域深耕二十余年。",
    hero_cta1:"查看简历", hero_cta2:"联系我",
    hero_m2:"粮农组织非洲区域办事处", hero_m3:"双语工作，立足全非洲", badge:"区域项目官员",

    about_eyebrow:"关于",
    about_h2:"扎根一线、了解区域、通晓体系的实干者。",
    about_p1:"埃尔韦·韦德拉奥果是一位资深的发展工作者和管理者，拥有二十多年经验，其中十四年在联合国系统内工作。他的足迹遍及国家、次区域、区域和总部各个层面，也涉足私营部门、国际金融机构、学术界和政府部门。",
    about_p2:"在联合国粮食及农业组织（粮农组织），他负责为非洲区域制定和落实一系列关键规划工具——包括共同国别分析（CCA）、联合国可持续发展合作框架（UNSDCF）、国别规划框架（CPF）和联合国规划信息系统（UN INFO）——并统筹相关项目。他每年为约 5000 万美元的项目预算提供建议并监督其使用，同时带领一支分布在多个国家、超过 60 人的团队。",
    about_quote:"成效不是纸面文章——它是我们对所服务的人们许下的承诺，兑现它、并用数字来证明。",
    about_p3:"他擅长战略规划、资源筹措，以及用系统性的方法推动农业食物系统转型，尤其关注气候变化、自然资源管理，以及把愿景变成实际成果的各类伙伴关系。",
    glance_title:"简要数据",
    glance_1:"年国际发展经验",
    glance_2:"每年参与规划的区域项目预算",
    glance_3:"跨多国管理的团队成员",
    glance_4:"种可以交流的语言",

    moments_eyebrow:"瞬间",
    moments_h2:"在田间、在会场、在整个区域。",
    moments_sub:"近期工作的一些片段——召集伙伴、在理事机构上发言，以及为粮农组织各国别办事处提供支持。",
    cap_ticad:"在第九届东京非洲发展国际会议（TICAD9）“手拉手”倡议活动上发言，日本横滨，2025年。",
    cap_rabat:"在第33届粮农组织非洲区域大会上发言，摩洛哥拉巴特，2024年。",
    cap_harare:"与各国别办事处举办能力建设研讨会，津巴布韦哈拉雷，2025年。",
    cap_rome:"与粮农组织总部的同事们在一起，意大利罗马。",
    cap_som:"出席粮农组织非洲区域大会高级官员会议。",
    cap_capacity:"就能力建设与全球合作交流探讨。",
    cap_agritech:"了解农业科技与创新。",
    cap_office:"工作中，粮农组织非洲区域办事处，加纳阿克拉。",

    focus_eyebrow:"专长领域",
    focus_h2:"工作的重心所在。",
    focus_p:"从成效框架到资金筹措，这是二十年间积累、环环相扣的一整套能力。",
    f1_t:"成效管理", f1_d:"通过机构层面的监测、评估与报告，把日常工作与看得见的成果连接起来。",
    f2_t:"战略规划", f2_d:"运用 CCA、UNSDCF、CPF 和 UN INFO 等工具，让粮农组织的工作与各国的优先事项保持一致。",
    f3_t:"农业食物系统转型", f3_d:"围绕气候变化、自然资源管理和粮食安全设计并推动项目。",
    f4_t:"资源筹措", f4_d:"在捐助方中树立信任，并与出资伙伴和国际金融机构搭建合作。",
    f5_t:"“手拉手”倡议", f5_d:"担任法语国家区域联络人，协助制定投资与融资计划。",
    f6_t:"数字化转型", f6_d:"推动 SCOPE 倡议，让国别规划更多依靠数据来落地。",
    f7_t:"能力建设", f7_d:"变革理论、项目周期管理，以及对各国团队的指导与培养。",
    f8_t:"伙伴关系与协调", f8_d:"在联合国系统内部及与区域机构之间开展跨机构协作。",

    journey_eyebrow:"职业历程",
    journey_h2:"二十年，四大洲的携手合作。",
    present:"至今",
    j1_t:"区域项目官员（成效管理）", j1_o:"粮农组织非洲区域办事处（RAF），加纳阿克拉",
    j1_d:"共同主导战略制定，为每年 5000 万美元的项目预算提供建议；担任“手拉手”倡议法语国家区域联络人。",
    j2_t:"非洲区域监测与评估官员", j2_o:"粮农组织非洲区域办事处（RAF）",
    j2_d:"为 47 个国别办事处和 4 个次区域办事处提供支持；帮助粮农组织赢得捐助方信任，协助筹得 5500 万美元资源。",
    j3_t:"次区域监测与评估官员", j3_o:"粮农组织东非次区域办事处（SFE）",
    j3_d:"为 8 个国家建立监测与评估机制，并为次区域项目筹得 400 万美元。",
    j4_t:"青年专业官员（JPO）", j4_o:"粮农组织总部，意大利罗马",
    j4_d:"参与紧急情况预防系统，以及跨机构的早期预警和粮食安全评估任务。",
    j5_t:"项目管理讲师", j5_o:"瓦加杜古大学（IGEDD）",
    j5_d:"为研究生讲授项目周期管理、成效管理与变革理论课程。",
    j6_t:"早期任职——评估与发展工作", j6_o:"日本国际协力机构 · 开发署/全球环境基金 · 美国国际开发署/RTI · 布基纳法索科研中心 · 环境署/全球环境基金/国际半干旱热带作物研究所",
    j6_d:"在双边、多边及研究机构担任经济学家、评估团队负责人和监测官员。",

    impact_eyebrow:"成果与荣誉",
    impact_h2:"规模，用成果来衡量。",
    s1:"每年参与规划并监督的区域项目预算。",
    s2:"通过与捐助方谈判筹得的资源（2015—2017年）。",
    s3:"由他负责后勤及监测评估的卫生项目所惠及的人数。",
    s4:"在多次全国行动中接受培训的卫生工作者和官员。",
    honours_title:"部分荣誉",
    h1:"粮农组织“年度最佳团队”——多次获奖（2020、2022、2023、2025年）",
    h2:"粮农组织“年度员工”，全球百强（2020与2021年）",
    h3:"粮农组织全球员工前200名（2019年）",
    h4:"粮农组织高潜力青年专业人员计划（2011年）",

    insights_eyebrow:"观点与演讲",
    insights_h2:"分享工作带来的心得。",
    insights_t:"文章、演讲与发言",
    insights_p:"这里将陆续分享关于成效管理、农业食物系统和国别规划的思考，以及新的文章和演讲活动。",
    insights_cta:"邀请埃尔韦演讲",

    life_eyebrow:"工作之外",
    life_h2:"保持视野——并把它传递下去。",
    life_lede:"陪伴家人让我不忘工作的意义。我很看重<em>带孩子们亲近自然</em>——认识野生动物、土地和牲畜，而这些正是我每天所做的农业食物系统工作的核心。",
    cap_nature:"一起在林间散步，观察野生动物。",
    cap_golf:"一起在球场上。", cap_sunset:"海边的一段静谧时光。",

    pubs_eyebrow:"著述",
    pubs_h2:"部分同行评议与应用研究成果。",
    p1_t:"摩洛哥塞斯地区洋葱与马铃薯种植户的生产效率。", p1_s:"《非洲农艺》，第20卷第3期（2008年）。",
    p2_t:"布基纳法索家庭鱼类需求的影响因素。", p2_s:"《热带栽培》（比利时，2008年）。",
    p3_t:"非洲开发银行资助的尼日尔 PADAZ 农业项目技术审计。", p3_s:"（2008年）。",
    p4_t:"西非农业与价值链专论：以布基纳法索为例。", p4_s:"CMA/AOC，瓦加杜古（2007年）。",
    p5_t:"粮农组织农民田间学校病虫害综合治理方法的成效评估。", p5_s:"与德国汉诺威大学合作（2005年）。",

    contact_eyebrow:"联系",
    contact_h2:"让我们聊一聊。",
    contact_intro:"如需洽谈合作、演讲或咨询事宜，通过电子邮件或领英与我联系最为方便。",
    email:"给埃尔韦发邮件", linkedin:"在领英上联系", contact_cv:"阅读完整简历",
    form_name:"姓名", form_email:"电子邮箱", form_msg:"留言", form_send:"发送",

    disclaimer:"这是一个个人网站。文中观点均为埃尔韦·韦德拉奥果的个人看法，不代表联合国粮食及农业组织或联合国的立场与政策。",
    foot_rights:"版权所有。"
  }
};

function applyLang(lang){
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if(dict[k] !== undefined) el.innerHTML = dict[k];
  });
  document.querySelectorAll('.lang button').forEach(b=>{
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
  try{ localStorage.setItem('ho-lang', lang); }catch(e){}
}

document.addEventListener('DOMContentLoaded', ()=>{
  // ---- theme: dark only ----
  document.documentElement.setAttribute('data-theme','dark');
  try{ localStorage.setItem('ho-theme','dark'); }catch(e){}

  // ---- lightbox (Moments gallery) ----
  const lb = document.getElementById('lightbox');
  if(lb){
    const lbImg=document.getElementById('lbImg'), lbCap=document.getElementById('lbCap');
    const figs=[...document.querySelectorAll('.gallery figure.shot')];
    const items=figs.map(f=>({src:f.querySelector('img').getAttribute('src'),
                              cap:(f.querySelector('figcaption')||{}).textContent||''}));
    let idx=0, lastFocus=null;
    function show(i){ idx=(i+items.length)%items.length; lbImg.src=items[idx].src; lbImg.alt=items[idx].cap; lbCap.textContent=items[idx].cap; }
    function open(i){ lastFocus=document.activeElement; show(i); lb.classList.add('open'); lb.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; document.getElementById('lbClose').focus(); }
    function close(){ lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); document.body.style.overflow=''; if(lastFocus) lastFocus.focus(); }
    figs.forEach((f,i)=>{
      const img=f.querySelector('img');
      img.setAttribute('tabindex','0'); img.setAttribute('role','button');
      img.addEventListener('click',()=>open(i));
      img.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); open(i);} });
    });
    document.getElementById('lbClose').addEventListener('click',close);
    document.getElementById('lbPrev').addEventListener('click',()=>show(idx-1));
    document.getElementById('lbNext').addEventListener('click',()=>show(idx+1));
    lb.addEventListener('click',e=>{ if(e.target===lb) close(); });
    document.addEventListener('keydown',e=>{
      if(!lb.classList.contains('open')) return;
      if(e.key==='Escape') close();
      else if(e.key==='ArrowLeft') show(idx-1);
      else if(e.key==='ArrowRight') show(idx+1);
    });
  }

  // language
  let lang = 'en';
  try{ lang = localStorage.getItem('ho-lang') || (navigator.language||'en').slice(0,2); }catch(e){}
  if(!I18N[lang]) lang = 'en';
  applyLang(lang);
  document.querySelectorAll('.lang button').forEach(b=>{
    b.addEventListener('click', ()=>applyLang(b.dataset.lang));
  });

  // mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const navlinks = document.getElementById('navlinks');
  if(menuBtn && navlinks){
    menuBtn.addEventListener('click', ()=>{
      const open = navlinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    navlinks.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
      navlinks.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false');
    }));
  }

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // count-up animation
  function countUp(el){
    const target = parseFloat(el.dataset.target);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const comma = el.dataset.comma === '1';
    if(reduce){ el.textContent = prefix + (comma ? target.toLocaleString('en-US') : target) + suffix; return; }
    const dur = 1400, t0 = performance.now();
    function frame(t){
      const p = Math.min((t - t0)/dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      let v = Math.round(target * eased);
      el.textContent = prefix + (comma ? v.toLocaleString('en-US') : v) + suffix;
      if(p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  // reveal + stagger + counters on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(!e.isIntersecting) return;
      e.target.classList.add('in');
      e.target.querySelectorAll && e.target.querySelectorAll('.fig[data-target]').forEach(countUp);
      io.unobserve(e.target);
    });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // scroll progress bar + sticky-nav shrink
  const progress = document.getElementById('progress');
  const nav = document.querySelector('.nav');
  function onScroll(){
    const st = window.scrollY || document.documentElement.scrollTop;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if(progress) progress.style.width = (h > 0 ? (st/h)*100 : 0) + '%';
    if(nav) nav.classList.toggle('scrolled', st > 24);
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // active section highlighting in nav
  const navMap = {};
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(a=>{
    const id = a.getAttribute('href').slice(1);
    if(id) navMap[id] = a;
  });
  const secObserver = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      const a = navMap[e.target.id];
      if(!a) return;
      if(e.isIntersecting){
        Object.values(navMap).forEach(x=>x.classList.remove('active'));
        a.classList.add('active');
      }
    });
  },{rootMargin:'-45% 0px -50% 0px'});
  Object.keys(navMap).forEach(id=>{ const el=document.getElementById(id); if(el) secObserver.observe(el); });

  // current year
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
});
