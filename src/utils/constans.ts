type TestCategory = {
    report_type: string;
    tests: string[];
};
type SampleTubeSelection = {
    title: string;
    image: string;
    invention: string;
    test_points: string[],
    width: number

};

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
        width: 60
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
        width: 80
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
        width: 50
    },
    {
        title: "Sodium Fluoride Tube",
        image: "/images/tubegrey.jpg",
        invention: "8-10 Inversion",
        test_points: [
            "Plasma Glucose",
            'Grey cap'
        ],
        width: 30
    }
];