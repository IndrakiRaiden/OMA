// Import all catalog sections
import section1 from './section1-rollers.json';
import section2 from './section2-pins-bushings.json';
import section3 from './section3-sprockets-gears.json';
import section4 from './section4-hydraulic-cylinders.json';
import section5 from './section5-pneumatic-cylinders.json';
import section6 from './section6-bearings-mold-nozzles-springs.json';

// Export individual sections
export const rollers = section1;
export const pinsBushings = section2;
export const sprocketsGears = section3;
export const hydraulicCylinders = section4;
export const pneumaticCylinders = section5;
export const bearingsMoldNozzlesSprings = section6;

// Export all sections as an array for easy access
export const allSections = [
  section1,
  section2,
  section3,
  section4,
  section5,
  section6
];

// Export section names for UI display
export const sectionNames = [
  { id: 'rollers', name: 'Rollers' },
  { id: 'pins-bushings', name: 'Pins & Bushings' },
  { id: 'sprockets-gears', name: 'Sprockets & Gears' },
  { id: 'hydraulic-cylinders', name: 'Hydraulic Cylinders' },
  { id: 'pneumatic-cylinders', name: 'Pneumatic Cylinders' },
  { id: 'bearings-mold-nozzles-springs', name: 'Bearings, Mold Parts, Nozzles & Springs' }
];

// Export default as combined catalog
export default [...section1, ...section2, ...section3, ...section4, ...section5, ...section6];
