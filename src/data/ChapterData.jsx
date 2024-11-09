// ChapterData.jsx
const chapterData = {
    IITJEE: {
      Physics: {
        "Class 11": [
          { chapter: "Kinematics", pdf: "src/assets/pdf/embedded system and IOT Notes.pdf" },
          { chapter: "Laws of Motion", pdf: "/path/to/laws-of-motion.pdf" },
          { chapter: "Work, Energy, and Power", pdf: "/path/to/work-energy.pdf" },
          { chapter: "Rotational Motion", pdf: "/path/to/rotational-motion.pdf" },
          { chapter: "Gravitation", pdf: "/path/to/gravitation.pdf" },
          { chapter: "Properties of Matter", pdf: "/path/to/properties-of-matter.pdf" },
          { chapter: "Thermodynamics", pdf: "/path/to/thermodynamics.pdf" },
          { chapter: "Oscillations and Waves", pdf: "/path/to/oscillations-waves.pdf" },
          { chapter: "abc", pdf: "/path/to/abc.pdf" },
        ],
        "Class 12": [
          { chapter: "Electric Charges and Fields", pdf: "/path/to/electric-charges.pdf" },
          { chapter: "Electrostatics", pdf: "/path/to/electrostatics.pdf" },
          { chapter: "Current Electricity", pdf: "/path/to/current-electricity.pdf" },
          { chapter: "Magnetic Effects of Current", pdf: "/path/to/magnetic-effects.pdf" },
          { chapter: "Electromagnetic Induction", pdf: "/path/to/electromagnetic-induction.pdf" },
          { chapter: "Optics", pdf: "/path/to/optics.pdf" },
          { chapter: "Dual Nature of Matter", pdf: "/path/to/dual-nature.pdf" },
          { chapter: "Atoms and Nuclei", pdf: "/path/to/atoms-nuclei.pdf" },
        ]
      },
      Chemistry: {
        "Class 11": [
          { chapter: "Some Basic Concepts of Chemistry", pdf: "/path/to/basic-concepts.pdf" },
          { chapter: "Structure of Atom", pdf: "/path/to/structure-of-atom.pdf" },
          { chapter: "Classification of Elements", pdf: "/path/to/classification-elements.pdf" },
          { chapter: "Chemical Bonding", pdf: "/path/to/chemical-bonding.pdf" },
          { chapter: "States of Matter", pdf: "/path/to/states-of-matter.pdf" },
          { chapter: "Thermodynamics", pdf: "/path/to/thermodynamics.pdf" },
          { chapter: "Equilibrium", pdf: "/path/to/equilibrium.pdf" },
          { chapter: "Redox Reactions", pdf: "/path/to/redox-reactions.pdf" },
        ],
        "Class 12": [
          { chapter: "Solid State", pdf: "/path/to/solid-state.pdf" },
          { chapter: "Solutions", pdf: "/path/to/solutions.pdf" },
          { chapter: "Electrochemistry", pdf: "/path/to/electrochemistry.pdf" },
          { chapter: "Chemical Kinetics", pdf: "/path/to/chemical-kinetics.pdf" },
          { chapter: "Surface Chemistry", pdf: "/path/to/surface-chemistry.pdf" },
          { chapter: "p-Block Elements", pdf: "/path/to/p-block-elements.pdf" },
          { chapter: "d and f Block Elements", pdf: "/path/to/d-f-block-elements.pdf" },
          { chapter: "Coordination Compounds", pdf: "/path/to/coordination-compounds.pdf" },
          { chapter: "Biomolecules", pdf: "/path/to/biomolecules.pdf" },
          { chapter: "Polymers", pdf: "/path/to/polymers.pdf" },
        ]
      },
      Maths: {
        "Class 11": [
          { chapter: "Sets and Functions", pdf: "/path/to/sets-functions.pdf" },
          { chapter: "Trigonometry", pdf: "/path/to/trigonometry.pdf" },
          { chapter: "Algebra", pdf: "/path/to/algebra.pdf" },
          { chapter: "Coordinate Geometry", pdf: "/path/to/coordinate-geometry.pdf" },
          { chapter: "Calculus", pdf: "/path/to/calculus.pdf" },
          { chapter: "Statistics and Probability", pdf: "/path/to/statistics-probability.pdf" },
        ],
        "Class 12": [
          { chapter: "Relations and Functions", pdf: "/path/to/relations-functions.pdf" },
          { chapter: "Algebra", pdf: "/path/to/algebra.pdf" },
          { chapter: "Calculus", pdf: "/path/to/calculus.pdf" },
          { chapter: "Vectors and 3D Geometry", pdf: "/path/to/vectors-3d-geometry.pdf" },
          { chapter: "Linear Programming", pdf: "/path/to/linear-programming.pdf" },
          { chapter: "Probability", pdf: "/path/to/probability.pdf" },
        ]
      }
    },
    NEET: {
      Physics: {
        "Class 11": [
          { chapter: "Physical World", pdf: "/path/to/physical-world.pdf" },
          { chapter: "Units and Measurements", pdf: "/path/to/units-measurements.pdf" },
          { chapter: "Motion in a Straight Line", pdf: "/path/to/motion-straight-line.pdf" },
          { chapter: "Motion in a Plane", pdf: "/path/to/motion-plane.pdf" },
          { chapter: "Laws of Motion", pdf: "/path/to/laws-motion.pdf" },
          { chapter: "Gravitation", pdf: "/path/to/gravitation.pdf" },
          { chapter: "Thermodynamics", pdf: "/path/to/thermodynamics.pdf" },
        ],
        "Class 12": [
          { chapter: "Electrostatics", pdf: "/path/to/electrostatics.pdf" },
          { chapter: "Current Electricity", pdf: "/path/to/current-electricity.pdf" },
          { chapter: "Magnetic Effects of Current", pdf: "/path/to/magnetic-effects.pdf" },
          { chapter: "Electromagnetic Waves", pdf: "/path/to/electromagnetic-waves.pdf" },
          { chapter: "Optics", pdf: "/path/to/optics.pdf" },
          { chapter: "Dual Nature of Radiation", pdf: "/path/to/dual-nature-radiation.pdf" },
          { chapter: "Atoms and Nuclei", pdf: "/path/to/atoms-nuclei.pdf" },
        ]
      },
      Chemistry: {
        "Class 11": [
          { chapter: "Some Basic Concepts of Chemistry", pdf: "/path/to/basic-concepts.pdf" },
          { chapter: "Structure of Atom", pdf: "/path/to/structure-atom.pdf" },
          { chapter: "Chemical Bonding", pdf: "/path/to/chemical-bonding.pdf" },
          { chapter: "Thermodynamics", pdf: "/path/to/thermodynamics.pdf" },
          { chapter: "Equilibrium", pdf: "/path/to/equilibrium.pdf" },
          { chapter: "Redox Reactions", pdf: "/path/to/redox-reactions.pdf" },
          { chapter: "Organic Chemistry", pdf: "/path/to/organic-chemistry.pdf" },
        ],
        "Class 12": [
          { chapter: "Solid State", pdf: "/path/to/solid-state.pdf" },
          { chapter: "Solutions", pdf: "/path/to/solutions.pdf" },
          { chapter: "Electrochemistry", pdf: "/path/to/electrochemistry.pdf" },
          { chapter: "Chemical Kinetics", pdf: "/path/to/chemical-kinetics.pdf" },
          { chapter: "p-Block Elements", pdf: "/path/to/p-block-elements.pdf" },
          { chapter: "Coordination Compounds", pdf: "/path/to/coordination-compounds.pdf" },
          { chapter: "Biomolecules", pdf: "/path/to/biomolecules.pdf" },
        ]
      },
      Biology: {
        "Class 11": [
          { chapter: "Diversity in Living Organisms", pdf: "/path/to/diversity-organisms.pdf" },
          { chapter: "Structural Organisation in Plants and Animals", pdf: "/path/to/structural-organisation.pdf" },
          { chapter: "Cell Structure and Function", pdf: "/path/to/cell-structure-function.pdf" },
          { chapter: "Plant Physiology", pdf: "/path/to/plant-physiology.pdf" },
          { chapter: "Human Physiology", pdf: "/path/to/human-physiology.pdf" },
        ],
        "Class 12": [
          { chapter: "Reproduction", pdf: "/path/to/reproduction.pdf" },
          { chapter: "Genetics and Evolution", pdf: "/path/to/genetics-evolution.pdf" },
          { chapter: "Biology and Human Welfare", pdf: "/path/to/biology-human-welfare.pdf" },
          { chapter: "Biotechnology", pdf: "/path/to/biotechnology.pdf" },
          { chapter: "Ecology and Environment", pdf: "/path/to/ecology-environment.pdf" },
        ]
      }
    },
    ICSE: {
      Physics: {
        "Class 11": [
          { chapter: "Measurements and Experimentation", pdf: "/path/to/measurements-experimentation.pdf" },
          { chapter: "Kinematics", pdf: "/path/to/kinematics.pdf" },
          { chapter: "Dynamics", pdf: "/path/to/dynamics.pdf" },
        ],
        "Class 12": [
          { chapter: "Optics", pdf: "/path/to/optics.pdf" },
          { chapter: "Thermodynamics", pdf: "/path/to/thermodynamics.pdf" },
        ]
      },
      Chemistry: {
        "Class 11": [
          { chapter: "Chemical Bonding", pdf: "/path/to/chemical-bonding.pdf" },
          { chapter: "Acids, Bases and Salts", pdf: "/path/to/acids-bases-salts.pdf" },
        ],
        "Class 12": [
          { chapter: "Organic Chemistry", pdf: "/path/to/organic-chemistry.pdf" },
          { chapter: "Hydrocarbons", pdf: "/path/to/hydrocarbons.pdf" },
        ]
      }
    },
    CBSE: {
      Physics: {
        "Class 11": [
          { chapter: "Measurements and Experimentation", pdf: "/path/to/measurements-experimentation.pdf" },
          { chapter: "Kinematics", pdf: "/path/to/kinematics.pdf" },
          { chapter: "Dynamics", pdf: "/path/to/dynamics.pdf" },
        ],
        "Class 12": [
          { chapter: "Optics", pdf: "/path/to/optics.pdf" },
          { chapter: "Thermodynamics", pdf: "/path/to/thermodynamics.pdf" },
        ]
      },
      Chemistry: {
        "Class 11": [
          { chapter: "Chemical Bonding", pdf: "/path/to/chemical-bonding.pdf" },
          { chapter: "Acids, Bases and Salts", pdf: "/path/to/acids-bases-salts.pdf" },
        ],
        "Class 12": [
          { chapter: "Organic Chemistry", pdf: "/path/to/organic-chemistry.pdf" },
          { chapter: "Hydrocarbons", pdf: "/path/to/hydrocarbons.pdf" },
        ]
      }
    }
  };
  
  export default chapterData;
  