// ============================================================
// LESSONS — full textbook content for each realm
// Each realm has multiple sub-lessons.
// Each sub-lesson: { id, title, intro, sections, examples, practice }
// sections: [{ heading, body, diagram? }]
// examples: [{ prompt, steps: [string], answer }]
// practice: [{ q, choices, correct, explain }]
// Diagrams are inline SVG strings.
// ============================================================

export const LESSONS = {
  atomic: {
    realmName: 'The Atomic Spire',
    realmSubtitle: 'Structure & Periodicity',
    sublessons: [
      // --------------------------------------------------------
      {
        id: 'atoms_isotopes',
        title: 'Atoms, Ions & Isotopes',
        summary: 'Subatomic particles, atomic number, mass number, and how isotopes and ions form.',
        intro: `Every atom is built from three particles: protons, neutrons, and electrons. The nucleus (a tight ball of protons and neutrons) sits at the center, with electrons whirling around it in a cloud. Almost all the mass is in the nucleus; almost all the volume is the electron cloud. Once you can read the bookkeeping of these three particles, the whole rest of chemistry starts to make sense.`,
        sections: [
          {
            heading: 'The three particles',
            body: `Protons carry a charge of +1 and live in the nucleus. Neutrons are neutral and also live in the nucleus. Electrons carry a charge of −1 and orbit the nucleus. Protons and neutrons each have a mass of about 1 atomic mass unit (amu); electrons have nearly zero mass by comparison (about 1/1836 of a proton).

The number of **protons** defines what element an atom is. Carbon always has 6 protons. Iron always has 26. Change the proton count and you've changed elements entirely — that's nuclear chemistry, not just chemistry. Add or remove neutrons or electrons and you stay the same element, just a different "version" of it.`,
            diagram: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
  <!-- Electron orbits -->
  <ellipse cx="200" cy="110" rx="170" ry="55" fill="none" stroke="#7dd3fc" stroke-opacity="0.4" stroke-width="1"/>
  <ellipse cx="200" cy="110" rx="170" ry="55" fill="none" stroke="#7dd3fc" stroke-opacity="0.4" stroke-width="1" transform="rotate(60 200 110)"/>
  <ellipse cx="200" cy="110" rx="170" ry="55" fill="none" stroke="#7dd3fc" stroke-opacity="0.4" stroke-width="1" transform="rotate(120 200 110)"/>
  <!-- Nucleus -->
  <circle cx="200" cy="110" r="28" fill="#fbbf24" fill-opacity="0.2" stroke="#fbbf24" stroke-width="2"/>
  <circle cx="192" cy="104" r="8" fill="#ef4444"/>
  <circle cx="208" cy="106" r="8" fill="#ef4444"/>
  <circle cx="195" cy="118" r="8" fill="#94a3b8"/>
  <circle cx="210" cy="120" r="8" fill="#94a3b8"/>
  <!-- Electrons -->
  <circle cx="370" cy="110" r="6" fill="#7dd3fc"/>
  <circle cx="115" cy="160" r="6" fill="#7dd3fc"/>
  <circle cx="115" cy="60" r="6" fill="#7dd3fc"/>
  <!-- Labels -->
  <text x="200" y="200" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="11" opacity="0.7">Nucleus (protons + neutrons)</text>
  <text x="200" y="215" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="11" opacity="0.7">orbited by electrons</text>
  <text x="245" y="100" fill="#ef4444" font-family="Inter, sans-serif" font-size="10">+ proton</text>
  <text x="245" y="125" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">○ neutron</text>
  <text x="135" y="50" fill="#7dd3fc" font-family="Inter, sans-serif" font-size="10">− electron</text>
</svg>`
          },
          {
            heading: 'Atomic number and mass number',
            body: `Two numbers describe any specific atom:

• **Atomic number (Z)** = number of protons. This is the element's identity card. It's the number on the periodic table.
• **Mass number (A)** = protons + neutrons. The total count of nucleons (particles in the nucleus).

Notation: an atom is written as ᴬ_Z X, where X is the element symbol. So ¹²₆C is carbon with 6 protons and 12 − 6 = 6 neutrons. ¹⁴₆C is carbon with 6 protons and 8 neutrons — same element, different "isotope."

Often the Z is dropped because the symbol already tells you the element: ¹²C and ¹⁴C are unambiguous.`
          },
          {
            heading: 'Isotopes',
            body: `**Isotopes** are atoms of the same element (same Z) but with different numbers of neutrons (different A). They behave nearly identically in chemical reactions because chemistry is driven by electrons, and isotopes have the same electron count.

Carbon has three natural isotopes: ¹²C (98.9%), ¹³C (1.1%), and trace ¹⁴C (radioactive, used for dating). The "atomic mass" you see on the periodic table (e.g., 12.011 for carbon) is a weighted average of all naturally occurring isotopes.`
          },
          {
            heading: 'Ions',
            body: `An **ion** is an atom (or group of atoms) with a net charge — meaning protons ≠ electrons. If electrons are lost, the atom becomes positively charged (a cation). If electrons are gained, it becomes negatively charged (an anion).

Charge = (protons) − (electrons).

A neutral sodium atom: 11 protons, 11 electrons, charge 0. Lose one electron → Na⁺ has 11 protons and 10 electrons, charge +1. A neutral chlorine atom: 17 protons, 17 electrons. Gain one electron → Cl⁻ has 17 protons and 18 electrons, charge −1.

Note that the number of *protons* never changes when ions form — that would change the element. Only electrons move.`
          },
        ],
        examples: [
          {
            prompt: 'How many protons, neutrons, and electrons are in an atom of ³⁹K (potassium-39)?',
            steps: [
              'Look up potassium\'s atomic number: Z = 19. So 19 protons.',
              'Mass number A = 39 (given in the isotope notation).',
              'Neutrons = A − Z = 39 − 19 = 20.',
              'Neutral atom (no charge shown), so electrons = protons = 19.'
            ],
            answer: '19 protons, 20 neutrons, 19 electrons.'
          },
          {
            prompt: 'An ion has 16 protons, 18 electrons, and 16 neutrons. Identify it.',
            steps: [
              'Element identity is set by protons: Z = 16 → sulfur (S).',
              'Mass number A = protons + neutrons = 16 + 16 = 32.',
              'Charge = protons − electrons = 16 − 18 = −2.',
              'So this is the sulfide ion: ³²S²⁻.'
            ],
            answer: '³²S²⁻ (the sulfide-32 ion).'
          }
        ],
        practice: [
          {
            q: 'Which of the following pairs are isotopes of the same element?',
            choices: ['¹²C and ¹²N', '¹⁶O and ¹⁸O', 'Na and Na⁺', '³⁵Cl and ³⁵S'],
            correct: 1,
            explain: 'Isotopes share the same atomic number (same element) but differ in mass number. ¹⁶O and ¹⁸O are both oxygen (Z=8) with 8 vs. 10 neutrons. The first pair are different elements; the third is an atom and its ion (same isotope, different electron count); the fourth are different elements.'
          },
          {
            q: 'How many electrons does Al³⁺ have? (Aluminum, Z = 13)',
            choices: ['10', '13', '16', '3'],
            correct: 0,
            explain: 'Neutral Al has 13 electrons. The 3+ charge means it lost 3 electrons, so 13 − 3 = 10 electrons. Al³⁺ is isoelectronic with neon.'
          },
          {
            q: 'Tritium (³H) has how many neutrons?',
            choices: ['0', '1', '2', '3'],
            correct: 2,
            explain: 'Hydrogen has Z = 1 (always 1 proton). Mass number 3 means 3 nucleons total, so 3 − 1 = 2 neutrons. The three H isotopes are protium (¹H, no neutrons), deuterium (²H, 1 neutron), and tritium (³H, 2 neutrons).'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'electron_config',
        title: 'Electron Configuration',
        summary: 'How electrons fill orbitals — the Aufbau principle, Hund\'s rule, and Pauli exclusion.',
        intro: `Electrons don't just orbit the nucleus randomly. They occupy specific energy levels and shapes called **orbitals**, filled in a predictable order. Once you know the rules, you can write the electron configuration of any element from memory and predict a huge amount of its chemical behavior.`,
        sections: [
          {
            heading: 'Shells, subshells, and orbitals',
            body: `Electrons live in **shells**, labeled by the principal quantum number n = 1, 2, 3, …. Higher n = farther from nucleus, higher energy.

Each shell contains **subshells**, labeled s, p, d, f. They differ in shape:
• **s** — spherical, holds up to 2 electrons
• **p** — dumbbell-shaped, 3 orientations, holds up to 6 electrons total
• **d** — more complex shapes, 5 orientations, holds up to 10 electrons total
• **f** — even more complex, 7 orientations, holds up to 14 electrons total

The shell n contains all subshells from s up through the (n−1)th letter. So n=1 has just 1s. n=2 has 2s and 2p. n=3 has 3s, 3p, and 3d. And so on.

Each subshell is divided into **orbitals**, and each orbital holds at most 2 electrons (more on why in a moment).`
          },
          {
            heading: 'The three rules',
            body: `**1. Aufbau principle.** Electrons fill the lowest-energy orbital available first. There's a specific filling order, and the most useful trick is the diagonal rule (shown below). Notably, 4s fills before 3d — energy doesn't strictly follow shell number.

**2. Pauli exclusion principle.** No two electrons in an atom can have the exact same set of quantum numbers. Practically, this means at most 2 electrons per orbital, and they must have opposite spins (one "up," one "down").

**3. Hund's rule.** When filling a subshell with multiple orbitals (like the three p orbitals or five d orbitals), electrons enter empty orbitals first, all with parallel spins, before any orbital gets a second electron. Think of it as people boarding an empty bus — everyone takes their own seat before anyone doubles up.`,
            diagram: `<svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
  <!-- Diagonal filling order diagram -->
  <text x="190" y="20" text-anchor="middle" fill="#7dd3fc" font-family="Cinzel, serif" font-size="13" font-weight="700" letter-spacing="0.15em">AUFBAU FILLING ORDER</text>

  <!-- Rows of orbitals -->
  <g font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#f5f5f7">
    <text x="40" y="55">1s</text>
    <text x="40" y="85">2s</text><text x="100" y="85">2p</text>
    <text x="40" y="115">3s</text><text x="100" y="115">3p</text><text x="160" y="115">3d</text>
    <text x="40" y="145">4s</text><text x="100" y="145">4p</text><text x="160" y="145">4d</text><text x="220" y="145">4f</text>
    <text x="40" y="175">5s</text><text x="100" y="175">5p</text><text x="160" y="175">5d</text><text x="220" y="175">5f</text>
    <text x="40" y="205">6s</text><text x="100" y="205">6p</text><text x="160" y="205">6d</text>
    <text x="40" y="235">7s</text><text x="100" y="235">7p</text>
  </g>

  <!-- Diagonal arrows showing filling order -->
  <g stroke="#fbbf24" stroke-width="1.5" fill="none" opacity="0.7">
    <line x1="55" y1="60" x2="55" y2="78"/>
    <line x1="55" y1="90" x2="115" y2="78"/>
    <line x1="115" y1="90" x2="55" y2="108"/>
    <line x1="55" y1="120" x2="115" y2="108"/>
    <line x1="115" y1="120" x2="175" y2="108"/>
    <line x1="175" y1="120" x2="55" y2="138"/>
    <line x1="55" y1="150" x2="115" y2="138"/>
    <line x1="115" y1="150" x2="175" y2="138"/>
    <line x1="175" y1="150" x2="235" y2="138"/>
  </g>

  <text x="190" y="270" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="11" opacity="0.6">Read along arrows: 1s → 2s → 2p → 3s → 3p → 4s → 3d …</text>
</svg>`
          },
          {
            heading: 'Writing electron configurations',
            body: `Just count electrons and fill in order, respecting subshell capacities (s=2, p=6, d=10, f=14). The format is (subshell)^(electron count).

For hydrogen (1 electron): **1s¹**
For helium (2): **1s²**
For lithium (3): **1s² 2s¹**
For carbon (6): **1s² 2s² 2p²**
For oxygen (8): **1s² 2s² 2p⁴**
For sodium (11): **1s² 2s² 2p⁶ 3s¹**
For iron (26): **1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶**

For long configurations, you can abbreviate using the previous noble gas in brackets. Iron becomes **[Ar] 4s² 3d⁶**, where [Ar] stands for the configuration of argon (1s² 2s² 2p⁶ 3s² 3p⁶).`
          },
          {
            heading: 'The famous exceptions',
            body: `Two elements break the pattern in row 4 because half-filled and fully-filled d subshells are unusually stable:

• **Chromium (Cr, Z=24):** Expected [Ar] 4s² 3d⁴. Actual [Ar] 4s¹ 3d⁵. One 4s electron is "promoted" so the 3d shell can be exactly half-full.
• **Copper (Cu, Z=29):** Expected [Ar] 4s² 3d⁹. Actual [Ar] 4s¹ 3d¹⁰. Same trick, but for a fully-filled 3d.

Several other transition metals (Mo, Ag, Au) have similar exceptions, but Cr and Cu are the ones you must memorize.`
          }
        ],
        examples: [
          {
            prompt: 'Write the full electron configuration of phosphorus (Z = 15).',
            steps: [
              'Phosphorus has 15 electrons to place.',
              'Fill in Aufbau order: 1s (max 2), 2s (max 2), 2p (max 6), 3s (max 2), 3p (max 6).',
              '1s² uses 2; 2s² uses 2 more (total 4); 2p⁶ uses 6 more (total 10); 3s² uses 2 more (total 12); 3p needs 3 more electrons.',
              'Final: 1s² 2s² 2p⁶ 3s² 3p³.'
            ],
            answer: '1s² 2s² 2p⁶ 3s² 3p³ — or shorthand [Ne] 3s² 3p³.'
          },
          {
            prompt: 'How many unpaired electrons are in a ground-state oxygen atom?',
            steps: [
              'Oxygen has 8 electrons. Configuration: 1s² 2s² 2p⁴.',
              'The first 4 electrons (1s² 2s²) are all paired in their orbitals.',
              'The 4 electrons in 2p go into three orbitals. By Hund\'s rule, fill each orbital with one electron first (3 unpaired), then start pairing.',
              'The 4th p electron pairs up with one of the existing three. Result: 2 paired, 2 unpaired.'
            ],
            answer: '2 unpaired electrons. (This is why O₂ is paramagnetic — magnets actually pull on liquid oxygen.)'
          }
        ],
        practice: [
          {
            q: 'What is the electron configuration of nickel (Z = 28)?',
            choices: ['[Ar] 4s² 3d⁸', '[Ar] 4s¹ 3d⁹', '[Ar] 3d¹⁰', '[Kr] 4s² 3d⁶'],
            correct: 0,
            explain: 'Nickel is NOT one of the exceptions (only Cr and Cu in this row). Standard Aufbau gives [Ar] 4s² 3d⁸ — eighteen electrons from argon, then 2 in 4s, then 8 in 3d.'
          },
          {
            q: 'How many electrons can the 3d subshell hold in total?',
            choices: ['2', '6', '10', '14'],
            correct: 2,
            explain: 'The d subshell has 5 orbitals, and each orbital holds 2 electrons, so 5 × 2 = 10 total. (s holds 2, p holds 6, d holds 10, f holds 14.)'
          },
          {
            q: 'Which violates Hund\'s rule when filling 2p?',
            choices: [
              '↑_  ↑_  ↑_   (one electron in each orbital, parallel spins)',
              '↑↓  __  __   (both electrons in the first orbital)',
              '↑_  ↑_  __   (two unpaired electrons, parallel)',
              '↑_  __  __   (one electron, one orbital occupied)'
            ],
            correct: 1,
            explain: 'Hund\'s rule says fill each orbital with one electron before pairing up. Putting both electrons in the first orbital while the other two sit empty violates this — the correct configuration spreads them out (option A pattern).'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'periodic_trends',
        title: 'Periodic Trends',
        summary: 'How atomic radius, ionization energy, electronegativity, and electron affinity vary across the periodic table.',
        intro: `The periodic table isn't just a list — it's organized so that elements with similar properties line up vertically (groups) and properties shift smoothly across rows (periods). Once you understand *why* trends move the way they do, you can predict properties without memorizing each element.`,
        sections: [
          {
            heading: 'Effective nuclear charge (Z_eff)',
            body: `**Effective nuclear charge** is the net positive pull that valence electrons feel from the nucleus, after accounting for the shielding effect of inner electrons. It's the engine behind almost every periodic trend.

Across a period (left to right): Z_eff increases. More protons are added to the nucleus, but inner electron count stays the same — so valence electrons feel a stronger pull.

Down a group (top to bottom): Z_eff increases only slightly. New shells are added, and inner electrons shield the outer electrons effectively. The dominant effect is the increased *distance*, not increased pull.`
          },
          {
            heading: 'Atomic radius',
            body: `**Atomic radius** is the size of the atom (technically, half the distance between two bonded nuclei).

• **Across a period:** radius DECREASES. Stronger Z_eff pulls the electron cloud tighter.
• **Down a group:** radius INCREASES. Adding shells makes atoms bigger, even if Z_eff is slightly higher.

So the smallest atoms sit in the upper right (helium, fluorine), and the largest sit in the lower left (cesium, francium).`,
            diagram: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
  <!-- Atom size shrinking across period -->
  <text x="200" y="20" text-anchor="middle" fill="#7dd3fc" font-family="Cinzel, serif" font-size="12" font-weight="700" letter-spacing="0.15em">ATOMIC RADIUS</text>

  <!-- Across period -->
  <text x="20" y="55" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="11" opacity="0.7">Across period →</text>
  <circle cx="60" cy="90" r="28" fill="#7dd3fc" fill-opacity="0.3" stroke="#7dd3fc" stroke-width="1"/>
  <circle cx="130" cy="90" r="22" fill="#7dd3fc" fill-opacity="0.3" stroke="#7dd3fc" stroke-width="1"/>
  <circle cx="190" cy="90" r="17" fill="#7dd3fc" fill-opacity="0.3" stroke="#7dd3fc" stroke-width="1"/>
  <circle cx="240" cy="90" r="13" fill="#7dd3fc" fill-opacity="0.3" stroke="#7dd3fc" stroke-width="1"/>
  <text x="60" y="135" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="11">Li</text>
  <text x="130" y="135" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="11">B</text>
  <text x="190" y="135" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="11">N</text>
  <text x="240" y="135" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="11">F</text>

  <!-- Down group -->
  <text x="320" y="55" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="11" opacity="0.7">Down group ↓</text>
  <circle cx="340" cy="80" r="14" fill="#fbbf24" fill-opacity="0.3" stroke="#fbbf24" stroke-width="1"/>
  <text x="365" y="84" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="10">Li</text>
  <circle cx="340" cy="115" r="20" fill="#fbbf24" fill-opacity="0.3" stroke="#fbbf24" stroke-width="1"/>
  <text x="365" y="119" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="10">Na</text>
  <circle cx="340" cy="160" r="28" fill="#fbbf24" fill-opacity="0.3" stroke="#fbbf24" stroke-width="1"/>
  <text x="375" y="164" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="10">K</text>

  <text x="200" y="190" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="11" opacity="0.6">Smaller across periods, larger down groups</text>
</svg>`
          },
          {
            heading: 'Ionization energy',
            body: `**Ionization energy (IE)** is the energy required to remove an electron from a gaseous atom. The first IE removes the first (most loosely held) electron.

• **Across a period:** IE INCREASES. Higher Z_eff holds electrons more tightly. Plus, atoms approaching a full shell really don't want to give up electrons.
• **Down a group:** IE DECREASES. Outer electrons are farther from the nucleus and easier to remove.

Highest IE in the table: helium and neon (noble gases — full shells, very stable). Lowest: cesium and francium.

Two notable bumps in the trend within a period: IE drops slightly between groups 2 and 13 (e.g., Be → B), and again between 15 and 16 (e.g., N → O). These reflect subshell stability: ns² is stable, and np³ is stable (half-filled).`
          },
          {
            heading: 'Electronegativity',
            body: `**Electronegativity** measures an atom's pull on a *shared* pair of electrons in a chemical bond. It's the bond version of "how greedy is this atom?"

The trends are nearly identical to ionization energy:
• **Across a period:** electronegativity INCREASES.
• **Down a group:** electronegativity DECREASES.

Fluorine is the most electronegative element (4.0 on the Pauling scale). The electronegativity hierarchy you should memorize: **F > O > N ≈ Cl**. Noble gases are usually excluded since they don't typically bond.

Differences in electronegativity determine bond polarity. Two atoms of equal electronegativity → nonpolar covalent. Modest difference → polar covalent. Huge difference → ionic.`
          },
          {
            heading: 'Quick summary',
            body: `Pin this in your head — most periodic trend questions are answered by these two patterns:

**↗ Across and up (toward F):** atomic radius shrinks, IE rises, electronegativity rises.
**↙ Down and left (toward Cs):** atoms grow, IE falls, electronegativity falls.

The reason is always the same: **stronger Z_eff and shorter distance pull electrons in tighter**.`
          }
        ],
        examples: [
          {
            prompt: 'Which has a larger atomic radius: K or Br?',
            steps: [
              'Locate them: K is group 1, period 4. Br is group 17, period 4.',
              'They\'re in the same period, so compare across the row.',
              'K is far left, Br is far right. Across a period, radius shrinks.',
              'Therefore K is larger.'
            ],
            answer: 'K (potassium) is larger than Br.'
          },
          {
            prompt: 'Rank N, O, and F by increasing first ionization energy.',
            steps: [
              'All three are in period 2. Across a period, IE generally increases.',
              'You\'d expect N < O < F.',
              'However, there\'s a subshell-stability bump: nitrogen has half-filled 2p³ (stable), and oxygen has 2p⁴ (one electron paired up, easier to remove).',
              'So actually IE: N > O, but F is still highest because it\'s farthest right.',
              'Final order: O < N < F.'
            ],
            answer: 'O < N < F (oxygen has the lowest IE due to electron pairing in 2p⁴).'
          }
        ],
        practice: [
          {
            q: 'Which element has the highest electronegativity?',
            choices: ['Cl', 'O', 'F', 'N'],
            correct: 2,
            explain: 'Fluorine is the most electronegative element on the Pauling scale (4.0). It sits in the upper right of the periodic table, where electronegativity peaks. The order is F > O > Cl ≈ N.'
          },
          {
            q: 'Which has the smallest atomic radius?',
            choices: ['Na', 'K', 'Mg', 'Cs'],
            correct: 2,
            explain: 'All four are alkali/alkaline earth metals. Mg is the only one in period 3 (others are 3, 4, 6). Within period 3, Mg is to the right of Na, so smaller. Down the group, Na > K > Cs in size. Mg has both effects working in its favor: small period AND right of Na.'
          },
          {
            q: 'Why is the first ionization energy of Na much lower than that of Mg?',
            choices: [
              'Na has more protons',
              'Na\'s outer electron is in a higher shell',
              'Removing Na\'s 3s¹ electron creates a stable noble-gas configuration',
              'Mg has more shielding'
            ],
            correct: 2,
            explain: 'Na has electron configuration [Ne] 3s¹. Losing that one electron leaves Na⁺ with the very stable [Ne] configuration — energetically favorable. Mg ([Ne] 3s²) loses an electron from a stable filled 3s, which costs more energy.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'quantum_numbers',
        title: 'Quantum Numbers',
        summary: 'The four quantum numbers that uniquely describe every electron in an atom.',
        intro: `Each electron in an atom is described by four quantum numbers — like a four-part address that uniquely identifies it. The Pauli exclusion principle says no two electrons in the same atom can share all four. This is more abstract than the rest of atomic structure, but it shows up directly on the CLEP exam.`,
        sections: [
          {
            heading: 'The four numbers',
            body: `**1. Principal quantum number (n)** — the shell. Allowed: positive integers 1, 2, 3, …. Higher n = farther from nucleus, higher energy.

**2. Angular momentum (ℓ)** — the subshell shape. Allowed: 0 to (n − 1). The values map to letters:
• ℓ = 0 → s (spherical)
• ℓ = 1 → p (dumbbell)
• ℓ = 2 → d
• ℓ = 3 → f

So if n = 2, ℓ can be 0 or 1, which means the n=2 shell only has 2s and 2p — no 2d.

**3. Magnetic quantum number (m_ℓ)** — orientation in space. Allowed: −ℓ to +ℓ, including 0. So:
• ℓ = 0 (s): m_ℓ = 0 (1 orientation, 1 orbital)
• ℓ = 1 (p): m_ℓ = −1, 0, +1 (3 orbitals: p_x, p_y, p_z)
• ℓ = 2 (d): m_ℓ = −2, −1, 0, +1, +2 (5 orbitals)
• ℓ = 3 (f): m_ℓ = −3 to +3 (7 orbitals)

**4. Spin quantum number (m_s)** — electron spin. Allowed: only +½ or −½. Often drawn as ↑ or ↓.`
          },
          {
            heading: 'Why this matters',
            body: `Every electron in an atom has a unique quartet (n, ℓ, m_ℓ, m_s). The Pauli exclusion principle says no two electrons can match in all four. Since m_s only has 2 options, this means at most 2 electrons per orbital — and they must have opposite spins.

This is what limits each orbital's capacity to 2, and it cascades up:
• 1 orbital × 2 spins = 2 electrons per s subshell
• 3 orbitals × 2 = 6 electrons per p subshell
• 5 orbitals × 2 = 10 electrons per d subshell
• 7 orbitals × 2 = 14 electrons per f subshell`
          },
          {
            heading: 'Allowed vs. forbidden combinations',
            body: `A common test question: "Is this combination of quantum numbers allowed?"

Check three things, in order:
1. Is n a positive integer (1 or larger)?
2. Is ℓ between 0 and (n − 1)?
3. Is m_ℓ between −ℓ and +ℓ?
4. Is m_s = ±½?

If any rule is violated, the combination is forbidden — that orbital simply doesn't exist.`
          }
        ],
        examples: [
          {
            prompt: 'Is the set (n=3, ℓ=2, m_ℓ=−2, m_s=+½) allowed?',
            steps: [
              'n = 3: positive integer ✓',
              'ℓ = 2: must be 0 ≤ ℓ ≤ n−1 = 2. So ℓ = 2 is allowed (just barely — this is a 3d orbital).',
              'm_ℓ = −2: must be between −ℓ and +ℓ, i.e., −2 to +2. So −2 is allowed.',
              'm_s = +½: allowed (only ±½ are valid).',
              'All four pass — this describes a real electron in a 3d orbital.'
            ],
            answer: 'Yes, allowed. This is one of the 10 possible electrons in 3d.'
          },
          {
            prompt: 'How many orbitals exist in the n = 4 shell?',
            steps: [
              'For n = 4, ℓ can be 0, 1, 2, or 3 — so the subshells 4s, 4p, 4d, 4f all exist.',
              'Count orbitals in each: 4s has 1, 4p has 3, 4d has 5, 4f has 7.',
              'Total: 1 + 3 + 5 + 7 = 16 orbitals.',
              'Each holds 2 electrons, so n=4 holds 32 electrons max. (General formula: n² orbitals, 2n² electrons.)'
            ],
            answer: '16 orbitals (and 32 electrons maximum).'
          }
        ],
        practice: [
          {
            q: 'Which set of quantum numbers is NOT allowed?',
            choices: [
              '(n=2, ℓ=0, m_ℓ=0, m_s=+½)',
              '(n=3, ℓ=1, m_ℓ=−1, m_s=−½)',
              '(n=2, ℓ=2, m_ℓ=0, m_s=+½)',
              '(n=4, ℓ=3, m_ℓ=+2, m_s=−½)'
            ],
            correct: 2,
            explain: 'For n=2, ℓ can only be 0 or 1 (since ℓ ≤ n−1). ℓ=2 requires n=3 or higher. The n=2 shell has no d orbitals.'
          },
          {
            q: 'How many electrons can have the quantum numbers n=3, ℓ=1?',
            choices: ['2', '6', '10', '8'],
            correct: 1,
            explain: 'n=3, ℓ=1 specifies the 3p subshell. There are 3 p orbitals (m_ℓ = −1, 0, +1), each holding 2 electrons → 6 electrons total. This is the capacity of any p subshell.'
          },
          {
            q: 'What does m_ℓ = 0 specifically tell you?',
            choices: [
              'The electron has no spin',
              'The orbital has no nodes',
              'The orbital is oriented along a specific axis (often the z-axis for p₀)',
              'The electron is in the ground state'
            ],
            correct: 2,
            explain: 'm_ℓ describes the spatial orientation of the orbital. m_ℓ = 0 corresponds to the orbital aligned with the reference axis (commonly the z-axis). For example, p₀ is the p_z orbital. It doesn\'t mean the electron is missing anything.'
          }
        ]
      }
    ]
  },

  // ============================================================
  // STUBS — to be filled in subsequent turns
  // ============================================================
  bonding: {
    realmName: 'The Molecular Forge',
    realmSubtitle: 'Bonds & Geometry',
    sublessons: [
      // --------------------------------------------------------
      {
        id: 'bond_types',
        title: 'Types of Chemical Bonds',
        summary: 'Ionic, covalent, and metallic bonding — what they are, when they form, and how to predict them.',
        intro: `Atoms bond because being bonded is energetically more favorable than standing alone. The key driver is that almost all atoms "want" eight valence electrons (the octet rule) — like the noble gases, which already have full shells and are notoriously unreactive. There are three main strategies an atom can use to reach this goal: give electrons away, take electrons, or share. Each strategy gives rise to a different type of bond.`,
        sections: [
          {
            heading: 'Ionic bonds',
            body: `**Ionic bonds** form when one atom hands electrons to another, creating two oppositely charged ions that stick together by electrostatic attraction. Typical pairing: a **metal** (which holds onto its outer electrons loosely) plus a **nonmetal** (which pulls electrons in hard).

Sodium has 1 valence electron; chlorine has 7. Sodium gives up its lone electron to chlorine. Both atoms now have a full octet — sodium becomes Na⁺ (matching neon), chlorine becomes Cl⁻ (matching argon). The +1 and −1 attract each other, and you get NaCl: table salt.

Ionic compounds form crystal lattices (rigid, repeating 3D arrangements), have high melting points, and conduct electricity when dissolved or melted.`
          },
          {
            heading: 'Covalent bonds',
            body: `**Covalent bonds** form when two atoms *share* a pair of electrons. Both nonmetals and the bond electrons spend time "belonging" to both atoms simultaneously. Each shared pair counts as one bond.

• **Single bond:** one shared pair (H–H, C–H)
• **Double bond:** two shared pairs (O=O, C=O)
• **Triple bond:** three shared pairs (N≡N, C≡C)

More shared pairs = stronger and shorter bond. A C=C double bond is shorter and stronger than a C–C single bond.

Covalent bonds can be **nonpolar** (electrons shared equally — between identical atoms) or **polar** (electrons pulled toward the more electronegative atom). The bigger the electronegativity difference, the more polar the bond.`
          },
          {
            heading: 'The bond-type spectrum',
            body: `Bond types aren't really three discrete categories — they're a spectrum based on **electronegativity difference (ΔEN)**:

• ΔEN < 0.5: nonpolar covalent (e.g., C–H, ΔEN ≈ 0.4)
• ΔEN 0.5 – 1.7: polar covalent (e.g., H–O, ΔEN ≈ 1.4)
• ΔEN > 1.7: ionic (e.g., Na–Cl, ΔEN ≈ 2.1)

These cutoffs are rough — chemistry is rarely cleanly binary — but they work for most CLEP-level predictions.`,
            diagram: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
  <text x="200" y="20" text-anchor="middle" fill="#c4b5fd" font-family="Cinzel, serif" font-size="12" font-weight="700" letter-spacing="0.15em">BOND-TYPE SPECTRUM</text>

  <!-- Gradient bar -->
  <defs>
    <linearGradient id="bondgrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7dd3fc"/>
      <stop offset="50%" stop-color="#c4b5fd"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
  </defs>
  <rect x="40" y="50" width="320" height="20" rx="3" fill="url(#bondgrad)" opacity="0.7"/>

  <!-- Tick marks -->
  <line x1="120" y1="50" x2="120" y2="76" stroke="#f5f5f7" stroke-width="1" opacity="0.5"/>
  <line x1="245" y1="50" x2="245" y2="76" stroke="#f5f5f7" stroke-width="1" opacity="0.5"/>

  <!-- Labels -->
  <text x="80" y="95" text-anchor="middle" fill="#7dd3fc" font-family="Inter, sans-serif" font-size="11" font-weight="600">Nonpolar</text>
  <text x="80" y="108" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="9" opacity="0.6">covalent</text>
  <text x="80" y="120" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="9" opacity="0.6">ΔEN &lt; 0.5</text>

  <text x="180" y="95" text-anchor="middle" fill="#c4b5fd" font-family="Inter, sans-serif" font-size="11" font-weight="600">Polar</text>
  <text x="180" y="108" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="9" opacity="0.6">covalent</text>
  <text x="180" y="120" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="9" opacity="0.6">0.5 – 1.7</text>

  <text x="320" y="95" text-anchor="middle" fill="#fbbf24" font-family="Inter, sans-serif" font-size="11" font-weight="600">Ionic</text>
  <text x="320" y="120" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="9" opacity="0.6">ΔEN &gt; 1.7</text>
</svg>`
          },
          {
            heading: 'Metallic bonds',
            body: `**Metallic bonding** is the third type, found in pure metals. Imagine the metal cations sitting in a fixed lattice, with their valence electrons pooled into a "sea" that flows freely throughout the structure.

This electron sea explains everything we associate with metals:
• **Conductivity** — free electrons carry charge
• **Malleability** — atoms can slide past each other without breaking the bond
• **Luster** — free electrons interact with light
• **Heat conduction** — kinetic energy transfers easily through the sea

Metallic bonding doesn't appear much on the CLEP exam, but recognize it as the third option alongside ionic and covalent.`
          }
        ],
        examples: [
          {
            prompt: 'Predict the bond type in MgO. (EN of Mg = 1.3, EN of O = 3.4)',
            steps: [
              'Calculate electronegativity difference: ΔEN = 3.4 − 1.3 = 2.1.',
              '2.1 is well above 1.7, the ionic threshold.',
              'Also: Mg is a metal, O is a nonmetal — pairing typical of ionic bonding.',
              'Both criteria agree: this is an ionic bond.'
            ],
            answer: 'Ionic bond. MgO forms a crystal lattice of Mg²⁺ and O²⁻ ions.'
          },
          {
            prompt: 'How many bonds are in N₂?',
            steps: [
              'Each N atom has 5 valence electrons and needs 3 more to complete an octet.',
              'Two nitrogen atoms can satisfy this by sharing 3 pairs of electrons.',
              'Three shared pairs = a triple bond.',
              'N≡N is one of the strongest known bonds, which is why N₂ is unreactive at room temperature despite being 78% of the atmosphere.'
            ],
            answer: '1 triple bond (N≡N), consisting of 1 σ and 2 π bonds.'
          }
        ],
        practice: [
          {
            q: 'Which compound is most likely ionic?',
            choices: ['CH₄', 'HCl', 'KF', 'O₂'],
            correct: 2,
            explain: 'KF has the largest electronegativity gap: K (≈0.8) and F (≈4.0) differ by 3.2 — well into ionic territory. HCl is polar covalent (ΔEN ≈ 0.9), while CH₄ and O₂ are nonpolar covalent.'
          },
          {
            q: 'A C=O bond is best described as:',
            choices: ['One single bond', 'One double bond (1 σ + 1 π)', 'Two single bonds', 'A triple bond'],
            correct: 1,
            explain: 'Every double bond is one sigma (σ) bond plus one pi (π) bond — never two of the same kind. The σ comes from end-to-end orbital overlap; the π from side-by-side overlap above and below the bond axis.'
          },
          {
            q: 'Why are metals good electrical conductors?',
            choices: [
              'Their atoms vibrate rapidly',
              'Valence electrons are delocalized in an electron sea',
              'They have full octets',
              'They form ionic bonds'
            ],
            correct: 1,
            explain: 'In metallic bonding, valence electrons aren\'t tied to specific atoms — they roam freely throughout the lattice. Apply a voltage and they drift in response, carrying current. This same delocalization explains malleability, luster, and thermal conductivity.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'lewis_structures',
        title: 'Lewis Structures & the Octet Rule',
        summary: 'Drawing Lewis dot structures, counting valence electrons, and recognizing exceptions to the octet rule.',
        intro: `Lewis structures are the chemist's sketchpad for molecules. They show every atom, every bond, and every lone pair using nothing but dots and lines. Mastering them is foundational — they're the input for almost every other bonding question (geometry, polarity, hybridization). The drawing process is mechanical once you have the steps memorized.`,
        sections: [
          {
            heading: 'Counting valence electrons',
            body: `Before drawing anything, count the **total valence electrons** in the molecule.

For a neutral molecule, sum the valence electrons of each atom. For main-group elements, the group number tells you the count: H has 1, C has 4, N has 5, O has 6, F has 7, etc.

For ions, **add electrons for negative charges, subtract for positive charges**. NO₃⁻ has 5 (from N) + 3×6 (from O) + 1 (from the −1 charge) = 24 electrons. NH₄⁺ has 5 + 4×1 − 1 = 8.

This total is your budget. Every dot you draw must come out of it.`
          },
          {
            heading: 'The drawing procedure',
            body: `Step 1: **Identify the central atom.** Usually the least electronegative atom that isn't hydrogen. Hydrogen is *never* central (it can only form one bond). For molecules like CO₂ or NH₃, the lone non-terminal atom is central.

Step 2: **Connect every outer atom to the central atom with a single bond.** Each bond uses 2 electrons.

Step 3: **Distribute remaining electrons as lone pairs** to outer atoms first, giving each (except H) an octet.

Step 4: **If the central atom doesn't have an octet, form double or triple bonds** by converting lone pairs on outer atoms into shared pairs.

Step 5: **Check.** Total dots and bond pairs should equal your valence electron budget. Each atom should have an octet (or duet for H).`
          },
          {
            heading: 'Worked walkthrough: CO₂',
            body: `Total valence: 4 (C) + 2×6 (O) = 16 electrons.

Carbon is central. Connect each O with a single bond: O–C–O. That used 4 electrons; 12 remain.

Distribute 6 electrons (3 lone pairs) on each O: now each O has 8 electrons. We've used all 16.

But carbon only has 4 electrons (the two bonds). It needs 4 more. Convert one lone pair from each oxygen into a bond: O=C=O. Each O gives up one lone pair, now sharing that pair with C. The total electron count is still 16. Carbon now has 8 electrons (two double bonds), each O has 8 (two lone pairs + one double bond).

Final: O=C=O with two lone pairs on each oxygen.`
          },
          {
            heading: 'Octet-rule exceptions',
            body: `Three classes of exceptions show up regularly:

**1. Incomplete octets.** Hydrogen (only wants 2 — the "duet rule"), beryllium (often happy with 4), boron (often happy with 6). BF₃ has only 6 electrons around B and is perfectly stable.

**2. Odd-electron molecules.** A few molecules have an odd number of valence electrons — they can't possibly have all paired electrons, so they have an unpaired one. NO has 11 valence electrons; NO₂ has 17. These are called **free radicals** and are usually reactive.

**3. Expanded octets.** Atoms in **period 3 or below** (P, S, Cl, Br, I, Xe…) can host more than 8 electrons because they have empty d orbitals available. SF₆ has 12 electrons around sulfur. PCl₅ has 10 around phosphorus. **Period 2 atoms (C, N, O, F) cannot expand** — they have no d orbitals at the n=2 level.`
          }
        ],
        examples: [
          {
            prompt: 'Draw the Lewis structure of NH₃.',
            steps: [
              'Valence electrons: 5 (N) + 3×1 (H) = 8.',
              'Nitrogen is central; connect 3 H atoms with single bonds. Used 6 electrons; 2 remain.',
              'Hydrogens already have their duets — don\'t add more electrons there.',
              'Place the remaining 2 electrons as a lone pair on N.',
              'Check: N has 6 (3 bonds) + 2 (lone pair) = 8 electrons. Each H has 2. Total: 8 ✓.'
            ],
            answer: 'N is central with three N–H single bonds and one lone pair on N.'
          },
          {
            prompt: 'Draw the Lewis structure of SO₄²⁻.',
            steps: [
              'Valence electrons: 6 (S) + 4×6 (O) + 2 (from −2 charge) = 32.',
              'S is central. Connect 4 O atoms with single bonds: 8 electrons used.',
              'Distribute remaining 24 electrons as 6 lone pairs (3 each) on each oxygen. Now each O has 8 electrons.',
              'Check S: it has 4 bonds = 8 electrons. Octet satisfied with all single bonds.',
              'For lowest formal charge, two of the S–O singles can be promoted to double bonds (this is a more rigorous answer), but the all-single structure is the most common starting representation.'
            ],
            answer: 'S central, 4 S–O bonds (often shown with two as double bonds for lower formal charge), each O with 2-3 lone pairs. Brackets and 2− charge around the whole structure.'
          }
        ],
        practice: [
          {
            q: 'How many valence electrons should you use when drawing the Lewis structure of CO₃²⁻?',
            choices: ['22', '24', '20', '26'],
            correct: 1,
            explain: 'Carbon contributes 4, each oxygen contributes 6 (×3 = 18), and the −2 charge adds 2 electrons. Total: 4 + 18 + 2 = 24 valence electrons.'
          },
          {
            q: 'Which molecule violates the octet rule by having an expanded octet?',
            choices: ['NH₃', 'CH₄', 'SF₆', 'H₂O'],
            correct: 2,
            explain: 'SF₆ has six S–F bonds, putting 12 electrons around the central sulfur. Sulfur can do this because it\'s in period 3 with available d orbitals. Period 2 atoms (C, N, O, F) physically cannot expand their octet.'
          },
          {
            q: 'In the Lewis structure of HCN, the central atom is:',
            choices: ['H', 'C', 'N', 'There is no central atom'],
            correct: 1,
            explain: 'Hydrogen can never be central (it forms only one bond). Of C and N, carbon is the lower-electronegativity choice and the better central atom. The structure is H–C≡N — carbon connects H on one side and N on the other via a triple bond.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'vsepr',
        title: 'VSEPR & Molecular Geometry',
        summary: 'Predicting 3D molecular shapes from electron domains. Linear, bent, trigonal pyramidal, tetrahedral, and beyond.',
        intro: `**VSEPR** stands for Valence Shell Electron Pair Repulsion. The idea is simple: electron groups (bonds and lone pairs) around a central atom repel each other and arrange themselves to be as far apart as possible. Once you know how many electron groups surround the central atom and how many are lone pairs, you can predict the 3D shape — which in turn predicts polarity, reactivity, and how the molecule fits with others.`,
        sections: [
          {
            heading: 'Electron geometry vs. molecular geometry',
            body: `Two geometries to track:

• **Electron geometry** counts every electron group (bonds and lone pairs alike). It tells you how the electron groups are arranged.
• **Molecular geometry** counts only the *atoms*, ignoring lone pairs. It's the shape of the molecule you'd actually see.

When there are no lone pairs on the central atom, the two geometries are identical. When lone pairs are present, the molecular geometry is "missing" some atoms compared to the electron geometry.

Note that **double bonds and triple bonds count as one electron group** for VSEPR purposes — the geometry is determined by the *number of regions* of electron density, not the number of bonds.`
          },
          {
            heading: 'The five basic electron geometries',
            body: `Count the electron groups (bonds + lone pairs) around the central atom:

• **2 groups → linear.** Bond angle 180°. Examples: CO₂, BeCl₂.
• **3 groups → trigonal planar.** Bond angle 120°. Example: BF₃.
• **4 groups → tetrahedral.** Bond angle 109.5°. Example: CH₄.
• **5 groups → trigonal bipyramidal.** Mixed angles (90° and 120°). Example: PCl₅.
• **6 groups → octahedral.** Bond angle 90°. Example: SF₆.

These five are the parents — molecular geometries are derived from them by replacing bonds with lone pairs.`,
            diagram: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
  <text x="300" y="20" text-anchor="middle" fill="#c4b5fd" font-family="Cinzel, serif" font-size="12" font-weight="700" letter-spacing="0.15em">FIVE ELECTRON GEOMETRIES</text>

  <g font-family="Inter, sans-serif">
    <!-- Linear -->
    <g transform="translate(60, 90)">
      <circle cx="0" cy="0" r="10" fill="#c4b5fd"/>
      <circle cx="-30" cy="0" r="7" fill="#7dd3fc"/>
      <circle cx="30" cy="0" r="7" fill="#7dd3fc"/>
      <line x1="-30" y1="0" x2="-12" y2="0" stroke="#f5f5f7" stroke-width="1.5"/>
      <line x1="12" y1="0" x2="30" y2="0" stroke="#f5f5f7" stroke-width="1.5"/>
      <text x="0" y="50" text-anchor="middle" fill="#f5f5f7" font-size="11" font-weight="600">Linear</text>
      <text x="0" y="65" text-anchor="middle" fill="#f5f5f7" font-size="9" opacity="0.6">2 groups · 180°</text>
    </g>

    <!-- Trigonal planar -->
    <g transform="translate(170, 90)">
      <circle cx="0" cy="0" r="10" fill="#c4b5fd"/>
      <circle cx="0" cy="-30" r="7" fill="#7dd3fc"/>
      <circle cx="-26" cy="15" r="7" fill="#7dd3fc"/>
      <circle cx="26" cy="15" r="7" fill="#7dd3fc"/>
      <line x1="0" y1="-12" x2="0" y2="-30" stroke="#f5f5f7" stroke-width="1.5"/>
      <line x1="-9" y1="6" x2="-26" y2="15" stroke="#f5f5f7" stroke-width="1.5"/>
      <line x1="9" y1="6" x2="26" y2="15" stroke="#f5f5f7" stroke-width="1.5"/>
      <text x="0" y="50" text-anchor="middle" fill="#f5f5f7" font-size="11" font-weight="600">Trig. planar</text>
      <text x="0" y="65" text-anchor="middle" fill="#f5f5f7" font-size="9" opacity="0.6">3 · 120°</text>
    </g>

    <!-- Tetrahedral -->
    <g transform="translate(290, 90)">
      <circle cx="0" cy="0" r="10" fill="#c4b5fd"/>
      <circle cx="0" cy="-30" r="7" fill="#7dd3fc"/>
      <circle cx="-26" cy="20" r="7" fill="#7dd3fc"/>
      <circle cx="26" cy="20" r="7" fill="#7dd3fc"/>
      <circle cx="0" cy="25" r="6" fill="#7dd3fc" opacity="0.5"/>
      <line x1="0" y1="-12" x2="0" y2="-30" stroke="#f5f5f7" stroke-width="1.5"/>
      <line x1="-9" y1="6" x2="-26" y2="20" stroke="#f5f5f7" stroke-width="1.5"/>
      <line x1="9" y1="6" x2="26" y2="20" stroke="#f5f5f7" stroke-width="1.5"/>
      <line x1="0" y1="10" x2="0" y2="25" stroke="#f5f5f7" stroke-width="1.5" stroke-dasharray="2,2"/>
      <text x="0" y="55" text-anchor="middle" fill="#f5f5f7" font-size="11" font-weight="600">Tetrahedral</text>
      <text x="0" y="70" text-anchor="middle" fill="#f5f5f7" font-size="9" opacity="0.6">4 · 109.5°</text>
    </g>

    <!-- Trigonal bipyramidal -->
    <g transform="translate(420, 90)">
      <circle cx="0" cy="0" r="10" fill="#c4b5fd"/>
      <circle cx="0" cy="-35" r="7" fill="#7dd3fc"/>
      <circle cx="0" cy="35" r="7" fill="#7dd3fc"/>
      <circle cx="-25" cy="0" r="7" fill="#7dd3fc"/>
      <circle cx="20" cy="-8" r="6" fill="#7dd3fc" opacity="0.6"/>
      <circle cx="20" cy="8" r="6" fill="#7dd3fc" opacity="0.6"/>
      <line x1="0" y1="-12" x2="0" y2="-35" stroke="#f5f5f7" stroke-width="1.5"/>
      <line x1="0" y1="12" x2="0" y2="35" stroke="#f5f5f7" stroke-width="1.5"/>
      <line x1="-9" y1="2" x2="-25" y2="0" stroke="#f5f5f7" stroke-width="1.5"/>
      <line x1="9" y1="-3" x2="20" y2="-8" stroke="#f5f5f7" stroke-width="1.5" stroke-dasharray="2,2"/>
      <line x1="9" y1="3" x2="20" y2="8" stroke="#f5f5f7" stroke-width="1.5" stroke-dasharray="2,2"/>
      <text x="0" y="60" text-anchor="middle" fill="#f5f5f7" font-size="11" font-weight="600">Trig. bipyr.</text>
      <text x="0" y="75" text-anchor="middle" fill="#f5f5f7" font-size="9" opacity="0.6">5 · 90/120°</text>
    </g>

    <!-- Octahedral -->
    <g transform="translate(540, 90)">
      <circle cx="0" cy="0" r="10" fill="#c4b5fd"/>
      <circle cx="0" cy="-30" r="7" fill="#7dd3fc"/>
      <circle cx="0" cy="30" r="7" fill="#7dd3fc"/>
      <circle cx="-25" cy="0" r="7" fill="#7dd3fc"/>
      <circle cx="25" cy="0" r="7" fill="#7dd3fc"/>
      <circle cx="-12" cy="-12" r="6" fill="#7dd3fc" opacity="0.5"/>
      <circle cx="14" cy="14" r="6" fill="#7dd3fc" opacity="0.5"/>
      <line x1="0" y1="-12" x2="0" y2="-30" stroke="#f5f5f7" stroke-width="1.5"/>
      <line x1="0" y1="12" x2="0" y2="30" stroke="#f5f5f7" stroke-width="1.5"/>
      <line x1="-9" y1="2" x2="-25" y2="0" stroke="#f5f5f7" stroke-width="1.5"/>
      <line x1="9" y1="-2" x2="25" y2="0" stroke="#f5f5f7" stroke-width="1.5"/>
      <text x="0" y="55" text-anchor="middle" fill="#f5f5f7" font-size="11" font-weight="600">Octahedral</text>
      <text x="0" y="70" text-anchor="middle" fill="#f5f5f7" font-size="9" opacity="0.6">6 · 90°</text>
    </g>
  </g>
</svg>`
          },
          {
            heading: 'How lone pairs change the shape',
            body: `Lone pairs take up *more space* than bonded pairs because they're held by only one atom and spread out more. This pushes bonded atoms slightly closer together, compressing bond angles below the "ideal" value.

Most-tested cases (all start from 4 electron groups, but with different lone-pair counts):

• **0 lone pairs → tetrahedral.** All four atoms attached. CH₄. Angle 109.5°.
• **1 lone pair → trigonal pyramidal.** Three atoms below, lone pair on top. NH₃. Angle ≈107°.
• **2 lone pairs → bent (or angular).** Two atoms, two lone pairs. H₂O. Angle ≈104.5°.

The pattern continues for 5 and 6 electron groups, but the four-group cases above cover the bulk of CLEP questions. **CO₂ is linear** (2 groups, 0 lone pairs); **SO₂ is bent** (3 groups, 1 lone pair).`
          }
        ],
        examples: [
          {
            prompt: 'What is the molecular geometry of H₂O?',
            steps: [
              'Lewis structure: O has 2 bonded H atoms + 2 lone pairs = 4 electron groups.',
              'Electron geometry (4 groups) = tetrahedral.',
              'Two of those groups are lone pairs; only 2 atoms are visible in the molecule.',
              'Tetrahedral with 2 atoms missing = bent (also called angular).',
              'Bond angle is compressed below 109.5° because lone pairs squeeze the H atoms together — actual H–O–H angle is about 104.5°.'
            ],
            answer: 'Bent (angular). Bond angle ≈ 104.5°.'
          },
          {
            prompt: 'Predict the geometry of SF₄ (sulfur with 4 F atoms and 1 lone pair).',
            steps: [
              'Electron groups around S: 4 bonds + 1 lone pair = 5 groups.',
              'Electron geometry (5 groups) = trigonal bipyramidal.',
              'Lone pairs prefer equatorial positions in trigonal bipyramidal (more room).',
              'With one equatorial lone pair, the four F atoms form a "seesaw" shape.',
              'This is the canonical 5-group, 1-lone-pair geometry.'
            ],
            answer: 'Seesaw molecular geometry. (Trigonal bipyramidal electron geometry.)'
          }
        ],
        practice: [
          {
            q: 'How many electron groups are around the central atom in BF₃?',
            choices: ['2', '3', '4', '6'],
            correct: 1,
            explain: 'B has 3 valence electrons, all in bonds to F. No lone pairs on B (it\'s an octet exception, content with 6 electrons). Three electron groups → trigonal planar geometry.'
          },
          {
            q: 'Which has a bent shape?',
            choices: ['BeCl₂', 'CO₂', 'H₂S', 'CH₄'],
            correct: 2,
            explain: 'H₂S is structurally similar to H₂O: 4 electron groups (2 bonds + 2 lone pairs) → tetrahedral electron geometry, bent molecular geometry. BeCl₂ and CO₂ are linear; CH₄ is tetrahedral.'
          },
          {
            q: 'The bond angle in NH₃ is approximately:',
            choices: ['90°', '107°', '109.5°', '120°'],
            correct: 1,
            explain: 'NH₃ has 4 electron groups (3 bonds + 1 lone pair), so it starts from the tetrahedral 109.5°. The lone pair compresses the H–N–H angles slightly, giving roughly 107°. CH₄ (no lone pair) keeps the full 109.5°.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'polarity_imf',
        title: 'Polarity & Intermolecular Forces',
        summary: 'How geometry creates molecular polarity, and the forces that hold molecules together in liquids and solids.',
        intro: `Bonds can be polar without making the *molecule* polar. Whether the molecule has a net dipole depends on whether the individual bond dipoles cancel out by symmetry. Once you can predict molecular polarity, you can predict the forces between molecules — and those forces explain boiling points, solubility, and a huge range of physical properties.`,
        sections: [
          {
            heading: 'Bond dipoles and net molecular dipole',
            body: `Each polar bond has a **bond dipole** — an arrow pointing from the partial positive end (less electronegative atom) toward the partial negative end (more electronegative atom).

To find a molecule's overall polarity, add up the bond dipoles as **vectors**. If they cancel by symmetry → nonpolar molecule. If they don't cancel → polar molecule.

Two examples that look similar but behave differently:
• **CO₂** (linear): two C=O bond dipoles point in opposite directions and cancel exactly. Net dipole = 0. Nonpolar.
• **H₂O** (bent): two H–O bond dipoles point at an angle (≈104.5°) and don't cancel. Significant net dipole. Polar.

Symmetry is the giveaway. Highly symmetric molecules (CO₂, BF₃, CH₄, CCl₄, SF₆) tend to be nonpolar even with polar bonds. Asymmetric ones (H₂O, NH₃, CHCl₃) are polar.`
          },
          {
            heading: 'The four intermolecular forces (IMFs)',
            body: `Once molecules form, they're attracted to each other by intermolecular forces — much weaker than the bonds *within* a molecule, but powerful enough to determine boiling points, melting points, and solubility. From weakest to strongest:

**1. London dispersion forces (LDF).** Caused by temporary, fleeting dipoles when electrons happen to bunch on one side of an atom. Present in *every* molecule, but the only IMF in nonpolar substances. Strength scales with size and surface area — bigger molecules with more electrons have stronger LDF. (This is why I₂ is solid at room temperature while F₂ is a gas.)

**2. Dipole-dipole forces.** Polar molecules align with the positive end of one near the negative end of another. Stronger than LDF, present in any polar substance.

**3. Hydrogen bonding.** A special, unusually strong dipole-dipole interaction. Occurs only when **H is bonded directly to N, O, or F** — these atoms are small and electronegative enough to create an intense partial charge. Hydrogen bonding is the reason water has such a high boiling point compared to similar-sized molecules.

**4. Ion-dipole.** Between an ion and a polar molecule. Strongest of the IMFs we usually discuss; explains why salts dissolve well in water.`
          },
          {
            heading: 'Predicting boiling points',
            body: `Stronger IMFs = more energy needed to separate molecules into a gas = higher boiling point.

Quick predictions for common cases:
• **Bigger molecules > smaller molecules** (more dispersion).
• **Polar > nonpolar**, holding size constant.
• **Hydrogen-bonding molecules > similar polar molecules without H-bonding**.

Classic comparison: H₂O (bp 100°C) vs. H₂S (bp −60°C). Both are bent, both polar — but only H₂O hydrogen-bonds. The difference in boiling point is enormous, all due to one IMF.`
          },
          {
            heading: '"Like dissolves like"',
            body: `Solvent and solute mix well when their IMFs are similar. **Polar dissolves polar**; **nonpolar dissolves nonpolar**.

Water (polar, hydrogen-bonding) dissolves salt (ions) and sugar (lots of OH groups for H-bonds), but won't mix with oil (nonpolar hydrocarbon — only LDFs). Hexane dissolves grease but not table salt. This single rule predicts an enormous range of solubility behavior.`
          }
        ],
        examples: [
          {
            prompt: 'Is CHCl₃ (chloroform) polar or nonpolar?',
            steps: [
              'Lewis structure: C is central, with 1 H and 3 Cl atoms attached. No lone pairs on C → 4 groups, tetrahedral.',
              'Bond polarities: C–Cl bonds are polar (Cl much more electronegative); C–H is nearly nonpolar.',
              'For full cancellation, we\'d need 4 identical substituents in tetrahedral symmetry (like CCl₄).',
              'Since one position holds H and three hold Cl, the bond dipoles don\'t cancel — there\'s a net pull toward the Cl side.',
              'CHCl₃ is polar.'
            ],
            answer: 'Polar. Symmetry is broken by the lone H in the tetrahedral arrangement.'
          },
          {
            prompt: 'Rank the boiling points of CH₄, CH₃OH, and H₂ from lowest to highest.',
            steps: [
              'CH₄: nonpolar, only dispersion forces. Small molecule. Very low bp.',
              'H₂: nonpolar, only dispersion. Even smaller than CH₄ — tiny. Lowest bp.',
              'CH₃OH (methanol): polar, AND has H bonded to O → hydrogen bonding. Strongest IMFs.',
              'Order: H₂ < CH₄ < CH₃OH. Actual bps: −253°C, −162°C, +65°C.'
            ],
            answer: 'H₂ < CH₄ < CH₃OH (methanol).'
          }
        ],
        practice: [
          {
            q: 'Which molecule exhibits hydrogen bonding?',
            choices: ['CH₄', 'CH₃F', 'NH₃', 'H₂S'],
            correct: 2,
            explain: 'Hydrogen bonding requires H bonded directly to N, O, or F. NH₃ has N–H bonds → hydrogen bonds. CH₃F has F but no H–F bond. H₂S has H but bonded to S, not the magic three. CH₄ has only C–H, neither polar nor H-bonding.'
          },
          {
            q: 'Which is nonpolar despite having polar bonds?',
            choices: ['H₂O', 'NH₃', 'CCl₄', 'CHCl₃'],
            correct: 2,
            explain: 'CCl₄ is tetrahedral with four identical C–Cl bonds. The four bond dipoles point symmetrically outward and cancel completely. CHCl₃ breaks that symmetry with H, NH₃ has a lone pair causing asymmetry, H₂O is bent.'
          },
          {
            q: 'Which has the highest boiling point?',
            choices: ['CH₄', 'CH₃OH', 'CH₃SH', 'CCl₄'],
            correct: 1,
            explain: 'CH₃OH (methanol) hydrogen-bonds via its O–H group, the strongest IMF among these. CH₃SH is similar but S–H doesn\'t H-bond (S isn\'t one of N/O/F). CCl₄ is heavy and has strong dispersion but no H-bonding. CH₄ has only weak dispersion forces.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'hybridization',
        title: 'Hybridization & Bond Theory',
        summary: 'Mixing atomic orbitals into hybrid orbitals: sp, sp², sp³, sp³d, sp³d² — and what σ vs. π bonds look like.',
        intro: `Hybridization is a fix for a real puzzle: carbon's 4 valence electrons live in 2s² 2p² (only 2 unpaired electrons), yet carbon happily forms 4 equivalent bonds in CH₄. The trick is that the s and p orbitals "mix" into a new set of equivalent **hybrid orbitals**. Understanding hybridization sharpens your prediction of geometry and explains the difference between single, double, and triple bonds.`,
        sections: [
          {
            heading: 'Counting electron groups → hybridization',
            body: `The shortcut: hybridization is determined by the number of electron groups around an atom. Same number you used for VSEPR.

• **2 groups → sp** (1 s + 1 p mixed). Linear arrangement.
• **3 groups → sp²** (1 s + 2 p mixed). Trigonal planar.
• **4 groups → sp³** (1 s + 3 p mixed). Tetrahedral.
• **5 groups → sp³d** (mixing in one d orbital). Trigonal bipyramidal.
• **6 groups → sp³d²** (mixing in two d orbitals). Octahedral.

So if you've already done VSEPR for a molecule, hybridization is instant.

The number of hybrid orbitals always equals the number of atomic orbitals that mixed: 4 hybrids from 1 s + 3 p, etc. Hybridization conserves orbitals.`
          },
          {
            heading: 'Sigma (σ) and pi (π) bonds',
            body: `Two ways for orbitals to overlap:

• **Sigma (σ) bond:** end-to-end overlap, electron density along the bond axis. Cylindrically symmetric. Free rotation around the bond is possible.
• **Pi (π) bond:** side-by-side overlap, electron density above and below the bond axis. Two parallel lobes, no rotation possible (rotation would break the overlap).

Every single bond is one σ. Every double bond is 1 σ + 1 π. Every triple bond is 1 σ + 2 π. **Hybrid orbitals form σ bonds. Unhybridized p orbitals form π bonds.**

In ethylene (C₂H₄), each carbon is sp²-hybridized. The three sp² orbitals form three σ bonds (to two H and one to the other C). The leftover unhybridized p orbital on each carbon overlaps sideways with the other to form the π bond. Total: 5 σ + 1 π = the C=C double bond plus four C–H single bonds.`,
            diagram: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
  <text x="200" y="20" text-anchor="middle" fill="#c4b5fd" font-family="Cinzel, serif" font-size="12" font-weight="700" letter-spacing="0.15em">σ vs π OVERLAP</text>

  <!-- Sigma bond: end to end -->
  <g transform="translate(80, 90)">
    <ellipse cx="-20" cy="0" rx="22" ry="14" fill="#7dd3fc" fill-opacity="0.4" stroke="#7dd3fc"/>
    <ellipse cx="20" cy="0" rx="22" ry="14" fill="#7dd3fc" fill-opacity="0.4" stroke="#7dd3fc"/>
    <text x="0" y="55" text-anchor="middle" fill="#7dd3fc" font-family="Inter, sans-serif" font-size="13" font-weight="700">σ bond</text>
    <text x="0" y="72" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="10" opacity="0.7">end-to-end overlap</text>
  </g>

  <!-- Pi bond: side by side -->
  <g transform="translate(280, 90)">
    <ellipse cx="-15" cy="-15" rx="28" ry="11" fill="#c4b5fd" fill-opacity="0.4" stroke="#c4b5fd"/>
    <ellipse cx="15" cy="-15" rx="28" ry="11" fill="#c4b5fd" fill-opacity="0.4" stroke="#c4b5fd"/>
    <ellipse cx="-15" cy="15" rx="28" ry="11" fill="#c4b5fd" fill-opacity="0.4" stroke="#c4b5fd"/>
    <ellipse cx="15" cy="15" rx="28" ry="11" fill="#c4b5fd" fill-opacity="0.4" stroke="#c4b5fd"/>
    <line x1="-30" y1="0" x2="30" y2="0" stroke="#f5f5f7" stroke-width="1" stroke-dasharray="2,2" opacity="0.4"/>
    <text x="0" y="55" text-anchor="middle" fill="#c4b5fd" font-family="Inter, sans-serif" font-size="13" font-weight="700">π bond</text>
    <text x="0" y="72" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="10" opacity="0.7">side-by-side overlap</text>
  </g>
</svg>`
          },
          {
            heading: 'Counting σ and π in a molecule',
            body: `Quick rules:
• Each **single bond** = 1 σ.
• Each **double bond** = 1 σ + 1 π.
• Each **triple bond** = 1 σ + 2 π.

For CO₂ (O=C=O): two double bonds → 2 σ + 2 π.
For HCN (H–C≡N): one single + one triple → 2 σ + 2 π.
For C₂H₂ (acetylene, H–C≡C–H): two singles + one triple → 3 σ + 2 π.

Sigma bonds are the structural skeleton; pi bonds add strength and rigidity but aren't where rotation is allowed.`
          }
        ],
        examples: [
          {
            prompt: 'What is the hybridization of the central atom in PCl₅?',
            steps: [
              'Lewis structure: P central, 5 P–Cl bonds, no lone pairs on P.',
              'Electron groups around P: 5 bonds + 0 lone pairs = 5 groups.',
              '5 groups requires mixing 5 atomic orbitals: 1 s + 3 p + 1 d.',
              'Hybridization: sp³d.'
            ],
            answer: 'sp³d. (Phosphorus has expanded its octet, possible because it\'s in period 3.)'
          },
          {
            prompt: 'How many σ and π bonds are in propene, CH₂=CH–CH₃?',
            steps: [
              'Identify all the bonds: C=C double bond, plus four C–H single bonds on the left two carbons, plus three C–H on the methyl, plus one C–C single between the middle and right carbons.',
              'Counting: 1 double bond + (4+3) C–H + 1 C–C single bond.',
              'Total bonds: 1 + 7 + 1 = 9 bonds, with one of them being double.',
              'Each single bond contributes 1 σ. The double bond contributes 1 σ + 1 π.',
              '9 σ total (8 from single bonds + 1 from the double) and 1 π.'
            ],
            answer: '9 σ bonds and 1 π bond.'
          }
        ],
        practice: [
          {
            q: 'What is the hybridization of carbon in methane (CH₄)?',
            choices: ['sp', 'sp²', 'sp³', 'sp³d'],
            correct: 2,
            explain: 'Carbon in CH₄ has 4 bonded H atoms and 0 lone pairs = 4 electron groups → sp³ hybridization. The four sp³ hybrid orbitals point to the corners of a tetrahedron.'
          },
          {
            q: 'How many π bonds are in N₂?',
            choices: ['0', '1', '2', '3'],
            correct: 2,
            explain: 'N₂ has a triple bond (N≡N), which is 1 σ + 2 π. Triple bonds always contribute 2 pi bonds — one σ and the rest π. The two unhybridized p orbitals on each N overlap sideways from two perpendicular directions.'
          },
          {
            q: 'A central atom with 3 bonded atoms and 1 lone pair has what hybridization?',
            choices: ['sp', 'sp²', 'sp³', 'sp³d'],
            correct: 2,
            explain: 'Count electron groups: 3 bonds + 1 lone pair = 4 groups → sp³ hybridization. (Molecular geometry would be trigonal pyramidal, like NH₃ — but the lone pair counts toward the hybridization count.)'
          }
        ]
      }
    ]
  },
  stoich: {
    realmName: 'The Reaction Crucible',
    realmSubtitle: 'Stoichiometry & Reactions',
    sublessons: [
      // --------------------------------------------------------
      {
        id: 'mole_concept',
        title: 'The Mole & Molar Mass',
        summary: 'What a mole is, why it exists, and how to convert between mass, moles, and number of particles.',
        intro: `Atoms are unimaginably small. A drop of water contains around 1.7 × 10²¹ molecules — far more than there are stars in the observable universe. To do chemistry on a useful scale, we need a "counting unit" that bridges the atomic and the everyday. That unit is the **mole**, and learning to use it well is the single most important skill in stoichiometry.`,
        sections: [
          {
            heading: 'What a mole is',
            body: `A **mole** is just a number — like a "dozen" or "pair," but vastly larger:

**1 mole = 6.022 × 10²³ particles** (Avogadro's number).

The number was chosen so that 1 mole of carbon-12 atoms weighs exactly 12 grams. This conveniently makes the **atomic mass on the periodic table** (in amu) equal the **mass of one mole** in grams. Carbon's atomic mass is 12.01 amu → one mole of C atoms weighs 12.01 g.

A mole can count anything: atoms, molecules, ions, electrons, baseballs. Usually we count atoms or molecules.`
          },
          {
            heading: 'Molar mass',
            body: `**Molar mass** is the mass of 1 mole of a substance, in grams per mole (g/mol).

For an element: read the atomic mass off the periodic table.
For a compound: sum the atomic masses of all atoms in the formula.

Examples:
• H₂O: 2(1.01) + 16.00 = 18.02 g/mol
• CO₂: 12.01 + 2(16.00) = 44.01 g/mol
• NaCl: 22.99 + 35.45 = 58.44 g/mol
• C₆H₁₂O₆ (glucose): 6(12.01) + 12(1.01) + 6(16.00) = 180.18 g/mol

For exam math, you can usually round atomic masses to the nearest whole number (H=1, C=12, N=14, O=16, Na=23, etc.) — answers come out the same to one or two sig figs.`
          },
          {
            heading: 'The three conversions',
            body: `These three relationships are the entire toolkit for converting between mass, moles, and particles:

**Mass ↔ Moles:** Use molar mass.
    moles = mass / molar mass
    mass = moles × molar mass

**Moles ↔ Particles:** Use Avogadro's number.
    particles = moles × 6.022 × 10²³
    moles = particles / 6.022 × 10²³

**Mass ↔ Particles:** Go through moles. Mass → moles → particles, or vice versa.

The mole is the universal middle step. Almost every stoichiometry problem you'll ever see involves converting *into* moles, doing something with the moles, then converting *out of* moles.`,
            diagram: `<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
  <text x="230" y="22" text-anchor="middle" fill="#fcd34d" font-family="Cinzel, serif" font-size="12" font-weight="700" letter-spacing="0.15em">THE MOLE BRIDGE</text>

  <!-- Three boxes -->
  <g font-family="Inter, sans-serif">
    <rect x="20" y="80" width="110" height="60" rx="4" fill="#7dd3fc" fill-opacity="0.15" stroke="#7dd3fc" stroke-width="1.5"/>
    <text x="75" y="105" text-anchor="middle" fill="#7dd3fc" font-size="13" font-weight="700">MASS</text>
    <text x="75" y="123" text-anchor="middle" fill="#f5f5f7" font-size="10" opacity="0.7">grams</text>

    <rect x="175" y="80" width="110" height="60" rx="4" fill="#fcd34d" fill-opacity="0.2" stroke="#fcd34d" stroke-width="1.5"/>
    <text x="230" y="105" text-anchor="middle" fill="#fcd34d" font-size="13" font-weight="700">MOLES</text>
    <text x="230" y="123" text-anchor="middle" fill="#f5f5f7" font-size="10" opacity="0.7">mol</text>

    <rect x="330" y="80" width="110" height="60" rx="4" fill="#c4b5fd" fill-opacity="0.15" stroke="#c4b5fd" stroke-width="1.5"/>
    <text x="385" y="105" text-anchor="middle" fill="#c4b5fd" font-size="13" font-weight="700">PARTICLES</text>
    <text x="385" y="123" text-anchor="middle" fill="#f5f5f7" font-size="10" opacity="0.7">atoms / molecules</text>
  </g>

  <!-- Arrows -->
  <g stroke="#f5f5f7" stroke-width="1" opacity="0.6" fill="none">
    <line x1="135" y1="100" x2="170" y2="100"/>
    <polygon points="170,100 165,97 165,103" fill="#f5f5f7" opacity="0.6"/>
    <line x1="170" y1="120" x2="135" y2="120"/>
    <polygon points="135,120 140,117 140,123" fill="#f5f5f7" opacity="0.6"/>

    <line x1="290" y1="100" x2="325" y2="100"/>
    <polygon points="325,100 320,97 320,103" fill="#f5f5f7" opacity="0.6"/>
    <line x1="325" y1="120" x2="290" y2="120"/>
    <polygon points="290,120 295,117 295,123" fill="#f5f5f7" opacity="0.6"/>
  </g>

  <!-- Labels on arrows -->
  <text x="152" y="75" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="9" opacity="0.7">÷ molar mass</text>
  <text x="152" y="160" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="9" opacity="0.7">× molar mass</text>
  <text x="307" y="75" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="9" opacity="0.7">× 6.022e23</text>
  <text x="307" y="160" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="9" opacity="0.7">÷ 6.022e23</text>
</svg>`
          }
        ],
        examples: [
          {
            prompt: 'How many moles are in 88.0 g of CO₂?',
            steps: [
              'Molar mass of CO₂ = 12 + 2(16) = 44 g/mol.',
              'Moles = mass / molar mass = 88.0 / 44 = 2.00 mol.'
            ],
            answer: '2.00 mol of CO₂.'
          },
          {
            prompt: 'How many molecules are in 18 g of water?',
            steps: [
              'Molar mass of H₂O = 2(1) + 16 = 18 g/mol.',
              'Moles = 18 / 18 = 1.00 mol.',
              'Molecules = moles × Avogadro\'s number = 1.00 × 6.022 × 10²³ = 6.022 × 10²³ molecules.'
            ],
            answer: '6.022 × 10²³ molecules. (One mole of water has the same particle count as one mole of anything else — that\'s the mole\'s point.)'
          },
          {
            prompt: 'What is the mass of 0.25 mol of NaOH?',
            steps: [
              'Molar mass NaOH = 23 + 16 + 1 = 40 g/mol.',
              'Mass = moles × molar mass = 0.25 × 40 = 10 g.'
            ],
            answer: '10 g.'
          }
        ],
        practice: [
          {
            q: 'How many moles are in 9.0 g of water? (H₂O = 18 g/mol)',
            choices: ['0.25 mol', '0.5 mol', '1.0 mol', '2.0 mol'],
            correct: 1,
            explain: 'Moles = mass / molar mass = 9.0 / 18 = 0.5 mol. Half the molar mass means half a mole.'
          },
          {
            q: 'What is the molar mass of Ca(NO₃)₂? (Ca=40, N=14, O=16)',
            choices: ['102 g/mol', '132 g/mol', '164 g/mol', '70 g/mol'],
            correct: 2,
            explain: 'Calcium nitrate has 1 Ca + 2 N + 6 O. Mass = 40 + 2(14) + 6(16) = 40 + 28 + 96 = 164 g/mol. Don\'t forget to multiply the entire NO₃ group by 2.'
          },
          {
            q: 'How many atoms of carbon are in 0.10 mol of C₂H₆?',
            choices: ['6.0 × 10²²', '1.2 × 10²³', '6.0 × 10²³', '2.4 × 10²³'],
            correct: 1,
            explain: '0.10 mol C₂H₆ contains 0.10 × 2 = 0.20 mol of C atoms. Atoms = 0.20 × 6.022 × 10²³ ≈ 1.2 × 10²³. Always count atoms in the formula before multiplying by Avogadro\'s number.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'balancing',
        title: 'Balancing Chemical Equations',
        summary: 'How to balance any equation, recognize reaction types, and avoid common mistakes.',
        intro: `Atoms are conserved. The same number of each element must appear on both sides of an equation — this is just the law of conservation of mass dressed up in chemistry notation. Balancing is mostly bookkeeping, but it pays off in every stoichiometry problem afterward, because the balanced coefficients are how moles convert between reactants and products.`,
        sections: [
          {
            heading: 'What balancing means (and what it doesn\'t)',
            body: `A **balanced equation** has the same number of atoms of each element on both sides. The coefficients (numbers in front of compounds) tell you the *ratio* of moles in the reaction.

You can ONLY change coefficients. **Never change subscripts** to balance — that changes the chemical identity. H₂O is water; H₂O₂ is hydrogen peroxide. Different stuff.

Example: 2 H₂ + O₂ → 2 H₂O reads "two molecules of H₂ react with one O₂ to give two H₂O." Or, equivalently, "two moles H₂ + one mole O₂ → two moles H₂O." Either reading is correct because the ratios scale.`
          },
          {
            heading: 'A workable procedure',
            body: `Step 1: **Write the unbalanced skeleton** with correct formulas for every species.

Step 2: **Balance one element at a time.** Start with elements that appear in only one compound on each side. Save things that appear multiple times (like H and O) for last.

Step 3: **Balance polyatomic ions as a unit** if they survive intact (e.g., if SO₄²⁻ appears on both sides as part of compounds, count it as one block).

Step 4: **Balance H last, then O last of all** — these often appear in many places and adjust naturally as the rest balances.

Step 5: **If you get stuck with a fraction**, multiply the whole equation by the smallest integer that clears it.

Step 6: **Double-check** by counting each element on each side.`
          },
          {
            heading: 'The five reaction types',
            body: `Most reactions fit one of these patterns:

**1. Synthesis (combination):** A + B → AB. Example: 2 Mg + O₂ → 2 MgO.

**2. Decomposition:** AB → A + B. Example: 2 H₂O → 2 H₂ + O₂.

**3. Single replacement:** A + BC → AC + B. A more reactive element kicks another out. Example: Zn + 2 HCl → ZnCl₂ + H₂.

**4. Double replacement:** AB + CD → AD + CB. Two compounds swap partners. Example: AgNO₃ + NaCl → AgCl + NaNO₃.

**5. Combustion:** A hydrocarbon + O₂ → CO₂ + H₂O. The signature reaction of fuels. Example: CH₄ + 2 O₂ → CO₂ + 2 H₂O.

Recognizing the type often hints at how to balance it. Combustion of CₓHᵧ always produces x CO₂ and (y/2) H₂O — start there and the O₂ falls out at the end.`
          },
          {
            heading: 'Worked walkthrough: combustion of butane',
            body: `Balance: C₄H₁₀ + O₂ → CO₂ + H₂O.

**Carbon:** 4 on the left → 4 CO₂ on the right.

**Hydrogen:** 10 on the left → 5 H₂O on the right (since each water has 2 H).

Now check oxygen on the right: 4(2) + 5(1) = 8 + 5 = **13 O atoms**.

To get 13 oxygens on the left from O₂, we need 13/2 = 6.5 O₂. Fractions aren't conventional, so multiply everything by 2:

**2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O**

Check: C: 8 = 8 ✓. H: 20 = 20 ✓. O: 26 = 16 + 10 = 26 ✓. Balanced.`
          }
        ],
        examples: [
          {
            prompt: 'Balance: Fe + O₂ → Fe₂O₃.',
            steps: [
              'Iron: 1 on left, 2 on right → put a 2 in front of Fe: 2 Fe + O₂ → Fe₂O₃.',
              'Now check oxygen: 2 on left, 3 on right.',
              'LCM of 2 and 3 is 6. Need 6 O on each side: 3 O₂ on left, 2 Fe₂O₃ on right.',
              'New equation: 2 Fe + 3 O₂ → 2 Fe₂O₃. But now Fe: 2 on left, 4 on right.',
              'Update Fe coefficient: 4 Fe + 3 O₂ → 2 Fe₂O₃.',
              'Final check: Fe: 4 = 4 ✓. O: 6 = 6 ✓.'
            ],
            answer: '4 Fe + 3 O₂ → 2 Fe₂O₃'
          },
          {
            prompt: 'Identify the reaction type: NaOH + HCl → NaCl + H₂O.',
            steps: [
              'Two compounds on the left, two on the right.',
              'Compare partners: Na switches from OH to Cl; H switches from Cl to OH.',
              'The cations and anions essentially trade places.',
              'This is a double replacement (specifically, an acid-base neutralization).'
            ],
            answer: 'Double replacement (acid-base neutralization).'
          }
        ],
        practice: [
          {
            q: 'Balance: __ Al + __ HCl → __ AlCl₃ + __ H₂. The coefficients are:',
            choices: ['1, 3, 1, 3', '2, 6, 2, 3', '2, 3, 2, 1', '1, 6, 1, 3'],
            correct: 1,
            explain: 'Aluminum is +3, hydrogen is +1, so we need ratios that work. With 2 Al + 6 HCl → 2 AlCl₃ + 3 H₂: Al 2=2, H 6=6, Cl 6=6. Notice 6 H atoms must form 3 H₂ molecules.'
          },
          {
            q: 'What type of reaction is 2 KClO₃ → 2 KCl + 3 O₂?',
            choices: ['Synthesis', 'Decomposition', 'Single replacement', 'Combustion'],
            correct: 1,
            explain: 'One reactant breaks apart into multiple products → decomposition. Pattern AB → A + B. Notably, this is how O₂ used to be generated for school demonstrations.'
          },
          {
            q: 'Why can\'t you change H₂O to H₂O₂ when balancing an equation?',
            choices: [
              'You can change subscripts if needed',
              'It would create a new substance with different properties',
              'Subscripts only affect appearance',
              'Hydrogen peroxide is unstable'
            ],
            correct: 1,
            explain: 'H₂O is water; H₂O₂ is hydrogen peroxide — entirely different chemicals with different properties. Coefficients change *how much* of a substance is involved; subscripts define *what* the substance is. Only coefficients are adjustable when balancing.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'mole_ratios',
        title: 'Stoichiometric Calculations',
        summary: 'Using mole ratios from balanced equations to convert between any two species in a reaction.',
        intro: `Once you have a balanced equation, the coefficients give you **mole ratios** — recipes for how many moles of each substance participate. With those ratios, you can predict how much product forms from a given mass of reactant, or how much reactant you need to make a target amount of product. This is the bread and butter of chemistry math.`,
        sections: [
          {
            heading: 'The mole-ratio approach',
            body: `Almost every stoichiometry problem follows the same three-step shape:

**1. Convert the given quantity to moles.**
**2. Use the mole ratio from the balanced equation to convert to moles of the desired species.**
**3. Convert moles of the desired species into the requested unit (mass, particles, volume, etc.).**

That's it. Memorize this skeleton; the only thing that changes between problems is what's given and what's asked.

Pictorially: **(given mass) → (given moles) → (target moles) → (target answer)**.`
          },
          {
            heading: 'Mole ratios from coefficients',
            body: `For the balanced equation 2 H₂ + O₂ → 2 H₂O, here are the mole ratios available:

• 2 mol H₂ : 1 mol O₂ (between reactants)
• 2 mol H₂ : 2 mol H₂O (i.e., 1:1 between H₂ and H₂O)
• 1 mol O₂ : 2 mol H₂O

You can pick whichever ratio connects your starting and ending species. They're always written as fractions in dimensional analysis:

To find moles H₂O from moles O₂: multiply by **(2 mol H₂O / 1 mol O₂)**.
To find moles O₂ from moles H₂O: multiply by **(1 mol O₂ / 2 mol H₂O)**.

The mole ratio is the heart of stoichiometry. Everything else is just unit conversion before and after.`
          },
          {
            heading: 'Worked example end-to-end',
            body: `**Question:** How many grams of H₂O are produced when 8.0 g of H₂ burn completely?

Reaction: 2 H₂ + O₂ → 2 H₂O.

**Step 1: Mass H₂ → moles H₂.** Molar mass H₂ = 2 g/mol. So 8.0 / 2 = 4.0 mol H₂.

**Step 2: Moles H₂ → moles H₂O** using ratio 2:2 (i.e., 1:1). So 4.0 mol H₂O.

**Step 3: Moles H₂O → mass H₂O.** Molar mass H₂O = 18 g/mol. So 4.0 × 18 = 72 g H₂O.

**Answer: 72 g of water.**

Notice the three steps. This is the universal template — only the numbers and ratios change.`
          }
        ],
        examples: [
          {
            prompt: 'For 2 NaOH + H₂SO₄ → Na₂SO₄ + 2 H₂O, how many moles of NaOH are needed to react with 0.50 mol H₂SO₄?',
            steps: [
              'Already in moles. Skip to step 2 (the mole ratio step).',
              'Mole ratio NaOH : H₂SO₄ = 2 : 1.',
              'Moles NaOH = 0.50 mol H₂SO₄ × (2 mol NaOH / 1 mol H₂SO₄) = 1.0 mol.'
            ],
            answer: '1.0 mol of NaOH.'
          },
          {
            prompt: 'How many grams of CO₂ form when 4.4 g of propane (C₃H₈) burn? (C₃H₈ = 44 g/mol; CO₂ = 44 g/mol). Reaction: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O.',
            steps: [
              'Step 1: 4.4 g C₃H₈ × (1 mol / 44 g) = 0.10 mol C₃H₈.',
              'Step 2: Mole ratio C₃H₈ : CO₂ = 1 : 3. So 0.10 × 3 = 0.30 mol CO₂.',
              'Step 3: 0.30 mol × 44 g/mol = 13.2 g CO₂.'
            ],
            answer: '13.2 g of CO₂.'
          }
        ],
        practice: [
          {
            q: 'For N₂ + 3 H₂ → 2 NH₃, how many moles of NH₃ form from 6 mol of H₂ (with excess N₂)?',
            choices: ['2 mol', '4 mol', '6 mol', '9 mol'],
            correct: 1,
            explain: 'Mole ratio H₂ : NH₃ = 3 : 2. So 6 mol H₂ × (2 mol NH₃ / 3 mol H₂) = 4 mol NH₃. The "excess N₂" tells you N₂ isn\'t the limiting reactant.'
          },
          {
            q: 'Given 2 KClO₃ → 2 KCl + 3 O₂, how many moles of O₂ form from 0.40 mol KClO₃?',
            choices: ['0.40 mol', '0.60 mol', '0.80 mol', '1.20 mol'],
            correct: 1,
            explain: 'Mole ratio KClO₃ : O₂ = 2 : 3. So 0.40 × (3/2) = 0.60 mol O₂.'
          },
          {
            q: 'Why are mole ratios more useful than mass ratios from balanced equations?',
            choices: [
              'Coefficients are particle/mole counts, not masses',
              'Mass ratios don\'t exist',
              'Moles are easier to weigh',
              'Mass conservation isn\'t obeyed'
            ],
            correct: 0,
            explain: 'Coefficients in balanced equations are particle counts (or mole counts), not masses. The 2 in "2 H₂O" means 2 molecules or 2 moles, not 2 grams. To compare masses you\'d need to convert through molar mass first — which is why we always work in moles for ratios.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'limiting_reagent',
        title: 'Limiting Reagent & Percent Yield',
        summary: 'Identifying which reactant runs out first, and comparing actual vs. theoretical yield.',
        intro: `In an idealized stoichiometry problem, you're handed exactly the right amounts of each reactant. In real chemistry — and on harder problems — you usually have excesses of some and shortages of others. The reactant that runs out first determines how much product can form. That reactant is called the **limiting reagent**, and finding it is the first step in any "how much can I actually make?" calculation.`,
        sections: [
          {
            heading: 'The recipe analogy',
            body: `Imagine making sandwiches. Each sandwich requires 2 slices of bread and 1 slice of cheese. You have 10 slices of bread and 6 slices of cheese.

How many sandwiches can you make?
• From bread alone: 10 / 2 = 5 sandwiches.
• From cheese alone: 6 / 1 = 6 sandwiches.

You'll run out of *bread* first — bread is the limiting "reagent." You can only make 5 sandwiches, with 1 slice of cheese left over (the cheese is in **excess**).

Chemistry works exactly the same way. The reactant that allows the **smallest amount of product** to form is the limiting reagent.`
          },
          {
            heading: 'The procedure',
            body: `**Step 1: Convert each reactant to moles** (using its molar mass, if mass is given).

**Step 2: Use the mole ratios to find the moles of product each reactant *would* produce, assuming it ran out completely.** Do this for every reactant.

**Step 3: Whichever reactant gives the smallest amount of product is the limiting reagent.** That smallest amount is the actual maximum (theoretical) yield.

**Step 4: To find leftover (excess) reactant**, calculate how much of the excess reactant was actually consumed by the limiting reagent, then subtract from what you started with.`
          },
          {
            heading: 'Theoretical, actual, and percent yield',
            body: `**Theoretical yield:** the maximum amount of product predicted by stoichiometry, assuming perfect efficiency. This is what your math gives you.

**Actual yield:** what you actually recover in the lab. Always less than theoretical because of side reactions, losses during transfers, incomplete reactions, etc.

**Percent yield:** how good your reaction was.

\`\`\`
percent yield = (actual yield / theoretical yield) × 100%
\`\`\`

A percent yield over 100% indicates an error — usually impure product still containing solvent or unreacted starting material. A percent yield of 80–95% is considered very good for most syntheses; below 50% suggests a problem worth investigating.`
          },
          {
            heading: 'Worked walkthrough',
            body: `**Question:** 4.0 g of H₂ reacts with 16 g of O₂. (a) Which is limiting? (b) How much H₂O is produced? (c) How much excess reactant remains? Reaction: 2 H₂ + O₂ → 2 H₂O.

**Convert to moles:**
• H₂: 4.0 / 2 = 2.0 mol
• O₂: 16 / 32 = 0.50 mol

**How much H₂O could each produce?**
• From H₂: 2.0 mol × (2 mol H₂O / 2 mol H₂) = 2.0 mol H₂O
• From O₂: 0.50 mol × (2 mol H₂O / 1 mol O₂) = 1.0 mol H₂O

**O₂ produces less, so O₂ is limiting.** Maximum H₂O formed = 1.0 mol = 18 g.

**How much H₂ was used?** 0.50 mol O₂ × (2 mol H₂ / 1 mol O₂) = 1.0 mol H₂. We started with 2.0 mol, so 1.0 mol of H₂ remains unreacted (= 2.0 g).`
          }
        ],
        examples: [
          {
            prompt: 'For N₂ + 3 H₂ → 2 NH₃, you have 1.5 mol N₂ and 3.0 mol H₂. Identify the limiting reagent.',
            steps: [
              'Maximum NH₃ from N₂: 1.5 × (2 / 1) = 3.0 mol NH₃.',
              'Maximum NH₃ from H₂: 3.0 × (2 / 3) = 2.0 mol NH₃.',
              'H₂ produces less, so H₂ is limiting.',
              'Confirm by checking how much N₂ is needed for 3.0 mol H₂: 3.0 × (1/3) = 1.0 mol N₂. We have 1.5, so 0.5 mol N₂ is in excess.'
            ],
            answer: 'H₂ is the limiting reagent. Maximum NH₃ = 2.0 mol.'
          },
          {
            prompt: 'A reaction produces 18 g of product with theoretical yield 22 g. What is the percent yield?',
            steps: [
              'Percent yield = (actual / theoretical) × 100%.',
              '= (18 / 22) × 100%',
              '= 0.818 × 100% ≈ 81.8%.'
            ],
            answer: '81.8% — a respectable yield.'
          }
        ],
        practice: [
          {
            q: 'For 2 Al + 3 Cl₂ → 2 AlCl₃, you have 2 mol Al and 2 mol Cl₂. Which is limiting?',
            choices: ['Al', 'Cl₂', 'Both equally', 'Cannot determine'],
            correct: 1,
            explain: 'Max AlCl₃ from Al: 2 × (2/2) = 2 mol. Max from Cl₂: 2 × (2/3) ≈ 1.33 mol. Cl₂ produces less, so Cl₂ is the limiting reagent. (Notice Al has a 2:2 ratio with AlCl₃, but Cl₂ has a 3:2 ratio that\'s much less favorable.)'
          },
          {
            q: 'A percent yield of 105% most likely means:',
            choices: [
              'A miracle of chemistry',
              'Impurities in the product',
              'The reaction was unusually fast',
              'You used too much catalyst'
            ],
            correct: 1,
            explain: 'Yields above 100% are physically impossible — atoms can\'t come from nowhere. This always indicates an error: usually impure product (still containing water, solvent, or unreacted starting material), or a measurement mistake. The first thing to do is dry the product more thoroughly and weigh again.'
          },
          {
            q: 'If a reactant is "in excess," it means:',
            choices: [
              'It is the limiting reagent',
              'It will all be consumed',
              'There is more of it than needed for complete reaction',
              'It is a catalyst'
            ],
            correct: 2,
            explain: 'Excess reactant is whatever you have more of than the limiting reagent\'s ratio demands. Some of it remains unreacted at the end. The limiting reagent is the opposite — it\'s entirely consumed and dictates how much product forms.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'solution_calcs',
        title: 'Solution Concentration & Dilution',
        summary: 'Molarity, dilution calculations, and stoichiometry with solutions in titration problems.',
        intro: `Most reactions in real chemistry happen in solution, where the reactants are dissolved in water (or another solvent). To do stoichiometry on a solution, you need to know the **concentration** — how much solute is dissolved per unit volume. Molarity is by far the most common concentration measure in introductory chemistry, and it ties directly into the mole-based stoichiometry you've been learning.`,
        sections: [
          {
            heading: 'Molarity',
            body: `**Molarity (M)** = moles of solute per liter of solution.

\`\`\`
M = mol / L
\`\`\`

A 1.0 M NaCl solution contains 1.0 mole of NaCl per liter of total solution. Three useful rearrangements:

• **moles = M × V** (in liters)
• **L = moles / M**
• **M = moles / L**

Note: molarity uses the *total volume* of the solution, not the volume of solvent. When you dissolve solute, the volume changes slightly — using total volume keeps the math consistent.

Other concentration measures exist (molality, mass percent, mole fraction), but molarity is the workhorse for the CLEP exam.`
          },
          {
            heading: 'Dilution',
            body: `When you dilute a concentrated solution by adding more solvent, the **moles of solute don't change** — only the volume does. This gives the dilution equation:

\`\`\`
M₁V₁ = M₂V₂
\`\`\`

where 1 = before dilution and 2 = after. The product M × V is just the moles of solute, which stays constant.

To make a target dilution, you can solve for whichever variable is unknown. Want 500 mL of 0.10 M HCl, starting from 6.0 M? V₁ = M₂V₂ / M₁ = (0.10 × 500) / 6.0 ≈ 8.3 mL of stock, diluted up to 500 mL with water.

The volume units must match on both sides, but they can be anything (mL, L, gallons) — they cancel.`
          },
          {
            heading: 'Titration calculations',
            body: `A **titration** uses a solution of known concentration to find the unknown concentration of another. The standard setup: drip the known solution into the unknown until the reaction is exactly complete (often signaled by a color-change indicator).

The key insight: at the **equivalence point**, the moles of reactants are in their stoichiometric ratio.

For a strong acid + strong base (say, HCl + NaOH → NaCl + H₂O), the ratio is 1:1, so:

\`\`\`
moles HCl = moles NaOH
M_HCl × V_HCl = M_NaOH × V_NaOH
\`\`\`

For non-1:1 reactions (like H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O), include the mole ratio:

\`\`\`
moles H₂SO₄ × 2 = moles NaOH
\`\`\`

Always check the balanced equation before assuming a 1:1 ratio.`
          }
        ],
        examples: [
          {
            prompt: 'How many grams of NaCl are needed to make 250 mL of a 0.40 M solution? (NaCl = 58.5 g/mol)',
            steps: [
              'Convert volume to liters: 250 mL = 0.250 L.',
              'Moles needed: M × V = 0.40 × 0.250 = 0.10 mol NaCl.',
              'Mass: moles × molar mass = 0.10 × 58.5 = 5.85 g.'
            ],
            answer: '5.85 g of NaCl.'
          },
          {
            prompt: 'You have 200 mL of 1.5 M HCl. What volume of water do you add to dilute it to 0.30 M?',
            steps: [
              'Use M₁V₁ = M₂V₂. M₁ = 1.5, V₁ = 200, M₂ = 0.30. Solve for V₂.',
              'V₂ = M₁V₁ / M₂ = (1.5 × 200) / 0.30 = 1000 mL.',
              'V₂ is the *final total volume*. Water added = 1000 − 200 = 800 mL.'
            ],
            answer: '800 mL of water added (final volume 1000 mL).'
          },
          {
            prompt: 'It takes 25.0 mL of 0.100 M NaOH to neutralize 50.0 mL of HCl. What is the HCl concentration?',
            steps: [
              'Reaction (1:1): HCl + NaOH → NaCl + H₂O.',
              'Moles NaOH = M × V = 0.100 × 0.0250 = 2.50 × 10⁻³ mol.',
              'Moles HCl = 2.50 × 10⁻³ mol (1:1 ratio).',
              'M_HCl = moles / V = (2.50 × 10⁻³) / 0.0500 = 0.0500 M.'
            ],
            answer: '0.0500 M HCl.'
          }
        ],
        practice: [
          {
            q: 'What is the molarity of a solution containing 0.50 mol of solute in 2.0 L?',
            choices: ['0.10 M', '0.25 M', '1.0 M', '2.5 M'],
            correct: 1,
            explain: 'M = mol / L = 0.50 / 2.0 = 0.25 M. The mole-to-volume ratio defines molarity directly.'
          },
          {
            q: 'You dilute 100 mL of 6.0 M HCl to a final volume of 600 mL. What is the new concentration?',
            choices: ['0.5 M', '1.0 M', '3.0 M', '6.0 M'],
            correct: 1,
            explain: 'M₁V₁ = M₂V₂ → M₂ = (6.0 × 100) / 600 = 1.0 M. A 6× volume increase gives a 6× concentration decrease — that\'s the structure of dilution.'
          },
          {
            q: 'For H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O, how many moles of NaOH are needed to neutralize 0.10 mol H₂SO₄?',
            choices: ['0.05 mol', '0.10 mol', '0.20 mol', '0.40 mol'],
            correct: 2,
            explain: 'Mole ratio H₂SO₄ : NaOH = 1 : 2 (sulfuric acid is diprotic — gives up 2 H⁺ per molecule). So 0.10 × 2 = 0.20 mol NaOH. Always check the balanced equation; not every acid-base reaction is 1:1.'
          }
        ]
      }
    ]
  },
  thermo: {
    realmName: 'The Thermal Sanctum',
    realmSubtitle: 'Energy & Kinetics',
    sublessons: [
      // --------------------------------------------------------
      {
        id: 'enthalpy',
        title: 'Enthalpy & Heat of Reaction',
        summary: 'Endothermic vs. exothermic reactions, ΔH, calorimetry, and Hess\'s Law.',
        intro: `Every chemical reaction either absorbs heat from its surroundings or releases heat to them. Enthalpy is the bookkeeping for that heat exchange. Understanding it lets you predict whether a reaction warms or cools its environment, calculate exactly how much energy is involved, and combine known reactions to get information about unknown ones.`,
        sections: [
          {
            heading: 'Endothermic vs. exothermic',
            body: `**Exothermic reactions release heat to the surroundings.** The system loses energy; ΔH is **negative**. Combustion, neutralization, and freezing are exothermic — surroundings warm up.

**Endothermic reactions absorb heat from the surroundings.** The system gains energy; ΔH is **positive**. Melting, evaporation, and photosynthesis are endothermic — surroundings cool down.

A useful image: an exothermic reaction is "downhill" — products are at lower energy than reactants, and the difference comes out as heat. An endothermic reaction is "uphill" — products are at higher energy and required heat input to get there.

The sign convention is from the system's perspective. ΔH < 0 means the system gave up energy (so surroundings gained it).`
          },
          {
            heading: 'Enthalpy diagrams',
            body: `An enthalpy diagram plots energy on the y-axis and reaction progress on the x-axis. Reactants are on the left at one energy level; products on the right at another.

For an **exothermic** reaction, products sit lower than reactants. ΔH = (H_products − H_reactants) is negative.

For an **endothermic** reaction, products sit higher. ΔH is positive.

There's almost always a hump between reactants and products — the **activation energy** (Eₐ), an energy barrier that must be overcome to get the reaction started. Eₐ controls reaction *rate*, while ΔH controls thermodynamic favorability. Don't confuse them: a reaction can be very exothermic (large negative ΔH) but slow (large Eₐ). Diamond converting to graphite is one such reaction — favorable, but agonizingly slow at room temperature.`,
            diagram: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
  <text x="200" y="20" text-anchor="middle" fill="#fca5a5" font-family="Cinzel, serif" font-size="12" font-weight="700" letter-spacing="0.15em">EXOTHERMIC REACTION</text>

  <!-- Axes -->
  <line x1="40" y1="180" x2="370" y2="180" stroke="#f5f5f7" stroke-width="1" opacity="0.3"/>
  <line x1="40" y1="40" x2="40" y2="180" stroke="#f5f5f7" stroke-width="1" opacity="0.3"/>
  <text x="40" y="195" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="10" opacity="0.6">Reaction progress →</text>
  <text x="20" y="120" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="10" opacity="0.6" transform="rotate(-90 20 120)">Energy</text>

  <!-- Curve -->
  <path d="M 60 90 L 110 90 Q 180 30, 240 90 Q 280 130, 350 130" stroke="#fca5a5" stroke-width="2.5" fill="none"/>

  <!-- Reactant level marker -->
  <line x1="60" y1="90" x2="110" y2="90" stroke="#7dd3fc" stroke-width="2"/>
  <text x="65" y="80" fill="#7dd3fc" font-family="Inter, sans-serif" font-size="11" font-weight="600">Reactants</text>

  <!-- Product level marker -->
  <line x1="280" y1="130" x2="350" y2="130" stroke="#86efac" stroke-width="2"/>
  <text x="290" y="150" fill="#86efac" font-family="Inter, sans-serif" font-size="11" font-weight="600">Products</text>

  <!-- Activation energy arrow -->
  <line x1="180" y1="90" x2="180" y2="50" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="186" y="70" fill="#fbbf24" font-family="Inter, sans-serif" font-size="10">Eₐ</text>

  <!-- Delta H arrow -->
  <line x1="320" y1="90" x2="320" y2="130" stroke="#c4b5fd" stroke-width="1.5"/>
  <polygon points="320,130 317,124 323,124" fill="#c4b5fd"/>
  <text x="328" y="115" fill="#c4b5fd" font-family="Inter, sans-serif" font-size="10">ΔH &lt; 0</text>
</svg>`
          },
          {
            heading: 'Calorimetry',
            body: `**Calorimetry** measures heat transfer in real reactions. The classic equation:

\`\`\`
q = m × c × ΔT
\`\`\`

where:
• **q** = heat transferred (in joules, J)
• **m** = mass (in grams)
• **c** = specific heat capacity (J / g·°C — a property of the substance)
• **ΔT** = change in temperature (in °C or K — same magnitude)

Water has c = 4.18 J/(g·°C), unusually high. This is why water is so good at absorbing and storing heat, why coastal climates are mild, and why your body uses water as the main thermal buffer.

In a coffee-cup calorimeter, heat from a reaction transfers to the surrounding water. By measuring how much the water's temperature rises (or falls), you can calculate the heat released by the reaction.`
          },
          {
            heading: 'Hess\'s Law',
            body: `**Hess's Law** says that enthalpy is a *state function* — it depends only on starting and ending states, not on the path. So if a reaction can be expressed as a sum of simpler reactions, the overall ΔH is the sum of the ΔH's of each step.

This is enormously useful when ΔH for a target reaction is hard to measure directly. You find a route through other reactions whose ΔH values are known, and add them up.

Two operations are allowed:
• **Reverse a reaction:** flip the sign of its ΔH.
• **Multiply a reaction by a coefficient:** multiply its ΔH by the same coefficient.

Then add the modified reactions until you get the target. Cancel anything that appears identically on both sides. The sum of the ΔH values is your answer.`
          }
        ],
        examples: [
          {
            prompt: 'How much heat is released when 50 g of water cools from 80°C to 25°C? (c = 4.18 J/g·°C)',
            steps: [
              'q = m × c × ΔT.',
              'ΔT = final − initial = 25 − 80 = −55°C (negative because cooling).',
              'q = 50 × 4.18 × (−55) = −11495 J ≈ −11.5 kJ.',
              'Negative sign means heat was released (lost by water to surroundings).'
            ],
            answer: 'About 11.5 kJ of heat released.'
          },
          {
            prompt: 'Use Hess\'s Law to find ΔH for C + ½ O₂ → CO, given:\n• C + O₂ → CO₂, ΔH = −393.5 kJ\n• CO + ½ O₂ → CO₂, ΔH = −283.0 kJ',
            steps: [
              'Target: C + ½ O₂ → CO.',
              'Use eq 1 as written: C + O₂ → CO₂, ΔH₁ = −393.5 kJ.',
              'Reverse eq 2: CO₂ → CO + ½ O₂, ΔH₂\' = +283.0 kJ (sign flipped).',
              'Add them: C + O₂ + CO₂ → CO₂ + CO + ½ O₂. Cancel CO₂ on both sides; cancel ½ O₂ from one side of each.',
              'Result: C + ½ O₂ → CO. ΔH = −393.5 + 283.0 = −110.5 kJ.'
            ],
            answer: 'ΔH = −110.5 kJ (exothermic).'
          }
        ],
        practice: [
          {
            q: 'A reaction with ΔH = +75 kJ/mol is:',
            choices: ['Exothermic', 'Endothermic', 'Spontaneous', 'A combustion reaction'],
            correct: 1,
            explain: 'Positive ΔH means the system gained energy from the surroundings — endothermic. Combustion is always exothermic (negative ΔH). Spontaneity also depends on entropy, not just enthalpy.'
          },
          {
            q: 'How much heat is needed to warm 200 g of water from 20°C to 60°C? (c = 4.18 J/g·°C)',
            choices: ['8.4 kJ', '16.7 kJ', '33.4 kJ', '50.2 kJ'],
            correct: 2,
            explain: 'q = m × c × ΔT = 200 × 4.18 × 40 = 33440 J ≈ 33.4 kJ. Notice ΔT = 60 − 20 = 40°C.'
          },
          {
            q: 'When using Hess\'s Law, if you reverse a reaction, what happens to ΔH?',
            choices: ['Stays the same', 'Doubles', 'Sign flips', 'Becomes zero'],
            correct: 2,
            explain: 'Reversing a reaction reverses the energy flow — what released energy now requires it (or vice versa). The magnitude of ΔH stays the same, but the sign flips. This is one of the two manipulations Hess\'s Law allows.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'entropy_gibbs',
        title: 'Entropy & Free Energy',
        summary: 'Entropy as disorder, Gibbs free energy, and predicting spontaneity.',
        intro: `Why do some reactions happen on their own and others don't? You might guess "they release energy" — and you'd be partly right, but only partly. Some endothermic reactions happen spontaneously (ice melting at room temperature, for instance). The full story requires two factors: **enthalpy** (how much heat is released) and **entropy** (how much disorder increases). Gibbs free energy combines both into a single, decisive quantity.`,
        sections: [
          {
            heading: 'Entropy (S)',
            body: `**Entropy** measures the amount of disorder, or more precisely, the number of microscopic arrangements consistent with a given macroscopic state. Higher entropy = more disorder = more possible arrangements.

Phases ranked by entropy: **gas > liquid > solid**. Gas molecules can be anywhere doing anything; solid molecules are pinned to a lattice.

Examples that increase entropy:
• Solids melting or sublimating
• Liquids vaporizing
• A solid dissolving in a liquid (mostly)
• A reaction that produces more moles of gas than it consumes
• Temperature increasing

Examples that decrease entropy:
• A gas condensing or freezing
• Two gases reacting to make a liquid
• A reaction with fewer moles of gas on the product side

The Second Law of Thermodynamics says the **total entropy of the universe always increases**. A reaction can decrease the system's entropy as long as it increases the surroundings' entropy by more.`
          },
          {
            heading: 'Gibbs free energy',
            body: `**Gibbs free energy (G)** combines enthalpy and entropy:

\`\`\`
ΔG = ΔH − T·ΔS
\`\`\`

where T is temperature in **Kelvin** (always — never Celsius for this equation).

The sign of ΔG predicts spontaneity:
• **ΔG < 0** → spontaneous (reaction proceeds forward as written)
• **ΔG > 0** → nonspontaneous (the *reverse* reaction is spontaneous)
• **ΔG = 0** → at equilibrium

"Spontaneous" doesn't mean "fast" — it just means thermodynamically favorable. Diamond → graphite is spontaneous but extremely slow.`
          },
          {
            heading: 'The four spontaneity cases',
            body: `Whether a reaction is spontaneous depends on the signs of ΔH and ΔS, plus T. Four cases:

**1. ΔH < 0, ΔS > 0 → ΔG always negative.** Spontaneous at all T. (Combustion is the classic example.)

**2. ΔH > 0, ΔS < 0 → ΔG always positive.** Never spontaneous. (Reverse of case 1.)

**3. ΔH < 0, ΔS < 0 → ΔG depends.** Spontaneous only at **low T** (where T·ΔS is small). Example: water freezing — exothermic, but order increases.

**4. ΔH > 0, ΔS > 0 → ΔG depends.** Spontaneous only at **high T** (where T·ΔS dominates). Example: ice melting at room temperature.

For cases 3 and 4, you can find the **crossover temperature** where ΔG = 0:

\`\`\`
T = ΔH / ΔS
\`\`\`

Below this T (case 3) or above it (case 4), the reaction becomes spontaneous.`
          }
        ],
        examples: [
          {
            prompt: 'Predict the sign of ΔS for: 2 H₂(g) + O₂(g) → 2 H₂O(l).',
            steps: [
              'Count moles of gas: 3 on the left (2 H₂ + 1 O₂), 0 on the right (water is liquid).',
              'Number of gas particles decreases significantly.',
              'Less freedom of motion = lower entropy.',
              'ΔS is negative.'
            ],
            answer: 'ΔS < 0 (entropy decreases). Despite this, the reaction is spontaneous at room T because ΔH is very negative — the exothermic energy release dominates.'
          },
          {
            prompt: 'A reaction has ΔH = +25 kJ/mol and ΔS = +100 J/mol·K. At what temperature does it become spontaneous?',
            steps: [
              'Set ΔG = 0 at the crossover: T = ΔH / ΔS.',
              'Watch the units: ΔH is in kJ; ΔS is in J. Convert: ΔH = 25,000 J/mol.',
              'T = 25000 / 100 = 250 K.',
              'Above 250 K (= −23°C), ΔG < 0 → spontaneous. Below it, nonspontaneous.'
            ],
            answer: 'Spontaneous above 250 K (about −23°C). At room temperature this reaction is spontaneous.'
          }
        ],
        practice: [
          {
            q: 'Which has the highest entropy?',
            choices: ['Ice', 'Liquid water', 'Water vapor', 'All equal'],
            correct: 2,
            explain: 'Gas > liquid > solid in entropy. Water vapor molecules have the most freedom to occupy positions and orientations, giving the most microscopic arrangements consistent with the macroscopic state.'
          },
          {
            q: 'A reaction with ΔH < 0 and ΔS > 0 is:',
            choices: [
              'Spontaneous at all temperatures',
              'Spontaneous only at high T',
              'Spontaneous only at low T',
              'Never spontaneous'
            ],
            correct: 0,
            explain: 'ΔG = ΔH − TΔS. With ΔH negative and TΔS always positive (since T > 0 and ΔS > 0), ΔG is always negative — spontaneous at any temperature. This is the most thermodynamically blessed scenario.'
          },
          {
            q: 'What does ΔG = 0 indicate?',
            choices: [
              'No reaction occurs',
              'The reaction is at equilibrium',
              'ΔH equals ΔS',
              'Temperature is zero'
            ],
            correct: 1,
            explain: 'ΔG = 0 means the forward and reverse reactions occur at equal rates — equilibrium. There\'s no net driving force in either direction. (This is also the condition that defines the crossover temperature for borderline-spontaneous reactions.)'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'reaction_rates',
        title: 'Reaction Rates & Rate Laws',
        summary: 'How fast reactions go, what affects rate, and how to interpret rate laws and reaction order.',
        intro: `Thermodynamics tells you whether a reaction *can* happen. **Kinetics** tells you whether it *does* happen at a useful speed. Some thermodynamically favorable reactions are so slow they're useless; some unfavorable ones can be coaxed to acceptable speeds. Understanding rate laws lets you predict what speeds up a reaction and by how much.`,
        sections: [
          {
            heading: 'Defining rate',
            body: `**Reaction rate** = how fast concentration changes per unit time. Usually expressed in mol/(L·s) or M/s.

For a generic reaction A → B:
\`\`\`
rate = −Δ[A]/Δt = +Δ[B]/Δt
\`\`\`

The minus sign on reactants is just bookkeeping — concentrations of reactants decrease over time, but we want rate to be a positive number. For products, concentrations increase, so the sign is naturally positive.

If a reaction has stoichiometry like 2 A → 3 B, rates of disappearance of A and appearance of B are different. Rate is conventionally normalized by coefficients: rate = −(1/2) Δ[A]/Δt = +(1/3) Δ[B]/Δt.`
          },
          {
            heading: 'Factors affecting rate',
            body: `Five things you can change to alter reaction speed:

**1. Concentration.** Higher concentrations → more frequent collisions → faster rate. Most rates increase with reactant concentration.

**2. Temperature.** Higher T → molecules move faster *and* a larger fraction have enough energy to overcome activation energy. Rule of thumb: rate roughly doubles with every 10°C increase, though it depends on Eₐ.

**3. Surface area.** For reactions involving solids, smaller particles expose more reactive surface. Powdered iron rusts faster than a solid bar.

**4. Catalysts.** A catalyst provides an alternate reaction pathway with lower Eₐ — speeding up both forward and reverse rates without being consumed. Importantly, catalysts do NOT change ΔH or equilibrium position; they only change rate.

**5. Nature of reactants.** Some bonds break more easily than others. Reactions involving simple ion exchange (acid-base, precipitation) tend to be fast; reactions requiring complex bond reorganization tend to be slow.`
          },
          {
            heading: 'Rate laws and reaction order',
            body: `For most reactions, rate depends on reactant concentrations raised to some powers:

\`\`\`
rate = k [A]^m [B]^n
\`\`\`

**k** is the rate constant (depends on temperature, not concentrations).
**m** is the order with respect to A.
**n** is the order with respect to B.
**Overall order** = m + n.

Important: the orders m and n are **not necessarily the stoichiometric coefficients**. They must be determined experimentally. A reaction 2 A + B → C might be first-order in A and second-order in B, or any combination — the rate law reveals the actual mechanism, which often differs from the balanced equation.

Common shorthand: a reaction with overall order 0 is "zero-order"; order 1 is "first-order"; order 2 is "second-order."`
          },
          {
            heading: 'Determining order from data',
            body: `If experimental data show how rate changes with concentration, you can deduce order:

• **If doubling [A] doesn't change the rate → order 0 in A** (rate ∝ [A]⁰ = 1).
• **If doubling [A] doubles the rate → order 1 in A** (rate ∝ [A]).
• **If doubling [A] quadruples the rate → order 2 in A** (rate ∝ [A]²).
• **If doubling [A] gives 8× rate → order 3** (rate ∝ [A]³).

Pattern: doubling [A] multiplies rate by 2ⁿ where n is the order. Solve for n.`
          }
        ],
        examples: [
          {
            prompt: 'For rate = k[A]²[B], what is the overall order?',
            steps: [
              'Order in A: 2 (from the exponent).',
              'Order in B: 1 (no explicit exponent means 1).',
              'Overall order = sum = 2 + 1 = 3.'
            ],
            answer: 'Third-order overall.'
          },
          {
            prompt: 'Tripling [A] makes the rate 9 times faster. What is the order in A?',
            steps: [
              'If rate ∝ [A]ⁿ, tripling [A] multiplies rate by 3ⁿ.',
              '3ⁿ = 9.',
              'n = 2.'
            ],
            answer: 'Second-order in A.'
          }
        ],
        practice: [
          {
            q: 'A catalyst speeds up a reaction by:',
            choices: [
              'Increasing reactant concentration',
              'Lowering activation energy',
              'Raising temperature',
              'Shifting equilibrium toward products'
            ],
            correct: 1,
            explain: 'Catalysts provide an alternate pathway with lower Eₐ. They speed up both forward and reverse reactions equally, so equilibrium is reached faster — but not shifted. Concentration and temperature changes affect rate without lowering Eₐ.'
          },
          {
            q: 'For a first-order reaction, doubling the reactant concentration:',
            choices: ['Has no effect on rate', 'Doubles the rate', 'Quadruples the rate', 'Octuples the rate'],
            correct: 1,
            explain: 'First-order means rate ∝ [reactant]¹. Doubling [reactant] doubles rate. (Quadrupling = 2nd order; 8× = 3rd order; no effect = 0th order.)'
          },
          {
            q: 'Which factor does NOT typically affect reaction rate?',
            choices: ['Temperature', 'Concentration', 'The sign of ΔH', 'A catalyst'],
            correct: 2,
            explain: 'ΔH (enthalpy change) is a thermodynamic quantity that tells you about energy released or absorbed — it doesn\'t determine speed. A reaction can be highly exothermic (large negative ΔH) but slow, like diamond → graphite. Rate depends on Eₐ, not ΔH.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'half_life',
        title: 'Half-Life & Integrated Rate Laws',
        summary: 'How concentrations evolve over time for first-order and second-order reactions.',
        intro: `Rate laws tell you the *instantaneous* rate. Integrated rate laws tell you how concentration changes over time. They're the equations you use when asked "how much will be left after X hours?" or "how long until half is gone?" Each reaction order has its own characteristic time-evolution behavior.`,
        sections: [
          {
            heading: 'First-order kinetics',
            body: `For a first-order reaction (rate = k[A]):

\`\`\`
ln[A] = ln[A]₀ − kt
\`\`\`

This means a plot of **ln[A] vs. t** is a straight line, with slope = −k. This is the most common way to identify first-order behavior experimentally.

The **half-life** t₁/₂ is the time for [A] to drop to half its initial value. For first-order:

\`\`\`
t₁/₂ = 0.693 / k
\`\`\`

Notice: **the half-life is independent of starting concentration** for first-order reactions. Whether you start with 1 M or 1000 M, the time to halve the amount is the same. This is a defining feature of first-order kinetics — and why radioactive decay (which is first-order) has the half-lives we associate with carbon dating.`
          },
          {
            heading: 'Second-order kinetics',
            body: `For a second-order reaction (rate = k[A]²):

\`\`\`
1/[A] = 1/[A]₀ + kt
\`\`\`

A plot of **1/[A] vs. t** is a straight line, with slope = +k.

The half-life:

\`\`\`
t₁/₂ = 1 / (k · [A]₀)
\`\`\`

Notice: **second-order half-life depends on the initial concentration**. If you start with twice as much, the first half-life is half as long. As the reaction progresses and [A] drops, each successive half-life gets longer.`
          },
          {
            heading: 'Zero-order kinetics',
            body: `Less common but worth knowing: for a zero-order reaction (rate = k):

\`\`\`
[A] = [A]₀ − kt
\`\`\`

A plot of **[A] vs. t** is a straight line, with slope = −k. Concentration decreases at a constant rate, regardless of how much is left.

Half-life:
\`\`\`
t₁/₂ = [A]₀ / (2k)
\`\`\`

Each half-life takes half as long as the previous one for zero-order reactions.`
          },
          {
            heading: 'Recognizing the order from data',
            body: `Given concentration vs. time data, you can determine the reaction order by checking which plot is linear:

• **[A] vs. t is linear** → zero-order. Slope is −k.
• **ln[A] vs. t is linear** → first-order. Slope is −k.
• **1/[A] vs. t is linear** → second-order. Slope is +k.

This is one of the most common ways kinetics problems are solved on the CLEP — a table of data, and you have to identify which order fits.`
          }
        ],
        examples: [
          {
            prompt: 'A first-order reaction has k = 0.030 s⁻¹. What is its half-life?',
            steps: [
              'Use the first-order half-life formula: t₁/₂ = 0.693 / k.',
              't₁/₂ = 0.693 / 0.030 = 23.1 s.'
            ],
            answer: 'About 23 seconds.'
          },
          {
            prompt: 'A first-order reaction starts at 1.00 M with k = 0.10 s⁻¹. What is [A] after 20 seconds?',
            steps: [
              'Use ln[A] = ln[A]₀ − kt.',
              'ln[A] = ln(1.00) − (0.10)(20) = 0 − 2.0 = −2.0.',
              '[A] = e^(−2.0) ≈ 0.135 M.'
            ],
            answer: 'About 0.135 M.'
          }
        ],
        practice: [
          {
            q: 'For a first-order reaction with k = 0.050 s⁻¹, what is the half-life?',
            choices: ['0.050 s', '13.9 s', '20 s', '50 s'],
            correct: 1,
            explain: 't₁/₂ = 0.693/k = 0.693/0.050 ≈ 13.9 s. The 0.693 is ln(2), which appears because reducing by half means the natural log changes by ln(2).'
          },
          {
            q: 'Which plot is linear for a first-order reaction?',
            choices: ['[A] vs. t', 'ln[A] vs. t', '1/[A] vs. t', '[A]² vs. t'],
            correct: 1,
            explain: 'First-order kinetics: ln[A] = ln[A]₀ − kt. Plot ln[A] on the y-axis vs. t on the x-axis → straight line with slope −k. (Zero-order would give linear [A] vs. t; second-order would give linear 1/[A] vs. t.)'
          },
          {
            q: 'What\'s special about first-order half-life?',
            choices: [
              'It increases with concentration',
              'It decreases with concentration',
              'It is independent of starting concentration',
              'It is always exactly 1 second'
            ],
            correct: 2,
            explain: 'For first-order reactions, t₁/₂ = 0.693/k, which has no concentration term. The time to halve [A] is the same regardless of starting amount — which is why radioactive decay (first-order) has well-defined half-lives like the famous 5730 years for carbon-14.'
          }
        ]
      }
    ]
  },
  acidbase: {
    realmName: 'The Equilibrium Vault',
    realmSubtitle: 'Acids, Bases & Balance',
    sublessons: [
      // --------------------------------------------------------
      {
        id: 'equilibrium_basics',
        title: 'Chemical Equilibrium',
        summary: 'Dynamic equilibrium, equilibrium constants, and Le Chatelier\'s principle.',
        intro: `Most reactions don't go to completion — they reach a balance point where forward and reverse rates are equal. This is **equilibrium**, and understanding it is essential for everything from acid-base chemistry to industrial chemistry. Le Chatelier's principle gives you a powerful tool to predict how systems respond to changes.`,
        sections: [
          {
            heading: 'Dynamic equilibrium',
            body: `When a reversible reaction reaches **equilibrium**, both forward and reverse reactions still occur — they just happen at *equal rates*. The macroscopic concentrations no longer change, but at the molecular level, reactants and products are constantly interconverting.

This is "dynamic" not "static": there's plenty of activity, just no net change.

Reversible reactions are written with double arrows: A + B ⇌ C + D. The equilibrium state depends on the conditions (temperature, pressure, concentrations) and is characterized by an **equilibrium constant**.`
          },
          {
            heading: 'The equilibrium constant K',
            body: `For a generic equilibrium **a A + b B ⇌ c C + d D**, the equilibrium constant is:

\`\`\`
K = [C]^c [D]^d / [A]^a [B]^b
\`\`\`

Products in the numerator, reactants in the denominator, each raised to its stoichiometric coefficient.

Interpreting K:
• **K >> 1** → products favored at equilibrium (reaction goes nearly to completion).
• **K << 1** → reactants favored (very little product forms).
• **K ≈ 1** → comparable amounts of both at equilibrium.

Important conventions:
• **Pure solids and pure liquids are excluded** from the K expression — their "concentrations" don't change as the reaction proceeds.
• K is temperature-dependent. Change T, change K.
• Catalysts don't change K (they speed up both directions equally).`
          },
          {
            heading: 'Le Chatelier\'s principle',
            body: `**Le Chatelier's principle:** if you stress a system at equilibrium, it shifts to partially counteract the stress.

Three common stresses:

**1. Concentration changes.**
• Add a reactant → equilibrium shifts toward products (forward).
• Remove a product → equilibrium shifts toward products (forward).
• Add a product → equilibrium shifts toward reactants (reverse).

**2. Pressure / volume changes (gases only).**
• Increase pressure (decrease volume) → shifts toward the side with **fewer moles of gas**.
• Decrease pressure → shifts toward the side with more moles of gas.
• If both sides have equal moles of gas, pressure changes have no effect.

**3. Temperature changes.**
• Treat heat as a "product" of an exothermic reaction (or "reactant" of an endothermic one).
• Increasing T for an exothermic reaction → shifts toward reactants (and decreases K).
• Increasing T for an endothermic reaction → shifts toward products (and increases K).
• Temperature is the *only* stress that actually changes K.

A catalyst speeds reaching equilibrium but does *not* shift it.`,
            diagram: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
  <text x="200" y="20" text-anchor="middle" fill="#86efac" font-family="Cinzel, serif" font-size="12" font-weight="700" letter-spacing="0.15em">LE CHATELIER'S PRINCIPLE</text>

  <!-- Balance scale -->
  <line x1="200" y1="60" x2="200" y2="150" stroke="#f5f5f7" stroke-width="2" opacity="0.6"/>
  <line x1="80" y1="80" x2="320" y2="80" stroke="#f5f5f7" stroke-width="2" opacity="0.6"/>

  <!-- Pivot triangle -->
  <polygon points="200,150 190,165 210,165" fill="#f5f5f7" opacity="0.6"/>

  <!-- Pans -->
  <ellipse cx="80" cy="100" rx="40" ry="8" fill="#7dd3fc" fill-opacity="0.3" stroke="#7dd3fc" stroke-width="1.5"/>
  <ellipse cx="320" cy="100" rx="40" ry="8" fill="#86efac" fill-opacity="0.3" stroke="#86efac" stroke-width="1.5"/>

  <line x1="80" y1="80" x2="80" y2="100" stroke="#f5f5f7" stroke-width="1" opacity="0.5"/>
  <line x1="320" y1="80" x2="320" y2="100" stroke="#f5f5f7" stroke-width="1" opacity="0.5"/>

  <!-- Labels -->
  <text x="80" y="130" text-anchor="middle" fill="#7dd3fc" font-family="Inter, sans-serif" font-size="13" font-weight="600">REACTANTS</text>
  <text x="320" y="130" text-anchor="middle" fill="#86efac" font-family="Inter, sans-serif" font-size="13" font-weight="600">PRODUCTS</text>

  <text x="200" y="155" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="10" opacity="0.6">Stress one side → equilibrium tips the other way</text>
</svg>`
          },
          {
            heading: 'Why pressure matters for gases',
            body: `Pressure changes only affect equilibria involving gases, and only when the moles of gas are different on the two sides.

For N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g):
• Left side: 4 moles of gas (1 + 3).
• Right side: 2 moles of gas.
• Increase pressure → equilibrium shifts toward the right (fewer gas moles), favoring NH₃.

This is why ammonia synthesis (the Haber-Bosch process) is run at high pressure — it pushes the equilibrium toward the desired product.

For H₂(g) + I₂(g) ⇌ 2 HI(g): both sides have 2 moles of gas. Pressure changes don't shift this equilibrium.`
          }
        ],
        examples: [
          {
            prompt: 'Write the equilibrium expression for: 2 NO(g) + O₂(g) ⇌ 2 NO₂(g).',
            steps: [
              'Products in numerator, reactants in denominator.',
              'Each species raised to its coefficient.',
              'K = [NO₂]² / ([NO]² [O₂]).'
            ],
            answer: 'K = [NO₂]² / ([NO]²[O₂])'
          },
          {
            prompt: 'For 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g) (exothermic), what happens if temperature is increased?',
            steps: [
              'Treat heat as a "product" since the reaction is exothermic: 2 SO₂ + O₂ ⇌ 2 SO₃ + heat.',
              'Adding heat (raising T) is like adding a product — equilibrium shifts away from the heat side, i.e., toward reactants.',
              'Less SO₃ at equilibrium. Also: K decreases.'
            ],
            answer: 'Equilibrium shifts toward reactants. K decreases. Less SO₃ formed.'
          }
        ],
        practice: [
          {
            q: 'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), what happens if pressure is increased?',
            choices: [
              'Shifts toward reactants',
              'Shifts toward products',
              'No effect',
              'K increases'
            ],
            correct: 1,
            explain: 'Increasing pressure shifts equilibrium toward the side with fewer moles of gas. Reactants = 4 mol gas; products = 2 mol gas. So shift toward products (NH₃). This is exactly the principle exploited in industrial ammonia production.'
          },
          {
            q: 'A reaction has K = 1.5 × 10⁻⁶. This means at equilibrium:',
            choices: [
              'Products are heavily favored',
              'Reactants are heavily favored',
              'Reaction is very fast',
              'Products and reactants are equal'
            ],
            correct: 1,
            explain: 'Very small K means [products]/[reactants] is small at equilibrium — the reaction barely proceeds forward. K << 1 always indicates a reactant-favored equilibrium. Note: K says nothing about *speed*, only the final position.'
          },
          {
            q: 'Adding a catalyst to an equilibrium system:',
            choices: [
              'Shifts equilibrium toward products',
              'Shifts equilibrium toward reactants',
              'Increases K',
              'Speeds up reaching equilibrium without shifting it'
            ],
            correct: 3,
            explain: 'Catalysts speed both forward and reverse reactions equally. They reach the same equilibrium position faster, but don\'t shift K or the equilibrium concentrations. Only temperature actually changes K.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'acid_base_basics',
        title: 'Acids, Bases & pH',
        summary: 'Brønsted-Lowry definition, conjugate pairs, strong vs. weak, and the pH scale.',
        intro: `Acids and bases are everywhere — in our stomachs, our cleaning supplies, our soils. The acid/base concept has been refined over centuries, and the **Brønsted-Lowry definition** is what you'll use most often: acids donate protons (H⁺), bases accept them. The pH scale gives a compact way to express how acidic or basic a solution is.`,
        sections: [
          {
            heading: 'Brønsted-Lowry definitions',
            body: `**Acid:** a proton (H⁺) donor.
**Base:** a proton (H⁺) acceptor.

In the reaction HCl + H₂O → H₃O⁺ + Cl⁻:
• HCl gives up a proton to water → HCl is the acid.
• H₂O accepts a proton → H₂O is the base.

Note that water can act as either an acid or a base depending on context — it's **amphoteric**. With HCl, water is the base. With NH₃, water is the acid (donating H⁺ to ammonia).

There's also the older **Arrhenius definition** (acids produce H⁺ in water; bases produce OH⁻) and the broader **Lewis definition** (acids accept electron pairs; bases donate them). Brønsted-Lowry covers most of what the CLEP tests.`
          },
          {
            heading: 'Conjugate acid-base pairs',
            body: `Whenever an acid donates a proton, it becomes its **conjugate base**. Whenever a base accepts a proton, it becomes its **conjugate acid**.

In HCl + H₂O → H₃O⁺ + Cl⁻:
• HCl (acid) loses H⁺ → Cl⁻ (conjugate base).
• H₂O (base) gains H⁺ → H₃O⁺ (conjugate acid).

Pairs differ by exactly one proton. The conjugate base has one fewer H and one more negative charge than the acid.

Strength relationship: a strong acid has a weak conjugate base, and vice versa. HCl is a very strong acid → Cl⁻ is essentially nonbasic. NH₄⁺ is a weak acid → NH₃ is a moderate base.`
          },
          {
            heading: 'Strong vs. weak',
            body: `**Strong acids** completely dissociate in water — every molecule donates its proton. The classic six:

HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄

**Weak acids** dissociate only partially — most molecules stay intact. Acetic acid (CH₃COOH), formic acid (HCOOH), HF, and most organic acids are weak.

**Strong bases** also dissociate completely. The Group 1 hydroxides (LiOH, NaOH, KOH, RbOH, CsOH) and heavier Group 2 hydroxides (Ca(OH)₂, Sr(OH)₂, Ba(OH)₂) are strong.

**Weak bases** only partially accept protons. NH₃ (ammonia) is the classic example.

Strong acids/bases are simple: their H⁺ or OH⁻ concentration equals their molarity. Weak acids/bases require equilibrium calculations using Ka or Kb.`
          },
          {
            heading: 'The pH scale',
            body: `**pH = −log[H⁺]**, where [H⁺] is the concentration of hydrogen ions (or equivalently H₃O⁺) in mol/L.

Range:
• **pH < 7** → acidic
• **pH = 7** → neutral (at 25°C)
• **pH > 7** → basic

The scale is logarithmic: each pH unit corresponds to a 10× change in [H⁺]. A solution at pH 3 is 100× more acidic than one at pH 5.

Useful relationships:
• [H⁺][OH⁻] = K_w = 1.0 × 10⁻¹⁴ at 25°C (the autoionization of water).
• **pH + pOH = 14** (where pOH = −log[OH⁻]).

So if pH = 4, then [H⁺] = 10⁻⁴ M, [OH⁻] = 10⁻¹⁰ M, and pOH = 10. The two scales are mirror images.`
          }
        ],
        examples: [
          {
            prompt: 'What is the pH of 0.0010 M HCl?',
            steps: [
              'HCl is a strong acid → completely dissociates.',
              'So [H⁺] = 0.0010 M = 1.0 × 10⁻³ M.',
              'pH = −log(1.0 × 10⁻³) = 3.0.'
            ],
            answer: 'pH = 3.0.'
          },
          {
            prompt: 'A solution has pH = 11.5. Find [H⁺] and [OH⁻].',
            steps: [
              '[H⁺] = 10^(−pH) = 10^(−11.5) ≈ 3.2 × 10⁻¹² M.',
              'pOH = 14 − 11.5 = 2.5.',
              '[OH⁻] = 10^(−pOH) = 10^(−2.5) ≈ 3.2 × 10⁻³ M.',
              'Check: product = (3.2 × 10⁻¹²)(3.2 × 10⁻³) ≈ 10⁻¹⁴ ✓.'
            ],
            answer: '[H⁺] ≈ 3.2 × 10⁻¹² M; [OH⁻] ≈ 3.2 × 10⁻³ M. The solution is basic.'
          },
          {
            prompt: 'Identify the conjugate base of HCO₃⁻.',
            steps: [
              'A conjugate base is what remains after the acid loses one H⁺.',
              'HCO₃⁻ losing H⁺ gives CO₃²⁻.',
              'Charge becomes more negative by 1 (the proton took its + with it when it left).'
            ],
            answer: 'CO₃²⁻ (carbonate).'
          }
        ],
        practice: [
          {
            q: 'Which is a strong acid?',
            choices: ['Acetic acid (CH₃COOH)', 'HF', 'HCl', 'NH₃'],
            correct: 2,
            explain: 'HCl is one of the six strong acids (HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄) — fully dissociates in water. HF is weak (notably, despite F\'s electronegativity, the H–F bond is strong). Acetic acid is weak. NH₃ isn\'t even an acid; it\'s a weak base.'
          },
          {
            q: 'What is the pH of pure water at 25°C?',
            choices: ['0', '1', '7', '14'],
            correct: 2,
            explain: 'Pure water has [H⁺] = 10⁻⁷ M (from autoionization). pH = −log(10⁻⁷) = 7. This defines neutral — pH 7 at 25°C, slightly different at other temperatures.'
          },
          {
            q: 'In NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, what is water acting as?',
            choices: ['Brønsted acid', 'Brønsted base', 'Conjugate base', 'Salt'],
            correct: 0,
            explain: 'Here water donates a proton to ammonia, so water is the Brønsted-Lowry acid. NH₃ accepts the proton → it\'s the base. Water is amphoteric — it acts as a base with HCl but as an acid with NH₃, depending on the partner.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'weak_acids_buffers',
        title: 'Weak Acids, Bases & Buffers',
        summary: 'Ka and Kb equilibria, calculating pH of weak acids, and how buffers resist pH changes.',
        intro: `Strong acids and bases are simple: they dissociate completely. Weak acids and bases are more interesting — they reach an equilibrium with their ions, and that equilibrium is described by an equilibrium constant called Ka (or Kb). Buffers, which resist pH changes, are an elegant application of these equilibria and show up everywhere in biology and lab work.`,
        sections: [
          {
            heading: 'Ka and Kb',
            body: `For a weak acid HA dissociating: **HA ⇌ H⁺ + A⁻**, the acid dissociation constant is:

\`\`\`
Ka = [H⁺][A⁻] / [HA]
\`\`\`

Smaller Ka = weaker acid (less dissociation). Acetic acid has Ka ≈ 1.8 × 10⁻⁵; HF has Ka ≈ 6.8 × 10⁻⁴ (slightly stronger).

For a weak base B + H₂O ⇌ BH⁺ + OH⁻:

\`\`\`
Kb = [BH⁺][OH⁻] / [B]
\`\`\`

Smaller Kb = weaker base.

For any conjugate acid-base pair: **Ka × Kb = K_w = 1.0 × 10⁻¹⁴**. So if you know Ka of an acid, the Kb of its conjugate base is K_w / Ka.

We also use **pKa = −log(Ka)** and **pKb = −log(Kb)**. Smaller pKa = stronger acid. pKa + pKb = 14 for a conjugate pair.`
          },
          {
            heading: 'Weak-acid pH calculation',
            body: `For a weak acid of initial concentration C, the simplified equilibrium gives:

\`\`\`
[H⁺] ≈ √(Ka × C)
\`\`\`

This is valid when Ka is small relative to C (the "5% rule" — when [H⁺] is less than 5% of C, the approximation works).

So for 0.10 M acetic acid (Ka = 1.8 × 10⁻⁵):
[H⁺] ≈ √(1.8 × 10⁻⁵ × 0.10) ≈ 1.3 × 10⁻³ M.
pH ≈ 2.9.

Compare to 0.10 M HCl, which would give pH = 1.0. The weak acid is much less acidic for the same concentration — most molecules don't ionize.

When Ka is too large for the approximation (e.g., for HF), you'd need to solve the full quadratic equation, but that's rare on the CLEP.`
          },
          {
            heading: 'Buffer solutions',
            body: `A **buffer** is a solution that resists pH changes when small amounts of acid or base are added. It contains a weak acid and its conjugate base (or a weak base and its conjugate acid) in comparable amounts.

How they work: the conjugate base neutralizes added acid, and the weak acid neutralizes added base. As long as both are present in significant amounts, the pH barely budges.

Common buffer pair: acetic acid (CH₃COOH) and sodium acetate (NaCH₃COO). The acetate ion is the conjugate base.

The pH of a buffer is given by the **Henderson-Hasselbalch equation**:

\`\`\`
pH = pKa + log([A⁻]/[HA])
\`\`\`

Important consequence: when [A⁻] = [HA], log(1) = 0, so **pH = pKa**. This is the buffer's "midpoint" — and the point of maximum buffering capacity. Choose your buffer system so that the desired pH is close to the pKa of the acid.`
          },
          {
            heading: 'Buffer capacity',
            body: `A buffer works best when:
• Both [HA] and [A⁻] are reasonably large (more material to neutralize incoming acid/base).
• The ratio [A⁻]/[HA] is close to 1, meaning pH ≈ pKa.

A buffer can be overwhelmed if you add enough acid or base to use up most of one of its components — past that point, pH starts changing rapidly.

The "useful" buffer range is roughly **pKa ± 1** — corresponding to ratios [A⁻]/[HA] between 0.1 and 10.`
          }
        ],
        examples: [
          {
            prompt: 'Calculate the pH of 0.10 M HCN (Ka = 6.2 × 10⁻¹⁰).',
            steps: [
              '[H⁺] ≈ √(Ka × C) = √(6.2 × 10⁻¹⁰ × 0.10) = √(6.2 × 10⁻¹¹).',
              '√(6.2 × 10⁻¹¹) ≈ 7.9 × 10⁻⁶ M.',
              'pH = −log(7.9 × 10⁻⁶) ≈ 5.1.'
            ],
            answer: 'pH ≈ 5.1. (Note: HCN is a very weak acid, so even a 0.10 M solution is only mildly acidic.)'
          },
          {
            prompt: 'Calculate the pH of a buffer made from 0.50 M acetic acid and 0.20 M sodium acetate. (pKa = 4.74)',
            steps: [
              'Use Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]).',
              'pH = 4.74 + log(0.20/0.50) = 4.74 + log(0.40).',
              'log(0.40) ≈ −0.40.',
              'pH ≈ 4.74 − 0.40 = 4.34.'
            ],
            answer: 'pH ≈ 4.34.'
          }
        ],
        practice: [
          {
            q: 'A weak acid has Ka = 1.0 × 10⁻⁵. What is the approximate pH of a 0.10 M solution?',
            choices: ['1.0', '3.0', '5.0', '7.0'],
            correct: 1,
            explain: '[H⁺] ≈ √(Ka × C) = √(10⁻⁵ × 0.10) = √(10⁻⁶) = 10⁻³ M. pH = 3.0. The square-root approximation works whenever Ka is small relative to the initial concentration.'
          },
          {
            q: 'A buffer resists pH change most effectively when:',
            choices: [
              'pH is far from pKa',
              '[HA] = [A⁻]',
              'Only the acid is present',
              'Only the base is present'
            ],
            correct: 1,
            explain: 'When [HA] = [A⁻], pH = pKa (Henderson-Hasselbalch with log(1) = 0), and the buffer can absorb either added acid or added base equally well. Move too far in either direction and one side gets used up faster.'
          },
          {
            q: 'For HCN, Ka = 6.2 × 10⁻¹⁰. What is Kb of CN⁻?',
            choices: ['6.2 × 10⁻¹⁰', '1.6 × 10⁻⁵', '1.0 × 10⁻¹⁴', '6.2 × 10⁻⁴'],
            correct: 1,
            explain: 'Ka × Kb = K_w = 10⁻¹⁴. So Kb = 10⁻¹⁴ / (6.2 × 10⁻¹⁰) ≈ 1.6 × 10⁻⁵. Notice CN⁻ is a moderately strong base (Kb is fairly large) — this is why solutions of cyanide salts are basic.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'titrations',
        title: 'Titrations & Indicators',
        summary: 'Acid-base titrations, equivalence points, and how to interpret titration curves.',
        intro: `A **titration** uses a solution of known concentration to find the unknown concentration of another. By carefully adding measured amounts of one solution to the other and watching for a sharp change (often a color shift from an indicator), you can determine exactly how much was needed for complete reaction. Titrations are the gold standard for concentration determination.`,
        sections: [
          {
            heading: 'The basic procedure',
            body: `In a typical acid-base titration:

1. Place a known volume of the **analyte** (the solution of unknown concentration) in a flask.
2. Add a few drops of an **indicator** that changes color near the desired pH.
3. Slowly add the **titrant** (the solution of known concentration) from a buret.
4. Watch for the **endpoint** — the moment the indicator changes color.
5. Record the volume of titrant used.

The endpoint is your experimental signal that you've reached the **equivalence point** — the moment at which the moles of acid exactly equal the moles of base in stoichiometric ratio.

Once you know the volume of titrant needed and its concentration, you can back-calculate the moles of analyte and thus its concentration.`
          },
          {
            heading: 'Equivalence point pH',
            body: `The pH at the equivalence point depends on the strengths of the acid and base:

**Strong acid + strong base** (HCl + NaOH): pH at equivalence = **7**. The salt formed (NaCl) doesn't hydrolyze.

**Weak acid + strong base** (acetic acid + NaOH): pH at equivalence is **basic** (>7). The salt's anion (acetate) is a weak base — it pulls H⁺ off water, making the solution slightly basic.

**Strong acid + weak base** (HCl + NH₃): pH at equivalence is **acidic** (<7). The conjugate acid (NH₄⁺) is a weak acid.

This is why indicator choice matters — you need an indicator whose color-change pH matches the expected equivalence-point pH.`
          },
          {
            heading: 'Reading a titration curve',
            body: `A **titration curve** plots pH (y-axis) vs. volume of titrant added (x-axis). The shape tells you a lot:

For a **strong-acid, strong-base** titration: the curve rises gradually, then jumps almost vertically at the equivalence point (where pH = 7), then levels off.

For a **weak-acid, strong-base** titration: there's an initial steep rise (from low pH), then a flat **buffer region** in the middle (where the half-equivalence point sits — and pH = pKa right there), then another sharp jump at the equivalence point (pH > 7), then a flat region in basic territory.

The **half-equivalence point** is where exactly half the acid has been neutralized — and at that point, [HA] = [A⁻], so pH = pKa. This is a clever way to measure pKa experimentally: titrate, find the equivalence point, go back to half that volume, read off pH.`,
            diagram: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
  <text x="200" y="20" text-anchor="middle" fill="#86efac" font-family="Cinzel, serif" font-size="12" font-weight="700" letter-spacing="0.15em">TITRATION CURVE</text>

  <!-- Axes -->
  <line x1="50" y1="40" x2="50" y2="190" stroke="#f5f5f7" stroke-width="1" opacity="0.4"/>
  <line x1="50" y1="190" x2="370" y2="190" stroke="#f5f5f7" stroke-width="1" opacity="0.4"/>

  <!-- Y axis labels -->
  <text x="42" y="48" text-anchor="end" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="9" opacity="0.6">14</text>
  <text x="42" y="118" text-anchor="end" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="9" opacity="0.6">7</text>
  <text x="42" y="194" text-anchor="end" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="9" opacity="0.6">0</text>
  <text x="20" y="120" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="11" opacity="0.6" transform="rotate(-90 20 120)">pH</text>

  <!-- pH 7 dashed reference -->
  <line x1="50" y1="115" x2="370" y2="115" stroke="#f5f5f7" stroke-width="1" stroke-dasharray="3,3" opacity="0.2"/>

  <!-- Titration curve (weak acid + strong base) -->
  <path d="M 50 175 Q 100 150, 150 130 L 200 115 L 200 60 L 250 50 Q 320 45, 370 43"
        stroke="#86efac" stroke-width="2.5" fill="none"/>

  <!-- Equivalence point marker -->
  <circle cx="200" cy="85" r="5" fill="#fbbf24"/>
  <line x1="200" y1="85" x2="240" y2="65" stroke="#fbbf24" stroke-width="1" opacity="0.7"/>
  <text x="245" y="65" fill="#fbbf24" font-family="Inter, sans-serif" font-size="10">Equivalence pt</text>

  <!-- Half equivalence point -->
  <circle cx="120" cy="135" r="4" fill="#c4b5fd"/>
  <line x1="120" y1="135" x2="80" y2="115" stroke="#c4b5fd" stroke-width="1" opacity="0.7"/>
  <text x="65" y="105" fill="#c4b5fd" font-family="Inter, sans-serif" font-size="9">½ eq · pH=pKa</text>

  <!-- X axis label -->
  <text x="210" y="210" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="11" opacity="0.6">Volume of titrant added →</text>
</svg>`
          },
          {
            heading: 'Indicators',
            body: `**Indicators** are weak acids whose protonated and deprotonated forms have different colors. Each indicator changes color over a narrow pH range (usually about 2 pH units wide), centered roughly on its own pKa.

Common indicators:
• **Methyl orange:** changes from red to yellow around pH 3.1–4.4. Good for strong-acid titrations.
• **Bromothymol blue:** yellow to blue around pH 6.0–7.6. Good for strong-acid + strong-base.
• **Phenolphthalein:** colorless to pink around pH 8.2–10.0. Good for weak-acid + strong-base titrations.

You pick an indicator whose transition range straddles the expected equivalence-point pH. Wrong choice = inaccurate result.`
          }
        ],
        examples: [
          {
            prompt: 'It takes 20.0 mL of 0.250 M NaOH to titrate 25.0 mL of HCl. Find [HCl].',
            steps: [
              'Reaction (1:1): HCl + NaOH → NaCl + H₂O.',
              'Moles NaOH used = 0.0200 L × 0.250 M = 5.00 × 10⁻³ mol.',
              'At equivalence, moles HCl = moles NaOH = 5.00 × 10⁻³ mol.',
              '[HCl] = moles / volume = 5.00 × 10⁻³ / 0.0250 = 0.200 M.'
            ],
            answer: '[HCl] = 0.200 M.'
          },
          {
            prompt: 'A 0.10 M weak acid is half-titrated, and the pH is read as 4.74. What is the pKa of the acid?',
            steps: [
              'At the half-equivalence point, exactly half the acid has been neutralized.',
              'So [HA] = [A⁻] at this point.',
              'Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = pKa + log(1) = pKa.',
              'Therefore pKa = pH = 4.74.'
            ],
            answer: 'pKa = 4.74. (This is acetic acid\'s pKa.) The half-equivalence-point trick is a practical way to measure pKa.'
          }
        ],
        practice: [
          {
            q: 'At the equivalence point of a strong acid + strong base titration, the pH is:',
            choices: ['<7', '7', '>7', 'Cannot determine'],
            correct: 1,
            explain: 'Strong acid + strong base produces a salt that doesn\'t hydrolyze (e.g., NaCl from HCl + NaOH), plus water. Result: pH = 7 exactly. For weak acid + strong base, the equivalence pH is >7; for strong acid + weak base, it\'s <7.'
          },
          {
            q: 'For a weak-acid + strong-base titration, at the half-equivalence point, pH equals:',
            choices: ['7', 'pKa of the weak acid', '14', 'The starting pH'],
            correct: 1,
            explain: 'At the half-equivalence point, [HA] = [A⁻]. Henderson-Hasselbalch reduces to pH = pKa + log(1) = pKa. This is a beautiful experimental trick — read off the pH at half the equivalence volume to get pKa directly.'
          },
          {
            q: 'Why is phenolphthalein a good indicator for weak-acid + strong-base titrations?',
            choices: [
              'It changes color exactly at pH 7',
              'It changes color between pH 8 and 10, near the basic equivalence point',
              'It always works for any titration',
              'It is invisible at low pH'
            ],
            correct: 1,
            explain: 'Weak acid + strong base has an equivalence pH > 7 (typically 8–9). Phenolphthalein changes from colorless to pink in pH 8.2–10.0 — right around the equivalence point, so the color change is a reliable signal. Methyl orange (changes around pH 3–4) would change long before the equivalence point.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'solubility_ksp',
        title: 'Solubility Equilibria & Ksp',
        summary: 'Solubility product, predicting precipitation, and the common-ion effect.',
        intro: `Even "insoluble" salts dissolve a tiny bit. Silver chloride is famously low-solubility, but a saturated solution still has a measurable, nonzero concentration of Ag⁺ and Cl⁻ ions. The **solubility product (Ksp)** is the equilibrium constant for these dissolution reactions, and it lets you calculate exactly how much will dissolve and predict whether a precipitate will form.`,
        sections: [
          {
            heading: 'The Ksp expression',
            body: `For a sparingly soluble salt MₐXᵦ dissolving in water:

\`\`\`
MₐXᵦ(s) ⇌ a M⁺(aq) + b X⁻(aq)
Ksp = [M⁺]^a × [X⁻]^b
\`\`\`

Note: the solid is not included (pure solids are excluded from K expressions). Each ion concentration is raised to its stoichiometric coefficient.

Examples:
• AgCl(s) ⇌ Ag⁺ + Cl⁻ → Ksp = [Ag⁺][Cl⁻]
• Ca(OH)₂(s) ⇌ Ca²⁺ + 2 OH⁻ → Ksp = [Ca²⁺][OH⁻]²
• Ag₂CrO₄(s) ⇌ 2 Ag⁺ + CrO₄²⁻ → Ksp = [Ag⁺]²[CrO₄²⁻]

A smaller Ksp means a less soluble salt. AgCl has Ksp ≈ 1.8 × 10⁻¹⁰; PbS has Ksp ≈ 8 × 10⁻²⁸ (extraordinarily insoluble).`
          },
          {
            heading: 'Calculating molar solubility',
            body: `**Molar solubility (s)** is how many moles of the salt dissolve per liter of saturated solution.

For AgCl: if s mol/L dissolves, then [Ag⁺] = s and [Cl⁻] = s.
Ksp = s × s = s².
So **s = √Ksp**.

For Ksp = 1.8 × 10⁻¹⁰ (AgCl): s = √(1.8 × 10⁻¹⁰) ≈ 1.3 × 10⁻⁵ M.

For salts with non-1:1 ratios, the math is slightly different. Ca(OH)₂: if s dissolves, [Ca²⁺] = s and [OH⁻] = 2s.
Ksp = s(2s)² = 4s³, so s = (Ksp / 4)^(1/3).

The pattern: write each ion's equilibrium concentration in terms of s, plug into the Ksp expression, solve for s.`
          },
          {
            heading: 'Predicting precipitation',
            body: `Mix two solutions and you might form a precipitate. To predict, calculate the **reaction quotient Q** using the *initial* concentrations after mixing:

• **Q < Ksp:** unsaturated. No precipitate forms.
• **Q = Ksp:** saturated. At equilibrium.
• **Q > Ksp:** supersaturated. Precipitate WILL form, and ions drop out until Q = Ksp.

So when mixing solutions, compute the resulting ion concentrations (don't forget dilution from mixing!), plug them into the Ksp expression as if it were equilibrium, and compare. If Q > Ksp, you'll get a precipitate.`
          },
          {
            heading: 'The common-ion effect',
            body: `Adding more of an ion that's already in equilibrium with a salt **decreases** the salt's solubility. This is just Le Chatelier: increasing [Cl⁻] in an AgCl solution shifts the dissolution equilibrium back toward solid AgCl.

Practical consequence: AgCl is far less soluble in 0.10 M NaCl than in pure water. Quantitative example: in pure water, [Ag⁺] = √Ksp ≈ 1.3 × 10⁻⁵ M. In 0.10 M NaCl, [Cl⁻] is essentially fixed at 0.10 M, so [Ag⁺] = Ksp / [Cl⁻] = 1.8 × 10⁻⁹ M — a four-orders-of-magnitude drop in dissolved silver.

Common-ion effect is heavily exploited in analytical chemistry to recover desired solids more completely.`
          }
        ],
        examples: [
          {
            prompt: 'Calculate the molar solubility of CaF₂. (Ksp = 4.0 × 10⁻¹¹)',
            steps: [
              'Equilibrium: CaF₂(s) ⇌ Ca²⁺ + 2 F⁻.',
              'If s mol/L dissolves: [Ca²⁺] = s, [F⁻] = 2s.',
              'Ksp = s × (2s)² = 4s³.',
              'Solve: 4s³ = 4.0 × 10⁻¹¹ → s³ = 1.0 × 10⁻¹¹ → s = (10⁻¹¹)^(1/3) ≈ 2.15 × 10⁻⁴ M.'
            ],
            answer: 's ≈ 2.15 × 10⁻⁴ M.'
          },
          {
            prompt: 'Will a precipitate form when 100 mL of 0.0010 M AgNO₃ is mixed with 100 mL of 0.0010 M NaCl? (Ksp of AgCl = 1.8 × 10⁻¹⁰)',
            steps: [
              'After mixing, total volume = 200 mL = double original. Each ion is diluted by half.',
              '[Ag⁺] = 0.00050 M; [Cl⁻] = 0.00050 M.',
              'Q = [Ag⁺][Cl⁻] = (5.0 × 10⁻⁴)(5.0 × 10⁻⁴) = 2.5 × 10⁻⁷.',
              'Compare to Ksp = 1.8 × 10⁻¹⁰. Q is much larger.',
              'Q > Ksp → solution is supersaturated → AgCl will precipitate.'
            ],
            answer: 'Yes, AgCl precipitates (Q >> Ksp).'
          }
        ],
        practice: [
          {
            q: 'For the reaction PbCl₂(s) ⇌ Pb²⁺ + 2 Cl⁻, the Ksp expression is:',
            choices: [
              '[Pb²⁺][Cl⁻]',
              '[Pb²⁺][Cl⁻]²',
              '[PbCl₂]/[Pb²⁺][Cl⁻]²',
              '[Pb²⁺][Cl⁻]² / [PbCl₂]'
            ],
            correct: 1,
            explain: 'Ksp = [Pb²⁺][Cl⁻]². The solid PbCl₂ is excluded (pure solid). Each ion concentration is raised to its coefficient, so chloride is squared because there are 2 Cl⁻ per formula unit.'
          },
          {
            q: 'If Q > Ksp for a sparingly soluble salt, what happens?',
            choices: [
              'More solid dissolves',
              'Nothing — system is at equilibrium',
              'Precipitation occurs until Q = Ksp',
              'The salt becomes more soluble'
            ],
            correct: 2,
            explain: 'Q > Ksp means the solution is supersaturated — there are more dissolved ions than the equilibrium allows. To reach equilibrium, ions must drop out as solid until Q falls back to Ksp. This is precipitation.'
          },
          {
            q: 'Adding NaCl to a saturated AgCl solution will:',
            choices: [
              'Increase AgCl solubility',
              'Decrease AgCl solubility (common-ion effect)',
              'Have no effect',
              'Cause Ksp to change'
            ],
            correct: 1,
            explain: 'The common-ion effect: adding NaCl raises [Cl⁻], which (by Le Chatelier) shifts the AgCl ⇌ Ag⁺ + Cl⁻ equilibrium toward the solid, decreasing dissolved Ag⁺. Ksp itself is unchanged (only T affects K), but the *amount* dissolved drops.'
          }
        ]
      }
    ]
  },
  organic: {
    realmName: 'The Verdant Lattice',
    realmSubtitle: 'Organic & Solutions',
    sublessons: [
      // --------------------------------------------------------
      {
        id: 'hydrocarbons',
        title: 'Hydrocarbons & Functional Groups',
        summary: 'Alkanes, alkenes, alkynes, aromatics, and the functional groups that define organic molecules.',
        intro: `Organic chemistry is, almost entirely, the chemistry of carbon. Carbon's four bonds and its willingness to bond to itself in long chains and rings give rise to millions of distinct compounds — from methane to DNA. The CLEP doesn't go deep into mechanisms, but it does expect you to recognize the common families of organic molecules and their characteristic functional groups. Once you can spot a functional group, you've already got a strong intuition for how the molecule will behave.`,
        sections: [
          {
            heading: 'Hydrocarbons: the carbon-and-hydrogen scaffold',
            body: `**Hydrocarbons** are molecules made of only carbon and hydrogen. They're divided by the kinds of bonds between carbons:

• **Alkanes** — only single bonds (saturated). General formula CₙH₂ₙ₊₂. Examples: methane CH₄, ethane C₂H₆, propane C₃H₈, butane C₄H₁₀.
• **Alkenes** — at least one C=C double bond (unsaturated). General formula CₙH₂ₙ. Example: ethene C₂H₄ (also called ethylene).
• **Alkynes** — at least one C≡C triple bond. General formula CₙH₂ₙ₋₂. Example: ethyne C₂H₂ (also called acetylene).
• **Aromatic** — based on the benzene ring (C₆H₆), a hexagon with alternating double bonds (or, more accurately, delocalized π electrons). Famous for unusual stability.

The alkane prefixes are worth memorizing through the first ten: meth (1), eth (2), prop (3), but (4), pent (5), hex (6), hept (7), oct (8), non (9), dec (10). The carbon count tells you the prefix; the suffix (-ane, -ene, -yne) tells you the bond type.`
          },
          {
            heading: 'Functional groups',
            body: `A **functional group** is a small arrangement of atoms within a molecule that drives most of its chemistry. Two molecules with the same functional group behave similarly, even if the rest of their structure is wildly different. This is why organic chemistry is "modular" — learn the groups, and you've learned the behavior.

The big ones for the CLEP:

• **Alcohol (–OH):** hydroxyl group on a carbon. Examples: methanol CH₃OH, ethanol CH₃CH₂OH. Polar, can hydrogen-bond.
• **Aldehyde (–CHO):** carbonyl (C=O) on a carbon at the end of a chain, with an H attached. Example: formaldehyde HCHO.
• **Ketone (R–CO–R):** carbonyl (C=O) with carbons on both sides. Example: acetone CH₃COCH₃.
• **Carboxylic acid (–COOH):** carbonyl + hydroxyl on the same carbon. Acidic. Example: acetic acid CH₃COOH (the active ingredient in vinegar).
• **Ester (–COO–):** carboxylic acid where the H of –OH is replaced by another carbon group. Often smell sweet/fruity. Example: ethyl acetate.
• **Amine (–NH₂):** nitrogen with hydrogens, basic. Example: methylamine CH₃NH₂.
• **Amide (–CONH₂):** like an ester but with N instead of O. The bond holding amino acids together in proteins.
• **Ether (R–O–R):** oxygen between two carbon groups. Example: diethyl ether CH₃CH₂OCH₂CH₃.
• **Halide (–X where X = F, Cl, Br, I):** a halogen attached to carbon. Example: chloroform CHCl₃.

You don't need to memorize every reaction these undergo for the CLEP, but you should be able to look at a structure and name the functional group present.`,
            diagram: `<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
  <text x="240" y="20" text-anchor="middle" fill="#a3e635" font-family="Cinzel, serif" font-size="13" font-weight="700" letter-spacing="0.15em">COMMON FUNCTIONAL GROUPS</text>

  <g font-family="Inter, sans-serif" font-size="13" fill="#f5f5f7">
    <!-- Alcohol -->
    <text x="40" y="60" font-weight="700">–OH</text>
    <text x="120" y="60" opacity="0.7">Alcohol</text>
    <!-- Aldehyde -->
    <text x="40" y="90" font-weight="700">–CHO</text>
    <text x="120" y="90" opacity="0.7">Aldehyde</text>
    <!-- Ketone -->
    <text x="40" y="120" font-weight="700">R–CO–R</text>
    <text x="120" y="120" opacity="0.7">Ketone</text>
    <!-- Carboxylic acid -->
    <text x="40" y="150" font-weight="700">–COOH</text>
    <text x="120" y="150" opacity="0.7">Carboxylic acid</text>
    <!-- Ester -->
    <text x="40" y="180" font-weight="700">–COO–</text>
    <text x="120" y="180" opacity="0.7">Ester</text>
    <!-- Right column -->
    <text x="260" y="60" font-weight="700">–NH₂</text>
    <text x="340" y="60" opacity="0.7">Amine</text>
    <text x="260" y="90" font-weight="700">–CONH₂</text>
    <text x="340" y="90" opacity="0.7">Amide</text>
    <text x="260" y="120" font-weight="700">R–O–R</text>
    <text x="340" y="120" opacity="0.7">Ether</text>
    <text x="260" y="150" font-weight="700">–X (halogen)</text>
    <text x="370" y="150" opacity="0.7">Halide</text>
    <text x="260" y="180" font-weight="700">C=C</text>
    <text x="340" y="180" opacity="0.7">Alkene</text>
  </g>

  <line x1="40" y1="200" x2="440" y2="200" stroke="#a3e635" stroke-opacity="0.3" stroke-width="1"/>
  <text x="240" y="220" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="11" opacity="0.6">R = "rest of the molecule" (any carbon-based group)</text>
</svg>`
          },
          {
            heading: 'Saturated vs. unsaturated',
            body: `A hydrocarbon is **saturated** if every carbon-carbon bond is a single bond (and every carbon has the maximum possible H's). Alkanes are saturated.

A hydrocarbon is **unsaturated** if it contains any double or triple bonds. Each double bond replaces two H's; each triple bond replaces four H's. Alkenes, alkynes, and aromatics are all unsaturated.

This terminology shows up in nutrition labels: saturated fats have all single C–C bonds in their fatty acid chains; unsaturated fats have one or more C=C double bonds. The chemistry is the same.`
          },
          {
            heading: 'Why functional groups matter',
            body: `Think of an organic molecule as a "skeleton" of carbon and hydrogen with functional groups attached. The skeleton is mostly inert — it just provides shape and bulk. The functional groups are where the action happens.

Want to know if a molecule will dissolve in water? Look for –OH, –COOH, –NH₂. These polar groups grab onto water molecules.

Want to know if it'll smell sweet? Esters often do.

Want to know if it's acidic? Look for –COOH. Basic? Look for –NH₂.

This pattern-matching is the entire game in basic organic chemistry. Memorize the groups, and you've already got the intuition.`
          }
        ],
        examples: [
          {
            prompt: 'Identify the functional groups in glycine: H₂N–CH₂–COOH.',
            steps: [
              'Read the formula left to right.',
              'H₂N– is an amine group (the –NH₂ functional group attached to a carbon).',
              '–COOH is a carboxylic acid group.',
              'The middle –CH₂– is just a hydrocarbon spacer; not a functional group.',
              'Glycine therefore has both an amine and a carboxylic acid — that\'s the defining structure of an amino acid.'
            ],
            answer: 'Amine (–NH₂) and carboxylic acid (–COOH). Glycine is the simplest amino acid.'
          },
          {
            prompt: 'How many hydrogens are in pentane (C₅H₁₂)?',
            steps: [
              'Pentane is a saturated alkane: 5 carbons, all single bonds.',
              'Use the alkane formula: CₙH₂ₙ₊₂ with n = 5.',
              '2(5) + 2 = 12 hydrogens.',
              'Confirms the formula C₅H₁₂.'
            ],
            answer: '12 hydrogens.'
          }
        ],
        practice: [
          {
            q: 'Which functional group is present in CH₃CH₂CH₂COOH?',
            choices: ['Aldehyde', 'Carboxylic acid', 'Ester', 'Ketone'],
            correct: 1,
            explain: '–COOH is the carboxylic acid functional group. This compound is butanoic acid (the smell of rancid butter). An ester would have –COO– between two carbon groups; an aldehyde would end in –CHO; a ketone has carbonyl flanked by two carbons.'
          },
          {
            q: 'Which is unsaturated?',
            choices: ['CH₄', 'C₂H₆', 'C₃H₆', 'C₄H₁₀'],
            correct: 2,
            explain: 'C₃H₆ doesn\'t fit the alkane formula CₙH₂ₙ₊₂ (which would predict C₃H₈). The "missing" two hydrogens mean a double bond — this is propene, an alkene. The other three are saturated alkanes (methane, ethane, butane).'
          },
          {
            q: 'How many carbons are in heptane?',
            choices: ['5', '6', '7', '8'],
            correct: 2,
            explain: 'The alkane prefixes: meth (1), eth (2), prop (3), but (4), pent (5), hex (6), hept (7). So heptane has 7 carbons. Its formula is C₇H₁₆.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'isomers_naming',
        title: 'Isomers & IUPAC Naming',
        summary: 'Structural and geometric isomers, plus the basics of systematic naming.',
        intro: `Two molecules can have the exact same molecular formula and yet be completely different substances. These are **isomers**, and they're a perpetual source of organic chemistry surprises (and exam questions). This lesson covers the main types of isomerism you'll see on the CLEP and walks through the basics of systematic naming, so that "2-methylbutane" stops being a string of nonsense and starts being a building plan.`,
        sections: [
          {
            heading: 'Structural (constitutional) isomers',
            body: `**Structural isomers** have the same molecular formula but different *connectivity* — the atoms are joined together in different patterns.

Classic example: butane (C₄H₁₀) and 2-methylpropane (also C₄H₁₀). Butane is a straight chain of 4 carbons. 2-Methylpropane (isobutane) is a chain of 3 carbons with a methyl branch on the middle one. Same formula, totally different shape.

Another example: dimethyl ether (CH₃–O–CH₃) and ethanol (CH₃CH₂OH). Both are C₂H₆O. The ether has an oxygen between two carbons; the alcohol has an –OH on the end. Wildly different properties — ethanol is a liquid you can drink (in moderation); dimethyl ether is a gas at room temperature.

The number of possible isomers explodes quickly with size. Butane has 2 isomers; pentane has 3; decane (C₁₀H₂₂) has 75; C₂₀H₄₂ has hundreds of thousands. This combinatorial explosion is why organic chemistry feels infinite.`
          },
          {
            heading: 'Geometric (cis-trans) isomers',
            body: `**Geometric isomers** have the same connectivity but differ in *spatial arrangement*. They arise when rotation around a bond is restricted — most commonly across a C=C double bond, but also in rings.

For 2-butene (CH₃–CH=CH–CH₃), the two methyl groups can be on the same side of the double bond (**cis**) or on opposite sides (**trans**). These are different molecules with different boiling points and densities, even though both are C₄H₈ with the same connectivity.

Two requirements for cis-trans isomerism:
1. There must be restricted rotation (a double bond or a ring).
2. Each carbon of the double bond must have **two different substituents**. If one carbon has two identical groups (e.g., two H's), there's no "side" distinction to make.

So 1-butene (CH₂=CH–CH₂CH₃) has *no* cis-trans isomers, because the left carbon has two H's. But 2-butene does. Always check both criteria before declaring isomers exist.`,
            diagram: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
  <text x="200" y="20" text-anchor="middle" fill="#a3e635" font-family="Cinzel, serif" font-size="13" font-weight="700" letter-spacing="0.15em">CIS vs TRANS — 2-BUTENE</text>

  <!-- Cis -->
  <text x="100" y="50" text-anchor="middle" fill="#a3e635" font-family="Inter, sans-serif" font-size="11" font-weight="700">CIS</text>
  <line x1="60" y1="100" x2="100" y2="80" stroke="#f5f5f7" stroke-width="2"/>
  <line x1="100" y1="80" x2="140" y2="80" stroke="#f5f5f7" stroke-width="2"/>
  <line x1="100" y1="84" x2="140" y2="84" stroke="#f5f5f7" stroke-width="2"/>
  <line x1="140" y1="80" x2="180" y2="100" stroke="#f5f5f7" stroke-width="2"/>
  <text x="50" y="105" fill="#fbbf24" font-family="Inter, sans-serif" font-size="13" font-weight="700">CH₃</text>
  <text x="180" y="115" fill="#fbbf24" font-family="Inter, sans-serif" font-size="13" font-weight="700">CH₃</text>
  <text x="80" y="65" fill="#7dd3fc" font-family="Inter, sans-serif" font-size="11">H</text>
  <text x="155" y="65" fill="#7dd3fc" font-family="Inter, sans-serif" font-size="11">H</text>
  <text x="100" y="135" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="10" opacity="0.6">methyls on same side</text>

  <!-- Trans -->
  <text x="320" y="50" text-anchor="middle" fill="#a3e635" font-family="Inter, sans-serif" font-size="11" font-weight="700">TRANS</text>
  <line x1="280" y1="100" x2="320" y2="80" stroke="#f5f5f7" stroke-width="2"/>
  <line x1="320" y1="80" x2="360" y2="80" stroke="#f5f5f7" stroke-width="2"/>
  <line x1="320" y1="84" x2="360" y2="84" stroke="#f5f5f7" stroke-width="2"/>
  <line x1="360" y1="80" x2="400" y2="60" stroke="#f5f5f7" stroke-width="2"/>
  <text x="265" y="105" fill="#fbbf24" font-family="Inter, sans-serif" font-size="13" font-weight="700">CH₃</text>
  <text x="395" y="55" fill="#fbbf24" font-family="Inter, sans-serif" font-size="13" font-weight="700">CH₃</text>
  <text x="305" y="65" fill="#7dd3fc" font-family="Inter, sans-serif" font-size="11">H</text>
  <text x="365" y="100" fill="#7dd3fc" font-family="Inter, sans-serif" font-size="11">H</text>
  <text x="320" y="135" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="10" opacity="0.6">methyls on opposite sides</text>

  <text x="200" y="170" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="10" opacity="0.5">Same formula (C₄H₈), same connectivity, different geometry</text>
</svg>`
          },
          {
            heading: 'IUPAC naming basics',
            body: `**IUPAC** (International Union of Pure and Applied Chemistry) names are systematic — once you know the rules, you can name a structure or draw one from a name with no memorization. The full rules fill a textbook, but the CLEP-level basics are manageable:

**1. Find the longest continuous carbon chain.** This is the *parent chain*. The carbon count gives the prefix (meth, eth, prop, but…); the bond types give the suffix (-ane, -ene, -yne).

**2. Number the chain to give the lowest locants** (numbers) to substituents and double/triple bonds. If a double bond is at the second carbon, you want it numbered "2," not "3."

**3. Name and number every substituent.** A methyl group (–CH₃) attached to carbon 2 of a butane chain gives "2-methylbutane." Multiple substituents are listed alphabetically.

**4. Use prefixes for repeats:** di- (2), tri- (3), tetra- (4). So two methyl groups become "dimethyl."

Example: CH₃CH(CH₃)CH₂CH₃.
- Longest chain is 4 carbons → butane.
- Number from the end nearest the methyl branch: C1–C2–C3–C4. The methyl is on C2.
- Name: **2-methylbutane**.

Another example: CH₂=CHCH₃.
- 3 carbons, contains a double bond → propene.
- Number to give the double bond the lowest locant: 1-2-3. Double bond between C1 and C2.
- Name: **prop-1-ene** (or just propene, since it's unambiguous).`
          }
        ],
        examples: [
          {
            prompt: 'Are these structural isomers, geometric isomers, or the same compound? CH₃CH₂OH and CH₃OCH₃.',
            steps: [
              'Both have the molecular formula C₂H₆O. Same atoms — could be isomers.',
              'CH₃CH₂OH is ethanol: a 2-carbon chain with –OH on the end.',
              'CH₃OCH₃ is dimethyl ether: an oxygen between two CH₃ groups.',
              'Same formula, different connectivity (the O is in different places). That\'s structural isomerism.'
            ],
            answer: 'Structural (constitutional) isomers.'
          },
          {
            prompt: 'Name the compound (CH₃)₂CHCH₂CH₃ using IUPAC rules.',
            steps: [
              'Expand the structure mentally: (CH₃)₂CH means a CH carbon with two methyls attached. So: CH₃–CH(CH₃)–CH₂–CH₃.',
              'Find longest chain: there are 4 carbons in a row (the main chain) with a methyl branch.',
              'Number from the end closer to the branch: positions 1–2–3–4. The methyl branch is on C2.',
              'Parent: butane. Substituent: 2-methyl.',
              'Name: 2-methylbutane.'
            ],
            answer: '2-methylbutane.'
          }
        ],
        practice: [
          {
            q: 'Which compound exhibits cis-trans isomerism?',
            choices: ['1-butene (CH₂=CHCH₂CH₃)', '2-butene (CH₃CH=CHCH₃)', '1,1-dichloroethene (CCl₂=CH₂)', 'Propane (CH₃CH₂CH₃)'],
            correct: 1,
            explain: 'For cis-trans isomerism, each carbon of the double bond must have two different substituents. 2-Butene has a CH₃ and an H on each carbon — different on each. 1-Butene has two H\'s on the leftmost carbon (no distinction). 1,1-dichloroethene has two Cl\'s on one carbon. Propane has no double bond at all.'
          },
          {
            q: 'How many structural isomers does pentane (C₅H₁₂) have?',
            choices: ['1', '2', '3', '4'],
            correct: 2,
            explain: 'Pentane has 3 isomers: n-pentane (straight chain), 2-methylbutane (one methyl branch), and 2,2-dimethylpropane (also called neopentane, the most-branched form). Worth memorizing — pentane is a common test example.'
          },
          {
            q: 'What is the IUPAC name of CH₃CH₂CH₂CH₂CH₃?',
            choices: ['Butane', 'Pentane', 'Hexane', '2-methylbutane'],
            correct: 1,
            explain: 'Count the carbons: CH₃ + CH₂ + CH₂ + CH₂ + CH₃ = 5 carbons in a row, no branches. Five-carbon straight-chain alkane = pentane.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'solutions',
        title: 'Solutions & Concentration',
        summary: 'Solute, solvent, molarity, molality, and dilution calculations.',
        intro: `A **solution** is a homogeneous mixture — uniform at the molecular level — where one substance (the **solute**) is dissolved in another (the **solvent**). Most chemistry happens in solution, especially in the body and in the lab. The CLEP expects you to be fluent in calculating concentration in different units and predicting how concentrations change when solutions are mixed or diluted.`,
        sections: [
          {
            heading: 'Solute, solvent, and the "like dissolves like" rule',
            body: `By convention, the **solvent** is whatever is present in the larger amount; the **solute** is the substance being dissolved. In a saltwater solution, water is the solvent and salt is the solute. In a 90% ethanol / 10% water mixture, ethanol is the solvent.

Whether something dissolves comes down to a simple rule: **like dissolves like**. Polar solvents (water, ethanol) dissolve polar solutes (salts, sugars, alcohols). Nonpolar solvents (hexane, benzene, oil) dissolve nonpolar solutes (fats, hydrocarbons, iodine).

This is why oil and water don't mix — water molecules hydrogen-bond with each other, and oil molecules can't disrupt that network without "paying" for it energetically. So they stay separate, with oil floating on top because it's less dense.

For ionic compounds, water is exceptionally good at dissolving because polar water molecules can stabilize both cations and anions. But not all ionic compounds dissolve — solubility rules (which we won't fully memorize here) tell you which do.`
          },
          {
            heading: 'Molarity (M)',
            body: `**Molarity** is the most common concentration unit in chemistry. It's defined as:

\`\`\`
Molarity (M) = moles of solute / liters of solution
\`\`\`

A 1 M (one molar) solution has 1 mole of solute per liter of *total solution* (not 1 liter of solvent — this distinction matters).

To make a 1.0 M NaCl solution: weigh out 1.0 mol of NaCl (58.5 g), put it in a volumetric flask, add water until the *total volume* reaches 1.0 L. The volume of water added will be slightly less than 1.0 L because the NaCl takes up some space.

Calculations with molarity are about three quantities — moles, volume, molarity — and any two give you the third:
• moles = M × V (in liters)
• V = moles / M
• M = moles / V

Always convert volumes to liters and amounts to moles before doing the arithmetic.`
          },
          {
            heading: 'Molality (m)',
            body: `**Molality** is a related but distinct unit:

\`\`\`
Molality (m) = moles of solute / kilograms of SOLVENT
\`\`\`

Two key differences from molarity:
1. The denominator is **kg of solvent**, not liters of solution.
2. Molality uses mass; molarity uses volume.

Why two units? Volume changes with temperature, but mass doesn't. So molarity drifts slightly as a solution heats up or cools down (since the volume expands or contracts), while molality is rock-solid. For temperature-dependent calculations — especially **colligative properties**, which we'll cover next — molality is the right tool.

For dilute aqueous solutions, molality and molarity are numerically very close, since 1 L of water weighs about 1 kg. But for concentrated or non-aqueous solutions, they can differ significantly.`
          },
          {
            heading: 'Dilution: M₁V₁ = M₂V₂',
            body: `When you dilute a solution by adding more solvent, the *moles* of solute stay constant — only the volume changes. This gives the dilution equation:

\`\`\`
M₁V₁ = M₂V₂
\`\`\`

Where M₁, V₁ are the initial concentration and volume, and M₂, V₂ are the final concentration and volume. Use any consistent units — if both volumes are in mL, the units cancel.

Example: how much water do you add to 100 mL of 0.50 M HCl to get 0.10 M HCl?

M₁V₁ = M₂V₂ → (0.50)(100) = (0.10)(V₂) → V₂ = 500 mL.

So you need a final volume of 500 mL, meaning you add 400 mL of water to the original 100 mL.

Same equation works in reverse — concentrating a solution by evaporation, or computing how much stock to use for a target dilution.`
          }
        ],
        examples: [
          {
            prompt: 'How many grams of glucose (C₆H₁₂O₆, 180 g/mol) are needed to make 250 mL of 0.40 M solution?',
            steps: [
              'Convert volume to liters: 250 mL = 0.250 L.',
              'Find moles of solute: moles = M × V = 0.40 × 0.250 = 0.10 mol.',
              'Convert moles to grams: mass = moles × molar mass = 0.10 × 180 = 18 g.'
            ],
            answer: '18 g of glucose.'
          },
          {
            prompt: 'You need 200 mL of 0.25 M HCl. You have a stock solution of 6.0 M HCl. How much stock do you use?',
            steps: [
              'Use the dilution equation: M₁V₁ = M₂V₂.',
              'Plug in: (6.0)(V₁) = (0.25)(200).',
              'Solve: V₁ = (0.25 × 200) / 6.0 = 50 / 6.0 ≈ 8.3 mL.',
              'Then add water to bring the total volume to 200 mL.'
            ],
            answer: 'Use about 8.3 mL of stock, then dilute to 200 mL with water.'
          }
        ],
        practice: [
          {
            q: 'A solution contains 0.50 mol of NaCl in 2.0 L of solution. What is its molarity?',
            choices: ['0.10 M', '0.25 M', '1.0 M', '2.5 M'],
            correct: 1,
            explain: 'M = moles / liters = 0.50 / 2.0 = 0.25 M. Watch for unit traps — make sure volume is in liters.'
          },
          {
            q: 'What volume of 2.0 M NaOH is needed to provide 0.10 mol of NaOH?',
            choices: ['20 mL', '50 mL', '100 mL', '200 mL'],
            correct: 1,
            explain: 'V = moles / M = 0.10 / 2.0 = 0.050 L = 50 mL. The molarity equation M = mol/V rearranges to V = mol/M.'
          },
          {
            q: 'Which best describes "like dissolves like"?',
            choices: [
              'Acids dissolve only in acids',
              'Polar solvents dissolve polar solutes; nonpolar solvents dissolve nonpolar solutes',
              'Solutions can only contain identical molecules',
              'All ionic compounds dissolve in water'
            ],
            correct: 1,
            explain: 'The "like dissolves like" rule is about polarity matching. Polar with polar, nonpolar with nonpolar. It explains why oil and water don\'t mix and why salt dissolves in water but not in hexane.'
          }
        ]
      },

      // --------------------------------------------------------
      {
        id: 'colligative',
        title: 'Colligative Properties',
        summary: 'How dissolved solutes lower freezing points, raise boiling points, and create osmotic pressure.',
        intro: `Some properties of solutions depend only on **how many solute particles are dissolved** — not on what the solute actually is. These are called **colligative properties**, from the Latin "colligatus," meaning bound together. Whether you dissolve sugar, salt, or antifreeze in water, the same number of particles produces the same magnitude of effect (with one important wrinkle for ionic compounds). Colligative properties explain why we salt icy roads, why pasta water boils higher than pure water, and why your blood cells don't burst in salty surroundings.`,
        sections: [
          {
            heading: 'The four colligative properties',
            body: `Adding a nonvolatile solute to a solvent changes the solvent's behavior in four predictable ways:

• **Vapor pressure decreases.** Solute particles get in the way of solvent molecules trying to escape into the gas phase. Less escape → lower vapor pressure.
• **Boiling point increases.** Boiling happens when vapor pressure equals atmospheric pressure. With reduced vapor pressure, you have to heat the solution higher to reach atmospheric — so it boils at a higher temperature. This is **boiling point elevation**.
• **Freezing point decreases.** Solute particles disrupt the formation of solid crystal lattices. The solvent has to be cooled further to freeze. This is **freezing point depression**.
• **Osmotic pressure develops.** When a solution and pure solvent are separated by a semipermeable membrane (one that lets solvent through but not solute), solvent flows toward the more concentrated side. The pressure required to stop this flow is osmotic pressure.

All four scale with the number of dissolved particles — not the identity of the particles.`
          },
          {
            heading: 'The math: ΔT formulas',
            body: `For freezing point depression and boiling point elevation, the formulas are:

\`\`\`
ΔTf = i × Kf × m   (freezing point lowered by ΔTf)
ΔTb = i × Kb × m   (boiling point raised by ΔTb)
\`\`\`

Where:
• **m** is the **molality** of the solution (moles solute / kg solvent). Notice it's molality, not molarity — colligative properties are temperature-sensitive, so we use the temperature-independent unit.
• **Kf** and **Kb** are constants specific to the solvent. For water: Kf = 1.86 °C/m, Kb = 0.512 °C/m.
• **i** is the **van't Hoff factor**, which accounts for ionization.

Final freezing point = (pure solvent FP) − ΔTf. Final boiling point = (pure solvent BP) + ΔTb.

These are real, used numbers: dissolving 1 mol of sugar in 1 kg of water lowers its freezing point by 1.86 °C, to about −1.86 °C.`
          },
          {
            heading: 'The van\'t Hoff factor (i)',
            body: `The **van't Hoff factor i** counts how many particles each formula unit produces in solution:

• For nonelectrolytes (sugar, alcohol, glucose), one molecule stays as one molecule. **i = 1.**
• For ionic compounds, you count the ions. NaCl → Na⁺ + Cl⁻, so **i = 2**. CaCl₂ → Ca²⁺ + 2 Cl⁻, so **i = 3**. Al₂(SO₄)₃ → 2 Al³⁺ + 3 SO₄²⁻, so **i = 5**.

Why this matters: 1 mol of NaCl in 1 kg of water gives a freezing point depression of 2 × 1.86 = 3.72 °C, not 1.86 °C, because every NaCl produces *two* particles. This is exactly why salt is so effective at melting ice — each mole of NaCl does the work of two moles of sugar.

In real solutions, ions interact slightly with each other (especially at high concentration), so the *effective* i is often a bit less than the ideal value (1.9 for NaCl rather than 2.0). For CLEP purposes, use the ideal whole-number values unless told otherwise.`,
            diagram: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
  <text x="210" y="20" text-anchor="middle" fill="#a3e635" font-family="Cinzel, serif" font-size="13" font-weight="700" letter-spacing="0.15em">FREEZING POINT DEPRESSION</text>

  <!-- Pure water -->
  <rect x="40" y="50" width="100" height="100" fill="none" stroke="#7dd3fc" stroke-width="1.5" rx="2"/>
  <text x="90" y="40" text-anchor="middle" fill="#7dd3fc" font-family="Inter, sans-serif" font-size="11" font-weight="700">Pure water</text>
  <circle cx="65" cy="80" r="4" fill="#7dd3fc" opacity="0.6"/>
  <circle cx="115" cy="85" r="4" fill="#7dd3fc" opacity="0.6"/>
  <circle cx="80" cy="115" r="4" fill="#7dd3fc" opacity="0.6"/>
  <circle cx="105" cy="130" r="4" fill="#7dd3fc" opacity="0.6"/>
  <circle cx="60" cy="135" r="4" fill="#7dd3fc" opacity="0.6"/>
  <text x="90" y="170" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="12" font-weight="700">Freezes at 0 °C</text>

  <!-- Salt water -->
  <rect x="280" y="50" width="100" height="100" fill="none" stroke="#a3e635" stroke-width="1.5" rx="2"/>
  <text x="330" y="40" text-anchor="middle" fill="#a3e635" font-family="Inter, sans-serif" font-size="11" font-weight="700">1 m NaCl</text>
  <circle cx="305" cy="80" r="4" fill="#7dd3fc" opacity="0.6"/>
  <circle cx="355" cy="85" r="4" fill="#7dd3fc" opacity="0.6"/>
  <circle cx="320" cy="115" r="4" fill="#7dd3fc" opacity="0.6"/>
  <circle cx="345" cy="130" r="4" fill="#7dd3fc" opacity="0.6"/>
  <circle cx="300" cy="135" r="4" fill="#7dd3fc" opacity="0.6"/>
  <!-- Ions -->
  <circle cx="320" cy="75" r="5" fill="#fbbf24"/>
  <text x="320" y="78" text-anchor="middle" fill="#0a0a0f" font-family="Inter, sans-serif" font-size="8" font-weight="700">+</text>
  <circle cx="345" cy="105" r="5" fill="#ef4444"/>
  <text x="345" y="108" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="8" font-weight="700">−</text>
  <circle cx="295" cy="115" r="5" fill="#fbbf24"/>
  <text x="295" y="118" text-anchor="middle" fill="#0a0a0f" font-family="Inter, sans-serif" font-size="8" font-weight="700">+</text>
  <circle cx="370" cy="135" r="5" fill="#ef4444"/>
  <text x="370" y="138" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="8" font-weight="700">−</text>
  <text x="330" y="170" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="12" font-weight="700">Freezes at −3.72 °C</text>

  <!-- Arrow -->
  <text x="210" y="105" text-anchor="middle" fill="#fbbf24" font-family="Inter, sans-serif" font-size="22">→</text>
  <text x="210" y="130" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="10" opacity="0.7">add NaCl</text>

  <text x="210" y="195" text-anchor="middle" fill="#f5f5f7" font-family="Inter, sans-serif" font-size="10" opacity="0.5">Ions interfere with crystal lattice formation, requiring colder temperatures to freeze.</text>
</svg>`
          },
          {
            heading: 'Osmotic pressure',
            body: `**Osmotic pressure (Π)** is the pressure that develops across a semipermeable membrane when a solution is separated from pure solvent. The formula is:

\`\`\`
Π = i × M × R × T
\`\`\`

Where M is molarity, R is the ideal gas constant (0.0821 L·atm/(mol·K)), and T is absolute temperature in Kelvin. (Note this one uses molarity, not molality — the formula derives from kinetic theory analogous to the ideal gas law.)

Osmotic pressure is biologically huge. Red blood cells live in blood plasma at roughly 0.3 osmolar concentration. Drop them into pure water and water rushes in by osmosis until they burst (hemolysis). Drop them into concentrated salt water and water flows out until they shrivel (crenation). Saline IV bags are formulated to be **isotonic** with blood — same osmotic pressure, no net water flow.

Plants use osmotic pressure to draw water up from roots, and reverse osmosis is how seawater desalination works (apply more pressure than the natural osmotic pressure to push water *backward* through the membrane, leaving salt behind).`
          }
        ],
        examples: [
          {
            prompt: 'Calculate the freezing point of a solution made by dissolving 0.30 mol of CaCl₂ in 500 g of water. (Kf = 1.86 °C/m)',
            steps: [
              'CaCl₂ is ionic and dissociates into Ca²⁺ + 2 Cl⁻, so i = 3.',
              'Molality m = moles / kg solvent = 0.30 / 0.500 = 0.60 m.',
              'Calculate ΔTf = i × Kf × m = 3 × 1.86 × 0.60 = 3.35 °C.',
              'Pure water freezes at 0 °C, so the solution freezes at 0 − 3.35 = −3.35 °C.'
            ],
            answer: 'The freezing point is approximately −3.35 °C.'
          },
          {
            prompt: 'A solution of 0.10 mol of glucose in 1.0 kg of water freezes at what temperature? (Kf = 1.86 °C/m)',
            steps: [
              'Glucose is a nonelectrolyte (a covalent molecule, no ions). i = 1.',
              'Molality m = 0.10 / 1.0 = 0.10 m.',
              'ΔTf = 1 × 1.86 × 0.10 = 0.186 °C.',
              'Freezing point = 0 − 0.186 = −0.186 °C.'
            ],
            answer: 'About −0.19 °C.'
          }
        ],
        practice: [
          {
            q: 'Which 1.0 m solution will have the lowest freezing point?',
            choices: ['Glucose (C₆H₁₂O₆)', 'NaCl', 'CaCl₂', 'Ethanol (C₂H₆O)'],
            correct: 2,
            explain: 'Freezing point depression scales with i × m. All four solutions have m = 1.0, so the highest i wins. Glucose and ethanol are nonelectrolytes (i=1). NaCl gives 2 ions (i=2). CaCl₂ gives 3 ions (i=3) — biggest depression, lowest FP.'
          },
          {
            q: 'A nonelectrolyte solution has a molality of 0.50 m in water. What is its boiling point? (Kb of water = 0.512 °C/m)',
            choices: ['99.74 °C', '100.00 °C', '100.26 °C', '100.51 °C'],
            correct: 2,
            explain: 'ΔTb = i × Kb × m = 1 × 0.512 × 0.50 = 0.256 °C. Boiling point = 100 + 0.256 ≈ 100.26 °C. Boiling point goes UP when solute is added, so 99.74 (option A) goes the wrong direction.'
          },
          {
            q: 'Why is molality, not molarity, used in freezing-point calculations?',
            choices: [
              'Molality has cleaner numbers',
              'Molality doesn\'t depend on temperature; volume changes with temperature',
              'Molarity ignores the solute',
              'Freezing point isn\'t a real measurement'
            ],
            correct: 1,
            explain: 'Volume expands and contracts with temperature, making molarity (mol/L) drift as the solution heats or cools. Mass doesn\'t change, so molality (mol/kg) stays rock-solid through temperature changes — important for properties calculated near the freezing or boiling point.'
          }
        ]
      }
    ]
  }
};
