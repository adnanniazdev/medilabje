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

interface MaleHealthTest {
    title: string;
    image: string;
    description: string;
    fees: string;
    href: string; // optional for Learn More link
}

type MediManPackage = {
    title: string;
    tests: string[]
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

export const male_health_tests: MaleHealthTest[] = [
    {
        title: "PROSTATE-SPECIFIC ANTIGEN (PSA)",
        image: "/images/test-images/ML-prost.avif",
        description: "Check your Prostate health with a specific Prostate-antigen test detected in the blood. This can show any Prostate abnormality",
        fees: "£40",
        href: "/male-health/#PSA"

    },
    {
        title: "MEDIMALE BASIC",
        image: "/images/test-images/ML-male.avif",
        description: "Male hormone test to measure your Testosterone level, find out about how this can affect your health and take control",
        fees: "£120",
        href: "/male-health/#MediMaleBasic"
    },
    {
        title: "MEDIMAN",
        image: "/images/test-images/ML-man.avif",
        description: "Get a deep insight into your health and wellbeing with our simple blood test. This allows you to take control and invest in the future of your health to prevent future illnesses. We recommend repeat testing 6 monthly to track data trends and identify areas of improvement",
        fees: "£345",
        href: "/male-health/#MediMan"
    },

];

export const mediManPackage: MediManPackage[] = [
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
            "Antistreptolysin O (ASO)"
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
