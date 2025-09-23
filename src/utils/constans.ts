type TestCategory = {
    report_type: string;
    tests: string[];
};
type SampleTubeSelection = {
    title: string;
    image: string;
    invention: string;
    test_points: string[],
    width: number,
    height: number

};

type TestProfile = {
    title: string;
    href: string; // optional if you want navigation
}

interface HealthTest {
    title: string;
    image: string;
    description: string;
    fees: string;
    href: string; // optional for Learn More link
}

type Package = {
    title: string;
    tests: string[]
}

type FemaleHealthTest = {
    category: string;
    stages: {
        stage: string;
        tests: string[];
    }[];
};

export type Content = {
    image: string,
    title: string,
    fees: string,
    detail: string,
    points: string[],
    Why_get_tested: string[],
    results_mean: string[],
    slice?: number,
    packages?: any[],
    key: string,
}
export const tests_list: TestCategory[] = [
    {
        report_type: "Haematology",
        tests: [
            "Erythrocyte Sedimentation Rate (ESR)",
            "Full blood count (FBC)",
            "G6PD Rapid diagnostic test (G6PD)",
            "Infectious Mononucleosis rapid diagnostic test (IM Screen)",
            "Malaria rapid diagnostic test",
            "Plasma Viscosity (PV)",
            "Sickle cell rapid diagnostic test",
        ],
    },
    {
        report_type: "Virology",
        tests: ["COVID-19 PCR test"],
    },
    {
        report_type: "Bio-chemistry",
        tests: [
            "Alanine Transaminase (ALT)",
            "Albumin",
            "Alkaline Phosphatase (Alk Phos)",
            "Alpha-fetoprotein (AFP)",
            "Anti-Mullerian Hormone (AMH)",
            "Antinuclear antibody Screen (ANA)",
            "Anti-(double stranded)-DNA (ds-DNA)",
            "Anti-cyclic citrullinated peptide (anti-CCP)",
            "Anti-Thyroid peroxidase (TPO)",
            "Antistreptolysin O (ASO)",
            "Anti Thyroglobulin Abs",
            "Amylase",
            "Apolipoprotein A (Apo A)",
            "Apolipoprotein B (Apo B)",
            "Apolipoprotein E (Apo E)",
            "Aspartate Aminotransferase (AST)",
            "Bilirubin",
            "B-type natriuretic peptide (BNP)",
            "B-2-Microglobulin",
            "CA153",
            "CA125",
            "CA199",
            "Calcium",
            "Carcinoembryonic antigen (CEA)",
            "Cortisol",
            "Creatinine",
            "Creatinine Kinase (CK)",
            "C-reactive protein (CRP)",
            "Estradiol 2",
            "Extractable nuclear antigen (ENA) Screen",
            "HDL Cholesterol",
            "Heart Type Fatty Acid Binding Protein (H-FABP)",
            "High-sensitivity C-reactive protein (hs-CRP)",
            "High-sensitivity cardiac troponin test (hs-cTnT)",
            "LDL Cholesterol",
            "Human Chorionic Gonadotropin (HCG)",
            "Ferritin",
            "Folate",
            "Follicle Stimulating Hormone (FSH)",
            "eGFR",
            "GGT",
            "Glucose",
            "HBA1C",
            "Homocysteine",
            "Alpha HBDH",
            "Insulin",
            "Iron",
            "Iron Binding Saturation",
            "Immunoglobulin A",
            "Immunoglobulin E",
            "Immunoglobulin G",
            "Immunoglobulin M",
            "Lactate Dehydrogenase (LDH)",
            "Lutanizing Hormone (LH)",
            "Magnesium",
            "Microalbumin (Urine)",
            "Neuron Specific Enolase (NSE)",
            "Lipoprotein (a)",
            "Parathyroid Hormone (PTH)",
            "Phosphate",
            "Potassium (K+)",
            "Progesterone",
            "Prolactin",
            "Testosterone (total)",
            "Testosterone (free)",
            "Total Protein",
            "Total Bile Acids",
            "Thyroid Stimulating Hormone (TSH)",
            "Free T3",
            "Free T4",
            "Transferrin",
            "Rheumatoid Factor (RF)",
            "Sodium (Na+)",
            "Triglycerides",
            "Unsaturated iron-binding capacity (UIBC)",
            "Urea",
            "Urate",
            "Vitamin B12 (total)",
            "Vitamin B12 (active)",
            "Vitamin D",
        ],
    },
];

export const sample_tube_selection: SampleTubeSelection[] = [
    {
        title: "EDTA Tube",
        image: "/images/tubepurple.jpg",
        invention: "8-10 Inversion",
        test_points: [
            'FBC, PV, ESR, HbA1c',
            'Retics, G6PD, Malaria',
            'Infection Mononucleosis (IM)',
            'Sickle cell screening, blood film morphology',
            'Purple cap'
        ],
        width: 90,
        height: 488
    },
    {
        title: "Plain Tube",
        image: "/images/tubeyellow.jpg",
        invention: "3-4 Inversion",
        test_points: [
            'Biochemistry, Urea & Electrolytes, Liver function test, Lipids and cholesterol, Serum Glucose, Tumour markers',
            'Uric acid, RF, Ca, Mg, VitD & PTH, Vit E, Thyroid, B12 & Fol, hormones, Iron profile & Ferritin, CRP, Immunoglobulin',
            'Yellow cap'
        ],
        width: 90,
        height: 602
    },
    {
        title: "Sodium Citrate Tube",
        image: "/images/tubeblue.jpg",
        invention: "3-4 Inversion",
        test_points: [
            "PT",
            'APTT',
            'Fibrinogen',
            'Clotting Factors',
            "Light blue cap"
        ],
        width: 90,
        height: 428
    },
    {
        title: "Sodium Fluoride Tube",
        image: "/images/tubegrey.jpg",
        invention: "8-10 Inversion",
        test_points: [
            "Plasma Glucose",
            'Grey cap'
        ],
        width: 90,
        height: 326
    }
];

export const test_profiles: TestProfile[] = [
    { title: "Male Health", href: "/male-health" },
    { title: "Female Health", href: "/female-health" },
    { title: "General Health", href: "/general-health" },
    { title: "Athlete Health", href: "/athlete-health" },
];

export const male_health_tests: HealthTest[] = [
    {
        title: "PROSTATE-SPECIFIC ANTIGEN (PSA)",
        image: "/images/test-images/ML-prost.avif",
        description: "Check your Prostate health with a specific Prostate-antigen test detected in the blood. This can show any Prostate abnormality",
        fees: "£40",
        href: "/male-health/#PSA"

    },
    {
        title: "TESTOSTERONE CHECK",
        image: "/images/test-images/ML-male.avif",
        description: "Male hormone test to measure your Testosterone level, find out about how this can affect your health and take control",
        fees: "£120",
        href: "/male-health/#TestosteroneCheck"
    },
    {
        title: "MEDIMAN",
        image: "/images/test-images/ML-man.avif",
        description: "Get a deep insight into your health and wellbeing with our simple blood test. This allows you to take control and invest in the future of your health to prevent future illnesses. We recommend repeat testing 6 monthly to track data trends and identify areas of improvement",
        fees: "£345",
        href: "/male-health/#MediMan"
    },

];

export const female_health_tests: HealthTest[] = [
    {
        title: "MEDIMOTHER",
        image: "/images/test-images/ML-preg.avif",
        description: "Comprehensive health screen for expecting mothers, Includes 3 tests across pregnancy and postnatal (2nd Trimester, 3rd Trimester, Postnatal)",
        fees: "£595",
        href: "/female-health/#MediMother"

    },
    {
        title: "THYROID FUNCTION CHECK",
        image: "/images/test-images/ML-thy.avif",
        description: "Disorders of the Thyroid can have an impact on your sleep, energy, weight, getting pregnant and more. Understand your Thyroid health with our basic blood test",
        fees: "£0",
        href: "/female-health/#Thyroid"
    },
    {
        title: "FEMALE HORMONES CHECK",
        image: "/images/test-images/ML-fem.avif",
        description: "Measure key female hormones and discover if you have a hormone imbalance which can affect your weight, energy or mood",
        fees: "£160",
        href: "/female-health/#FemaleHormonesCheck"
    },
    {
        title: "POLYCYSTIC OVARY SYNDROME (PCOS) PANEL",
        image: "/images/test-images/ML-ovary.avif",
        description: "Our simple blood test will measure the key hormones which play a role in PCOS and help you take control and understand your health better",
        fees: "£325",
        href: "/female-health/#PCOS"
    },
    {
        title: "MEDIMENOPAUSE",
        image: "/images/test-images/ML-meno.avif",
        description: "Understand your hormone levels to take control of your health and learn how changes due to menopause or perimenopause could increase your risk of conditions like diabetes and osteoporosis",
        fees: "£160",
        href: "/female-health/#MediMenopause"
    },
    {
        title: "AMH (ANTI-MULLERIAN TEST)",
        image: "/images/test-images/ML-amh.avif",
        description: "AMH is produced by the follicles and is a measure of ovarian reserve helping to indicate the number of eggs a female has left.",
        fees: "£65",
        href: "/female-health/#AMH"
    },
    {
        title: "BETA-HCG EARLY PREGNANCY",
        image: "/images/test-images/ML-early.avif",
        description: "This hormone is produced as soon as 10 days after conception. In healthy pregnancies, levels of hCG increase rapidly in early pregnancy. An above-normal level can confirm pregnancy before a urine test",
        fees: "£60",
        href: "/female-health/#BetaHCG"
    },
    {
        title: "MEDIFERTILITY FEMALE",
        image: "/images/test-images/ML-fert.avif",
        description: "Get unrivalled insights on your ovarian reserve and hormone levels. Ideal for anyone trying to conceive or thinking about having a baby",
        fees: "£195",
        href: "/female-health/#MediFertilityFemale"
    },
    {
        title: "MEDIWOMAN",
        image: "/images/test-images/ML-woman.avif",
        description: "Get a deep insight into your health and wellbeing with our simple blood test. This allows you to take control and invest in the future of your health to prevent future illnesses. We recommend repeat testing 6 monthly to track data trends and identify areas of improvement",
        fees: "£345",
        href: "/female-health/#MediWoman"
    },

];

export const athlete_health_tests: HealthTest[] = [
    {
        title: "MEDIATHLETE",
        image: "/images/test-images/ML-ath.avif",
        description: "Essential insight into your health to aid in optimising your nutrition and training to get the maximum performance",
        fees: "£279",
        href: "/athlete-health/#MediAthlete"

    },

];
export const general_health_tests: HealthTest[] = [
    {
        title: "MEDIMAN",
        image: "/images/test-images/ML-man.avif",
        description: "Get a deep insight into your health and wellbeing with our simple blood test. This allows you to take control and invest in the future of your health to prevent future illnesses. We recommend repeat testing 6 monthly to track data trends and identify areas of improvement",
        fees: "£345",
        href: "/general-health/#MediMan"
    },
    {
        title: "MEDIWOMAN",
        image: "/images/test-images/ML-woman.avif",
        description: "Get a deep insight into your health and wellbeing with our simple blood test. This allows you to take control and invest in the future of your health to prevent future illnesses. We recommend repeat testing 6 monthly to track data trends and identify areas of improvement",
        fees: "£345",
        href: "/general-health/#MediWoman"
    },
    {
        title: "THYROID FUNCTION CHECK",
        image: "/images/test-images/ML-thy.avif",
        description: "Disorders of the Thyroid can have an impact on your sleep, energy, weight, getting pregnant and more. Understand your Thyroid health with our basic blood test",
        fees: "£0",
        href: "/general-health/#Thyroid"
    },
    {
        title: "PROSTATE-SPECIFIC ANTIGEN (PSA)",
        image: "/images/test-images/ML-prost.avif",
        description: "Check your Prostate health with a specific Prostate-antigen test detected in the blood. This can show any Prostate abnormality",
        fees: "£40",
        href: "/general-health/#PSA"

    },
    {
        title: "MEDIATHLETE",
        image: "/images/test-images/ML-ath.avif",
        description: "Essential insight into your health to aid in optimising your nutrition and training to get the maximum performance",
        fees: "£279",
        href: "/general-health/#MediAthlete"

    },

    {
        title: "MEDIVITAMIN",
        image: "/images/test-images/ML-vita.avif",
        description: "Measure the levels of essential vitamins and minerals to help prevent or manage deficiencies",
        fees: "£95",
        href: "/general-health/#MediVitamin"
    },
    {
        title: "MEDIDISCOVER",
        image: "/images/test-images/ML-disc.avif",
        description: "Discover key health insights relating to your full body well-being with a simple blood test and take action to help protect your future health",
        fees: "£295",
        href: "/general-health/#MediDiscover"
    },
    {
        title: "MEDIESSENTIAL",
        image: "/images/test-images/ML-ess.avif",
        description: "Understand your health baseline by reviewing vital health areas including heart health and diabetes",
        fees: "£95",
        href: "/general-health/#MediEssential"
    },
    {
        title: "TIRED ALL THE TIME TEST",
        image: "/images/test-images/ML-vita.avif",
        description: "Measure the levels of essential vitamins and minerals to help prevent or manage deficiencies",
        fees: "£145",
        href: "/general-health/#TiredAllTheTime"
    },
    {
        title: "CANCER / TUMOUR MARKER CHECK",
        image: "/images/test-images/ML-meno.avif",
        description: "Gain insights into important tumour markers that can support early detection and help safeguard your long-term health",
        fees: "£210",
        href: "/general-health/#CancerMarkerCheck"
    },

];
export const over60s_health_tests: HealthTest[] = [
    {
        title: "MEDIMAN OVER OVER 60s",
        image: "/images/test-images/ML-man.avif",
        description: "Get a deep insight into your health and wellbeing with our simple blood test. This allows you to take control and invest in the future of your health to prevent future illnesses. We recommend repeat testing 6 monthly to track data trends and identify areas of improvement",
        fees: "£345",
        href: "/over-60s/#MediMan"

    },
    {
        title: "MEDIWOMAN OVER 60s",
        image: "/images/test-images/ML-woman.avif",
        description: "Get a deep insight into your health and wellbeing with our simple blood test. This allows you to take control and invest in the future of your health to prevent future illnesses. We recommend repeat testing 6 monthly to track data trends and identify areas of improvement",
        fees: "£345",
        href: "/over-60s/#MediWoman"

    },

];
export const mediManPackage: Package[] = [
    {
        title: "Full Blood Count",
        tests: [
            "Haemoglobin",
            "Haematocrit",
            "Mean Cell Haemoglobin (MCH)",
            "Mean Cell Haemoglobin Concentration (MCHC)",
            "Red Blood Cell Mean Cell Volume (MCV)",
            "Red Blood Cell Count",
            "Basophil Count",
            "Eosinophil Count",
            "Lymphocyte Count",
            "Monocyte Count",
            "Neutrophil Count",
            "White Blood Cell Count",
            "Platelet Count"
        ]
    },
    {
        title: "Iron Status",
        tests: ["Iron", "Ferritin", "Transferrin", "Transferrin Saturation"]
    },
    {
        title: "Heart Health",
        tests: [
            "Total Cholesterol",
            "LDL Cholesterol",
            "HDL Cholesterol",
            "Total Cholesterol / HDL Cholesterol Ratio",
            "Triglycerides",
            "Lipoprotein (a)"
        ]
    },
    {
        title: "Diabetes Health",
        tests: ["Glucose", "HbA1c"]
    },
    {
        title: "Metabolic Syndrome",
        tests: ["Glucose", "HDL Cholesterol", "Triglycerides", "HbA1c"]
    },
    {
        title: "Kidney Health",
        tests: [
            "Creatinine",
            "Estimated Glomerular Filtration Rate (eGFR)",
            "Calcium (adjusted)",
            "Chloride",
            "Magnesium",
            "Phosphate",
            "Potassium",
            "Sodium",
            "Urea",
            "Uric Acid"
        ]
    },
    {
        title: "Liver Health",
        tests: [
            "Alanine Aminotransferase (ALT)",
            "Alkaline Phosphatase (ALP)",
            "Aspartate Aminotransferase (AST)",
            "Gamma-Glutamyltransferase (GGT)",
            "Total Bilirubin",
            "Albumin",
            "Ferritin"
        ]
    },
    {
        title: "Pancreatic Health",
        tests: ["Pancreatic Amylase"]
    },
    {
        title: "Nutritional Health",
        tests: [
            "Albumin",
            "Calcium (adjusted)",
            "Magnesium",
            "Iron",
            "Folic acid",
            "Vitamin B12",
            "Vitamin D"
        ]
    },
    {
        title: "Muscle & Joint Health",
        tests: [
            "Creatine Kinase 1",
            "Uric Acid",
            "Rheumatoid Factor (RF)"
        ]
    },
    {
        title: "Bone Health",
        tests: [
            "Alkaline Phosphatase (ALP)",
            "Calcium (adjusted)",
            "Phosphate",
            "Vitamin D",
            "Parathyroid Hormone (PTH) – optional"
        ]
    },
    {
        title: "Infection & Inflammation",
        tests: [
            "C-Reactive Protein (CRP)",
            "Rheumatoid Factor (RF)",
            "Albumin",
            "Ferritin",
        ]
    },
    {
        title: "Thyroid",
        tests: [
            "Thyroid Stimulating Hormone (TSH)",
            "Free Thyroxine (FT4) – optional",
            "Free Tri-iodothyronine (FT3) – optional"
        ]
    },
    {
        title: "Hormonal Health",
        tests: ["Testosterone"]
    },
    {
        title: "Prostate Health",
        tests: ["Total Prostate Specific Antigen (TPSA)"]
    }
];
export const femaleHealthTests: FemaleHealthTest[] = [
    {
        category: "Diabetes Health",
        stages: [
            {
                stage: "2nd Trimester",
                tests: ["Glucose"],
            },
            {
                stage: "14 – 18 Weeks Post Partum",
                tests: ["Glucose", "HbA1c"],
            },
        ],
    },
    {
        category: "Kidney Health",
        stages: [
            {
                stage: "2nd Trimester and 14 – 18 Weeks Post Partum",
                tests: [
                    "Creatinine",
                    "Estimated Glomerular Filtration Rate (eGFR)",
                    "Calcium (adjusted)",
                    "Chloride",
                    "Magnesium",
                    "Phosphate",
                    "Potassium",
                    "Sodium",
                    "Urea",
                    "Uric Acid",
                ],
            },
        ],
    },
    {
        category: "Liver Health",
        stages: [
            {
                stage: "2nd Trimester and 14 – 18 Weeks Post Partum",
                tests: [
                    "Alanine Aminotransferase (ALT)",
                    "Alkaline Phosphatase (ALP)",
                    "Aspartate Aminotransferase (AST)",
                    "Gamma-Glutamyltransferase (GGT)",
                    "Total Bilirubin",
                    "Albumin",
                    "Ferritin",
                ],
            },
        ],
    },
    {
        category: "Pancreatic Health",
        stages: [
            {
                stage: "2nd Trimester and 14 – 18 Weeks Post Partum",
                tests: ["Pancreatic Amylase", "Lipase"],
            },
        ],
    },
    {
        category: "Nutritional Health",
        stages: [
            {
                stage: "2nd Trimester",
                tests: [
                    "Albumin",
                    "Calcium (adjusted)",
                    "Magnesium",
                    "Iron",
                    "Folic acid",
                    "Vitamin B12",
                    "Vitamin D",
                ],
            },
            {
                stage: "3rd Trimester",
                tests: [
                    "Albumin",
                    "Calcium (adjusted)",
                    "Magnesium",
                    "Iron",
                    "Folic acid",
                    "Vitamin B12",
                    "Vitamin D",
                    "Ferritin",
                    "Transferrin",
                    "TIBC",
                ],
            },
            {
                stage: "14 – 18 Weeks Post Partum",
                tests: [
                    "Albumin",
                    "Calcium (adjusted)",
                    "Magnesium",
                    "Iron",
                    "Folic acid",
                    "Vitamin B12",
                    "Vitamin D",
                ],
            },
        ],
    },
    {
        category: "Muscle and Joint Health",
        stages: [
            {
                stage: "2nd Trimester and 14 – 18 Weeks Post Partum",
                tests: ["Creatine Kinase", "Uric Acid", "Rheumatoid Factor (RF)"],
            },
        ],
    },
    {
        category: "Bone Health",
        stages: [
            {
                stage: "2nd Trimester",
                tests: [
                    "Alkaline Phosphatase (ALP)",
                    "Calcium (adjusted)",
                    "Phosphate",
                    "Vitamin D",
                ],
            },
            {
                stage: "14 – 18 Weeks Post Partum",
                tests: [
                    "Alkaline Phosphatase (ALP)",
                    "Calcium (adjusted)",
                    "Phosphate",
                    "Vitamin D",
                    "Parathyroid Hormone (PTH)",
                ],
            },
        ],
    },
    {
        category: "Infection and Inflammation",
        stages: [
            {
                stage: "2nd Trimester and 14 – 18 Weeks Post Partum",
                tests: ["C-Reactive Protein (CRP)", "Rheumatoid Factor (RF)", "Albumin", "Ferritin"],
            },
        ],
    },
    {
        category: "Thyroid Health",
        stages: [
            {
                stage: "2nd Trimester and 14 – 18 Weeks Post Partum",
                tests: [
                    "Thyroid Stimulating Hormone (TSH)",
                    "Free Thyroxine (FT4)",
                    "Free Tri-iodothyronine (FT3)",
                ],
            },
        ],
    },
    {
        category: "Full Blood Count",
        stages: [
            {
                stage: "14 – 18 Weeks Post Partum",
                tests: [
                    "Haemoglobin",
                    "Haematocrit",
                    "Mean Cell Haemoglobin (MCH)",
                    "Mean Cell Haemoglobin Concentration (MCHC)",
                    "Red Blood Cell Mean Cell Volume (MCV)",
                    "Red Blood Cell Count",
                    "Basophil Count",
                    "Eosinophil Count",
                    "Lymphocyte Count",
                    "Monocyte Count",
                    "Neutrophil Count",
                    "White Blood Cell Count",
                    "Platelet Count",
                ],
            },
        ],
    },
    {
        category: "Iron Status",
        stages: [
            {
                stage: "14 – 18 Weeks Post Partum",
                tests: ["Iron", "Ferritin", "Total Iron Binding Capacity (TIBC)", "Transferrin", "Transferrin Saturation"],
            },
        ],
    },
    {
        category: "Heart Health",
        stages: [
            {
                stage: "14 – 18 Weeks Post Partum",
                tests: [
                    "Total Cholesterol",
                    "LDL Cholesterol",
                    "HDL Cholesterol",
                    "Total Cholesterol / HDL Cholesterol Ratio",
                    "Triglycerides",
                    "Lipoprotein (a)",
                ],
            },
        ],
    },
    {
        category: "Metabolic",
        stages: [
            {
                stage: "14 – 18 Weeks Post Partum",
                tests: ["Glucose", "HDL Cholesterol", "Triglycerides", "HbA1c"],
            },
        ],
    },
    {
        category: "Hormone Health",
        stages: [
            {
                stage: "14 – 18 Weeks Post Partum",
                tests: [
                    "Oestradiol",
                    "Follicle Stimulating Hormone",
                    "Luteinising Hormone",
                    "Progesterone",
                    "Prolactin 2",
                    "Testosterone",
                ],
            },
        ],
    },
];
export const PCOSPackage: Package[] = [
    {
        title: "Full Blood Count",
        tests: [
            "Haemoglobin",
            "Haematocrit",
            "Mean Cell Haemoglobin (MCH)",
            "Mean Cell Haemoglobin Concentration (MCHC)",
            "Red Blood Cell Mean Cell Volume (MCV)",
            "Red Blood Cell Count",
            "Basophil Count",
            "Eosinophil Count",
            "Lymphocyte Count",
            "Monocyte Count",
            "Neutrophil Count",
            "White Blood Cell Count",
            "Platelet Count",
        ],
    },
    {
        title: "Iron Status",
        tests: ["Iron", "Ferritin", "Transferrin", "Transferrin Saturation"],
    },
    {
        title: "Heart Health / Lipids",
        tests: [
            "Total Cholesterol",
            "LDL Cholesterol",
            "HDL Cholesterol",
            "Total Cholesterol / HDL Cholesterol Ratio",
            "Triglycerides",
        ],
    },
    {
        title: "Diabetes Health",
        tests: ["Glucose", "HbA1c"],
    },
    {
        title: "Thyroid Health",
        tests: ["TSH", "FT4", "FT3"],
    },
    {
        title: "AMH",
        tests: ["AMH"],
    },
    {
        title: "Hormonal Health",
        tests: [
            "Cortisol",
            "FSH",
            "LH",
            "Oestradiol",
            "Progesterone",
            "Prolactin",
            "Testosterone",
        ],
    },
];
export const MediMenopauseTests: Package[] = [
    {
        title: "Hormonal Health",
        tests: [
            "FSH",
            "LH",
            "Oestradiol",
            "Progesterone",
            "Prolactin",
            "Testosterone",
        ],
    },
    {
        title: "Thyroid Health",
        tests: ["TSH"],
    },
    {
        title: "Iron Status",
        tests: ["Iron", "Ferritin", "Transferrin", "Transferrin Saturation"],
    },
    {
        title: "Heart Health",
        tests: [
            "Total Cholesterol",
            "LDL Cholesterol",
            "HDL Cholesterol",
            "Total Cholesterol / HDL Cholesterol Ratio",
            "Triglycerides",
        ],
    },
];
export const MediFertilityFemale: Package[] = [
    {
        title: "HORMONAL HEALTH",
        tests: [
            "Cortisol",
            "FSH",
            "LH",
            "Oestradiol",
            "Progesterone",
            "Prolactin",
            "Testosterone",
        ],
    },
    {
        title: "AMH",
        tests: ["AMH"],
    },
    {
        title: "THYROID HEALTH",
        tests: ["TSH"],
    },
    {
        title: "FULL BLOOD COUNT",
        tests: [
            "Haemoglobin",
            "Haematocrit",
            "MCH",
            "MCHC",
            "MCV",
            "Red Blood Cell Count",
            "Basophil Count",
            "Eosinophil Count",
            "Lymphocyte Count",
            "Monocyte Count",
            "Neutrophil Count",
            "White Blood Cell Count",
            "Platelet Count",
        ],
    },
    {
        title: "IRON STATUS",
        tests: ["Iron", "Ferritin", "TIBC", "Transferrin", "Transferrin Saturation"],
    },
    {
        title: "HEART HEALTH",
        tests: [
            "Total Cholesterol",
            "LDL Cholesterol",
            "HDL Cholesterol",
            "Total/HDL Cholesterol Ratio",
            "Triglycerides",
        ],
    },
    {
        title: "DIABETES HEALTH",
        tests: ["Glucose", "HbA1c"],
    },
    {
        title: "NUTRITIONAL HEALTH",
        tests: ["Folic Acid", "Vitamin B12", "Vitamin D"],
    },
];
export const MediWoman: Package[] = [
    {
        title: "FULL BLOOD COUNT",
        tests: [
            "Haemoglobin",
            "Haematocrit",
            "Mean Cell Haemoglobin (MCH)",
            "Mean Cell Haemoglobin Concentration (MCHC)",
            "Red Blood Cell Mean Cell Volume (MCV)",
            "Red Blood Cell Count",
            "Basophil Count",
            "Eosinophil Count",
            "Lymphocyte Count",
            "Monocyte Count",
            "Neutrophil Count",
            "White Blood Cell Count",
            "Platelet Count",
        ],
    },
    {
        title: "IRON STATUS",
        tests: ["Iron", "Ferritin", "Transferrin", "Transferrin Saturation"],
    },
    {
        title: "HEART HEALTH",
        tests: [
            "Total Cholesterol",
            "LDL Cholesterol",
            "HDL Cholesterol",
            "Total Cholesterol / HDL Cholesterol Ratio",
            "Triglycerides",
            "Lipoprotein (a)",
        ],
    },
    {
        title: "DIABETES HEALTH",
        tests: ["Glucose", "HbA1c"],
    },
    {
        title: "METABOLIC SYNDROME",
        tests: ["Glucose", "HDL Cholesterol", "Triglycerides", "HbA1c"],
    },
    {
        title: "KIDNEY HEALTH",
        tests: [
            "Creatinine",
            "Estimated Glomerular Filtration Rate (eGFR)",
            "Calcium (adjusted)",
            "Chloride",
            "Magnesium",
            "Phosphate",
            "Potassium",
            "Sodium",
            "Urea",
            "Uric Acid",
        ],
    },
    {
        title: "LIVER HEALTH",
        tests: [
            "Alanine Aminotransferase (ALT)",
            "Alkaline Phosphatase (ALP)",
            "Aspartate Aminotransferase (AST)",
            "Gamma-Glutamyltransferase (GGT)",
            "Total Bilirubin",
            "Albumin",
            "Ferritin",
        ],
    },
    {
        title: "PANCREATIC HEALTH",
        tests: ["Pancreatic Amylase"],
    },
    {
        title: "NUTRITIONAL HEALTH",
        tests: [
            "Albumin",
            "Calcium (adjusted)",
            "Magnesium",
            "Iron",
            "Folic acid",
            "Vitamin B12",
            "Vitamin D",
        ],
    },
    {
        title: "MUSCLE & JOINT HEALTH",
        tests: ["Creatine Kinase 1", "Uric Acid", "Rheumatoid Factor (RF)"],
    },
    {
        title: "BONE HEALTH",
        tests: [
            "Alkaline Phosphatase (ALP)",
            "Calcium (adjusted)",
            "Phosphate",
            "Vitamin D",
            "Parathyroid Hormone (PTH) – optional",
        ],
    },
    {
        title: "INFECTION & INFLAMMATION",
        tests: [
            "C-Reactive Protein (CRP)",
            "Rheumatoid Factor (RF)",
            "Albumin",
            "Ferritin",
        ],
    },
    {
        title: "THYROID HEALTH",
        tests: [
            "Thyroid Stimulating Hormone (TSH)",
            "Free Thyroxine (FT4) – optional",
            "Free Tri-iodothyronine (FT3) – optional",
        ],
    },
    {
        title: "HORMONAL HEALTH",
        tests: [
            "Testosterone",
            "Cortisol",
            "FSH",
            "LH",
            "Oestradiol",
            "Progesterone",
            "Prolactin",
        ],
    },
]

export const athletePackage: Package[] = [
    {
        title: "Full Blood Count",
        tests: [
            "Haemoglobin",
            "Haematocrit",
            "Mean Cell Haemoglobin (MCH)",
            "Mean Cell Haemoglobin Concentration (MCHC)",
            "Red Blood Cell Mean Cell Volume (MCV)",
            "Red Blood Cell Count",
            "Basophil Count",
            "Eosinophil Count",
            "Lymphocyte Count",
            "Monocyte Count",
            "Neutrophil Count",
            "White Blood Cell Count",
            "Platelet Count",
        ],
    },
    {
        title: "Iron Status",
        tests: ["Iron", "Ferritin", "Transferrin", "Transferrin Saturation"],
    },
    {
        title: "Heart Health / Lipids",
        tests: [
            "Total Cholesterol",
            "LDL Cholesterol",
            "HDL Cholesterol",
            "Total Cholesterol / HDL Cholesterol Ratio",
            "Triglycerides",
        ],
    },
    {
        title: "Diabetes Health",
        tests: ["Glucose", "HbA1c"],
    },
    {
        title: "Kidney Health",
        tests: [
            "Creatinine",
            "Estimated Glomerular Filtration Rate (eGFR)",
            "Calcium (adjusted)",
            "Magnesium",
            "Potassium",
            "Sodium",
            "Urea",
            "Uric Acid",
            "Chloride",
            "Phosphate",
        ],
    },
    {
        title: "Liver Health",
        tests: [
            "Alanine Aminotransferase (ALT)",
            "Alkaline Phosphatase (ALP)",
            "Aspartate Aminotransferase (AST)",
            "Gamma-Glutamyltransferase (GGT)",
            "Total Bilirubin",
            "Albumin",
            "Ferritin",
        ],
    },
    {
        title: "Bone Health",
        tests: [
            "Calcium",
            "Alkaline Phosphatase (ALP)",
            "Phosphate",
            "Vitamin D",
        ],
    },
    {
        title: "Nutritional Health",
        tests: ["Folic acid", "Vitamin B12", "Vitamin D"],
    },
    {
        title: "Muscle & Joint Health",
        tests: ["Creatine Kinase", "CK- MB"],
    },
    {
        title: "Infection & Inflammation",
        tests: ["C-Reactive Protein (CRP)"],
    },
    {
        title: "Thyroid",
        tests: [
            "Thyroid Stimulating Hormone (TSH)",
            "Free Thyroxine (FT4) – optional",
            "Free Tri-iodothyronine (FT3) – optional",
        ],
    },
    {
        title: "Hormonal Health",
        tests: ["Testosterone – males", "Oestrogen – females"],
    },
];
export const MediDiscover: Package[] = [
    {
        title: "FULL BLOOD COUNT",
        tests: [
            "Haemoglobin",
            "Haematocrit",
            "Mean Cell Haemoglobin (MCH)",
            "Mean Cell Haemoglobin Concentration (MCHC)",
            "Red Blood Cell Mean Cell Volume (MCV)",
            "Red Blood Cell Count",
            "Basophil Count",
            "Eosinophil Count",
            "Lymphocyte Count",
            "Monocyte Count",
            "Neutrophil Count",
            "White Blood Cell Count",
            "Platelet Count",
        ],
    },
    {
        title: "IRON STATUS",
        tests: [
            "Iron",
            "Ferritin",
            "Total Iron Binding Capacity (TIBC)",
            "Transferrin",
            "Transferrin Saturation",
        ],
    },
    {
        title: "HEART HEALTH",
        tests: [
            "Total Cholesterol",
            "LDL Cholesterol",
            "HDL Cholesterol",
            "Total Cholesterol / HDL Cholesterol Ratio",
            "Triglycerides",
        ],
    },
    {
        title: "DIABETES HEALTH",
        tests: ["Glucose", "HbA1c"],
    },
    {
        title: "METABOLIC SYNDROME",
        tests: ["Glucose", "HDL Cholesterol", "Triglycerides", "HbA1c"],
    },
    {
        title: "KIDNEY HEALTH",
        tests: [
            "Creatinine",
            "Estimated Glomerular Filtration Rate (eGFR)",
            "Calcium (adjusted)",
            "Chloride",
            "Magnesium",
            "Phosphate",
            "Potassium",
            "Sodium",
            "Urea",
            "Uric Acid",
        ],
    },
    {
        title: "LIVER HEALTH",
        tests: [
            "Alanine Aminotransferase (ALT)",
            "Alkaline Phosphatase (ALP)",
            "Aspartate Aminotransferase (AST)",
            "Gamma-Glutamyltransferase (GGT)",
            "Total Bilirubin",
            "Albumin",
            "Ferritin",
        ],
    },
    {
        title: "PANCREATIC HEALTH",
        tests: ["Pancreatic Amylase"],
    },
    {
        title: "NUTRITIONAL HEALTH",
        tests: [
            "Albumin",
            "Calcium (adjusted)",
            "Magnesium",
            "Iron",
            "Folic acid",
            "Vitamin B12",
            "Vitamin D",
        ],
    },
    {
        title: "MUSCLE & JOINT HEALTH",
        tests: ["Creatine Kinase 1", "Uric Acid", "Rheumatoid Factor (RF)"],
    },
    {
        title: "BONE HEALTH",
        tests: [
            "Alkaline Phosphatase (ALP)",
            "Calcium (adjusted)",
            "Phosphate",
            "Vitamin D",
        ],
    },
    {
        title: "INFECTION & INFLAMMATION",
        tests: [
            "C-Reactive Protein (CRP)",
            "Rheumatoid Factor (RF)",
            "Albumin",
            "Ferritin",
        ],
    },
    {
        title: "THYROID HEALTH",
        tests: [
            "Thyroid Stimulating Hormone (TSH)",
        ],
    },
    {
        title: "HORMONAL HEALTH",
        tests: ["Testosterone"],
    },
    {
        title: "PROSTATE HEALTH",
        tests: ["Total Prostate Specific Antigen (TPSA) 2"],
    },
];

export const MediEssential: Package[] = [
    {
        title: "FULL BLOOD COUNT",
        tests: [
            "Haemoglobin",
            "Haematocrit",
            "Mean Cell Haemoglobin (MCH)",
            "Mean Cell Haemoglobin Concentration (MCHC)",
            "Red Blood Cell Mean Cell Volume (MCV)",
            "Red Blood Cell Count",
            "Basophil Count",
            "Eosinophil Count",
            "Lymphocyte Count",
            "Monocyte Count",
            "Neutrophil Count",
            "White Blood Cell Count",
            "Platelet Count",
        ],
    },
    {
        title: "HEART HEALTH",
        tests: [
            "Total Cholesterol",
            "LDL Cholesterol",
            "HDL Cholesterol",
            "Total Cholesterol / HDL Cholesterol Ratio",
            "Triglycerides",
        ],
    },
    {
        title: "DIABETES HEALTH",
        tests: ["HbA1c"],
    },
];
export const TiredAllTheTime: Package[] = [
    {
        title: "FULL BLOOD COUNT",
        tests: [
            "Haemoglobin",
            "Haematocrit",
            "Mean Cell Haemoglobin (MCH)",
            "Mean Cell Haemoglobin Concentration (MCHC)",
            "Red Blood Cell Mean Cell Volume (MCV)",
            "Red Blood Cell Count",
            "Basophil Count",
            "Eosinophil Count",
            "Lymphocyte Count",
            "Monocyte Count",
            "Neutrophil Count",
            "White Blood Cell Count",
            "Platelet Count",
        ],
    },
    {
        title: "IRON STATUS",
        tests: [
            "Iron",
            "Ferritin",
            "Iron Total Saturation",
            "Transferrin",
        ],
    },

    {
        title: "NUTRITIONAL HEALTH",
        tests: [
            "Albumin",
            "Calcium (adjusted)",
            "Magnesium",
            "Iron",
            "Folic acid",
            "Vitamin B12",
            "Vitamin D",
        ],
    },
    {
        title: "BONE HEALTH",
        tests: [
            "Alkaline Phosphatase (ALP)",
            "Calcium (adjusted)",
            "Phosphate",
            "Vitamin D",
        ],
    },
];
export const MediWomanOver60s: Package[] = [
    {
        title: "FULL BLOOD COUNT",
        tests: [
            "Haemoglobin",
            "Haematocrit",
            "Mean Cell Haemoglobin (MCH)",
            "Mean Cell Haemoglobin Concentration (MCHC)",
            "Red Blood Cell Mean Cell Volume (MCV)",
            "Red Blood Cell Count",
            "Basophil Count",
            "Eosinophil Count",
            "Lymphocyte Count",
            "Monocyte Count",
            "Neutrophil Count",
            "White Blood Cell Count",
            "Platelet Count",
        ],
    },
    {
        title: "Lipid panel",
        tests: [
            "Total LDL",
            "HDL cholesterol",
            "Triglycerides",
            "Cholesterol ratio",
        ],
    },
    {
        title: "DIABETES HEALTH",
        tests: ["HbA1c"],
    },
    {
        title: "METABOLIC MARKERS",
        tests: ["Glucose", "Insulin"],
    },
    {
        title: "KIDNEY HEALTH",
        tests: [
            "Creatinine",
            "Estimated Glomerular Filtration Rate (eGFR)",
            "Calcium (adjusted)",
            "Chloride",
            "Magnesium",
            "Phosphate",
            "Potassium",
            "Sodium",
            "Urea",
            "Uric Acid",
        ],
    },
    {
        title: "LIVER HEALTH",
        tests: [
            "Alanine Aminotransferase (ALT)",
            "Alkaline Phosphatase (ALP)",
            "Aspartate Aminotransferase (AST)",
            "Gamma-Glutamyltransferase (GGT)",
            "Total Bilirubin",
            "Albumin",
            "Ferritin",
        ],
    },
    {
        title: "PANCREATIC HEALTH",
        tests: ["Pancreatic Amylase"],
    },
    {
        title: "NUTRITIONAL HEALTH",
        tests: [
            "Albumin",
            "Calcium (adjusted)",
            "Magnesium",
            "Iron",
            "Folic acid",
            "Vitamin B12",
            "Vitamin D",
        ],
    },
    {
        title: "BONE HEALTH",
        tests: [
            "Alkaline Phosphatase (ALP)",
            "Calcium (adjusted)",
            "Phosphate",
            "Vitamin D",
            "Parathyroid Hormone (PTH) – optional",
        ],
    },
    {
        title: "INFECTION & INFLAMMATION",
        tests: [
            "C-Reactive Protein (CRP)",
            "Rheumatoid Factor (RF)",
            "Albumin",
            "Ferritin",
        ],
    },
    {
        title: "THYROID HEALTH",
        tests: [
            "Thyroid Stimulating Hormone (TSH)",
            "Free Thyroxine (FT4) – optional",
            "Free Tri-iodothyronine (FT3) – optional",
        ],
    },
    {
        title: "HORMONAL HEALTH",
        tests: [
            "Testosterone",
            "Cortisol",
            "FSH",
            "LH",
            "Oestradiol",
            "Progesterone",
            "Prolactin",
        ],
    },
]
export const MediManOver60s: Package[] = [
    {
        title: "FULL BLOOD COUNT",
        tests: [
            "Haemoglobin",
            "Haematocrit",
            "Mean Cell Haemoglobin (MCH)",
            "Mean Cell Haemoglobin Concentration (MCHC)",
            "Red Blood Cell Mean Cell Volume (MCV)",
            "Red Blood Cell Count",
            "Basophil Count",
            "Eosinophil Count",
            "Lymphocyte Count",
            "Monocyte Count",
            "Neutrophil Count",
            "White Blood Cell Count",
            "Platelet Count",
        ],
    },
    {
        title: "Lipid panel",
        tests: [
            "Total LDL",
            "HDL cholesterol",
            "Triglycerides",
            "Cholesterol ratio",
        ],
    },
    {
        title: "DIABETES HEALTH",
        tests: ["HbA1c"],
    },
    {
        title: "METABOLIC MARKERS",
        tests: ["Glucose", "Insulin"],
    },
    {
        title: "KIDNEY HEALTH",
        tests: [
            "Creatinine",
            "Estimated Glomerular Filtration Rate (eGFR)",
            "Calcium (adjusted)",
            "Chloride",
            "Magnesium",
            "Phosphate",
            "Potassium",
            "Sodium",
            "Urea",
            "Uric Acid",
        ],
    },
    {
        title: "LIVER HEALTH",
        tests: [
            "Alanine Aminotransferase (ALT)",
            "Alkaline Phosphatase (ALP)",
            "Aspartate Aminotransferase (AST)",
            "Gamma-Glutamyltransferase (GGT)",
            "Total Bilirubin",
            "Albumin",
            "Ferritin",
        ],
    },
    {
        title: "PANCREATIC HEALTH",
        tests: ["Pancreatic Amylase"],
    },
    {
        title: "NUTRITIONAL HEALTH",
        tests: [
            "Albumin",
            "Calcium (adjusted)",
            "Magnesium",
            "Iron",
            "Folic acid",
            "Vitamin B12",
            "Vitamin D",
        ],
    },
    {
        title: "BONE HEALTH",
        tests: [
            "Alkaline Phosphatase (ALP)",
            "Calcium (adjusted)",
            "Phosphate",
            "Vitamin D",
            "Parathyroid Hormone (PTH) – optional",
        ],
    },
    {
        title: "INFECTION & INFLAMMATION",
        tests: [
            "C-Reactive Protein (CRP)",
            "Rheumatoid Factor (RF)",
            "Albumin",
            "Ferritin",
        ],
    },
    {
        title: "THYROID HEALTH",
        tests: [
            "Thyroid Stimulating Hormone (TSH)",
            "Free Thyroxine (FT4) – optional",
            "Free Tri-iodothyronine (FT3) – optional",
        ],
    },
    {
        title: "HORMONAL HEALTH",
        tests: [
            "Testosterone",
            "Cortisol",
            "FSH",
            "LH",
            "Oestradiol",
            "Progesterone",
            "Prolactin",
            "Prostate Specific Antigen (PSA)"
        ],
    },
];

export const MaleHealthContent: Content[] = [
    {
        image: "/images/ML-prost.png",
        title: "PROSTATE-SPECIFIC ANTIGEN (PSA)",
        fees: '£40',
        detail: "   Prostate-Specific Antigen (PSA) is specific to the prostate and can be detected in the blood. This can show any prostate abnormality. Getting your prostate checked should be an essential part of your routine health.",
        points: [
            'Results in 2 working days from sample taken',
            'Prostate Specific Antigen (PSA)'
        ],
        Why_get_tested: [
            'PSA is specific to the Prostate and this test will measure the level of Prostate-Specific Antigen in the blood. PSA is a protein produced by cells of the prostate gland. These levels tend to increase with age and size of the prostate.',
        ],
        results_mean: [
            'PSA is highly specific for prostate disease, but it is not specific for prostate cancer. Often a raised PSA can may indicate something else, such as an enlarged prostate, prostatitis, or a urinary tract infection.'
        ],
        key: "PSA"
    },
    {
        image: "/images/ML-male-01.png",
        title: "TESTOSTERONE CHECK",
        fees: "£120",
        detail: "Hormone balance is essential for energy levels, regulating mood, sports performance and sex drive. With our simple blood test you can find out if your hormone levels are in balance, and be in control of your health. We test for male testosterone to give you a comprehensive overview of your hormonal health.",
        points: [
            'Results in 2 working days from sample taken',
            'Testosterone'
        ],
        Why_get_tested: [
            'Male hormones such as testosterone support many bodily functions which play an essential role in the production of sperm, having a health libido and also building and maintaining muscle mass and strength, which is vitally important for any man in training. A lower testosterone level can therefore result in lack of energy and sex drive, feeling tired, loss of hair, erectile dysfunction, anxiety/depression and increased body fat.'
        ],
        results_mean: [
            'Levels will begin to decrease naturally after the age of 30. Other potential causes of low testosterone include; alcohol abuse, obesity, uncontrolled diabetes, medication and over training.'
        ],
        key: "TestosteroneCheck"
    },
    {
        image: "/images/ML-man-01.png",
        fees: '£345',
        title: "MEDIMAN",
        detail: "Hormone balance is essential for energy levels, regulating mood, sports performance and sex drive. With our simple blood test you can find out if your hormone levels are in balance, and be in control of your health. We test for male testosterone to give you a comprehensive overview of your hormonal health.",
        points: [
            'Results in 2 working days from sample taken',
            'Get a deep insight into your health and wellbeing',
            'Up to 100 data points linked to key health areas are measured from a simple blood test'
        ],
        Why_get_tested: [
            'Male hormones such as testosterone support many bodily functions which play an essential role in the production of sperm, having a health libido and also building and maintaining muscle mass and strength, which is vitally important for any man in training. A lower testosterone level can therefore result in lack of energy and sex drive, feeling tired, loss of hair, erectile dysfunction, anxiety/depression and increased body fat.',
        ],
        results_mean: [
            'Levels will begin to decrease naturally after the age of 30. Other potential causes of low testosterone include; alcohol abuse, obesity, uncontrolled diabetes, medication and over training.'
        ],
        slice: 6,
        packages: mediManPackage,
        key: "MediMan"
    }

]

export const AtheleteHealthContent: Content[] = [
    {
        image: "/images/ML-ath-01.png",
        fees: '£279',
        title: "MEDIATHLETE",
        detail: "Essential insight into your health to aid in optimising your nutrition and training to get the maximum performance",
        points: [
            'Results in 2 working days from sample taken',
            'Over 50 data points measured to aid you to take control of your training and perfect your performance',
        ],
        Why_get_tested: [
            'Whether you are starting out on your fitness journey or are fitness lover or professional athlete MediAthlete is for you. Our simple blood test will provide you with key insights into your health allowing you to take control and be the best version of you by optimising your performance and nutrition allowing you to achieve your fitness goals.',
        ],
        results_mean: [
            'MediAthlete provides over 50 data points linked to your general health as well as specific tests for nutrition for sport, muscle health, heart and hormones. For Male Athletes, option to include PSA is available during booking.',
            'The MediAthlete test is perfect for anyone who wants to be active in their health providing a baseline prior to training and track your health data throughout training.'
        ],
        slice: 5,
        packages: athletePackage,
        key: "MediAthlete"
    }

]
export const FemaleHealthContent: Content[] = [
    {
        image: "/images/ML-preg-01-300x300.png",
        fees: '£595',
        title: "MEDIMOTHER",
        detail: "Comprehensive health check for women prenatal and postpartum which is suitable from 20 weeks pregnancy onwards",
        points: [
            'Results in 2 working days from sample taken',
            'Includes 3 diagnostic health checks, from pre to postnatal',
            'Up to 100 data points linked to key health areas measured',
            'Comprehensive diagnostic health check during 2nd Trimester (post 20 weeks)',
            'Specific Nutritional diagnostic check during 3rd Trimester (during weeks 30 to 35)',
            'Comprehensive diagnostic health check postpartum (12 weeks post-partum)'
        ],
        Why_get_tested: [
            'MediMother has been created to keep pregnant mothers informed about their own health prenatal and postpartum, one of the most important times in her life.',
            'Vitamins and minerals like iron, vitamin D, folate, vitamin B12 are vital to the health of both mother and baby. Pregnancy is often the cause of iron deficiency anaemia causing tiredness, lack of energy, heart palpitations, and pale skin.'
        ],
        results_mean: [
            'A simple blood test will provide a wealth of data from which you can better understand your heart, kidney, liver, thyroid, and nutritional health both during and after pregnancy.'
        ],
        slice: 5,
        packages: femaleHealthTests,
        key: "MediMother"
    },
    {
        image: "/images/ML-thy-01.png",
        fees: '£0',
        title: "THYROID FUNCTION CHECK",
        detail: "Disorders of the Thyroid can have an impact on your sleep, energy, weight, getting pregnant and more. Understand your Thyroid health with our basic blood test.",
        points: [
            'Results in 2 working days from sample taken',
            'Understand your Thyroid health',
            'Thyroid Antibodies (£120)',
            'FULL THYROID CHECK  (£199)'
        ],
        Why_get_tested: [
            'Thyroid issues are often common in women, but males can also be affected. Thyroid disorders often go misdiagnosed or not treated. An underactive thyroid, where your thyroid gland does not produce enough hormones is associated with the following symptoms; tiredness, weight gain, depression, hair loss and sensitivity to cold temperatures. An overactive thyroid on the other hand, a condition where the thyroid produces too many hormones can cause weight loss, anxiety, mood swings, difficulty sleeping, sensitivity to heat, muscle weakness, itchiness and a frequent need to urinate.',
        ],
        results_mean: [
            'With our simple blood test at MediLab you can understand if your thyroid is functioning properly. Thyroid dysfunction can be due to family history/genetic factors, autoimmune disorders and even some medications.'
        ],
        key: "Thyroid"
    },
    {
        image: "/images/ML-fem-01.png",
        fees: '£160',
        title: "FEMALE HORMONES CHECK",
        detail: "Find out if you have a hormone imbalance that could be affecting your fertility, mood, weight and energy levels with our Female Hormone Test. We test for 6 key markers, including oestradiol, progesterone, follicle-stimulating hormone, luteinising hormone, prolactin, testosterone to give you a comprehensive overview of your hormonal health.",
        points: [
            'Results in 2 working days from sample taken',
            '6 Key hormones - Oestradiol, progesterone, follicle-stimulating hormone, luteinising hormone, prolactin, testosterone'
        ],
        Why_get_tested: [
            'Female hormones are vital in controlling and supporting fertility, metabolism, mood, sleep and weight. Some of the symptoms of a hormone imbalance are: a change to your period, weight gain, acne, hair loss, low energy levels, anxiety/depression or muscle weakness. Female infertility affects 1 in 6 people globally stated by the World Health Organisation. It is natural to have fluctuating hormones throughout the month and some hormones will change naturally with age.'
        ],
        results_mean: [
            'MediLabs simple blood test will help identify any hormone balance, allowing you to be in control and act on your own health.'
        ],
        key: "FemaleHormonesCheck"
    },
    {
        image: "/images/ML-ovary-01.png",
        fees: '£325',
        title: "POLYCYSTIC OVARY SYNDROME (PCOS)",
        detail: "If you have irregular periods, excess body hair, acne, fertility issues then PCOS could be the cause. Discover if this is case with our simple blood test measuring several key hormones.",
        points: [
            'Results in 2 working days from sample taken',
            'Over 40 data points including fertility hormones, androgen levels (testosterone) and more to help give you the answers you need'
        ],
        Why_get_tested: [
            'PCOS is a common condition where small fluid-filled follicles appear on the ovaries and affects around 1 in 10 women. Each follicle contains an immature egg that does not develop enough to trigger ovulation causing low progesterone levels and abnormally high levels of androgens like testosterone.',
            'Symptoms of PCOS include irregular periods, fertility issues, excess hair, weight gain and oily skin. Symptoms may differ depending on the individual as such its important to monitor your hormone levels.'
        ],
        results_mean: [
            'If you suspect you might have PCOS, a simple blood test at MediLab will help to give you a better understanding of your hormone levels. We measure over 40 data points including fertility hormones, androgen levels (testosterone) and more to help give you the answers you need. AMH (ovarian reserve) is also included, AMH levels are often found to be higher in females with PCOS due to the excess number of immature follicles in the ovaries.',
            'It is recommended to take the test two to five days after the start of your period, ideally on day three. It can be taken any time if you do not have periods. It is important to note that some types of hormonal contraceptive will affect your results.'
        ],
        key: "PCOS",
        slice: 3,
        packages: PCOSPackage
    },

    {
        image: "/images/ML-meno-01.png",
        fees: '£160',
        title: "MEDIMENOPAUSE",
        detail: "Understand your hormone levels to take control of your health and learn how changes due to menopause or perimenopause could increase your risk of conditions like diabetes and osteoporosis",
        points: [
            'Results in 2 working days from sample taken',
            'Over 30 data points measured'
        ],
        Why_get_tested: [
            'During menopause, a lot of changes happen to the female body. Our simple blood test can provide you with numerous key data points for your health on your hormone levels and these are impacting you.'
        ],
        results_mean: [
            'Menopause is triggered by a decline in oestrogen and progesterone. When oestrogen levels reach a new low it can increase the risk of conditions like heart disease, diabetes, and osteoporosis. The menopause blood test will help you to better understand the impact of menopause on your heart, thyroid, nutrition, and bone health. A drop in oestrogen levels will trigger FSH (follicle-stimulating hormone) levels to rise. Raised FSH levels combined with missed periods is a strong indicator that you are perimenopausal or menopausal.',
            'Prior to menopause most women will experience perimenopause – when periods become irregular. This normally happens between the ages of 45-55. If you experience symptoms before the age of 45 a blood test could help to rule out other conditions that cause similar symptoms to menopause like thyroid disorders.'
        ],
        key: "MediMenopause",
        slice: 2,
        packages: MediMenopauseTests
    },
    {
        image: "/images/ML-amh-01.png",
        fees: '£65',
        title: "AMH (ANTI-MULLERIAN TEST)",
        detail: "Understand your ovarian reserve and if its normal for your age. An Anti-Mullerian Hormone (AMH) blood test may help you to make informed decisions on IVF or egg freezing",
        points: [
            'Results in 2 working days from sample taken',
            'Find out if your AMH level is normal for your age with a simple blood test'
        ],
        Why_get_tested: [
            'Anti-mullerian hormone (AMH) is produced in the ovarian follicles and is used to reflect ovarian reserve (the remaining number of follicles within the ovaries capable of producing an egg).',
            'The AMH blood test will indicate if your levels are normal for your age and is useful if considering fertility treatment such as egg freezing or IVF. The World Health Organisation states infertility affects 1 in 6 people globally, with 17.5% of adults across the world affected by the inability to have a child. Both high and low levels of AMH can impact on fertility. Measurement of AMH cannot determine how many viable eggs a female has remaining or predict a female’s chances of pregnancy.'
        ],
        results_mean: [
            'Typically, AMH levels peak when a woman reaches her mid-twenties and then decline with age, becoming undetectable post-menopause. A low AMH indicates diminished ovarian reserve and a higher AMH level indicates greater ovarian reserve; however, high levels can also occur in women with polycystic ovary syndrome (PCOS).',
            'It is important to note that some types of contraceptive pill may affect your results. If you stop taking the pill, we suggest waiting until your periods have resumed their normal cycle before taking this test. Make sure that you take an alternative form of contraception if you are not planning to become pregnant.',
            'It is important to note that the AMH blood test will not tell you how many viable eggs you have remaining, and it does not predict your likelihood of becoming pregnant. Your AMH result indicates if your AMH level is normal for your age.'
        ],
        key: "AMH",
    },
    {
        image: "/images/ML-early-01.png",
        fees: '£60',
        title: "BETA-HCG EARLY PREGNANCY",
        detail: "This hormone is produced as soon as 10 days after conception. In healthy pregnancies, levels of hCG increase rapidly in early pregnancy. An above-normal level can confirm pregnancy before a urine test. Detect if you are possibly pregnancy before an at home urine pregnancy test.",
        points: [
            'Detects blood HCG',
            'Results same day'
        ],
        Why_get_tested: [
            'Discover if you are in the early stages of pregnancy or monitor HCG levels. Blood HCG can often be detected several days before an at home pregnancy test.'
        ],
        results_mean: [],
        key: "BetaHCG",
    },
    {
        image: "/images/ML-fert-01.png",
        fees: '£195',
        title: "MEDIFERTILITY FEMALE",
        detail: "Helping you to better understand and take control of your hormones and fertility. The Medifertility female health check not only measures your reproductive hormone levels and ovarian reserve but delivers a complete picture of your overall hormonal health and well-being. Ideal for anyone trying to conceive or thinking about having a baby.",
        points: [
            'Results in 2 working days from sample taken',
            'Over 40 data points measured'
        ],
        Why_get_tested: [
            'Knowing more and being in control matters! Ever wondered if your ovarian reserve is normal for your age or if your hormones could be affecting your fertility, mood, weight, and energy levels? Then MediFemale fertility health check is for you.'
        ],
        results_mean: ['We measure over 40 data points linked to fertility hormones, ovarian reserve, thyroid hormones, iron levels, heart health, diabetes status, nutrition, and body composition to provide you with a complete picture of what is going on inside your body.', 'It is important to note that some types of hormonal contraceptive will affect your results. Results may be affected if you have an irregular menstrual cycle or if you have been taking hormonal contraceptives within the last three months.', 'We recommend you take your test on day 3 of your menstrual cycle to ensure accurate results. The third day of your menstrual cycle refers to the third day of blood flow during your period.'],
        key: "MediFertilityFemale",
        packages: MediFertilityFemale,
        slice: 4

    },
    {
        image: "/images/ML-woman-01.png",
        fees: '£345',
        title: "MEDIWOMAN",
        detail: "Get a deep insight into your health and wellbeing with our simple blood test. This allows you to take control and invest in the future of your health to prevent future illnesses. We recommend repeat testing 6 monthly to track data trends and identify areas of improvement",
        points: [
            'Results in 2 working days from sample taken',
            'Up to 100 data points linked to key health areas are measured from a simple blood test'
        ],
        Why_get_tested: [
            'Reviewing your health regularly is key to ensuring monitoring and prevention of future illnesses.'
        ],
        results_mean: ['With our blood test, you are provided with a wealth of knowledge and data about your health to help you understand and take control of your heart, kidney, liver, hormones, thryoid and much more.', 'Be empowered to be in control of your own health. By tracking your health data in this way you are empowered to take control of your health and make informed decisions to help prevent illness.'],
        key: "MediWoman",
        packages: MediWoman,
        slice: 6

    },
]
export const GeneralHealthContent: Content[] = [
    {
        image: "/images/ML-man-01.png",
        fees: '£345',
        title: " MEDIMAN",
        detail: "Hormone balance is essential for energy levels, regulating mood, sports performance and sex drive. With our simple blood test you can find out if your hormone levels are in balance, and be in control of your health. We test for male testosterone to give you a comprehensive overview of your hormonal health.",
        points: [
            'Results in 2 working days from sample taken',
            'Get a deep insight into your health and wellbeing',
            'Up to 100 data points linked to key health areas are measured from a simple blood test'
        ],
        Why_get_tested: [
            'Reviewing your health regularly is key to ensuring monitoring and prevention of future illnesses. With our blood test, you are provided with a wealth of knowledge and data about your health to help you understand and take control of your heart, kidney, liver, hormones, thryoid and much more.',
        ],
        results_mean: [
            'Be empowered to be in control of your own health. By tracking your health data in this way you are empowered to take control of your health and make informed decisions to help prevent illness.'
        ],
        slice: 6,
        packages: mediManPackage,
        key: "MediMan"
    },
    {
        image: "/images/ML-woman-01.png",
        fees: '£345',
        title: "MEDIWOMAN",
        detail: "Get a deep insight into your health and wellbeing with our simple blood test. This allows you to take control and invest in the future of your health to prevent future illnesses. We recommend repeat testing 6 monthly to track data trends and identify areas of improvement",
        points: [
            'Results in 2 working days from sample taken',
            'Up to 100 data points linked to key health areas are measured from a simple blood test'
        ],
        Why_get_tested: [
            'Reviewing your health regularly is key to ensuring monitoring and prevention of future illnesses.'
        ],
        results_mean: ['With our blood test, you are provided with a wealth of knowledge and data about your health to help you understand and take control of your heart, kidney, liver, hormones, thryoid and much more.', 'Be empowered to be in control of your own health. By tracking your health data in this way you are empowered to take control of your health and make informed decisions to help prevent illness.'],
        key: "MediWoman",
        packages: MediWoman,
        slice: 6

    },
    {
        image: "/images/ML-thy-01.png",
        fees: '£0',
        title: "THYROID FUNCTION CHECK",
        detail: "Disorders of the Thyroid can have an impact on your sleep, energy, weight, getting pregnant and more. Understand your Thyroid health with our basic blood test.",
        points: [
            'Results in 2 working days from sample taken',
            'Understand your Thyroid health',
            'Thyroid Stimulating Hormone, Free T4, Free T3'
        ],
        Why_get_tested: [
            'Thyroid issues are often common in women, but males can also be affected. Thyroid disorders often go misdiagnosed or not treated. An underactive thyroid, where your thyroid gland does not produce enough hormones is associated with the following symptoms; tiredness, weight gain, depression, hair loss and sensitivity to cold temperatures. An overactive thyroid on the other hand, a condition where the thyroid produces too many hormones can cause weight loss, anxiety, mood swings, difficulty sleeping, sensitivity to heat, muscle weakness, itchiness and a frequent need to urinate.',
        ],
        results_mean: [
            'With our simple blood test at MediLab you can understand if your thyroid is functioning properly. Thyroid dysfunction can be due to family history/genetic factors, autoimmune disorders and even some medications.'
        ],
        key: "Thyroid"
    },
    {
        image: "/images/ML-prost.png",
        title: "PROSTATE-SPECIFIC ANTIGEN (PSA)",
        fees: '£40',
        detail: "   Prostate-Specific Antigen (PSA) is specific to the prostate and can be detected in the blood. This can show any prostate abnormality. Getting your prostate checked should be an essential part of your routine health.",
        points: [
            'Results in 2 working days from sample taken',
            'Prostate Specific Antigen (PSA)'
        ],
        Why_get_tested: [
            'PSA is specific to the Prostate and this test will measure the level of Prostate-Specific Antigen in the blood. PSA is a protein produced by cells of the prostate gland. These levels tend to increase with age and size of the prostate.',
        ],
        results_mean: [
            'PSA is highly specific for prostate disease, but it is not specific for prostate cancer. Often a raised PSA can may indicate something else, such as an enlarged prostate, prostatitis, or a urinary tract infection.'
        ],
        key: "PSA"
    },
    {
        image: "/images/ML-ath-01.png",
        fees: '£279',
        title: "MEDIATHLETE",
        detail: "Essential insight into your health to aid in optimising your nutrition and training to get the maximum performance",
        points: [
            'Results in 2 working days from sample taken',
            'Over 50 data points measured to aid you to take control of your training and perfect your performance',
        ],
        Why_get_tested: [
            'Whether you are starting out on your fitness journey or are fitness lover or professional athlete MediAthlete is for you. Our simple blood test will provide you with key insights into your health allowing you to take control and be the best version of you by optimising your performance and nutrition allowing you to achieve your fitness goals.',
        ],
        results_mean: [
            'MediAthlete provides over 50 data points linked to your general health as well as specific tests for nutrition for sport, muscle health, heart and hormones. For Male Athletes, option to include PSA is available during booking.',
            'The MediAthlete test is perfect for anyone who wants to be active in their health providing a baseline prior to training and track your health data throughout training.'
        ],
        slice: 5,
        packages: athletePackage,
        key: "MediAthlete"
    },
    {
        image: "/images/ML-vita-02-01.png",
        fees: '£95',
        title: "MEDIVITAMIN",
        detail: "Measure the levels of essential vitamins and minerals to help prevent or manage deficiencies. A vitamin or mineral deficiency can have wide ranging effects including fatigue, low energy and depression",
        points: [
            'Results in 2 working days from sample taken',
            'Vitamin B12, Vitamin D, Folic Acid, Magnesium, Iron, Calcium, Ferritin, Transferrin, Transferrin Saturation, Total Iron Binding Capacity, Albumin',
        ],
        Why_get_tested: [
            'Knowing your vitamin and mineral status are essential in all parts of life. Understanding if you are deficient allows you to take control and prevent any further deficiencies.',
        ],
        results_mean: [
            'A vitamin or mineral deficiency can have varied effects on the body and is linked to low energy levels, weakness, heart palpitations, irritability, depression, mouth ulcers and frequent colds.',
            'Vegans and vegetarians are at greater risk of certain deficiencies including Vitamin B12, while many in the UK will be deficient in Vitamin D. If you are concerned about your diet or think you may have a deficiency the MediVitamin Health Vitamin and Mineral Profile provides a comprehensive overview of your nutritional health.'
        ],
        key: "MediVitamin"
    },
    {
        image: "/images/ML-disc-01.png",
        fees: '£295',
        title: "MEDIDISCOVER",
        detail: "Being in control of your health matters. It's time to listen to your body. The MediDiscover comprehensive health package covers all the tests you need to take a proactive approach to help monitor and improve your health and prevent future illness.",
        points: [
            'Results in 2 working days from sample taken',
            '1 full health check measuring up to 100 data points linked to key health areas including heart and hormones',
        ],
        Why_get_tested: [
            'The MediDiscover package has been designed as a quick, convenient, and stress-free full body health check. Be in control of your health and take the first step towards a better you.',
        ],
        results_mean: [
            'A simple blood test delivers insights into a range of key areas to help you better understand your full body health. Measure data points linked to hormone, heart, and much more.',
            'Fasting for the Discovery test panel is optional. However, choosing not to fast may affect some of the results, such as insulin, cardiovascular risk score, triglycerides and blood glucose. This should be taken into consideration and if preferred then you may fast for a minimum of six hours before the appointment time.'
        ],
        key: "MediDiscover",
        packages: MediDiscover,
        slice: 6
    },
    {
        image: "/images/ML-ess-01.png",
        fees: '£95',
        title: "MEDIESSENTIAL",
        detail: "Understand your health baseline by reviewing vital health areas that could increase your risk of heart attack, stroke and Type 2 diabetes",
        points: [
            'Results in 2 working days from sample taken',
            'Over 10 key markers measured including HDL Cholesterol, LDL Cholesterol, Total Cholesterol, Full blood count and HbA1c',
        ],
        Why_get_tested: [
            'Being in control of your health data is vital in helping you to not only feel your best but can also help to prevent illness and reduce your risk of common conditions including heart attack, stroke and type 2 diabetes.',
        ],
        results_mean: [],
        key: "MediEssential",
        packages: MediEssential,
        slice: 1
    },
    {
        image: "/images/ML-vita-02-01.png",
        fees: '£145',
        title: "TIRED ALL THE TIME TEST",
        detail: "Measure the levels of essential vitamins and minerals to help prevent or manage deficiencies. A vitamin or mineral deficiency can have wide ranging effects including fatigue, low energy and depression",
        points: [
            'Results in 2 working days from sample taken',
            'Vitamin B12, Vitamin D, Folic Acid, Magnesium, Iron, Calcium, Ferritin, Transferrin, Transferrin Saturation, Total Iron Binding Capacity, Albumin',
        ],
        Why_get_tested: [
            'Knowing your vitamin and mineral status are essential in all parts of life. Understanding if you are deficient allows you to take control and prevent any further deficiencies.',
        ],
        results_mean: [
            'A vitamin or mineral deficiency can have varied effects on the body and is linked to low energy levels, weakness, heart palpitations, irritability, depression, mouth ulcers and frequent colds.',
            'Vegans and vegetarians are at greater risk of certain deficiencies including Vitamin B12, while many in the UK will be deficient in Vitamin D. If you are concerned about your diet or think you may have a deficiency the MediVitamin Health Vitamin and Mineral Profile provides a comprehensive overview of your nutritional health.'
        ],
        key: "TiredAllTheTime",
        packages: TiredAllTheTime,
        slice: 2
    },
    {
        image: "/images/ML-meno-01.png",
        fees: '£210',
        title: "CANCER / TUMOUR MARKER CHECK",
        detail: "Check key tumour markers in your blood to support early detection, monitor treatment effectiveness, and gain clearer insights into your long-term health.",
        points: [
            'Results in 2 working days from sample taken',
            'AFP (Alpha-fetoprotein), CEA (Carcinoembryonic Antigen), CA125, CA153, CA199, tPSA, Beta-HCG',
        ],
        Why_get_tested: [
            'Tumor marker tests measure specific substances in your blood that may indicate the presence or growth of cancer. These tests are often recommended if you have a family history of cancer, unexplained symptoms, or are undergoing treatment. Early testing helps in timely detection, monitoring therapy effectiveness, and supporting better treatment outcomes for long-term health.',
        ],
        results_mean: [
            'Results from tumor marker tests provide valuable insights into your health. Elevated levels may indicate cancer, but they can also rise due to non-cancerous conditions. Normal levels don’t always rule out disease, so results are interpreted alongside other medical findings. At Medilab, our specialists explain your results clearly and recommend further investigations or follow-up care if necessary.'
        ],
        key: "CancerMarkerCheck",
    },
]
export const Over60sHealthContent: Content[] = [
    {
        title: "MEDIMAN OVER OVER 60s",
        image: "/images/ML-man-01.png",
        fees: "£345",
        detail: "Establish foundational health metrics and screen for key risk areas such as cardiovascular health, diabetes risk, and basic metabolic function. Address male-specific health considerations, especially hormonal and prostate health.",
        points: [
            'Results in 2 working days from sample taken',
            'Get a deep insight into your health and wellbeing',
            'Up to 100 data points linked to key health areas are measured from a simple blood test'
        ],
        Why_get_tested: [
            'Male hormones such as testosterone support many bodily functions which play an essential role in the production of sperm, having a health libido and also building and maintaining muscle mass and strength, which is vitally important for any man in training. A lower testosterone level can therefore result in lack of energy and sex drive, feeling tired, loss of hair, erectile dysfunction, anxiety/depression and increased body fat.',
        ],
        results_mean: [
            ' Levels will begin to decrease naturally after the age of 30. Other potential causes of low testosterone include; alcohol abuse, obesity, uncontrolled diabetes, medication and over training.'
        ],
        key: "MediMan",
        packages: MediManOver60s,
        slice: 6
    },
    {
        image: "/images/ML-woman-01.png",
        fees: '£345',
        title: "MEDIWOMAN",
        detail: "Establish foundational health metrics and screen for key risk areas such as cardiovascular health, diabetes risk, and basic metabolic function.  addressing hormonal balance, thyroid function, and bone metabolism.",
        points: [
            'Results in 2 working days from sample taken',
            'Up to 100 data points linked to key health areas are measured from a simple blood test'
        ],
        Why_get_tested: [
            'Reviewing your health regularly is key to ensuring monitoring and prevention of future illnesses.'
        ],
        results_mean: ['With our blood test, you are provided with a wealth of knowledge and data about your health to help you understand and take control of your heart, kidney, liver, hormones, thryoid and much more.', 'Be empowered to be in control of your own health. By tracking your health data in this way you are empowered to take control of your health and make informed decisions to help prevent illness.'],
        key: "MediWoman",
        packages: MediWomanOver60s,
        slice: 6
    }

]