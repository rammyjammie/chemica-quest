import React, { useState, useEffect, useMemo } from 'react';
import { Beaker, FlaskConical, Atom, Flame, Droplet, Scale, Trophy, Heart, Sparkles, Lock, Check, X, ChevronRight, ChevronLeft, Play, BookOpen, Zap, Award, RotateCcw, ShoppingBag, Crown, Coins, Star, Skull, Leaf, Shield, Gem, PawPrint, Bird, Bug, Cat, Rabbit, Fish, Library } from 'lucide-react';
import { LESSONS } from './lessons';

// ============================================================
// CONSTANTS
// ============================================================

const TIERS = {
  apprentice: { name: 'Apprentice', label: 'I', color: '#94a3b8', mult: 1, lives: 3 },
  journeyman: { name: 'Journeyman', label: 'II', color: '#fbbf24', mult: 1.5, lives: 3 },
  archmage:   { name: 'Archmage',   label: 'III', color: '#ec4899', mult: 2.5, lives: 2 },
};

const TIER_ORDER = ['apprentice', 'journeyman', 'archmage'];

// ============================================================
// QUEST DATA — 6 realms × 3 tiers × 5 questions = 90 main questions
// ============================================================

const QUESTS = {
  atomic: {
    id: 'atomic',
    name: 'The Atomic Spire',
    subtitle: 'Realm of Structure & Periodicity',
    icon: Atom,
    color: '#7dd3fc',
    accent: '#0ea5e9',
    lore: 'The Spire holds the secrets of the elements. Master electron configurations, periodic trends, and quantum numbers to ascend.',
    tiers: {
      apprentice: [
        { q: 'How many protons does a neutral atom of carbon-14 have?', choices: ['6', '8', '14', '12'], correct: 0, explain: 'Atomic number = number of protons. Carbon is element 6, so any carbon atom (any isotope) has 6 protons. The "14" is the mass number (protons + neutrons).', yt: 'protons neutrons isotopes basics' },
        { q: 'Which subatomic particle has a negative charge?', choices: ['Proton', 'Neutron', 'Electron', 'Nucleus'], correct: 2, explain: 'Electrons carry a charge of −1. Protons are +1, neutrons are 0, and the nucleus contains protons and neutrons.', yt: 'subatomic particles charges' },
        { q: 'What group of the periodic table contains the noble gases?', choices: ['Group 1', 'Group 17', 'Group 18', 'Group 2'], correct: 2, explain: 'Group 18 (the rightmost column) contains He, Ne, Ar, Kr, Xe, Rn. Their full valence shells make them famously unreactive.', yt: 'noble gases group 18 periodic table' },
        { q: 'How many valence electrons does oxygen have?', choices: ['2', '4', '6', '8'], correct: 2, explain: 'Oxygen is in Group 16 (or 6A). Main-group valence count = group number (or last digit for groups 13–18). Oxygen: 6 valence electrons.', yt: 'valence electrons oxygen group 16' },
        { q: 'An ion with 11 protons and 10 electrons has what charge?', choices: ['−1', '+1', '+2', '0'], correct: 1, explain: 'Charge = protons − electrons = 11 − 10 = +1. This is Na⁺, the sodium cation, formed when sodium loses one electron.', yt: 'ion charge protons electrons sodium' },
      ],
      journeyman: [
        { q: 'What is the ground-state electron configuration of a neutral iron atom (Z=26)?', choices: ['[Ar] 4s² 3d⁶', '[Ar] 3d⁸', '[Ar] 4s¹ 3d⁷', '[Kr] 4s² 3d⁶'], correct: 0, explain: 'Iron has 26 electrons. After argon (18 e⁻), the 4s subshell fills before 3d (Aufbau), giving 4s² 3d⁶. The exception cases (Cr, Cu) involve half-filled or fully-filled stability — Fe is not one of them.', yt: 'iron electron configuration aufbau' },
        { q: 'Across a period (left to right), atomic radius generally:', choices: ['Increases due to more electrons', 'Decreases due to greater effective nuclear charge', 'Stays constant', 'Increases then decreases'], correct: 1, explain: 'Effective nuclear charge (Z_eff) increases across a period while electrons enter the same shell. Stronger pull from the nucleus contracts the electron cloud, so radius shrinks.', yt: 'periodic trends atomic radius' },
        { q: 'Which element has the highest first ionization energy?', choices: ['Lithium', 'Fluorine', 'Neon', 'Sodium'], correct: 2, explain: 'IE generally increases up and right across the periodic table. Neon is upper-right and has a complete octet, making removal of an electron extremely energy-costly.', yt: 'ionization energy trends periodic table' },
        { q: 'An isotope has 17 protons and 20 neutrons. What is it?', choices: ['³⁷Cl', '³⁵Cl', '³⁷Ar', '²⁰Ne'], correct: 0, explain: 'Protons = atomic number = 17 → chlorine. Mass number = protons + neutrons = 17 + 20 = 37. So this is chlorine-37 (³⁷Cl).', yt: 'isotope notation protons neutrons mass number' },
        { q: 'Which has the largest atomic radius?', choices: ['Na', 'K', 'Mg', 'Al'], correct: 1, explain: 'Atomic radius increases down a group (more electron shells). Potassium (K) is below sodium (Na) and to the left of Mg/Al, giving it the largest radius of these four.', yt: 'atomic radius trend down group' },
      ],
      archmage: [
        { q: 'Which set of quantum numbers is NOT allowed?', choices: ['n=3, ℓ=2, mℓ=−2', 'n=2, ℓ=1, mℓ=0', 'n=2, ℓ=2, mℓ=0', 'n=4, ℓ=0, mℓ=0'], correct: 2, explain: 'The angular momentum quantum number ℓ must satisfy 0 ≤ ℓ ≤ n−1. For n=2, ℓ can only be 0 or 1, never 2. So n=2, ℓ=2 is forbidden.', yt: 'quantum numbers rules allowed values' },
        { q: 'The actual electron configuration of Cr (Z=24) is:', choices: ['[Ar] 4s² 3d⁴', '[Ar] 4s¹ 3d⁵', '[Ar] 3d⁶', '[Ar] 4s² 3d³ 4p¹'], correct: 1, explain: 'Chromium is a famous Aufbau exception. A half-filled 3d⁵ configuration is unusually stable, so one 4s electron is "promoted" to give 4s¹ 3d⁵. Copper does the same trick (4s¹ 3d¹⁰).', yt: 'chromium copper electron configuration exceptions' },
        { q: 'How many unpaired electrons are in a ground-state nitrogen atom?', choices: ['0', '1', '2', '3'], correct: 3, explain: 'Nitrogen: 1s² 2s² 2p³. Hund\'s rule says the three 2p electrons each occupy a separate orbital with parallel spins → 3 unpaired electrons. This is why N is paramagnetic.', yt: 'hund rule nitrogen unpaired electrons' },
        { q: 'Which transition is associated with emission of visible light in hydrogen (Balmer series)?', choices: ['n=∞ → n=1', 'n=3 → n=2', 'n=2 → n=1', 'n=1 → n=2'], correct: 1, explain: 'The Balmer series has electrons falling to n=2 from higher levels and emits in the visible range. n=3 → n=2 is the famous red H-alpha line. Lyman (to n=1) is UV; Paschen (to n=3) is IR.', yt: 'balmer series hydrogen emission lines' },
        { q: 'Which species is isoelectronic with neon AND has the smallest radius?', choices: ['F⁻', 'Na⁺', 'Mg²⁺', 'O²⁻'], correct: 2, explain: 'All listed ions have 10 electrons (isoelectronic with Ne). With the same electrons, smallest radius = highest nuclear charge. Mg²⁺ has 12 protons pulling on 10 electrons — the strongest pull, smallest ion.', yt: 'isoelectronic species ionic radius trend' },
      ]
    }
  },

  bonding: {
    id: 'bonding',
    name: 'The Molecular Forge',
    subtitle: 'Realm of Bonds & Geometry',
    icon: Sparkles,
    color: '#c4b5fd',
    accent: '#8b5cf6',
    lore: 'Atoms gather here to forge bonds. Master Lewis structures, VSEPR geometry, and intermolecular forces to shape matter itself.',
    tiers: {
      apprentice: [
        { q: 'What type of bond forms between Na and Cl in NaCl?', choices: ['Covalent', 'Ionic', 'Metallic', 'Hydrogen'], correct: 1, explain: 'Sodium (a metal) transfers an electron to chlorine (a nonmetal), forming Na⁺ and Cl⁻. The electrostatic attraction between oppositely charged ions is an ionic bond. Metal + nonmetal → ionic.', yt: 'ionic bond NaCl formation' },
        { q: 'A covalent bond involves:', choices: ['Transfer of electrons', 'Sharing of electrons', 'Loss of protons', 'Magnetic attraction'], correct: 1, explain: 'Covalent bonds form when two atoms (usually nonmetals) share electron pairs. Transfer is ionic; covalent is sharing. Each shared pair counts as one bond.', yt: 'covalent bond electron sharing basics' },
        { q: 'Which molecule has a polar bond?', choices: ['H₂', 'O₂', 'HCl', 'N₂'], correct: 2, explain: 'A polar bond requires different electronegativities. H and Cl differ significantly in electronegativity, so H–Cl is polar. The other three are diatomic molecules of identical atoms — purely nonpolar bonds.', yt: 'polar covalent bond electronegativity' },
        { q: 'How many bonds does carbon typically form?', choices: ['2', '3', '4', '6'], correct: 2, explain: 'Carbon has 4 valence electrons and "wants" 4 more to reach an octet. It almost always forms 4 covalent bonds, which is why organic chemistry is so rich.', yt: 'carbon four bonds octet rule' },
        { q: 'A water molecule (H₂O) is best described as:', choices: ['Linear and nonpolar', 'Bent and polar', 'Tetrahedral and nonpolar', 'Trigonal planar and polar'], correct: 1, explain: 'Water has 2 bonded H atoms and 2 lone pairs on O — a bent shape. The O–H bonds are polar, and the geometry doesn\'t cancel them out, so the molecule is polar overall.', yt: 'water polar bent geometry' },
      ],
      journeyman: [
        { q: 'What is the molecular geometry of NH₃?', choices: ['Tetrahedral', 'Trigonal pyramidal', 'Trigonal planar', 'Bent'], correct: 1, explain: 'NH₃ has 4 electron domains around N (3 bonds + 1 lone pair). The electron geometry is tetrahedral, but molecular geometry — which only counts atoms — is trigonal pyramidal because the lone pair pushes the H atoms downward.', yt: 'NH3 molecular geometry VSEPR' },
        { q: 'Which molecule is nonpolar despite having polar bonds?', choices: ['H₂O', 'NH₃', 'CO₂', 'HCl'], correct: 2, explain: 'CO₂ is linear (O=C=O). The two C=O bond dipoles point in opposite directions and cancel exactly, giving zero net dipole moment — a nonpolar molecule made of polar bonds.', yt: 'CO2 polar nonpolar dipole cancellation' },
        { q: 'Which intermolecular force is strongest in liquid HF?', choices: ['London dispersion', 'Dipole-dipole', 'Hydrogen bonding', 'Ion-dipole'], correct: 2, explain: 'HF has H bonded to F (one of N, O, F — the hydrogen-bonding trio). This creates hydrogen bonds, which are unusually strong dipole interactions and dominate over plain dipole-dipole or dispersion forces here.', yt: 'hydrogen bonding HF intermolecular forces' },
        { q: 'How many sigma and pi bonds are in ethylene (C₂H₄)?', choices: ['5 σ, 0 π', '4 σ, 1 π', '5 σ, 1 π', '6 σ, 0 π'], correct: 2, explain: 'Ethylene has C=C (1 σ + 1 π) and four C–H single bonds (4 σ). Total: 5 sigma bonds and 1 pi bond. Every double bond contributes exactly one σ and one π.', yt: 'ethylene sigma pi bonds counting' },
        { q: 'The shape of CH₄ is:', choices: ['Square planar', 'Trigonal pyramidal', 'Tetrahedral', 'Linear'], correct: 2, explain: 'Methane has 4 bonding pairs and 0 lone pairs around C. Four electron domains → tetrahedral geometry with 109.5° bond angles. The classic VSEPR archetype.', yt: 'methane tetrahedral geometry VSEPR' },
      ],
      archmage: [
        { q: 'What hybridization is the central atom in SF₆?', choices: ['sp³', 'sp³d', 'sp³d²', 'sp²'], correct: 2, explain: 'SF₆ has 6 bonding domains around S in an octahedral arrangement. Six domains require six hybrid orbitals: sp³d² (one s + three p + two d).', yt: 'SF6 hybridization sp3d2 octahedral' },
        { q: 'Which has the highest boiling point?', choices: ['CH₄', 'CCl₄', 'CHCl₃', 'CH₃Cl'], correct: 1, explain: 'All are nonpolar or weakly polar, so dispersion forces dominate. Dispersion scales with molar mass / electron count. CCl₄ (154 g/mol) has the most electrons and largest dispersion forces, hence the highest BP.', yt: 'london dispersion forces boiling point molar mass' },
        { q: 'In the molecule XeF₄, what is the molecular geometry?', choices: ['Tetrahedral', 'Square planar', 'Seesaw', 'Octahedral'], correct: 1, explain: 'XeF₄ has 6 electron domains (4 bonds + 2 lone pairs). The lone pairs occupy axial positions opposite each other, leaving 4 fluorines in a square plane. Geometry: square planar.', yt: 'XeF4 square planar VSEPR lone pairs' },
        { q: 'For the resonance structures of NO₃⁻, the average bond order between N and any O is:', choices: ['1', '1.33', '1.5', '2'], correct: 1, explain: 'Nitrate has 3 equivalent resonance structures: one N=O and two N–O. Average bond order = (1 double + 2 singles) / 3 oxygens = (2+1+1)/3 = 1.33.', yt: 'nitrate resonance bond order calculation' },
        { q: 'Which molecule contains a polar bond but is itself nonpolar due to symmetry?', choices: ['SO₂', 'BF₃', 'NH₃', 'H₂S'], correct: 1, explain: 'BF₃ is trigonal planar with three identical, symmetric B–F bonds. The bond dipoles point at 120° apart and cancel exactly. SO₂ (bent), NH₃ (pyramidal), and H₂S (bent) all have asymmetric geometry → polar.', yt: 'BF3 trigonal planar nonpolar symmetry' },
      ]
    }
  },

  stoich: {
    id: 'stoich',
    name: 'The Reaction Crucible',
    subtitle: 'Realm of Stoichiometry & Reactions',
    icon: FlaskConical,
    color: '#fcd34d',
    accent: '#f59e0b',
    lore: 'In the Crucible, matter transforms. Balance equations, calculate yields, and master limiting reagents to command the reactions.',
    tiers: {
      apprentice: [
        { q: 'What is the molar mass of water (H₂O)? (H=1, O=16)', choices: ['16 g/mol', '17 g/mol', '18 g/mol', '20 g/mol'], correct: 2, explain: 'Molar mass = sum of atomic masses. H₂O = 2(1) + 16 = 18 g/mol. This is a number worth memorizing — water shows up everywhere.', yt: 'molar mass water calculation' },
        { q: 'How many moles are in 36 g of water? (Molar mass = 18 g/mol)', choices: ['0.5 mol', '1 mol', '2 mol', '36 mol'], correct: 2, explain: 'Moles = mass / molar mass = 36 / 18 = 2 mol. The unit g/mol literally means grams per mole, so dividing grams by it gives moles.', yt: 'moles mass conversion molar' },
        { q: 'Avogadro\'s number is approximately:', choices: ['6.02 × 10²³', '3.14 × 10⁸', '9.81 × 10⁻³', '1.60 × 10⁻¹⁹'], correct: 0, explain: '6.022 × 10²³ — the number of particles in one mole. It\'s the bridge between the atomic scale and the lab scale.', yt: 'avogadro number mole concept' },
        { q: 'Balance: __H₂ + __O₂ → __H₂O. The coefficients are:', choices: ['1, 1, 1', '2, 1, 2', '2, 2, 2', '1, 2, 1'], correct: 1, explain: '2H₂ + O₂ → 2H₂O. Two H₂ gives 4 H atoms; one O₂ gives 2 O atoms. Right side: 2 H₂O has 4 H and 2 O. Balanced.', yt: 'balancing simple combustion hydrogen' },
        { q: 'What type of reaction is: 2 Na + Cl₂ → 2 NaCl?', choices: ['Decomposition', 'Single replacement', 'Synthesis (combination)', 'Combustion'], correct: 2, explain: 'Two or more reactants combine into one product → synthesis (combination) reaction. The pattern A + B → AB is the giveaway.', yt: 'reaction types synthesis combination' },
      ],
      journeyman: [
        { q: 'Balance: __ C₃H₈ + __ O₂ → __ CO₂ + __ H₂O. The coefficients are:', choices: ['1, 5, 3, 4', '1, 3, 3, 4', '2, 7, 6, 8', '1, 4, 3, 4'], correct: 0, explain: 'Propane combustion: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. Three carbons → 3 CO₂. Eight hydrogens → 4 H₂O. Right side has 6+4=10 oxygens → 5 O₂ on the left.', yt: 'balancing combustion propane equation' },
        { q: 'How many moles of H₂O form when 4.0 mol of H₂ react with excess O₂? (2H₂ + O₂ → 2H₂O)', choices: ['2.0 mol', '4.0 mol', '8.0 mol', '1.0 mol'], correct: 1, explain: 'The mole ratio of H₂ to H₂O is 2:2, or 1:1. So 4.0 mol H₂ produces 4.0 mol H₂O. Excess O₂ means oxygen is not the limiting reagent.', yt: 'stoichiometry mole ratio limiting reagent' },
        { q: 'In the reaction N₂ + 3H₂ → 2NH₃, if you start with 2 mol N₂ and 3 mol H₂, the limiting reagent is:', choices: ['N₂', 'H₂', 'Both equally', 'Cannot determine'], correct: 1, explain: '2 mol N₂ would need 6 mol H₂ (3:1 ratio), but only 3 mol H₂ is available. Hydrogen runs out first → H₂ is limiting. Only 1 mol N₂ actually reacts.', yt: 'limiting reagent ammonia synthesis' },
        { q: 'What is the percent composition of nitrogen in NH₄NO₃? (N=14, H=1, O=16)', choices: ['17.5%', '35.0%', '52.5%', '60.0%'], correct: 1, explain: 'Molar mass of NH₄NO₃ = 14+4(1)+14+3(16) = 80 g/mol. Mass of N = 2(14) = 28 g. Percent N = 28/80 = 35.0%.', yt: 'percent composition ammonium nitrate' },
        { q: 'A reaction produces 4.5 g of product, but theoretical yield is 6.0 g. What is the percent yield?', choices: ['67%', '75%', '133%', '25%'], correct: 1, explain: 'Percent yield = (actual / theoretical) × 100% = (4.5 / 6.0) × 100% = 75%. Anything above 100% indicates an error or impure product.', yt: 'percent yield calculation chemistry' },
      ],
      archmage: [
        { q: 'A compound is 40.0% C, 6.7% H, and 53.3% O by mass. What is the empirical formula?', choices: ['CHO', 'CH₂O', 'C₂H₄O', 'CH₂O₂'], correct: 1, explain: 'Assume 100 g: 40 g C, 6.7 g H, 53.3 g O. Convert to moles: 40/12=3.33, 6.7/1=6.67, 53.3/16=3.33. Ratio: 1:2:1. Empirical formula = CH₂O. (This is the formaldehyde / glucose ratio.)', yt: 'empirical formula percent composition' },
        { q: 'When 25.0 g of CaCO₃ is heated, how much CaO forms? (CaCO₃ → CaO + CO₂; CaCO₃=100, CaO=56 g/mol)', choices: ['25.0 g', '14.0 g', '11.0 g', '56.0 g'], correct: 1, explain: 'Moles CaCO₃ = 25.0/100 = 0.25 mol. Mole ratio is 1:1, so 0.25 mol CaO forms. Mass = 0.25 × 56 = 14.0 g.', yt: 'thermal decomposition calcium carbonate stoichiometry' },
        { q: 'For 4 NH₃ + 5 O₂ → 4 NO + 6 H₂O, if 2.0 mol NH₃ reacts with 3.0 mol O₂, the limiting reagent is:', choices: ['NH₃', 'O₂', 'Both', 'Neither'], correct: 0, explain: 'Check how much O₂ each reactant needs: 2.0 mol NH₃ × (5 O₂ / 4 NH₃) = 2.5 mol O₂ required. We have 3.0 mol O₂ available — more than 2.5, so O₂ is in excess. NH₃ runs out first → NH₃ is the limiting reagent.', yt: 'limiting reagent ammonia oxidation' },
        { q: 'What volume of 0.250 M HCl is needed to neutralize 25.0 mL of 0.100 M NaOH?', choices: ['10.0 mL', '12.5 mL', '25.0 mL', '62.5 mL'], correct: 0, explain: 'Moles NaOH = 0.0250 L × 0.100 M = 0.00250 mol. 1:1 ratio with HCl, so 0.00250 mol HCl needed. Volume = moles/M = 0.00250 / 0.250 = 0.0100 L = 10.0 mL.', yt: 'titration calculation HCl NaOH' },
        { q: 'A 5.00 g sample of an unknown gas occupies 4.10 L at STP. The molar mass is approximately:', choices: ['22.4 g/mol', '27.3 g/mol', '44.0 g/mol', '5.00 g/mol'], correct: 1, explain: 'At STP, 1 mol of any ideal gas = 22.4 L. Moles = 4.10/22.4 = 0.183 mol. Molar mass = mass/moles = 5.00 / 0.183 ≈ 27.3 g/mol.', yt: 'molar mass gas STP molar volume' },
      ]
    }
  },

  thermo: {
    id: 'thermo',
    name: 'The Thermal Sanctum',
    subtitle: 'Realm of Energy & Kinetics',
    icon: Flame,
    color: '#fca5a5',
    accent: '#ef4444',
    lore: 'Heat flows, reactions race. Master enthalpy, entropy, free energy, and rate laws to bend energy itself to your will.',
    tiers: {
      apprentice: [
        { q: 'An exothermic reaction:', choices: ['Absorbs heat from surroundings', 'Releases heat to surroundings', 'Has positive ΔH', 'Cannot occur spontaneously'], correct: 1, explain: 'Exo = "out". The reaction releases heat; surroundings warm up; ΔH is negative. Combustion, neutralization, and freezing are everyday exothermic processes.', yt: 'exothermic endothermic basics' },
        { q: 'Which has the highest entropy?', choices: ['Solid water', 'Liquid water', 'Water vapor', 'All equal'], correct: 2, explain: 'Entropy (disorder) increases gas > liquid > solid. Gas molecules have the most freedom of motion and the most possible arrangements.', yt: 'entropy phase changes states matter' },
        { q: 'What does ΔH represent?', choices: ['Change in entropy', 'Change in enthalpy (heat at constant P)', 'Change in temperature', 'Activation energy'], correct: 1, explain: 'ΔH is the change in enthalpy — the heat absorbed or released at constant pressure. Negative ΔH = exothermic; positive ΔH = endothermic.', yt: 'enthalpy delta H definition' },
        { q: 'Adding a catalyst to a reaction:', choices: ['Increases the rate', 'Decreases the rate', 'Shifts equilibrium', 'Changes ΔH'], correct: 0, explain: 'Catalysts speed up reactions by lowering activation energy. They don\'t change ΔH, don\'t shift equilibrium position, and aren\'t consumed in the reaction.', yt: 'catalyst basics rate' },
        { q: 'Which factor does NOT affect reaction rate?', choices: ['Temperature', 'Concentration', 'The sign of ΔH', 'Surface area'], correct: 2, explain: 'Whether a reaction is exothermic or endothermic doesn\'t determine its speed. Some explosive (very exothermic) reactions are slow; some endothermic ones are fast. Rate is about activation energy, not ΔH.', yt: 'factors affecting reaction rate' },
      ],
      journeyman: [
        { q: 'A reaction has ΔH < 0 and ΔS > 0. The reaction is:', choices: ['Spontaneous at all temperatures', 'Nonspontaneous at all temperatures', 'Spontaneous only at high T', 'Spontaneous only at low T'], correct: 0, explain: 'ΔG = ΔH − TΔS. With ΔH negative and ΔS positive, −TΔS is also negative at any positive T. So ΔG is always negative → spontaneous at all temperatures.', yt: 'gibbs free energy spontaneity temperature' },
        { q: 'For a first-order reaction with rate constant k = 0.050 s⁻¹, the half-life is:', choices: ['0.050 s', '13.9 s', '20 s', '0.693 s'], correct: 1, explain: 'For first-order kinetics, t₁/₂ = 0.693/k = 0.693 / 0.050 ≈ 13.9 s. First-order half-lives are independent of starting concentration — a defining feature.', yt: 'first order half life rate constant' },
        { q: 'Increasing temperature generally increases reaction rate because:', choices: ['Activation energy decreases', 'More molecules have enough energy to overcome Ea', 'The equilibrium shifts forward', 'Catalysts become more active'], correct: 1, explain: 'Temperature does not change Eₐ. Per the Maxwell-Boltzmann distribution, higher T means a larger fraction of molecules possess kinetic energy ≥ Eₐ, so successful collisions become more frequent.', yt: 'arrhenius equation temperature reaction rate' },
        { q: 'Which is true for an exothermic reaction?', choices: ['Products have higher energy than reactants', 'ΔH is positive', 'Heat is released to surroundings', 'It cannot occur spontaneously'], correct: 2, explain: 'Exothermic literally means "heat out." The system releases heat to the surroundings, products are lower in energy than reactants, and ΔH is negative. Combustion is the classic example.', yt: 'exothermic endothermic enthalpy diagram' },
        { q: 'A catalyst speeds up a reaction by:', choices: ['Increasing reactant concentration', 'Lowering activation energy', 'Raising temperature', 'Shifting equilibrium toward products'], correct: 1, explain: 'A catalyst provides an alternate pathway with lower Eₐ, so more collisions succeed. Importantly, it does NOT shift equilibrium — it speeds both forward and reverse rates equally.', yt: 'catalyst activation energy mechanism' },
      ],
      archmage: [
        { q: 'For a reaction with ΔH = +50 kJ/mol and ΔS = +100 J/(mol·K), at what temperature does it become spontaneous?', choices: ['T > 200 K', 'T > 500 K', 'T > 5000 K', 'Never spontaneous'], correct: 1, explain: 'ΔG = 0 at the crossover: T = ΔH/ΔS = 50000 J / 100 J/K = 500 K. Above 500 K, ΔG < 0 (spontaneous); below, nonspontaneous.', yt: 'gibbs free energy temperature crossover spontaneity' },
        { q: 'For a second-order reaction A → products, the integrated rate law is:', choices: ['ln[A] = ln[A]₀ − kt', '1/[A] = 1/[A]₀ + kt', '[A] = [A]₀ − kt', '[A]² = [A]₀² − kt'], correct: 1, explain: 'Second-order: 1/[A] − 1/[A]₀ = kt. Plot of 1/[A] vs. time is linear with slope k. (First-order is ln[A] vs. t; zero-order is [A] vs. t.)', yt: 'second order integrated rate law' },
        { q: 'Hess\'s Law allows you to:', choices: ['Predict reaction rates', 'Calculate ΔH for a reaction by adding ΔH of steps', 'Determine Ka from Kw', 'Find equilibrium constants from concentrations'], correct: 1, explain: 'Hess\'s Law: enthalpy is a state function, so ΔH for an overall reaction = sum of ΔH for any sequence of steps that connects reactants to products. Lets you compute hard-to-measure ΔH values.', yt: 'hess law enthalpy calculation' },
        { q: 'For the rate law rate = k[A][B]², the overall order is:', choices: ['1', '2', '3', '4'], correct: 2, explain: 'Overall order = sum of individual orders = 1 + 2 = 3. The reaction is third-order overall: first-order in A, second-order in B.', yt: 'reaction order rate law definition' },
        { q: 'Doubling [A] quadruples the rate of a reaction. The order in A is:', choices: ['0', '1', '2', '3'], correct: 2, explain: 'If rate ∝ [A]ⁿ and doubling [A] gives 4× rate: 2ⁿ = 4 → n = 2. The reaction is second-order in A.', yt: 'determining reaction order from data' },
      ]
    }
  },

  acidbase: {
    id: 'acidbase',
    name: 'The Equilibrium Vault',
    subtitle: 'Realm of Acids, Bases & Balance',
    icon: Droplet,
    color: '#86efac',
    accent: '#10b981',
    lore: 'The Vault holds the scales of pH and the pulse of equilibrium. Master Ka, Kb, buffers, and Le Chatelier to find perfect balance.',
    tiers: {
      apprentice: [
        { q: 'What is the pH of pure water at 25°C?', choices: ['0', '7', '14', '1'], correct: 1, explain: 'Pure water at 25°C: [H⁺] = 10⁻⁷ M, so pH = 7. This defines neutral. Acidic = pH < 7; basic = pH > 7.', yt: 'pH scale neutral water basics' },
        { q: 'A solution with pH = 3 is:', choices: ['Strongly basic', 'Weakly basic', 'Acidic', 'Neutral'], correct: 2, explain: 'pH < 7 is acidic. pH = 3 means [H⁺] = 10⁻³ M, fairly acidic — about the pH of vinegar or a soft drink.', yt: 'pH scale acidic basic' },
        { q: 'Which is a strong acid?', choices: ['Acetic acid', 'HCl', 'NH₃', 'Citric acid'], correct: 1, explain: 'HCl is one of the classic strong acids (HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄). Strong acids fully dissociate in water. Acetic and citric acids are weak.', yt: 'strong acids list memorize' },
        { q: 'According to Brønsted-Lowry, an acid is a:', choices: ['Proton donor', 'Proton acceptor', 'Electron donor', 'Electron acceptor'], correct: 0, explain: 'Brønsted-Lowry: acid donates H⁺ (proton); base accepts H⁺. (Lewis definition is broader: acid = electron-pair acceptor.)', yt: 'bronsted lowry acid base proton donor' },
        { q: 'What is the conjugate base of HCl?', choices: ['H₃O⁺', 'OH⁻', 'Cl⁻', 'H₂O'], correct: 2, explain: 'When HCl donates H⁺, what remains is Cl⁻. The conjugate base is the acid minus a proton.', yt: 'conjugate base HCl simple' },
      ],
      journeyman: [
        { q: 'What is the pH of a 0.010 M HCl solution?', choices: ['1.0', '2.0', '12.0', '0.010'], correct: 1, explain: 'HCl is a strong acid, fully dissociated. [H⁺] = 0.010 M = 10⁻² M. pH = −log(10⁻²) = 2.0. For strong acids, pH = −log(concentration) directly.', yt: 'pH calculation strong acid HCl' },
        { q: 'A buffer resists pH changes most effectively when:', choices: ['It contains only a strong acid', '[HA] = [A⁻] (equal concentrations)', 'pH is far from pKa', 'Temperature is very low'], correct: 1, explain: 'By the Henderson-Hasselbalch equation, buffer capacity is maximum when [HA] = [A⁻], which means pH = pKa. The buffer can absorb either added acid or base most effectively at this midpoint.', yt: 'buffer capacity henderson hasselbalch pKa' },
        { q: 'For the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g), increasing pressure will:', choices: ['Shift toward reactants', 'Shift toward products', 'Have no effect', 'Stop the reaction'], correct: 1, explain: 'Le Chatelier: increasing pressure shifts equilibrium toward the side with fewer moles of gas. Reactants = 4 mol gas; products = 2 mol gas. So the equilibrium shifts toward products (NH₃).', yt: 'le chatelier pressure equilibrium ammonia' },
        { q: 'Which is the conjugate base of HSO₄⁻?', choices: ['H₂SO₄', 'SO₄²⁻', 'SO₃²⁻', 'HSO₃⁻'], correct: 1, explain: 'A conjugate base is what remains after an acid donates one proton. HSO₄⁻ losing one H⁺ gives SO₄²⁻. The charge becomes more negative by 1 — always the signature of losing a proton.', yt: 'conjugate acid base pairs sulfate' },
        { q: 'A weak acid HA has Ka = 1.0 × 10⁻⁵. What is the approximate pH of a 0.10 M solution?', choices: ['1.0', '3.0', '5.0', '7.0'], correct: 1, explain: 'For a weak acid: [H⁺] ≈ √(Ka × C) = √(10⁻⁵ × 0.10) = √(10⁻⁶) = 10⁻³ M. So pH ≈ 3.0. The approximation works when Ka is small relative to initial concentration.', yt: 'weak acid pH calculation Ka approximation' },
      ],
      archmage: [
        { q: 'For a buffer made from 0.20 M acetic acid (pKa = 4.74) and 0.10 M sodium acetate, what is the pH?', choices: ['4.44', '4.74', '5.04', '5.34'], correct: 0, explain: 'Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = 4.74 + log(0.10/0.20) = 4.74 + log(0.5) = 4.74 − 0.30 = 4.44.', yt: 'henderson hasselbalch buffer pH calculation' },
        { q: 'For the equilibrium 2 SO₂ + O₂ ⇌ 2 SO₃ (exothermic), increasing temperature will:', choices: ['Shift right, K increases', 'Shift left, K decreases', 'No effect on K', 'Shift right, K decreases'], correct: 1, explain: 'For exothermic reactions, heat is a "product." Le Chatelier: adding heat shifts equilibrium toward reactants (left). K decreases with rising T for exothermic reactions.', yt: 'le chatelier temperature exothermic equilibrium constant' },
        { q: 'The Ksp of AgCl is 1.8 × 10⁻¹⁰. The molar solubility of AgCl in pure water is:', choices: ['1.3 × 10⁻⁵ M', '1.8 × 10⁻¹⁰ M', '9.0 × 10⁻¹¹ M', '1.3 × 10⁻⁵⁰ M'], correct: 0, explain: 'AgCl ⇌ Ag⁺ + Cl⁻. If solubility = s, then Ksp = s². So s = √(1.8 × 10⁻¹⁰) ≈ 1.3 × 10⁻⁵ M.', yt: 'Ksp molar solubility silver chloride' },
        { q: 'What is the pH at the equivalence point of a strong acid–strong base titration?', choices: ['<7', '7', '>7', 'Cannot determine'], correct: 1, explain: 'Strong acid + strong base produces a salt of a strong acid and strong base (e.g., NaCl), which doesn\'t hydrolyze. So the equivalence point pH is exactly 7. (Weak-acid/strong-base would give pH > 7.)', yt: 'titration equivalence point strong acid base' },
        { q: 'For NH₃ (Kb = 1.8 × 10⁻⁵), what is Ka of the conjugate acid NH₄⁺?', choices: ['1.8 × 10⁻⁵', '5.6 × 10⁻¹⁰', '1.0 × 10⁻⁷', '1.8 × 10⁻⁹'], correct: 1, explain: 'Ka × Kb = Kw = 10⁻¹⁴ for a conjugate pair. Ka = 10⁻¹⁴ / (1.8 × 10⁻⁵) ≈ 5.6 × 10⁻¹⁰.', yt: 'conjugate acid base Ka Kb relationship Kw' },
      ]
    }
  },

  organic: {
    id: 'organic',
    name: 'The Verdant Lattice',
    subtitle: 'Realm of Organic & Solutions',
    icon: Leaf,
    color: '#a3e635',
    accent: '#65a30d',
    lore: 'Carbon weaves itself into infinite forms. Master functional groups, isomers, solutions, and colligative properties to walk the living lattice.',
    tiers: {
      apprentice: [
        { q: 'Which functional group is characteristic of an alcohol?', choices: ['–COOH', '–OH', '–NH₂', '–CHO'], correct: 1, explain: 'Alcohols have an –OH (hydroxyl) group attached to a carbon. Examples: ethanol (CH₃CH₂OH), methanol (CH₃OH).', yt: 'functional groups alcohol hydroxyl' },
        { q: 'How many carbons are in butane?', choices: ['2', '3', '4', '5'], correct: 2, explain: 'The alkane prefixes: meth (1), eth (2), prop (3), but (4), pent (5), hex (6). Butane = 4 carbons (C₄H₁₀).', yt: 'alkane naming prefixes carbon count' },
        { q: 'Which is a saturated hydrocarbon?', choices: ['C₂H₂', 'C₂H₄', 'C₂H₆', 'C₆H₆'], correct: 2, explain: 'Saturated = only single C–C bonds (alkanes). C₂H₆ (ethane) is an alkane. C₂H₄ has a double bond, C₂H₂ a triple bond, C₆H₆ (benzene) is aromatic.', yt: 'saturated unsaturated hydrocarbons alkanes' },
        { q: 'A solution\'s solute is the:', choices: ['Substance present in larger amount', 'Substance being dissolved', 'Container holding the mixture', 'Energy released'], correct: 1, explain: 'Solute = the dissolved substance (smaller amount); solvent = what it dissolves in (larger amount). In saltwater, salt is solute, water is solvent.', yt: 'solute solvent solution definition' },
        { q: 'What does "molarity" measure?', choices: ['Moles of solute per liter of solution', 'Grams of solute per liter', 'Moles of solute per kg of solvent', 'Volume of solute per volume of solvent'], correct: 0, explain: 'Molarity (M) = mol solute / L solution. Don\'t confuse with molality (mol/kg solvent) — that uses the solvent\'s mass and is what\'s used in colligative property calculations.', yt: 'molarity definition calculation' },
      ],
      journeyman: [
        { q: 'What is the IUPAC name for CH₃CH(CH₃)CH₂CH₃?', choices: ['Pentane', 'Isobutane', '2-Methylbutane', 'Neopentane'], correct: 2, explain: 'Longest chain: 4 carbons (butane). Branch: a methyl group on carbon 2. Name: 2-methylbutane. (Also called isopentane.)', yt: 'IUPAC nomenclature alkane methylbutane' },
        { q: 'Which pair are structural isomers?', choices: ['Diamond and graphite', 'Butane and 2-methylpropane', 'Water and ice', 'Oxygen and ozone'], correct: 1, explain: 'Structural isomers have the same molecular formula but different connectivity. Both butane and 2-methylpropane are C₄H₁₀, but the carbons connect differently.', yt: 'structural isomers butane' },
        { q: 'How many grams of NaCl are in 250 mL of 0.40 M NaCl? (NaCl = 58.5 g/mol)', choices: ['1.5 g', '5.85 g', '14.6 g', '23.4 g'], correct: 1, explain: 'Moles = M × V = 0.40 × 0.250 = 0.10 mol. Mass = 0.10 × 58.5 = 5.85 g.', yt: 'molarity grams calculation NaCl' },
        { q: 'Which functional group defines a carboxylic acid?', choices: ['–OH', '–C=O', '–COOH', '–NH₂'], correct: 2, explain: 'Carboxylic acids have –COOH (a carbonyl + hydroxyl on the same C). Examples: acetic acid (CH₃COOH), formic acid (HCOOH). It\'s the most acidic common organic group.', yt: 'carboxylic acid functional group COOH' },
        { q: 'Adding a nonvolatile solute to a solvent will:', choices: ['Raise the freezing point', 'Lower the boiling point', 'Lower the freezing point', 'Have no effect'], correct: 2, explain: 'Colligative property: nonvolatile solutes lower freezing point and raise boiling point. This is why salt is spread on icy roads (lowers water\'s freezing point below 0°C).', yt: 'colligative properties freezing point depression' },
      ],
      archmage: [
        { q: 'What is the major product of CH₃CH=CH₂ + HBr (Markovnikov addition)?', choices: ['CH₃CH₂CH₂Br', 'CH₃CHBrCH₃', 'CH₃CH=CHBr', 'CH₂BrCH₂CH₃'], correct: 1, explain: 'Markovnikov\'s rule: H adds to the carbon with more Hs already; Br to the one with fewer. Propene + HBr → 2-bromopropane (Br on the middle C, the more-substituted carbon).', yt: 'markovnikov addition HBr propene' },
        { q: 'What is the freezing point of a solution containing 0.50 mol of glucose in 1.0 kg water? (Kf = 1.86 °C/m for water)', choices: ['−0.93 °C', '−1.86 °C', '−0.50 °C', '0 °C'], correct: 0, explain: 'ΔTf = Kf × m × i. Glucose is a nonelectrolyte (i=1). Molality = 0.50 / 1.0 = 0.50 m. ΔTf = 1.86 × 0.50 × 1 = 0.93 °C. New FP = 0 − 0.93 = −0.93 °C.', yt: 'freezing point depression glucose calculation' },
        { q: 'Cis-trans (geometric) isomerism requires:', choices: ['A chiral center', 'Restricted rotation (e.g., a double bond) and two different groups on each carbon', 'Multiple functional groups', 'Different molecular formulas'], correct: 1, explain: 'Geometric isomers exist when rotation is restricted (typically by a C=C or ring) AND each carbon of the constraint bears two different substituents. Otherwise cis/trans labels collapse.', yt: 'cis trans isomers double bond geometric' },
        { q: 'What is the molality of a solution made by dissolving 5.85 g NaCl in 250 g of water? (NaCl = 58.5 g/mol)', choices: ['0.10 m', '0.40 m', '0.025 m', '4.0 m'], correct: 1, explain: 'Moles NaCl = 5.85/58.5 = 0.100 mol. Mass solvent = 0.250 kg. Molality = 0.100 / 0.250 = 0.40 m. Note: molality uses kg of solvent, NOT total mass.', yt: 'molality calculation NaCl water' },
        { q: 'Which compound is most soluble in water?', choices: ['CH₃CH₂CH₂CH₃ (butane)', 'CH₃CH₂OH (ethanol)', 'CCl₄', 'C₆H₆ (benzene)'], correct: 1, explain: '"Like dissolves like." Ethanol has a polar –OH that hydrogen-bonds with water; it\'s miscible. The others are nonpolar and barely soluble in water.', yt: 'like dissolves like solubility ethanol water' },
      ]
    }
  },
};

const QUEST_ORDER = ['atomic', 'bonding', 'stoich', 'thermo', 'acidbase', 'organic'];

// ============================================================
// BOSS — mixed-topic gauntlet (10 questions, drawn from all realms)
// ============================================================

const BOSS_QUESTIONS = [
  { q: 'A 0.050 M HBr solution has a pH of:', choices: ['1.3', '2.0', '0.050', '12.7'], correct: 0, explain: 'HBr is a strong acid: [H⁺] = 0.050 M. pH = −log(0.050) ≈ 1.3.', yt: 'strong acid pH HBr calculation', topic: 'Acids/Bases' },
  { q: 'Hybridization of the central atom in BeCl₂:', choices: ['sp', 'sp²', 'sp³', 'sp³d'], correct: 0, explain: 'BeCl₂ is linear with 2 bonded atoms and no lone pairs on Be → 2 electron domains → sp hybridization.', yt: 'BeCl2 linear sp hybridization', topic: 'Bonding' },
  { q: 'The empirical formula of a compound 52.2% C, 13.0% H, 34.8% O is:', choices: ['CH₂O', 'C₂H₆O', 'C₂H₄O', 'CH₄O'], correct: 1, explain: 'Per 100g: C 52.2/12=4.35, H 13.0/1=13.0, O 34.8/16=2.18. Divide by smallest (2.18): C 2, H 6, O 1 → C₂H₆O (ethanol).', yt: 'empirical formula percent composition ethanol', topic: 'Stoichiometry' },
  { q: 'For 2 A → products, with k = 0.10 M⁻¹s⁻¹ and [A]₀ = 1.0 M, what is the half-life?', choices: ['6.93 s', '10 s', '2.0 s', '0.10 s'], correct: 1, explain: 'Rate units M⁻¹s⁻¹ indicate second-order. For second-order: t₁/₂ = 1/(k[A]₀) = 1/(0.10 × 1.0) = 10 s.', yt: 'second order half life rate constant', topic: 'Kinetics' },
  { q: 'How many unpaired electrons in Fe³⁺ ([Ar] 3d⁵)?', choices: ['1', '3', '5', '0'], correct: 2, explain: 'Fe³⁺ has 3d⁵ configuration. By Hund\'s rule, all 5 electrons occupy separate d orbitals with parallel spins → 5 unpaired electrons. This makes Fe³⁺ strongly paramagnetic.', yt: 'Fe3+ unpaired electrons d5 configuration', topic: 'Atomic Structure' },
  { q: 'Which has the largest lattice energy (most negative)?', choices: ['NaCl', 'MgO', 'KCl', 'NaF'], correct: 1, explain: 'Lattice energy ∝ |q₁q₂|/r. MgO has Mg²⁺ and O²⁻ (charges of ±2 each), so q₁q₂ = 4. The others have ±1 ions (q₁q₂ = 1). Higher charges dominate → MgO is by far the largest.', yt: 'lattice energy charge ionic compounds MgO', topic: 'Bonding' },
  { q: 'Which alkene undergoes hydration to give a tertiary alcohol?', choices: ['Ethene', '2-Methyl-2-butene', '1-Butene', 'Cis-2-butene'], correct: 1, explain: '2-Methyl-2-butene + H₂O (with acid) → 2-methyl-2-butanol (tertiary alcohol) by Markovnikov addition. The OH lands on the more-substituted carbon, which here is tertiary.', yt: 'alkene hydration markovnikov tertiary alcohol', topic: 'Organic' },
  { q: 'For an isothermal expansion of an ideal gas, ΔU is:', choices: ['Positive', 'Negative', 'Zero', 'Equal to ΔH'], correct: 2, explain: 'For an ideal gas, internal energy depends only on temperature. Isothermal = constant T = no change in internal energy → ΔU = 0. (Heat absorbed equals work done by the gas.)', yt: 'isothermal ideal gas internal energy', topic: 'Thermodynamics' },
  { q: 'A buffer with pH = pKa + 1 has [A⁻]/[HA] equal to:', choices: ['1', '0.1', '10', '0'], correct: 2, explain: 'Henderson-Hasselbalch: pH − pKa = log([A⁻]/[HA]). If pH − pKa = 1, then log(ratio) = 1, so ratio = 10. The conjugate base outnumbers the acid 10:1.', yt: 'henderson hasselbalch buffer ratio pKa', topic: 'Equilibrium' },
  { q: 'What is the oxidation state of Mn in KMnO₄?', choices: ['+2', '+4', '+6', '+7'], correct: 3, explain: 'K is +1, each O is −2 (×4 = −8). Sum must equal 0 (neutral compound): +1 + Mn + (−8) = 0 → Mn = +7. Permanganate features Mn at its highest oxidation state, which is why it\'s a powerful oxidizer.', yt: 'oxidation state KMnO4 manganese', topic: 'Reactions' },
];

// ============================================================
// SHOP DATA
// ============================================================

const THEMES = {
  void:     { id: 'void',     name: 'Void Standard',   price: 0,    bg1: '#1a1a2e', bg2: '#08080d', accent: '#fbbf24', desc: 'The default starless dark.' },
  ember:    { id: 'ember',    name: 'Ember Forge',     price: 250,  bg1: '#3d0a0a', bg2: '#0f0505', accent: '#f97316', desc: 'Burnished embers and molten light.' },
  arctic:   { id: 'arctic',   name: 'Arctic Nocturne', price: 250,  bg1: '#0a1f3d', bg2: '#050a0f', accent: '#67e8f9', desc: 'Cool blues, frozen aurora.' },
  meadow:   { id: 'meadow',   name: 'Verdant Meadow',  price: 250,  bg1: '#0f2e1f', bg2: '#050d09', accent: '#86efac', desc: 'Living chlorophyll glow.' },
  twilight: { id: 'twilight', name: 'Twilight Bloom',  price: 500,  bg1: '#2d0a3d', bg2: '#0a0510', accent: '#f0abfc', desc: 'Violet dusk and roses.' },
  goldleaf: { id: 'goldleaf', name: 'Goldleaf Codex',  price: 800,  bg1: '#3d2e0a', bg2: '#0d0a05', accent: '#fde047', desc: 'Illuminated manuscript decadence.' },
};

const TITLES = [
  { id: 'novice',     name: 'Novice Alchemist',    price: 0,    desc: 'Where everyone begins.' },
  { id: 'studious',   name: 'The Studious',        price: 100,  desc: 'For one who reads even the footnotes.' },
  { id: 'flame',      name: 'Keeper of the Flame', price: 200,  desc: 'Tender of the eternal Bunsen.' },
  { id: 'mole',       name: 'Mole Whisperer',      price: 200,  desc: '6.022 × 10²³ friends and counting.' },
  { id: 'orbital',    name: 'Orbital Wanderer',    price: 300,  desc: 'At home in any subshell.' },
  { id: 'catalyst',   name: 'The Catalyst',        price: 350,  desc: 'Lowers everyone\'s activation energy.' },
  { id: 'equilib',    name: 'Le Chatelier\'s Heir',price: 400,  desc: 'Always finds the balance.' },
  { id: 'periodic',   name: 'Periodic Sovereign',  price: 600,  desc: 'Ruler of all eight blocks.' },
  { id: 'transmuter', name: 'The Transmuter',      price: 800,  desc: 'Lead, gold — what\'s the difference?' },
  { id: 'archon',     name: 'Archon of Aether',    price: 1200, desc: 'Spoken of only in whispers.', special: 'all_realms' },
  { id: 'crowned',    name: 'The Crowned',         price: 0,    desc: 'Earned by defeating the Final Trial.', special: 'boss' },
];

// PETS — companion familiars with passive perks
// Perks:
//  - aetherBoost: +X% Aether on correct answers
//  - shield: % chance to absorb a heart loss on wrong answer (per quest, max 1 save)
//  - hint: % chance to dim one wrong answer before you choose
//  - revive: % chance to restore 1 heart when you'd otherwise hit 0
//  - perfectBonus: +X% bonus Aether on perfect runs
const PETS = {
  none:      { id: 'none',      name: 'No Familiar',         price: 0,    Icon: PawPrint, color: '#6b7280', desc: 'Walk the realms alone.', perk: null, perkText: 'No bonuses.' },
  spark:     { id: 'spark',     name: 'Volt-Sprite',         price: 200,  Icon: Zap,      color: '#fbbf24', desc: 'A crackling bead of static. Loves wool socks.',     perk: { aetherBoost: 0.10 }, perkText: '+10% Aether on correct answers.' },
  gleam:     { id: 'gleam',     name: 'Crystal Gleamling',   price: 300,  Icon: Gem,      color: '#67e8f9', desc: 'Refracts thought into clarity.',                    perk: { hint: 0.20 },         perkText: '20% chance to dim one wrong answer per question.' },
  prism:     { id: 'prism',     name: 'Prism Moth',          price: 400,  Icon: Bug,      color: '#c4b5fd', desc: 'Wings split light into the visible spectrum.',      perk: { aetherBoost: 0.15 },  perkText: '+15% Aether on correct answers.' },
  drake:     { id: 'drake',     name: 'Phlogiston Drake',    price: 500,  Icon: Flame,    color: '#fca5a5', desc: 'A tiny dragon stoked on combustion enthalpy.',      perk: { shield: 0.25 },       perkText: '25% chance per quest to absorb one heart loss.' },
  starling:  { id: 'starling',  name: 'Aether Starling',     price: 700,  Icon: Bird,     color: '#86efac', desc: 'Sings in three-part equilibrium harmony.',          perk: { perfectBonus: 0.50 }, perkText: '+50% Aether on perfect-run bonuses.' },
  catalyx:   { id: 'catalyx',   name: 'Catalyx',             price: 900,  Icon: Cat,      color: '#a3e635', desc: 'A serene feline. Lowers everything\'s Eₐ.',           perk: { hint: 0.35 },         perkText: '35% chance to dim one wrong answer per question.' },
  isotope:   { id: 'isotope',   name: 'Isotope Hare',        price: 1000, Icon: Rabbit,   color: '#f0abfc', desc: 'Has a 12.3-year half-life. Probably.',              perk: { aetherBoost: 0.20, shield: 0.15 }, perkText: '+20% Aether and 15% chance to shield a heart.' },
  leviathan: { id: 'leviathan', name: 'Avogadro Leviathan',  price: 1500, Icon: Fish,     color: '#7dd3fc', desc: 'Weighs exactly one mole. Coincidence?',             perk: { revive: 0.25, aetherBoost: 0.10 }, perkText: '25% chance to revive at 0 hearts. +10% Aether.' },
  phoenix:   { id: 'phoenix',   name: 'Equilibrium Phoenix', price: 0,    Icon: Sparkles, color: '#fbbf24', desc: 'Burns and reforms. The Crucible\'s gift.',            perk: { revive: 0.40, perfectBonus: 0.50 }, perkText: '40% revive at 0 hearts. +50% perfect-run Aether.', special: 'boss' },
};

const PET_ORDER = ['none', 'spark', 'gleam', 'prism', 'drake', 'starling', 'catalyx', 'isotope', 'leviathan', 'phoenix'];

// ============================================================
// PERSISTENCE
// ============================================================

const STORAGE_KEY = 'chem_clep_save';

const defaultSave = {
  xp: 0,
  aether: 0,
  completed: {}, // { questId_tier: { stars, perfect } }
  ownedThemes: ['void'],
  ownedTitles: ['novice'],
  ownedPets: ['none'],
  activeTheme: 'void',
  activeTitle: 'novice',
  activePet: 'none',
  bossDefeated: false,
};

async function loadSave() {
  try {
    const result = await window.storage.get('save');
    return result ? { ...defaultSave, ...JSON.parse(result.value) } : defaultSave;
  } catch {
    return defaultSave;
  }
}

async function persistSave(save) {
  try {
    await window.storage.set('save', JSON.stringify(save));
  } catch (e) {
    console.error('Failed to save:', e);
  }
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function app() {
  const [screen, setScreen] = useState('home');
  const [save, setSave] = useState(defaultSave);
  const [loaded, setLoaded] = useState(false);

  const [currentQuest, setCurrentQuest] = useState(null);
  const [currentTier, setCurrentTier] = useState(null);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [hp, setHp] = useState(3);
  const [questCorrect, setQuestCorrect] = useState(0);
  const [sessionAether, setSessionAether] = useState(0);
  const [showShop, setShowShop] = useState(false);
  // Pet perk runtime state
  const [shieldUsed, setShieldUsed] = useState(false);
  const [reviveUsed, setReviveUsed] = useState(false);
  const [dimmedChoice, setDimmedChoice] = useState(null);
  const [petProc, setPetProc] = useState(null); // { type: 'shield'|'revive'|'hint', petName }
  // Library state
  const [libraryRealm, setLibraryRealm] = useState(null); // null = realm list, otherwise realm id
  const [libraryLesson, setLibraryLesson] = useState(null); // null = sublesson list, otherwise sublesson id

  // Load save on mount
  useEffect(() => {
    loadSave().then(s => {
      setSave(s);
      setLoaded(true);
    });
  }, []);

  // Persist whenever save changes (but not before initial load)
  useEffect(() => {
    if (loaded) persistSave(save);
  }, [save, loaded]);

  const theme = THEMES[save.activeTheme] || THEMES.void;
  const activeTitle = TITLES.find(t => t.id === save.activeTitle) || TITLES[0];
  const activePet = PETS[save.activePet] || PETS.none;
  const petPerk = activePet.perk || {};

  const allMainComplete = QUEST_ORDER.every(qid =>
    TIER_ORDER.every(tier => save.completed[`${qid}_${tier}`])
  );
  const archmageAllComplete = QUEST_ORDER.every(qid => save.completed[`${qid}_archmage`]);

  // Roll for hint perk: on the new question, possibly dim one wrong answer
  function rollHint(questionList, idx) {
    const hintChance = petPerk.hint || 0;
    if (hintChance > 0 && Math.random() < hintChance) {
      const q = questionList[idx];
      const wrongIndices = q.choices.map((_, i) => i).filter(i => i !== q.correct);
      const dimmed = wrongIndices[Math.floor(Math.random() * wrongIndices.length)];
      setDimmedChoice(dimmed);
      setPetProc({ type: 'hint', petName: activePet.name });
    } else {
      setDimmedChoice(null);
      setPetProc(null);
    }
  }

  function startQuest(questId, tier) {
    setCurrentQuest(questId);
    setCurrentTier(tier);
    setQuestionIdx(0);
    setSelected(null);
    setShowResult(false);
    setHp(TIERS[tier].lives);
    setQuestCorrect(0);
    setSessionAether(0);
    setShieldUsed(false);
    setReviveUsed(false);
    rollHint(QUESTS[questId].tiers[tier], 0);
    setScreen('quest');
  }

  function startBoss() {
    setCurrentQuest('boss');
    setCurrentTier(null);
    setQuestionIdx(0);
    setSelected(null);
    setShowResult(false);
    setHp(3);
    setQuestCorrect(0);
    setSessionAether(0);
    setShieldUsed(false);
    setReviveUsed(false);
    rollHint(BOSS_QUESTIONS, 0);
    setScreen('boss');
  }

  function getCurrentQuestionList() {
    if (currentQuest === 'boss') return BOSS_QUESTIONS;
    return QUESTS[currentQuest].tiers[currentTier];
  }

  function submitAnswer() {
    if (selected === null) return;
    const q = getCurrentQuestionList()[questionIdx];
    const isCorrect = selected === q.correct;
    setShowResult(true);
    if (isCorrect) {
      const baseReward = currentQuest === 'boss' ? 30 : Math.round(15 * TIERS[currentTier].mult);
      const boost = petPerk.aetherBoost || 0;
      const finalReward = Math.round(baseReward * (1 + boost));
      setSessionAether(s => s + finalReward);
      setPetProc(null);
    } else {
      // Try shield: once per quest, X% chance to absorb the heart loss
      const shieldChance = petPerk.shield || 0;
      if (!shieldUsed && shieldChance > 0 && Math.random() < shieldChance) {
        setShieldUsed(true);
        setPetProc({ type: 'shield', petName: activePet.name });
        // No HP lost
      } else {
        const newHp = hp - 1;
        // Try revive when going to 0
        const reviveChance = petPerk.revive || 0;
        if (newHp <= 0 && !reviveUsed && reviveChance > 0 && Math.random() < reviveChance) {
          setReviveUsed(true);
          setHp(1);
          setPetProc({ type: 'revive', petName: activePet.name });
        } else {
          setHp(newHp);
          setPetProc(null);
        }
      }
    }
  }

  function nextQuestion() {
    const list = getCurrentQuestionList();
    const nextIdx = questionIdx + 1;

    // Out of HP — fail
    if (hp <= 0) {
      setSave(s => ({ ...s, aether: s.aether + Math.floor(sessionAether * 0.3) }));
      setScreen('home');
      return;
    }

    if (nextIdx >= list.length) {
      // Quest complete!
      const isCorrect = selected === list[questionIdx].correct;
      const finalCorrect = isCorrect ? questCorrect + 1 : questCorrect;
      const total = list.length;
      const accuracy = finalCorrect / total;
      const stars = accuracy >= 1 ? 3 : accuracy >= 0.8 ? 2 : 1;
      const perfect = accuracy >= 1;
      const perfectBoost = petPerk.perfectBonus || 0;

      let reward = sessionAether;

      if (currentQuest === 'boss') {
        // Boss rewards
        if (accuracy >= 0.7) {
          let bossBonus = 500;
          if (perfect && perfectBoost > 0) bossBonus = Math.round(bossBonus * (1 + perfectBoost));
          reward += bossBonus;
          setSave(s => ({
            ...s,
            aether: s.aether + reward,
            bossDefeated: true,
            ownedTitles: s.ownedTitles.includes('crowned') ? s.ownedTitles : [...s.ownedTitles, 'crowned'],
          }));
        } else {
          setSave(s => ({ ...s, aether: s.aether + reward }));
        }
      } else {
        // Regular quest rewards
        const key = `${currentQuest}_${currentTier}`;
        const wasComplete = !!save.completed[key];
        const wasPerfect = save.completed[key]?.perfect;

        // First-clear bonus
        if (!wasComplete) reward += Math.round(50 * TIERS[currentTier].mult);
        // First-perfect bonus (boosted by pet if applicable)
        if (perfect && !wasPerfect) {
          let perfBonus = Math.round(75 * TIERS[currentTier].mult);
          if (perfectBoost > 0) perfBonus = Math.round(perfBonus * (1 + perfectBoost));
          reward += perfBonus;
        }

        setSave(s => ({
          ...s,
          aether: s.aether + reward,
          xp: s.xp + finalCorrect * 25,
          completed: {
            ...s.completed,
            [key]: {
              stars: Math.max(stars, s.completed[key]?.stars || 0),
              perfect: perfect || s.completed[key]?.perfect || false,
            }
          }
        }));
      }

      setSessionAether(reward);
      setScreen('victory');
      return;
    }

    // Update correct count
    const isCorrect = selected === list[questionIdx].correct;
    if (isCorrect) setQuestCorrect(c => c + 1);

    setQuestionIdx(nextIdx);
    setSelected(null);
    setShowResult(false);
    rollHint(list, nextIdx);
  }

  function buyTheme(themeId) {
    const t = THEMES[themeId];
    if (save.aether < t.price || save.ownedThemes.includes(themeId)) return;
    setSave(s => ({
      ...s,
      aether: s.aether - t.price,
      ownedThemes: [...s.ownedThemes, themeId],
    }));
  }

  function buyTitle(titleId) {
    const t = TITLES.find(x => x.id === titleId);
    if (!t || save.aether < t.price || save.ownedTitles.includes(titleId)) return;
    if (t.special === 'all_realms' && !archmageAllComplete) return;
    setSave(s => ({
      ...s,
      aether: s.aether - t.price,
      ownedTitles: [...s.ownedTitles, titleId],
    }));
  }

  function buyPet(petId) {
    const p = PETS[petId];
    if (!p || save.aether < p.price || save.ownedPets.includes(petId)) return;
    if (p.special === 'boss' && !save.bossDefeated) return;
    setSave(s => ({
      ...s,
      aether: s.aether - p.price,
      ownedPets: [...s.ownedPets, petId],
    }));
  }

  function equipTheme(id) { setSave(s => ({ ...s, activeTheme: id })); }
  function equipTitle(id) { setSave(s => ({ ...s, activeTitle: id })); }
  function equipPet(id) { setSave(s => ({ ...s, activePet: id })); }

  function resetAll() {
    if (confirm('Reset ALL progress, currency, and cosmetics? This cannot be undone.')) {
      setSave(defaultSave);
      setScreen('home');
    }
  }

  if (!loaded) {
    return (
      <div style={{ ...styles.app, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <style>{globalCSS}</style>
        <div style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.3em', color: '#fbbf24', fontSize: 14 }}>
          ◆ AWAKENING ◆
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...styles.app, '--bg1': theme.bg1, '--bg2': theme.bg2, '--theme-accent': theme.accent }}>
      <style>{globalCSS}</style>

      {showShop && (
        <ShopScreen
          save={save}
          archmageAllComplete={archmageAllComplete}
          onBuyTheme={buyTheme}
          onBuyTitle={buyTitle}
          onBuyPet={buyPet}
          onEquipTheme={equipTheme}
          onEquipTitle={equipTitle}
          onEquipPet={equipPet}
          onClose={() => setShowShop(false)}
        />
      )}

      {screen === 'home' && (
        <HomeScreen
          save={save}
          activeTitle={activeTitle}
          activePet={activePet}
          allMainComplete={allMainComplete}
          archmageAllComplete={archmageAllComplete}
          onStartTier={startQuest}
          onStartBoss={startBoss}
          onOpenShop={() => setShowShop(true)}
          onOpenLibrary={() => { setLibraryRealm(null); setLibraryLesson(null); setScreen('library'); }}
          onReset={resetAll}
          theme={theme}
        />
      )}

      {screen === 'library' && (
        <LibraryScreen
          realmId={libraryRealm}
          lessonId={libraryLesson}
          onSelectRealm={(id) => setLibraryRealm(id)}
          onSelectLesson={(id) => setLibraryLesson(id)}
          onBack={() => {
            if (libraryLesson) setLibraryLesson(null);
            else if (libraryRealm) setLibraryRealm(null);
            else setScreen('home');
          }}
        />
      )}

      {screen === 'quest' && currentQuest && currentTier && (
        <QuestScreen
          quest={QUESTS[currentQuest]}
          tier={currentTier}
          questionList={QUESTS[currentQuest].tiers[currentTier]}
          questionIdx={questionIdx}
          selected={selected}
          showResult={showResult}
          hp={hp}
          maxHp={TIERS[currentTier].lives}
          sessionAether={sessionAether}
          activePet={activePet}
          dimmedChoice={dimmedChoice}
          petProc={petProc}
          onSelect={setSelected}
          onSubmit={submitAnswer}
          onNext={nextQuestion}
          onAbandon={() => { setScreen('home'); setCurrentQuest(null); }}
        />
      )}

      {screen === 'boss' && (
        <BossScreen
          questionList={BOSS_QUESTIONS}
          questionIdx={questionIdx}
          selected={selected}
          showResult={showResult}
          hp={hp}
          sessionAether={sessionAether}
          activePet={activePet}
          dimmedChoice={dimmedChoice}
          petProc={petProc}
          onSelect={setSelected}
          onSubmit={submitAnswer}
          onNext={nextQuestion}
          onAbandon={() => { setScreen('home'); setCurrentQuest(null); }}
        />
      )}

      {screen === 'victory' && (
        <VictoryScreen
          quest={currentQuest === 'boss' ? null : QUESTS[currentQuest]}
          tier={currentTier}
          isBoss={currentQuest === 'boss'}
          correct={questCorrect + (selected === getCurrentQuestionList()[questionIdx]?.correct ? 1 : 0)}
          total={getCurrentQuestionList().length}
          aetherEarned={sessionAether}
          onContinue={() => { setScreen('home'); setCurrentQuest(null); }}
        />
      )}
    </div>
  );
}

// ============================================================
// HOME SCREEN
// ============================================================

function HomeScreen({ save, activeTitle, activePet, allMainComplete, archmageAllComplete, onStartTier, onStartBoss, onOpenShop, onOpenLibrary, onReset, theme }) {
  const completedRealms = QUEST_ORDER.filter(qid =>
    TIER_ORDER.every(tier => save.completed[`${qid}_${tier}`])
  ).length;

  const PetIcon = activePet.Icon;
  const hasPet = activePet.id !== 'none';

  return (
    <div style={styles.homeContainer}>
      <div style={styles.starfield} />
      <div style={styles.homeInner} className="home-inner">
        <header style={styles.header} className="home-header">
          <div style={styles.titleBlock}>
            <div style={styles.eyebrow}>◆ A QUEST FOR THE CLEP ◆</div>
            <h1 style={styles.title}>
              <span style={styles.titleAccent}>CHEMICA</span>
              <span style={styles.titleMain}>The Six Realms</span>
            </h1>
            <p style={styles.subtitle}>
              Six realms. Three tiers. Ninety trials. One Final Crown.
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
              <div style={styles.titleBadge}>
                <Crown size={13} style={{ color: theme.accent }} />
                <span>{activeTitle.name}</span>
              </div>
              {hasPet && (
                <div style={{ ...styles.titleBadge, borderColor: `${activePet.color}40` }}>
                  <PetIcon size={13} style={{ color: activePet.color }} />
                  <span>{activePet.name}</span>
                </div>
              )}
            </div>
          </div>

          <div style={styles.statsBar} className="home-stats-bar">
            <div style={styles.statBox} className="stat-box">
              <Coins size={18} strokeWidth={2.5} style={{ color: '#fbbf24' }} />
              <div>
                <div style={styles.statLabel} className="stat-label">AETHER</div>
                <div style={styles.statValue} className="stat-value">{save.aether}</div>
              </div>
            </div>
            <div style={styles.statBox} className="stat-box">
              <Trophy size={18} strokeWidth={2.5} style={{ color: theme.accent }} />
              <div>
                <div style={styles.statLabel} className="stat-label">XP</div>
                <div style={styles.statValue} className="stat-value">{save.xp}</div>
              </div>
            </div>
            <div style={styles.statBox} className="stat-box">
              <Award size={18} strokeWidth={2.5} />
              <div>
                <div style={styles.statLabel} className="stat-label">REALMS</div>
                <div style={styles.statValue} className="stat-value">{completedRealms}/6</div>
              </div>
            </div>
            <button onClick={onOpenLibrary} style={{ ...styles.shopBtn, background: 'linear-gradient(135deg, #7dd3fc 0%, #0ea5e9 100%)' }} className="shop-btn" title="The Library">
              <Library size={16} />
              <span>STUDY</span>
            </button>
            <button onClick={onOpenShop} style={styles.shopBtn} className="shop-btn" title="The Apothecary">
              <ShoppingBag size={16} />
              <span>SHOP</span>
            </button>
            <button onClick={onReset} style={styles.resetBtn} title="Reset progress">
              <RotateCcw size={14} />
            </button>
          </div>
        </header>

        {allMainComplete && save.bossDefeated && (
          <div style={styles.crownBanner} className="crown-banner">
            <Crown size={20} />
            <span>CROWNED ALCHEMIST — MASTER OF ALL REALMS</span>
            <Crown size={20} />
          </div>
        )}

        <div style={styles.questGrid} className="quest-grid">
          {QUEST_ORDER.map((id, i) => {
            const quest = QUESTS[id];
            const Icon = quest.icon;
            const tierStatus = TIER_ORDER.map(t => save.completed[`${id}_${t}`]);
            return (
              <div
                key={id}
                style={{
                  ...styles.questCard,
                  borderColor: quest.accent,
                  '--quest-color': quest.color,
                  '--quest-accent': quest.accent,
                }}
                className="quest-card"
              >
                <div style={styles.questNum}>0{i + 1}</div>
                <div style={{ ...styles.questIcon, color: quest.color }}>
                  <Icon size={36} strokeWidth={1.8} />
                </div>
                <h3 style={styles.questName}>{quest.name}</h3>
                <p style={styles.questSub}>{quest.subtitle}</p>
                <p style={styles.questLore}>{quest.lore}</p>

                <div style={styles.tierRow}>
                  {TIER_ORDER.map((t, idx) => {
                    const status = tierStatus[idx];
                    const tierData = TIERS[t];
                    return (
                      <button
                        key={t}
                        onClick={() => onStartTier(id, t)}
                        style={{
                          ...styles.tierBtn,
                          borderColor: status ? tierData.color : 'rgba(255,255,255,0.12)',
                          background: status ? `${tierData.color}15` : 'transparent',
                        }}
                        className="tier-btn"
                      >
                        <span style={{ ...styles.tierLabel, color: tierData.color }}>{tierData.label}</span>
                        <span style={styles.tierName}>{tierData.name}</span>
                        {status ? (
                          <span style={styles.tierStars}>
                            {[1,2,3].map(n => (
                              <span key={n} style={{ color: n <= status.stars ? tierData.color : 'rgba(255,255,255,0.15)' }}>★</span>
                            ))}
                          </span>
                        ) : (
                          <span style={styles.tierEnter}>ENTER →</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* BOSS UNLOCK */}
        <div className="boss-card" style={{
          ...styles.bossCard,
          opacity: allMainComplete ? 1 : 0.55,
          borderColor: allMainComplete ? '#fbbf24' : 'rgba(255,255,255,0.1)',
        }}>
          <div style={styles.bossInner}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
              <Skull size={32} style={{ color: allMainComplete ? '#fbbf24' : 'rgba(255,255,255,0.3)' }} strokeWidth={1.8} />
              <div>
                <div style={{ fontSize: 11, letterSpacing: '0.3em', color: '#fbbf24', fontWeight: 700, marginBottom: 4 }}>
                  ◆ THE FINAL TRIAL ◆
                </div>
                <h3 style={{ fontFamily: "'Cinzel', serif", margin: 0, fontSize: 26, fontWeight: 800 }}>
                  The Crucible Eternal
                </h3>
              </div>
            </div>
            <p style={styles.bossLore}>
              Ten trials drawn from every realm. Three hearts. No tier — only mastery. Defeat the Crucible to claim the title <em style={{ color: '#fbbf24' }}>The Crowned</em> and 500 Aether.
            </p>
            {allMainComplete ? (
              <button onClick={onStartBoss} style={styles.bossBtn}>
                {save.bossDefeated ? 'CHALLENGE AGAIN ⚔' : 'ENTER THE CRUCIBLE ⚔'}
              </button>
            ) : (
              <div style={styles.bossLocked}>
                <Lock size={14} /> COMPLETE ALL 6 REALMS (ALL TIERS) TO UNLOCK
              </div>
            )}
          </div>
        </div>

        <footer style={styles.footer}>
          <div style={styles.footerRule} />
          <p style={styles.footerText}>
            Earn Aether per correct answer · Bonuses for first clears & perfect runs · Spend at the Apothecary
          </p>
        </footer>
      </div>
    </div>
  );
}

// ============================================================
// QUEST SCREEN (regular)
// ============================================================

function QuestScreen({ quest, tier, questionList, questionIdx, selected, showResult, hp, maxHp, sessionAether, activePet, dimmedChoice, petProc, onSelect, onSubmit, onNext, onAbandon }) {
  const q = questionList[questionIdx];
  const Icon = quest.icon;
  const isCorrect = selected === q.correct;
  const tierData = TIERS[tier];
  const progress = ((questionIdx + (showResult ? 1 : 0)) / questionList.length) * 100;
  const PetIcon = activePet.Icon;
  const hasPet = activePet.id !== 'none';

  return (
    <div style={{ ...styles.questContainer, '--quest-color': quest.color, '--quest-accent': quest.accent }}>
      <div style={styles.questBg} />
      <div style={styles.questInner} className="quest-inner">
        <div style={styles.questTopBar} className="quest-top-bar">
          <button onClick={onAbandon} style={styles.abandonBtn} className="abandon-btn">← Retreat</button>
          <div style={styles.questBanner} className="quest-banner">
            <Icon size={18} style={{ color: quest.color }} />
            <span style={styles.questBannerText} className="banner-text">{quest.name}</span>
            <span className="tier-chip" style={{ ...styles.tierChip, background: `${tierData.color}25`, color: tierData.color, borderColor: tierData.color }}>
              {tierData.label} · {tierData.name}
            </span>
            <span style={styles.questBannerSub} className="quest-banner-sub">Trial {questionIdx + 1} / {questionList.length}</span>
          </div>
          <div style={styles.hpBar}>
            {[...Array(maxHp)].map((_, i) => (
              <Heart
                key={i}
                size={20}
                fill={i < hp ? '#ef4444' : 'transparent'}
                color={i < hp ? '#ef4444' : 'rgba(255,255,255,0.2)'}
                strokeWidth={2.5}
              />
            ))}
          </div>
        </div>

        <div style={styles.progressTrack}>
          <div style={{ ...styles.progressFill, width: `${progress}%`, background: quest.color }} />
        </div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
          {sessionAether > 0 && (
            <div className="aether-ticker" style={styles.aetherTicker}>
              <Coins size={14} style={{ color: '#fbbf24' }} />
              <span>+{sessionAether} Aether earned this run</span>
            </div>
          )}
          {hasPet && (
            <div className="aether-ticker" style={{ ...styles.aetherTicker, background: `${activePet.color}15`, borderColor: `${activePet.color}40`, color: activePet.color }}>
              <PetIcon size={14} />
              <span>{activePet.name} accompanies you</span>
            </div>
          )}
        </div>

        <PetProcBanner petProc={petProc} />

        <QuestionCard
          q={q}
          questionIdx={questionIdx}
          totalQuestions={questionList.length}
          selected={selected}
          showResult={showResult}
          isCorrect={isCorrect}
          hp={hp}
          themeColor={quest.color}
          dimmedChoice={dimmedChoice}
          onSelect={onSelect}
          onSubmit={onSubmit}
          onNext={onNext}
          rewardLabel={`+${Math.round(15 * tierData.mult)} ⟢`}
        />
      </div>
    </div>
  );
}

// ============================================================
// BOSS SCREEN
// ============================================================

function BossScreen({ questionList, questionIdx, selected, showResult, hp, sessionAether, activePet, dimmedChoice, petProc, onSelect, onSubmit, onNext, onAbandon }) {
  const q = questionList[questionIdx];
  const isCorrect = selected === q.correct;
  const progress = ((questionIdx + (showResult ? 1 : 0)) / questionList.length) * 100;
  const PetIcon = activePet.Icon;
  const hasPet = activePet.id !== 'none';

  return (
    <div style={{ ...styles.questContainer, '--quest-color': '#fbbf24', '--quest-accent': '#f59e0b' }}>
      <div style={{ ...styles.questBg, background: 'radial-gradient(ellipse at center top, rgba(251,191,36,0.2) 0%, transparent 60%)' }} />
      <div style={styles.questInner} className="quest-inner">
        <div style={styles.questTopBar} className="quest-top-bar">
          <button onClick={onAbandon} style={styles.abandonBtn} className="abandon-btn">← Retreat</button>
          <div style={styles.questBanner} className="quest-banner">
            <Skull size={18} style={{ color: '#fbbf24' }} />
            <span style={{ ...styles.questBannerText, color: '#fbbf24' }} className="banner-text">The Crucible Eternal</span>
            <span style={styles.questBannerSub} className="quest-banner-sub">{q.topic}</span>
            <span style={styles.questBannerSub} className="quest-banner-sub">Trial {questionIdx + 1} / {questionList.length}</span>
          </div>
          <div style={styles.hpBar}>
            {[...Array(3)].map((_, i) => (
              <Heart key={i} size={20} fill={i < hp ? '#ef4444' : 'transparent'} color={i < hp ? '#ef4444' : 'rgba(255,255,255,0.2)'} strokeWidth={2.5} />
            ))}
          </div>
        </div>

        <div style={styles.progressTrack}>
          <div style={{ ...styles.progressFill, width: `${progress}%`, background: '#fbbf24' }} />
        </div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
          {sessionAether > 0 && (
            <div className="aether-ticker" style={styles.aetherTicker}>
              <Coins size={14} style={{ color: '#fbbf24' }} />
              <span>+{sessionAether} Aether earned this run</span>
            </div>
          )}
          {hasPet && (
            <div className="aether-ticker" style={{ ...styles.aetherTicker, background: `${activePet.color}15`, borderColor: `${activePet.color}40`, color: activePet.color }}>
              <PetIcon size={14} />
              <span>{activePet.name} accompanies you</span>
            </div>
          )}
        </div>

        <PetProcBanner petProc={petProc} />

        <QuestionCard
          q={q}
          questionIdx={questionIdx}
          totalQuestions={questionList.length}
          selected={selected}
          showResult={showResult}
          isCorrect={isCorrect}
          hp={hp}
          themeColor="#fbbf24"
          dimmedChoice={dimmedChoice}
          onSelect={onSelect}
          onSubmit={onSubmit}
          onNext={onNext}
          rewardLabel="+30 ⟢"
        />
      </div>
    </div>
  );
}

// Pet proc banner — shows when a pet ability triggers
function PetProcBanner({ petProc }) {
  if (!petProc) return null;
  const { type, petName } = petProc;
  const labels = {
    shield: { icon: <Shield size={14} />, text: `${petName} absorbed the blow! Heart shielded.`, color: '#67e8f9' },
    revive: { icon: <Sparkles size={14} />, text: `${petName} pulls you back from the brink — 1 heart restored!`, color: '#fbbf24' },
    hint:   { icon: <Sparkles size={14} />, text: `${petName} dimmed an obviously wrong answer for you.`, color: '#c4b5fd' },
  };
  const l = labels[type];
  if (!l) return null;
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 14px',
      background: `${l.color}15`,
      border: `1px solid ${l.color}50`,
      borderRadius: 3,
      marginBottom: 16,
      color: l.color,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.05em',
      animation: 'fadeUp 0.4s ease',
    }}>
      {l.icon}
      <span>{l.text}</span>
    </div>
  );
}

// ============================================================
// QUESTION CARD (shared by quest + boss)
// ============================================================

function QuestionCard({ q, questionIdx, totalQuestions, selected, showResult, isCorrect, hp, themeColor, dimmedChoice, onSelect, onSubmit, onNext, rewardLabel }) {
  return (
    <div style={styles.questionCard} className="question-card">
      <div style={styles.questionHeader}>
        <span style={{ ...styles.trialBadge, background: themeColor }}>TRIAL {questionIdx + 1}</span>
        <span style={styles.xpBadge}>{rewardLabel}</span>
      </div>

      <h2 style={styles.questionText} className="question-text">{q.q}</h2>

      <div style={styles.choicesGrid}>
        {q.choices.map((choice, i) => {
          const isSelected = selected === i;
          const isThisCorrect = i === q.correct;
          const isDimmed = !showResult && dimmedChoice === i;
          let cs = { ...styles.choice };
          if (showResult) {
            if (isThisCorrect) cs = { ...cs, ...styles.choiceCorrect };
            else if (isSelected) cs = { ...cs, ...styles.choiceWrong };
            else cs = { ...cs, opacity: 0.4 };
          } else if (isSelected) {
            cs = { ...cs, ...styles.choiceSelected, borderColor: themeColor };
          } else if (isDimmed) {
            cs = { ...cs, opacity: 0.35, textDecoration: 'line-through', borderStyle: 'dashed' };
          }
          return (
            <button
              key={i}
              onClick={() => !showResult && onSelect(i)}
              disabled={showResult}
              style={cs}
              className="choice-btn choice"
            >
              <span style={styles.choiceLetter}>{String.fromCharCode(65 + i)}</span>
              <span style={styles.choiceText}>{choice}</span>
              {isDimmed && <span style={{ fontSize: 11, color: '#c4b5fd', letterSpacing: '0.1em' }}>✦ dimmed</span>}
              {showResult && isThisCorrect && <Check size={20} strokeWidth={3} style={{ color: '#10b981' }} />}
              {showResult && isSelected && !isThisCorrect && <X size={20} strokeWidth={3} style={{ color: '#ef4444' }} />}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="result-box" style={{
          ...styles.resultBox,
          borderColor: isCorrect ? '#10b981' : '#ef4444',
          background: isCorrect ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)'
        }}>
          <div style={styles.resultHeader}>
            {isCorrect ? (
              <>
                <Zap size={20} style={{ color: '#10b981' }} />
                <span style={{ color: '#10b981', fontWeight: 800, letterSpacing: '0.1em' }}>
                  CORRECT — {rewardLabel} AETHER
                </span>
              </>
            ) : (
              <>
                <Heart size={20} style={{ color: '#ef4444' }} />
                <span style={{ color: '#ef4444', fontWeight: 800, letterSpacing: '0.1em' }}>INCORRECT — −1 HEART</span>
              </>
            )}
          </div>

          <div style={styles.explainSection}>
            <div style={styles.explainLabel}>
              <BookOpen size={14} />
              EXPLANATION
            </div>
            <p style={styles.explainText} className="explain-text">{q.explain}</p>
          </div>

          <a
            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(q.yt)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.ytLink}
          >
            <Play size={16} />
            Watch on YouTube: "{q.yt}"
          </a>

          {hp <= 0 && !isCorrect && (
            <div style={styles.gameOverNote}>
              ⚠ Out of hearts. The realm rejects you — partial Aether retained. Return when you are ready.
            </div>
          )}
        </div>
      )}

      {!showResult ? (
        <button
          onClick={onSubmit}
          disabled={selected === null}
          className="submit-btn"
          style={{
            ...styles.submitBtn,
            background: selected === null ? 'rgba(255,255,255,0.05)' : themeColor,
            color: selected === null ? 'rgba(255,255,255,0.3)' : '#0a0a0f',
            cursor: selected === null ? 'not-allowed' : 'pointer'
          }}
        >
          CAST ANSWER →
        </button>
      ) : (
        <button onClick={onNext} className="submit-btn" style={{ ...styles.submitBtn, background: themeColor, color: '#0a0a0f' }}>
          {hp <= 0 ? 'RETURN TO MAP' : questionIdx + 1 >= totalQuestions ? 'CLAIM VICTORY' : 'NEXT TRIAL →'}
        </button>
      )}
    </div>
  );
}

// ============================================================
// VICTORY SCREEN
// ============================================================

function VictoryScreen({ quest, tier, isBoss, correct, total, aetherEarned, onContinue }) {
  const accuracy = correct / total;
  const stars = accuracy >= 1 ? 3 : accuracy >= 0.8 ? 2 : 1;
  const failed = !isBoss && accuracy < 0.6;
  const bossFailed = isBoss && accuracy < 0.7;

  const messages = [
    'A respectable showing. The realm acknowledges you.',
    'Strong work. You are nearly a master of this realm.',
    'PERFECT. The realm bows to your mastery.'
  ];
  const bossWinMsg = 'You stand crowned. The Crucible recognizes you as Master of Chemistry.';
  const bossLossMsg = 'The Crucible was not yet ready to bow. Train, sharpen, and return.';

  const themeColor = isBoss ? '#fbbf24' : quest.color;
  const Icon = isBoss ? Crown : quest.icon;

  return (
    <div style={{ ...styles.victoryContainer, '--quest-color': themeColor }}>
      <div style={styles.victoryBg} />
      <div style={styles.victoryInner} className="victory-inner">
        <div style={{ ...styles.victoryIcon, color: themeColor }} className="victory-icon">
          <Icon size={80} strokeWidth={1.5} />
        </div>

        <div style={{ ...styles.victoryEyebrow, color: themeColor }}>
          {isBoss ? (bossFailed ? '◆ THE CRUCIBLE STANDS ◆' : '◆ THE CROWN IS YOURS ◆') : '◆ REALM CONQUERED ◆'}
        </div>
        <h1 style={styles.victoryTitle} className="victory-title">{isBoss ? 'The Crucible Eternal' : quest.name}</h1>
        {!isBoss && (
          <div className="tier-chip" style={{ ...styles.tierChip, display: 'inline-block', marginBottom: 24, background: `${TIERS[tier].color}25`, color: TIERS[tier].color, borderColor: TIERS[tier].color }}>
            {TIERS[tier].label} · {TIERS[tier].name}
          </div>
        )}

        {!bossFailed && !failed && (
          <div style={styles.starsLarge}>
            {[1, 2, 3].map(n => (
              <span
                key={n}
                style={{
                  ...styles.starLarge,
                  color: n <= stars ? themeColor : 'rgba(255,255,255,0.1)',
                  animationDelay: `${n * 0.2}s`
                }}
                className="victory-star star-large"
              >★</span>
            ))}
          </div>
        )}

        <p style={styles.victoryScore}>{correct} / {total} trials passed</p>
        <p style={styles.victoryMessage}>
          {isBoss ? (bossFailed ? bossLossMsg : bossWinMsg) : messages[stars - 1]}
        </p>

        <div style={styles.aetherEarned}>
          <Coins size={20} style={{ color: '#fbbf24' }} />
          <span><strong>+{aetherEarned}</strong> Aether earned</span>
        </div>

        <button onClick={onContinue} className="victory-btn" style={{ ...styles.victoryBtn, background: themeColor }}>
          RETURN TO THE MAP →
        </button>
      </div>
    </div>
  );
}

// ============================================================
// LIBRARY SCREEN
// ============================================================

const REALM_ORDER_LIB = ['atomic', 'bonding', 'stoich', 'thermo', 'acidbase', 'organic'];

function LibraryScreen({ realmId, lessonId, onSelectRealm, onSelectLesson, onBack }) {
  // Three views: realm list → sublesson list → single lesson
  if (!realmId) {
    return <LibraryRealmList onSelectRealm={onSelectRealm} onBack={onBack} />;
  }
  if (!lessonId) {
    return <LibraryLessonList realmId={realmId} onSelectLesson={onSelectLesson} onBack={onBack} />;
  }
  return <LessonView realmId={realmId} lessonId={lessonId} onSelectLesson={onSelectLesson} onBack={onBack} />;
}

function LibraryRealmList({ onSelectRealm, onBack }) {
  return (
    <div style={styles.libraryContainer}>
      <div style={styles.libraryInner}>
        <button onClick={onBack} className="library-back-btn" style={styles.libraryBackBtn}>
          <ChevronLeft size={16} /> RETURN TO MAP
        </button>

        <div style={styles.libraryHeader}>
          <div style={{ fontSize: 12, letterSpacing: '0.4em', color: '#7dd3fc', fontWeight: 700, marginBottom: 12, fontFamily: "'Cinzel', serif" }}>
            ◆ THE LIBRARY ◆
          </div>
          <h1 style={styles.libraryTitle}>Lessons of the Six Realms</h1>
          <p style={styles.librarySubtitle}>
            Choose a realm to begin study. Each realm contains multiple lessons covering its core concepts, with worked examples and practice questions.
          </p>
        </div>

        <div style={styles.libraryGrid} className="library-grid">
          {REALM_ORDER_LIB.map((id) => {
            const quest = QUESTS[id];
            const lessons = LESSONS[id]?.sublessons || [];
            const Icon = quest.icon;
            const hasContent = lessons.length > 0;
            return (
              <button
                key={id}
                onClick={() => hasContent && onSelectRealm(id)}
                disabled={!hasContent}
                className="library-realm-card"
                style={{
                  ...styles.libraryRealmCard,
                  borderColor: hasContent ? quest.accent : 'rgba(255,255,255,0.08)',
                  opacity: hasContent ? 1 : 0.5,
                  cursor: hasContent ? 'pointer' : 'not-allowed',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 12 }}>
                  <Icon size={28} style={{ color: quest.color, flexShrink: 0 }} strokeWidth={1.8} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={styles.libraryRealmName}>{quest.name}</h3>
                    <p style={{ ...styles.libraryRealmSub, color: quest.color }}>{quest.subtitle}</p>
                  </div>
                </div>
                <div style={styles.libraryLessonCount}>
                  {hasContent ? (
                    <>
                      <BookOpen size={12} style={{ marginRight: 6, verticalAlign: 'middle' }} />
                      {lessons.length} {lessons.length === 1 ? 'LESSON' : 'LESSONS'}
                    </>
                  ) : (
                    <>
                      <Lock size={12} style={{ marginRight: 6, verticalAlign: 'middle' }} />
                      COMING SOON
                    </>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function LibraryLessonList({ realmId, onSelectLesson, onBack }) {
  const realm = QUESTS[realmId];
  const lessons = LESSONS[realmId]?.sublessons || [];
  const Icon = realm.icon;

  return (
    <div style={{ ...styles.libraryContainer, '--quest-color': realm.color, '--quest-accent': realm.accent }}>
      <div style={styles.libraryBg} />
      <div style={styles.libraryInner}>
        <button onClick={onBack} className="library-back-btn" style={styles.libraryBackBtn}>
          <ChevronLeft size={16} /> ALL REALMS
        </button>

        <div style={styles.libraryHeader}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <Icon size={36} style={{ color: realm.color }} strokeWidth={1.6} />
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.3em', color: realm.color, fontWeight: 700, marginBottom: 4 }}>
                ◆ STUDY HALL ◆
              </div>
              <h1 style={{ ...styles.libraryTitle, fontSize: 'clamp(28px, 5vw, 44px)', margin: 0 }}>{realm.name}</h1>
            </div>
          </div>
        </div>

        <div style={styles.lessonList}>
          {lessons.map((lesson, i) => (
            <button
              key={lesson.id}
              onClick={() => onSelectLesson(lesson.id)}
              className="lesson-card"
              style={{ ...styles.lessonCard, borderColor: `${realm.accent}40` }}
            >
              <div style={{ ...styles.lessonNum, color: realm.color }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={styles.lessonCardTitle}>{lesson.title}</h3>
                <p style={styles.lessonCardSummary}>{lesson.summary}</p>
              </div>
              <ChevronRight size={20} style={{ color: realm.color, flexShrink: 0 }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function LessonView({ realmId, lessonId, onSelectLesson, onBack }) {
  const realm = QUESTS[realmId];
  const lessons = LESSONS[realmId]?.sublessons || [];
  const lesson = lessons.find(l => l.id === lessonId);
  const lessonIdx = lessons.findIndex(l => l.id === lessonId);
  const nextLesson = lessons[lessonIdx + 1];
  const prevLesson = lessons[lessonIdx - 1];

  // Scroll to top when lesson changes
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [lessonId]);

  if (!lesson) {
    return (
      <div style={styles.libraryContainer}>
        <div style={styles.libraryInner}>
          <button onClick={onBack} className="library-back-btn" style={styles.libraryBackBtn}>
            <ChevronLeft size={16} /> BACK
          </button>
          <p style={{ textAlign: 'center', marginTop: 60 }}>Lesson not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...styles.libraryContainer, '--quest-color': realm.color, '--quest-accent': realm.accent }}>
      <div style={styles.libraryBg} />
      <div style={styles.lessonContainer}>
        <button onClick={onBack} className="library-back-btn" style={styles.libraryBackBtn}>
          <ChevronLeft size={16} /> {realm.name.toUpperCase()}
        </button>

        <article style={styles.lessonArticle}>
          <header style={styles.lessonHeader}>
            <div style={{ fontSize: 11, letterSpacing: '0.3em', color: realm.color, fontWeight: 700, marginBottom: 10, fontFamily: "'Cinzel', serif" }}>
              LESSON {String(lessonIdx + 1).padStart(2, '0')} · {realm.name.toUpperCase()}
            </div>
            <h1 style={styles.lessonH1}>{lesson.title}</h1>
            <p style={styles.lessonIntro}>{lesson.intro}</p>
          </header>

          {lesson.sections.map((section, i) => (
            <section key={i} style={styles.lessonSection}>
              <h2 style={{ ...styles.lessonH2, color: realm.color }}>{section.heading}</h2>
              <LessonProse text={section.body} />
              {section.diagram && (
                <div style={styles.lessonDiagram} dangerouslySetInnerHTML={{ __html: section.diagram }} />
              )}
            </section>
          ))}

          {lesson.examples && lesson.examples.length > 0 && (
            <section style={styles.lessonSection}>
              <h2 style={{ ...styles.lessonH2, color: realm.color }}>Worked Examples</h2>
              {lesson.examples.map((ex, i) => (
                <div key={i} style={{ ...styles.workedExample, borderColor: `${realm.accent}40` }}>
                  <div style={{ ...styles.workedExampleLabel, color: realm.color }}>EXAMPLE {i + 1}</div>
                  <p style={styles.workedExamplePrompt}><strong>{ex.prompt}</strong></p>
                  <ol style={styles.workedExampleSteps}>
                    {ex.steps.map((step, j) => <li key={j} style={styles.workedExampleStep}>{step}</li>)}
                  </ol>
                  <div style={{ ...styles.workedExampleAnswer, borderColor: realm.color, color: realm.color }}>
                    <strong>Answer:</strong> {ex.answer}
                  </div>
                </div>
              ))}
            </section>
          )}

          {lesson.practice && lesson.practice.length > 0 && (
            <section style={styles.lessonSection}>
              <h2 style={{ ...styles.lessonH2, color: realm.color }}>Check Your Understanding</h2>
              <p style={{ fontSize: 14, color: 'rgba(245,245,247,0.6)', marginBottom: 16, fontStyle: 'italic' }}>
                Tap an answer to reveal the explanation.
              </p>
              {lesson.practice.map((p, i) => (
                <PracticeQuestion key={i} q={p} accent={realm.color} num={i + 1} />
              ))}
            </section>
          )}

          <nav style={styles.lessonNav}>
            {prevLesson ? (
              <button
                onClick={() => onSelectLesson(prevLesson.id)}
                style={styles.lessonNavBtn}
              >
                <ChevronLeft size={16} /> {prevLesson.title}
              </button>
            ) : <div />}
            {nextLesson ? (
              <button
                onClick={() => onSelectLesson(nextLesson.id)}
                style={{ ...styles.lessonNavBtn, background: realm.color, color: '#0a0a0f', borderColor: realm.color }}
              >
                Next: {nextLesson.title} <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={onBack}
                style={{ ...styles.lessonNavBtn, background: realm.color, color: '#0a0a0f', borderColor: realm.color }}
              >
                BACK TO LESSONS <ChevronRight size={16} />
              </button>
            )}
          </nav>
        </article>
      </div>
    </div>
  );
}

// Render lesson body text — supports **bold** and bullets starting with •
function LessonProse({ text }) {
  const paragraphs = text.split('\n\n').filter(p => p.trim());
  return (
    <>
      {paragraphs.map((para, i) => {
        // Bullet block
        if (para.split('\n').every(line => line.trim().startsWith('•'))) {
          return (
            <ul key={i} style={styles.lessonBulletList}>
              {para.split('\n').map((line, j) => (
                <li key={j} style={styles.lessonListItem}>
                  <FormattedText text={line.replace(/^•\s*/, '')} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} style={styles.lessonParagraph}>
            <FormattedText text={para} />
          </p>
        );
      })}
    </>
  );
}

// Inline **bold** parsing
function FormattedText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} style={{ color: '#fbbf24', fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}

function PracticeQuestion({ q, accent, num }) {
  const [selected, setSelected] = useState(null);
  const isCorrect = selected === q.correct;

  return (
    <div style={{ ...styles.practiceCard, borderColor: `${accent}30` }}>
      <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
        <span style={{ ...styles.practiceNum, background: accent }}>Q{num}</span>
        <p style={styles.practiceQ}>{q.q}</p>
      </div>
      <div style={styles.practiceChoices}>
        {q.choices.map((choice, i) => {
          const isSelectedChoice = selected === i;
          const isThisCorrect = i === q.correct;
          let cs = { ...styles.practiceChoice };
          if (selected !== null) {
            if (isThisCorrect) cs = { ...cs, ...styles.practiceChoiceCorrect };
            else if (isSelectedChoice) cs = { ...cs, ...styles.practiceChoiceWrong };
            else cs = { ...cs, opacity: 0.45 };
          }
          return (
            <button
              key={i}
              onClick={() => selected === null && setSelected(i)}
              disabled={selected !== null}
              style={cs}
              className="practice-choice-btn"
            >
              <span style={styles.choiceLetter}>{String.fromCharCode(65 + i)}</span>
              <span style={{ flex: 1 }}>{choice}</span>
              {selected !== null && isThisCorrect && <Check size={16} strokeWidth={3} style={{ color: '#10b981' }} />}
              {selected !== null && isSelectedChoice && !isThisCorrect && <X size={16} strokeWidth={3} style={{ color: '#ef4444' }} />}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div style={{
          ...styles.practiceExplain,
          borderColor: isCorrect ? '#10b981' : '#ef4444',
          background: isCorrect ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)',
        }}>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', marginBottom: 8, color: isCorrect ? '#10b981' : '#ef4444' }}>
            {isCorrect ? '✓ CORRECT' : '✗ NOT QUITE'}
          </div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(245,245,247,0.85)' }}>{q.explain}</p>
        </div>
      )}
    </div>
  );
}

// ============================================================
// SHOP SCREEN
// ============================================================

function ShopScreen({ save, archmageAllComplete, onBuyTheme, onBuyTitle, onBuyPet, onEquipTheme, onEquipTitle, onEquipPet, onClose }) {
  const [tab, setTab] = useState('themes');

  return (
    <div className="shop-overlay" style={styles.shopOverlay}>
      <div className="shop-container" style={styles.shopContainer}>
        <div className="shop-header" style={styles.shopHeader}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.3em', color: '#fbbf24', fontWeight: 700, marginBottom: 6 }}>
              ◆ THE APOTHECARY ◆
            </div>
            <h2 style={{ fontFamily: "'Cinzel', serif", margin: 0, fontSize: 32, fontWeight: 900, letterSpacing: '0.02em' }}>
              Cosmetics, Titles & Familiars
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="aether-balance" style={styles.aetherBalance}>
              <Coins size={18} style={{ color: '#fbbf24' }} />
              <strong>{save.aether}</strong>
              <span style={{ opacity: 0.6, fontSize: 11 }}>AETHER</span>
            </div>
            <button onClick={onClose} style={styles.shopCloseBtn}>
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="shop-tabs" style={styles.shopTabs}>
          <button
            onClick={() => setTab('themes')}
            className="shop-tab" style={{ ...styles.shopTab, ...(tab === 'themes' ? styles.shopTabActive : {}) }}
          >
            <Gem size={14} /> THEMES
          </button>
          <button
            onClick={() => setTab('titles')}
            className="shop-tab" style={{ ...styles.shopTab, ...(tab === 'titles' ? styles.shopTabActive : {}) }}
          >
            <Crown size={14} /> TITLES
          </button>
          <button
            onClick={() => setTab('pets')}
            className="shop-tab" style={{ ...styles.shopTab, ...(tab === 'pets' ? styles.shopTabActive : {}) }}
          >
            <PawPrint size={14} /> FAMILIARS
          </button>
        </div>

        <div className="shop-body" style={styles.shopBody}>
          {tab === 'themes' && (
            <div className="shop-grid" style={styles.shopGrid}>
              {Object.values(THEMES).map(t => {
                const owned = save.ownedThemes.includes(t.id);
                const active = save.activeTheme === t.id;
                const canAfford = save.aether >= t.price;
                return (
                  <div key={t.id} className="shop-item" style={{ ...styles.shopItem, borderColor: active ? t.accent : 'rgba(255,255,255,0.1)' }}>
                    <div className="theme-preview" style={{
                      ...styles.themePreview,
                      background: `radial-gradient(ellipse at top, ${t.bg1} 0%, ${t.bg2} 60%)`
                    }}>
                      <div style={{ ...styles.themePreviewAccent, background: t.accent }} />
                    </div>
                    <h4 className="shop-item-name" style={styles.shopItemName}>{t.name}</h4>
                    <p className="shop-item-desc" style={styles.shopItemDesc}>{t.desc}</p>
                    {owned ? (
                      <button
                        onClick={() => onEquipTheme(t.id)}
                        disabled={active}
                        className="shop-buy-btn" style={{ ...styles.shopBuyBtn, background: active ? 'rgba(255,255,255,0.05)' : t.accent, color: active ? 'rgba(255,255,255,0.4)' : '#0a0a0f' }}
                      >
                        {active ? '✓ EQUIPPED' : 'EQUIP'}
                      </button>
                    ) : (
                      <button
                        onClick={() => onBuyTheme(t.id)}
                        disabled={!canAfford}
                        className="shop-buy-btn" style={{ ...styles.shopBuyBtn, background: canAfford ? '#fbbf24' : 'rgba(255,255,255,0.05)', color: canAfford ? '#0a0a0f' : 'rgba(255,255,255,0.3)' }}
                      >
                        <Coins size={14} /> {t.price}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {tab === 'titles' && (
            <div className="shop-grid" style={styles.shopGrid}>
              {TITLES.map(t => {
                const owned = save.ownedTitles.includes(t.id);
                const active = save.activeTitle === t.id;
                const canAfford = save.aether >= t.price;
                const locked = (t.special === 'all_realms' && !archmageAllComplete);
                const isCrowned = t.special === 'boss';
                return (
                  <div key={t.id} className="shop-item" style={{ ...styles.shopItem, borderColor: active ? '#fbbf24' : 'rgba(255,255,255,0.1)' }}>
                    <div className="title-preview" style={styles.titlePreview}>
                      <Crown size={28} style={{ color: owned ? '#fbbf24' : 'rgba(255,255,255,0.2)' }} />
                    </div>
                    <h4 className="shop-item-name" style={styles.shopItemName}>{t.name}</h4>
                    <p className="shop-item-desc" style={styles.shopItemDesc}>{t.desc}</p>
                    {owned ? (
                      <button
                        onClick={() => onEquipTitle(t.id)}
                        disabled={active}
                        className="shop-buy-btn" style={{ ...styles.shopBuyBtn, background: active ? 'rgba(255,255,255,0.05)' : '#fbbf24', color: active ? 'rgba(255,255,255,0.4)' : '#0a0a0f' }}
                      >
                        {active ? '✓ WORN' : 'WEAR'}
                      </button>
                    ) : isCrowned ? (
                      <div className="shop-buy-btn" style={{ ...styles.shopBuyBtn, background: 'rgba(251,191,36,0.1)', color: '#fbbf24', border: '1px dashed #fbbf24', cursor: 'not-allowed' }}>
                        <Lock size={12} /> DEFEAT THE CRUCIBLE
                      </div>
                    ) : locked ? (
                      <div className="shop-buy-btn" style={{ ...styles.shopBuyBtn, background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.4)', cursor: 'not-allowed' }}>
                        <Lock size={12} /> ALL ARCHMAGE TIERS
                      </div>
                    ) : (
                      <button
                        onClick={() => onBuyTitle(t.id)}
                        disabled={!canAfford}
                        className="shop-buy-btn" style={{ ...styles.shopBuyBtn, background: canAfford ? '#fbbf24' : 'rgba(255,255,255,0.05)', color: canAfford ? '#0a0a0f' : 'rgba(255,255,255,0.3)' }}
                      >
                        <Coins size={14} /> {t.price}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {tab === 'pets' && (
            <div className="shop-grid" style={styles.shopGrid}>
              {PET_ORDER.map(pid => {
                const p = PETS[pid];
                const PetIcon = p.Icon;
                const owned = save.ownedPets.includes(p.id);
                const active = save.activePet === p.id;
                const canAfford = save.aether >= p.price;
                const isPhoenix = p.special === 'boss';
                const phoenixLocked = isPhoenix && !save.bossDefeated;
                return (
                  <div key={p.id} className="shop-item" style={{ ...styles.shopItem, borderColor: active ? p.color : 'rgba(255,255,255,0.1)' }}>
                    <div className="pet-preview" style={{
                      ...styles.petPreview,
                      background: `radial-gradient(ellipse at center, ${p.color}15 0%, transparent 70%)`,
                      borderColor: `${p.color}30`,
                    }}>
                      <PetIcon size={36} style={{ color: owned || isPhoenix ? p.color : 'rgba(255,255,255,0.25)' }} strokeWidth={1.6} />
                    </div>
                    <h4 className="shop-item-name" style={styles.shopItemName}>{p.name}</h4>
                    <p className="shop-item-desc" style={styles.shopItemDesc}>{p.desc}</p>
                    <div style={{
                      fontSize: 11,
                      color: p.color,
                      background: `${p.color}10`,
                      border: `1px solid ${p.color}30`,
                      padding: '6px 10px',
                      borderRadius: 3,
                      marginBottom: 12,
                      letterSpacing: '0.02em',
                      lineHeight: 1.4,
                    }}>
                      ⟢ {p.perkText}
                    </div>
                    {owned ? (
                      <button
                        onClick={() => onEquipPet(p.id)}
                        disabled={active}
                        className="shop-buy-btn" style={{ ...styles.shopBuyBtn, background: active ? 'rgba(255,255,255,0.05)' : p.color, color: active ? 'rgba(255,255,255,0.4)' : '#0a0a0f' }}
                      >
                        {active ? '✓ COMPANION' : p.id === 'none' ? 'DISMISS PET' : 'SUMMON'}
                      </button>
                    ) : phoenixLocked ? (
                      <div className="shop-buy-btn" style={{ ...styles.shopBuyBtn, background: 'rgba(251,191,36,0.1)', color: '#fbbf24', border: '1px dashed #fbbf24', cursor: 'not-allowed' }}>
                        <Lock size={12} /> DEFEAT THE CRUCIBLE
                      </div>
                    ) : isPhoenix ? (
                      <button
                        onClick={() => onBuyPet(p.id)}
                        className="shop-buy-btn" style={{ ...styles.shopBuyBtn, background: '#fbbf24', color: '#0a0a0f' }}
                      >
                        ✦ CLAIM REWARD ✦
                      </button>
                    ) : (
                      <button
                        onClick={() => onBuyPet(p.id)}
                        disabled={!canAfford}
                        className="shop-buy-btn" style={{ ...styles.shopBuyBtn, background: canAfford ? '#fbbf24' : 'rgba(255,255,255,0.05)', color: canAfford ? '#0a0a0f' : 'rgba(255,255,255,0.3)' }}
                      >
                        <Coins size={14} /> {p.price}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// STYLES
// ============================================================

const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  * { box-sizing: border-box; }

  html, body { -webkit-text-size-adjust: 100%; overflow-x: hidden; }

  .quest-card {
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
  }
  .quest-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 60px -10px var(--quest-accent);
  }

  .tier-btn {
    transition: all 0.2s ease;
  }
  .tier-btn:hover {
    transform: translateY(-2px);
    background: rgba(255,255,255,0.06) !important;
  }

  .choice-btn:not(:disabled):hover {
    transform: translateX(4px);
    background: rgba(255,255,255,0.06) !important;
  }

  /* Touch targets — buttons must be tappable */
  button { -webkit-tap-highlight-color: transparent; touch-action: manipulation; }

  @keyframes starPop {
    0% { transform: scale(0) rotate(-180deg); opacity: 0; }
    60% { transform: scale(1.3) rotate(20deg); }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }
  .victory-star {
    animation: starPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
    display: inline-block;
  }

  @keyframes drift {
    from { background-position: 0 0; }
    to { background-position: 1000px 1000px; }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes shimmer {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  /* ============================================================
     MOBILE RESPONSIVE OVERRIDES — under 720px
     ============================================================ */
  @media (max-width: 720px) {
    .home-inner { padding: 28px 16px 60px !important; }
    .home-header { flex-direction: column !important; align-items: stretch !important; gap: 24px !important; margin-bottom: 28px !important; }
    .home-stats-bar { width: 100%; gap: 8px !important; }
    .home-stats-bar .stat-box { flex: 1 1 0; min-width: 0; padding: 10px 12px !important; gap: 8px !important; }
    .home-stats-bar .stat-box .stat-value { font-size: 18px !important; }
    .home-stats-bar .stat-box .stat-label { font-size: 9px !important; letter-spacing: 0.15em !important; }
    .home-stats-bar .shop-btn { padding: 10px 14px !important; font-size: 11px !important; letter-spacing: 0.15em !important; }

    .quest-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
    .quest-card { padding: 24px 20px !important; }
    .quest-card:hover { transform: none !important; box-shadow: none !important; }
    .tier-btn:hover { transform: none !important; }

    .crown-banner { font-size: 10px !important; letter-spacing: 0.2em !important; padding: 14px 12px !important; text-align: center; }

    .boss-card { padding: 28px 20px !important; margin-top: 28px !important; }
    .boss-card h3 { font-size: 22px !important; }

    /* Quest screen */
    .quest-inner { padding: 20px 14px !important; }
    .quest-top-bar { gap: 10px !important; margin-bottom: 14px !important; }
    .quest-banner { padding: 6px 10px !important; gap: 6px !important; }
    .quest-banner .banner-text { font-size: 12px !important; }
    .tier-chip { font-size: 9px !important; padding: 3px 6px !important; letter-spacing: 0.1em !important; }
    .quest-banner-sub { font-size: 10px !important; padding-left: 8px !important; }
    .abandon-btn { padding: 7px 12px !important; font-size: 11px !important; letter-spacing: 0.1em !important; }

    .question-card { padding: 22px 18px !important; }
    .question-text { font-size: 17px !important; line-height: 1.45 !important; margin-bottom: 22px !important; }
    .choice { padding: 13px 14px !important; font-size: 14px !important; gap: 12px !important; }
    .choice:hover { transform: none !important; }
    .submit-btn { padding: 16px !important; font-size: 12px !important; letter-spacing: 0.18em !important; }

    .result-box { padding: 16px !important; }
    .explain-text { font-size: 13px !important; }

    .aether-ticker { font-size: 10px !important; padding: 5px 10px !important; letter-spacing: 0.05em !important; }

    /* Victory */
    .victory-inner { padding: 0 8px; }
    .victory-title { font-size: 28px !important; }
    .victory-icon svg { width: 60px !important; height: 60px !important; }
    .star-large { font-size: 48px !important; }
    .victory-btn { padding: 16px 28px !important; font-size: 12px !important; letter-spacing: 0.2em !important; }

    /* Shop */
    .shop-overlay { padding: 0 !important; }
    .shop-container { max-height: 100vh !important; height: 100vh !important; border-radius: 0 !important; border: none !important; }
    .shop-header { padding: 18px 20px !important; gap: 12px !important; }
    .shop-header h2 { font-size: 22px !important; }
    .shop-header > div:first-child > div:first-child { font-size: 10px !important; letter-spacing: 0.2em !important; }
    .shop-tabs { padding: 0 12px !important; overflow-x: auto; }
    .shop-tab { padding: 14px 16px !important; font-size: 11px !important; letter-spacing: 0.15em !important; flex-shrink: 0; }
    .shop-body { padding: 20px 16px !important; }
    .shop-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
    .shop-item { padding: 14px !important; }
    .shop-item h4 { font-size: 14px !important; }
    .shop-item p { font-size: 11px !important; }
    .shop-buy-btn { padding: 9px 10px !important; font-size: 11px !important; letter-spacing: 0.12em !important; }
    .theme-preview, .title-preview { height: 60px !important; }
    .pet-preview { height: 80px !important; }
    .pet-preview svg { width: 28px !important; height: 28px !important; }
    .aether-balance { font-size: 14px !important; padding: 8px 12px !important; }

    /* Library mobile */
    .library-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
    .library-realm-card { padding: 18px 16px !important; }
    .library-realm-card:hover { transform: none !important; }
    .lesson-card:hover { transform: none !important; }
  }

  /* Library hover effects */
  .library-realm-card:not(:disabled):hover {
    transform: translateY(-3px);
    background: rgba(255,255,255,0.05) !important;
  }
  .lesson-card:hover {
    transform: translateX(4px);
    background: rgba(255,255,255,0.04) !important;
  }
  .practice-choice-btn:not(:disabled):hover {
    background: rgba(255,255,255,0.05) !important;
  }
  .library-back-btn:hover {
    background: rgba(255,255,255,0.06) !important;
    color: #f5f5f7 !important;
  }

  /* Very narrow phones */
  @media (max-width: 380px) {
    .shop-grid { grid-template-columns: 1fr !important; }
    .home-stats-bar { flex-wrap: wrap !important; }
    .home-stats-bar .stat-box { flex: 1 1 calc(50% - 4px); }
  }
`;

const styles = {
  app: {
    minHeight: '100vh',
    width: '100%',
    fontFamily: "'Inter', sans-serif",
    background: 'var(--bg2)',
    color: '#f5f5f7',
  },

  // HOME
  homeContainer: {
    minHeight: '100vh',
    background: 'radial-gradient(ellipse at top, var(--bg1) 0%, var(--bg2) 60%)',
    position: 'relative',
    overflow: 'hidden',
  },
  starfield: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'radial-gradient(1px 1px at 20% 30%, white 0%, transparent 50%), radial-gradient(1px 1px at 60% 70%, white 0%, transparent 50%), radial-gradient(2px 2px at 80% 10%, white 0%, transparent 50%), radial-gradient(1px 1px at 30% 80%, white 0%, transparent 50%), radial-gradient(1px 1px at 90% 50%, white 0%, transparent 50%)',
    backgroundSize: '300px 300px',
    opacity: 0.3,
    animation: 'drift 200s linear infinite',
  },
  homeInner: {
    position: 'relative',
    maxWidth: '1240px',
    margin: '0 auto',
    padding: '60px 32px 80px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    gap: 32,
    marginBottom: 48,
  },
  titleBlock: { animation: 'fadeUp 0.8s ease' },
  eyebrow: {
    fontFamily: "'Cinzel', serif",
    fontSize: 12,
    letterSpacing: '0.4em',
    color: 'var(--theme-accent)',
    marginBottom: 16,
    fontWeight: 700,
  },
  title: {
    margin: 0,
    fontFamily: "'Cinzel', serif",
    lineHeight: 0.95,
    display: 'flex',
    flexDirection: 'column',
  },
  titleAccent: {
    fontSize: 'clamp(48px, 8vw, 96px)',
    fontWeight: 900,
    letterSpacing: '0.05em',
    background: 'linear-gradient(135deg, var(--theme-accent) 0%, #f97316 50%, #ec4899 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  titleMain: {
    fontSize: 'clamp(20px, 3vw, 32px)',
    fontWeight: 500,
    letterSpacing: '0.2em',
    color: '#f5f5f7',
    marginTop: 8,
    fontStyle: 'italic',
  },
  subtitle: {
    marginTop: 20,
    color: 'rgba(245,245,247,0.6)',
    fontSize: 15,
    letterSpacing: '0.05em',
    maxWidth: 480,
  },
  titleBadge: {
    marginTop: 16,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 14px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 4,
    fontSize: 12,
    letterSpacing: '0.1em',
    fontFamily: "'Cinzel', serif",
    fontWeight: 700,
  },
  statsBar: {
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  statBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '14px 18px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 4,
  },
  statLabel: {
    fontSize: 10,
    letterSpacing: '0.2em',
    color: 'rgba(245,245,247,0.5)',
    fontWeight: 700,
  },
  statValue: {
    fontFamily: "'Cinzel', serif",
    fontSize: 22,
    fontWeight: 700,
    lineHeight: 1,
    marginTop: 2,
  },
  shopBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '14px 18px',
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    border: 'none',
    color: '#0a0a0f',
    fontFamily: "'Cinzel', serif",
    fontSize: 12,
    letterSpacing: '0.2em',
    fontWeight: 800,
    borderRadius: 4,
    cursor: 'pointer',
  },
  resetBtn: {
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'rgba(255,255,255,0.4)',
    padding: 12,
    borderRadius: 4,
    cursor: 'pointer',
  },
  crownBanner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: '20px',
    background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.15), transparent)',
    border: '1px solid rgba(251,191,36,0.4)',
    color: '#fbbf24',
    fontFamily: "'Cinzel', serif",
    fontSize: 14,
    letterSpacing: '0.3em',
    fontWeight: 700,
    marginBottom: 32,
  },
  questGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: 20,
  },
  questCard: {
    position: 'relative',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
    border: '1px solid',
    borderRadius: 4,
    padding: '32px 28px',
    overflow: 'hidden',
    animation: 'fadeUp 0.6s ease backwards',
  },
  questNum: {
    position: 'absolute',
    top: 20,
    right: 24,
    fontFamily: "'Cinzel', serif",
    fontSize: 14,
    color: 'rgba(255,255,255,0.25)',
    letterSpacing: '0.1em',
    fontWeight: 700,
  },
  questIcon: { marginBottom: 16 },
  questName: {
    margin: 0,
    fontFamily: "'Cinzel', serif",
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: '0.02em',
  },
  questSub: {
    margin: '4px 0 16px',
    fontSize: 11,
    letterSpacing: '0.2em',
    color: 'var(--quest-color)',
    fontWeight: 700,
    textTransform: 'uppercase',
    opacity: 0.8,
  },
  questLore: {
    margin: 0,
    fontSize: 13,
    lineHeight: 1.6,
    color: 'rgba(245,245,247,0.55)',
    marginBottom: 20,
  },
  tierRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    marginTop: 16,
    paddingTop: 16,
    borderTop: '1px solid rgba(255,255,255,0.06)',
  },
  tierBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '10px 14px',
    border: '1px solid',
    borderRadius: 3,
    cursor: 'pointer',
    fontFamily: 'inherit',
    color: 'inherit',
    background: 'transparent',
    width: '100%',
    textAlign: 'left',
  },
  tierLabel: {
    fontFamily: "'Cinzel', serif",
    fontSize: 13,
    fontWeight: 800,
    width: 24,
  },
  tierName: {
    fontSize: 12,
    letterSpacing: '0.1em',
    fontWeight: 600,
    textTransform: 'uppercase',
    flex: 1,
  },
  tierStars: {
    fontSize: 14,
    display: 'flex',
    gap: 2,
  },
  tierEnter: {
    fontSize: 10,
    letterSpacing: '0.2em',
    fontWeight: 700,
    color: 'rgba(255,255,255,0.5)',
  },

  // BOSS CARD
  bossCard: {
    marginTop: 40,
    border: '1px solid',
    borderRadius: 6,
    padding: '40px 36px',
    background: 'linear-gradient(135deg, rgba(251,191,36,0.04) 0%, rgba(0,0,0,0.2) 100%)',
    transition: 'opacity 0.4s ease',
  },
  bossInner: { position: 'relative' },
  bossLore: {
    color: 'rgba(245,245,247,0.7)',
    fontSize: 14,
    lineHeight: 1.7,
    margin: '0 0 24px',
    maxWidth: 640,
  },
  bossBtn: {
    padding: '16px 32px',
    background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
    border: 'none',
    color: '#0a0a0f',
    fontFamily: "'Cinzel', serif",
    fontSize: 14,
    fontWeight: 800,
    letterSpacing: '0.25em',
    borderRadius: 4,
    cursor: 'pointer',
  },
  bossLocked: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '14px 22px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px dashed rgba(255,255,255,0.2)',
    borderRadius: 4,
    fontSize: 11,
    letterSpacing: '0.2em',
    color: 'rgba(255,255,255,0.5)',
    fontWeight: 700,
  },
  footer: { marginTop: 60, textAlign: 'center' },
  footerRule: {
    height: 1,
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
    marginBottom: 24,
  },
  footerText: {
    fontSize: 12,
    color: 'rgba(245,245,247,0.4)',
    letterSpacing: '0.1em',
    fontFamily: "'Cinzel', serif",
  },

  // QUEST SCREEN
  questContainer: {
    minHeight: '100vh',
    background: 'var(--bg2)',
    position: 'relative',
    overflow: 'hidden',
  },
  questBg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at center top, color-mix(in srgb, var(--quest-accent) 15%, transparent) 0%, transparent 60%)',
    pointerEvents: 'none',
  },
  questInner: {
    position: 'relative',
    maxWidth: 880,
    margin: '0 auto',
    padding: '32px 24px',
  },
  questTopBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    gap: 16,
    flexWrap: 'wrap',
  },
  abandonBtn: {
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.15)',
    color: 'rgba(255,255,255,0.7)',
    padding: '8px 16px',
    fontSize: 12,
    letterSpacing: '0.15em',
    fontWeight: 600,
    cursor: 'pointer',
    borderRadius: 3,
    fontFamily: 'inherit',
  },
  questBanner: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '8px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 3,
    flexWrap: 'wrap',
  },
  questBannerText: {
    fontFamily: "'Cinzel', serif",
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: '0.05em',
  },
  tierChip: {
    fontSize: 10,
    letterSpacing: '0.15em',
    fontWeight: 800,
    padding: '4px 8px',
    border: '1px solid',
    borderRadius: 2,
    fontFamily: "'Cinzel', serif",
  },
  questBannerSub: {
    fontSize: 11,
    letterSpacing: '0.15em',
    color: 'rgba(255,255,255,0.5)',
    fontWeight: 600,
    paddingLeft: 10,
    borderLeft: '1px solid rgba(255,255,255,0.15)',
  },
  hpBar: { display: 'flex', gap: 6 },
  progressTrack: {
    height: 3,
    background: 'rgba(255,255,255,0.06)',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 16,
  },
  progressFill: {
    height: '100%',
    transition: 'width 0.5s ease',
  },
  aetherTicker: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '6px 12px',
    background: 'rgba(251,191,36,0.08)',
    border: '1px solid rgba(251,191,36,0.2)',
    borderRadius: 3,
    fontSize: 11,
    color: '#fbbf24',
    letterSpacing: '0.1em',
    fontWeight: 600,
    marginBottom: 16,
  },
  questionCard: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 6,
    padding: 'clamp(24px, 4vw, 40px)',
    animation: 'fadeUp 0.4s ease',
  },
  questionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  trialBadge: {
    color: '#0a0a0f',
    padding: '6px 12px',
    fontSize: 11,
    letterSpacing: '0.2em',
    fontWeight: 800,
    borderRadius: 2,
  },
  xpBadge: {
    fontSize: 11,
    letterSpacing: '0.2em',
    fontWeight: 700,
    color: '#fbbf24',
  },
  questionText: {
    margin: '0 0 32px',
    fontSize: 'clamp(18px, 2.5vw, 24px)',
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: '-0.01em',
  },
  choicesGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginBottom: 24,
  },
  choice: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: '16px 20px',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 4,
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: 15,
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    width: '100%',
  },
  choiceSelected: {
    background: 'rgba(255,255,255,0.05)',
    borderWidth: 2,
  },
  choiceCorrect: {
    background: 'rgba(16,185,129,0.1)',
    borderColor: '#10b981',
    borderWidth: 2,
  },
  choiceWrong: {
    background: 'rgba(239,68,68,0.1)',
    borderColor: '#ef4444',
    borderWidth: 2,
  },
  choiceLetter: {
    fontFamily: "'Cinzel', serif",
    fontSize: 14,
    fontWeight: 700,
    color: 'rgba(255,255,255,0.4)',
    minWidth: 20,
  },
  choiceText: { flex: 1 },
  resultBox: {
    border: '1px solid',
    borderRadius: 4,
    padding: 20,
    marginBottom: 20,
    animation: 'fadeUp 0.3s ease',
  },
  resultHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
    fontSize: 13,
    letterSpacing: '0.1em',
  },
  explainSection: { marginBottom: 16 },
  explainLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontSize: 10,
    letterSpacing: '0.25em',
    fontWeight: 700,
    color: 'rgba(255,255,255,0.5)',
    marginBottom: 8,
  },
  explainText: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.65,
    color: 'rgba(245,245,247,0.85)',
  },
  ytLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 14px',
    background: 'rgba(255,0,0,0.08)',
    border: '1px solid rgba(255,0,0,0.25)',
    borderRadius: 3,
    color: '#ff5757',
    textDecoration: 'none',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.02em',
  },
  gameOverNote: {
    marginTop: 16,
    padding: 12,
    background: 'rgba(239,68,68,0.1)',
    border: '1px solid rgba(239,68,68,0.3)',
    borderRadius: 3,
    color: '#fca5a5',
    fontSize: 13,
    fontStyle: 'italic',
  },
  submitBtn: {
    width: '100%',
    padding: '18px',
    border: 'none',
    borderRadius: 4,
    fontFamily: "'Cinzel', serif",
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: '0.25em',
    cursor: 'pointer',
    transition: 'transform 0.15s ease',
  },

  // VICTORY
  victoryContainer: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--bg2)',
    position: 'relative',
    overflow: 'hidden',
    padding: 24,
  },
  victoryBg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at center, color-mix(in srgb, var(--quest-color) 25%, transparent) 0%, transparent 60%)',
  },
  victoryInner: {
    position: 'relative',
    textAlign: 'center',
    maxWidth: 560,
    animation: 'fadeUp 0.6s ease',
  },
  victoryIcon: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 24,
  },
  victoryEyebrow: {
    fontFamily: "'Cinzel', serif",
    fontSize: 12,
    letterSpacing: '0.4em',
    fontWeight: 700,
    marginBottom: 12,
  },
  victoryTitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: 900,
    margin: '0 0 12px',
    letterSpacing: '0.02em',
  },
  starsLarge: {
    display: 'flex',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 32,
  },
  starLarge: { fontSize: 64, lineHeight: 1 },
  victoryScore: {
    fontFamily: "'Cinzel', serif",
    fontSize: 24,
    fontWeight: 700,
    margin: '0 0 8px',
  },
  victoryMessage: {
    fontSize: 15,
    color: 'rgba(245,245,247,0.6)',
    margin: '0 0 24px',
    fontStyle: 'italic',
    lineHeight: 1.6,
  },
  aetherEarned: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '12px 20px',
    background: 'rgba(251,191,36,0.1)',
    border: '1px solid rgba(251,191,36,0.3)',
    borderRadius: 3,
    marginBottom: 32,
    fontFamily: "'Cinzel', serif",
    fontSize: 14,
    color: '#fbbf24',
    letterSpacing: '0.05em',
  },
  victoryBtn: {
    padding: '18px 40px',
    border: 'none',
    borderRadius: 4,
    fontFamily: "'Cinzel', serif",
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: '0.25em',
    color: '#0a0a0f',
    cursor: 'pointer',
  },

  // SHOP
  shopOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.85)',
    backdropFilter: 'blur(8px)',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    animation: 'fadeUp 0.3s ease',
  },
  shopContainer: {
    width: '100%',
    maxWidth: 960,
    maxHeight: '90vh',
    background: 'linear-gradient(180deg, rgba(20,20,30,0.95) 0%, rgba(10,10,15,0.98) 100%)',
    border: '1px solid rgba(251,191,36,0.3)',
    borderRadius: 6,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  shopHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 32px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    flexWrap: 'wrap',
    gap: 16,
  },
  aetherBalance: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 16px',
    background: 'rgba(251,191,36,0.1)',
    border: '1px solid rgba(251,191,36,0.3)',
    borderRadius: 3,
    fontFamily: "'Cinzel', serif",
    fontSize: 16,
    color: '#fbbf24',
  },
  shopCloseBtn: {
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.15)',
    color: 'rgba(255,255,255,0.7)',
    padding: 10,
    borderRadius: 3,
    cursor: 'pointer',
  },
  shopTabs: {
    display: 'flex',
    gap: 0,
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    padding: '0 32px',
  },
  shopTab: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '16px 24px',
    background: 'transparent',
    border: 'none',
    color: 'rgba(255,255,255,0.4)',
    fontFamily: "'Cinzel', serif",
    fontSize: 12,
    letterSpacing: '0.2em',
    fontWeight: 700,
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    marginBottom: -1,
  },
  shopTabActive: {
    color: '#fbbf24',
    borderBottomColor: '#fbbf24',
  },
  shopBody: {
    overflowY: 'auto',
    padding: 32,
    flex: 1,
  },
  shopGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: 16,
  },
  shopItem: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid',
    borderRadius: 4,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s ease',
  },
  themePreview: {
    height: 80,
    borderRadius: 3,
    marginBottom: 14,
    position: 'relative',
    border: '1px solid rgba(255,255,255,0.06)',
    overflow: 'hidden',
  },
  themePreviewAccent: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 14,
    height: 14,
    borderRadius: '50%',
    boxShadow: '0 0 12px currentColor',
  },
  titlePreview: {
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, rgba(251,191,36,0.05) 0%, transparent 100%)',
    borderRadius: 3,
    marginBottom: 14,
    border: '1px solid rgba(255,255,255,0.06)',
  },
  petPreview: {
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 14,
    border: '1px solid',
    position: 'relative',
    overflow: 'hidden',
  },
  shopItemName: {
    fontFamily: "'Cinzel', serif",
    fontSize: 16,
    fontWeight: 700,
    margin: '0 0 6px',
    letterSpacing: '0.02em',
  },
  shopItemDesc: {
    fontSize: 12,
    lineHeight: 1.5,
    color: 'rgba(245,245,247,0.55)',
    margin: '0 0 16px',
    flex: 1,
    fontStyle: 'italic',
  },
  shopBuyBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    width: '100%',
    padding: '10px 14px',
    border: 'none',
    borderRadius: 3,
    fontFamily: "'Cinzel', serif",
    fontSize: 12,
    letterSpacing: '0.2em',
    fontWeight: 800,
    cursor: 'pointer',
    transition: 'transform 0.15s ease',
  },

  // LIBRARY
  libraryContainer: {
    minHeight: '100vh',
    background: 'var(--bg2)',
    position: 'relative',
    overflow: 'hidden',
  },
  libraryBg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at center top, color-mix(in srgb, var(--quest-accent) 12%, transparent) 0%, transparent 60%)',
    pointerEvents: 'none',
  },
  libraryInner: {
    position: 'relative',
    maxWidth: 1100,
    margin: '0 auto',
    padding: '32px 24px 80px',
  },
  libraryBackBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding: '8px 14px',
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.15)',
    color: 'rgba(255,255,255,0.7)',
    fontSize: 11,
    letterSpacing: '0.2em',
    fontWeight: 700,
    cursor: 'pointer',
    borderRadius: 3,
    fontFamily: 'inherit',
    marginBottom: 32,
  },
  libraryHeader: {
    marginBottom: 36,
    animation: 'fadeUp 0.5s ease',
  },
  libraryTitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: 'clamp(32px, 6vw, 56px)',
    fontWeight: 900,
    margin: '0 0 12px',
    letterSpacing: '0.02em',
    lineHeight: 1.05,
  },
  librarySubtitle: {
    fontSize: 15,
    color: 'rgba(245,245,247,0.6)',
    maxWidth: 620,
    lineHeight: 1.6,
    margin: 0,
  },
  libraryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 16,
  },
  libraryRealmCard: {
    textAlign: 'left',
    padding: '24px 22px',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
    border: '1px solid',
    borderRadius: 4,
    color: 'inherit',
    fontFamily: 'inherit',
    transition: 'transform 0.2s ease',
    animation: 'fadeUp 0.5s ease backwards',
  },
  libraryRealmName: {
    fontFamily: "'Cinzel', serif",
    fontSize: 19,
    fontWeight: 700,
    margin: 0,
    letterSpacing: '0.01em',
  },
  libraryRealmSub: {
    fontSize: 11,
    letterSpacing: '0.18em',
    fontWeight: 700,
    margin: '4px 0 0',
    textTransform: 'uppercase',
    opacity: 0.8,
  },
  libraryLessonCount: {
    fontSize: 11,
    letterSpacing: '0.2em',
    fontWeight: 700,
    color: 'rgba(245,245,247,0.6)',
    paddingTop: 12,
    borderTop: '1px solid rgba(255,255,255,0.06)',
  },
  lessonList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  lessonCard: {
    display: 'flex',
    alignItems: 'center',
    gap: 18,
    padding: '20px 22px',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid',
    borderRadius: 4,
    color: 'inherit',
    fontFamily: 'inherit',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, background 0.2s ease',
    textAlign: 'left',
    width: '100%',
    animation: 'fadeUp 0.4s ease backwards',
  },
  lessonNum: {
    fontFamily: "'Cinzel', serif",
    fontSize: 22,
    fontWeight: 800,
    flexShrink: 0,
    width: 40,
  },
  lessonCardTitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: 17,
    fontWeight: 700,
    margin: '0 0 6px',
  },
  lessonCardSummary: {
    fontSize: 13,
    color: 'rgba(245,245,247,0.6)',
    margin: 0,
    lineHeight: 1.5,
  },

  // LESSON CONTENT
  lessonContainer: {
    position: 'relative',
    maxWidth: 760,
    margin: '0 auto',
    padding: '32px 24px 80px',
  },
  lessonArticle: {
    animation: 'fadeUp 0.5s ease',
  },
  lessonHeader: {
    paddingBottom: 24,
    marginBottom: 32,
    borderBottom: '1px solid rgba(255,255,255,0.08)',
  },
  lessonH1: {
    fontFamily: "'Cinzel', serif",
    fontSize: 'clamp(28px, 5vw, 42px)',
    fontWeight: 800,
    margin: '0 0 16px',
    lineHeight: 1.1,
    letterSpacing: '0.01em',
  },
  lessonIntro: {
    fontSize: 16,
    lineHeight: 1.7,
    color: 'rgba(245,245,247,0.75)',
    margin: 0,
    fontStyle: 'italic',
  },
  lessonSection: {
    marginBottom: 36,
  },
  lessonH2: {
    fontFamily: "'Cinzel', serif",
    fontSize: 22,
    fontWeight: 700,
    margin: '0 0 16px',
    letterSpacing: '0.01em',
  },
  lessonParagraph: {
    fontSize: 15,
    lineHeight: 1.75,
    color: 'rgba(245,245,247,0.85)',
    margin: '0 0 16px',
  },
  lessonBulletList: {
    paddingLeft: 22,
    margin: '0 0 16px',
  },
  lessonListItem: {
    fontSize: 15,
    lineHeight: 1.7,
    color: 'rgba(245,245,247,0.85)',
    marginBottom: 8,
  },
  lessonDiagram: {
    margin: '24px 0',
    padding: '20px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 6,
    textAlign: 'center',
  },
  workedExample: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid',
    borderRadius: 4,
    padding: 22,
    marginBottom: 16,
  },
  workedExampleLabel: {
    fontSize: 10,
    letterSpacing: '0.3em',
    fontWeight: 800,
    fontFamily: "'Cinzel', serif",
    marginBottom: 12,
  },
  workedExamplePrompt: {
    fontSize: 15,
    lineHeight: 1.6,
    margin: '0 0 16px',
    color: 'rgba(245,245,247,0.95)',
  },
  workedExampleSteps: {
    paddingLeft: 22,
    margin: '0 0 16px',
  },
  workedExampleStep: {
    fontSize: 14,
    lineHeight: 1.7,
    color: 'rgba(245,245,247,0.78)',
    marginBottom: 8,
  },
  workedExampleAnswer: {
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.03)',
    borderLeft: '3px solid',
    borderRadius: 2,
    fontSize: 14,
    lineHeight: 1.6,
  },
  practiceCard: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid',
    borderRadius: 4,
    padding: 20,
    marginBottom: 14,
  },
  practiceNum: {
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: '0.1em',
    color: '#0a0a0f',
    padding: '4px 8px',
    borderRadius: 2,
    fontFamily: "'Cinzel', serif",
    flexShrink: 0,
    height: 'fit-content',
  },
  practiceQ: {
    margin: 0,
    fontSize: 15,
    lineHeight: 1.55,
    fontWeight: 600,
    flex: 1,
  },
  practiceChoices: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  practiceChoice: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 3,
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: 14,
    textAlign: 'left',
    cursor: 'pointer',
    width: '100%',
    transition: 'all 0.2s ease',
  },
  practiceChoiceCorrect: {
    background: 'rgba(16,185,129,0.1)',
    borderColor: '#10b981',
    borderWidth: 2,
  },
  practiceChoiceWrong: {
    background: 'rgba(239,68,68,0.1)',
    borderColor: '#ef4444',
    borderWidth: 2,
  },
  practiceExplain: {
    marginTop: 14,
    padding: 14,
    border: '1px solid',
    borderRadius: 3,
  },
  lessonNav: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 48,
    paddingTop: 24,
    borderTop: '1px solid rgba(255,255,255,0.08)',
    flexWrap: 'wrap',
  },
  lessonNavBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '12px 18px',
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.15)',
    color: 'inherit',
    fontFamily: "'Cinzel', serif",
    fontSize: 12,
    letterSpacing: '0.1em',
    fontWeight: 700,
    cursor: 'pointer',
    borderRadius: 3,
  },
};