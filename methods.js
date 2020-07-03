const methods = [
  {
    name: "CHEM-162",
    description: "Metals in Blood and Serum",
    elements: ["Mn", "Fe", "Co", "Cu", "Zn", "Se", "Mo", "Pb"],
    units: ["ppb", "ppm", "ppb", "ppm", "ppm", "ppm", "ppb", "ppm"],
    checkStds: [
      {
        name: '5/50 ppb',
        expectedValues: [5, 50, 5, 50, 50, 5, 5, 5],
        tolerance: 0.1
      }
    ],
    blanks: [
      {
        name: 'Serum Blank',
        LOQs: [0.9, 0.013, 0.3, 0.0008, 0.0011, 0.007, 1, null]
      },
      {
        name: 'Blood Blank',
        LOQs: [null, null, null, null, null, 0.029, null, 0.001]
      }
    ],
    duplicateTolerance: 15,
    calStandards: [0.05, 0.1, 0.25, 0.5, 1, 5, 10, 50, 250],
    sigFigs: 3,
    referenceMaterials: [{
      name: 'QM-S Q1807',
      rangesLow: [2.6, 0.7, 3.7, 0.9, 0.9, 0.1, 1.0, null],
      rangesHigh: [3.1, 1.0, 4.2, 1.2, 1.2, 0.15, 1.7, null]
    },
    {
      name: 'QM-B Q1720',
      rangesLow: [null, null, null, null, null, 0.15, null, 0.10],
      rangesHigh: [null, null, null, null, null, 0.20, null, 0.14]
    }
    ]
  },
  {
    name: "CHEM-057",
    description: "Iodine in Milk, Tissue and Feeds",
    elements: ["I"],
    units: ["ppb"],
    checkStds: [
      {
        name: '0.5 ppm check',
        expectedValues: [500],
        tolerance: 0.15
      }
    ],
    blanks: [
      {
        name: 'Method Blank',
        LOQs: [3]
      }
    ],
    duplicateTolerance: 20,
    calStandards: [0, 0.05, 0.1, 0.2, 0.5, 1],
    sigFigs: 3,
    referenceMaterials: [{
      name: 'Skim Milk Powder',
      rangesLow: [2500],
      rangesHigh: [3200]
    }
    ]
  }
]

module.exports = methods