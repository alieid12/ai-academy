// Official university course links. These are references, not copied course materials.
// AI Academy is independent and is not affiliated with these institutions.
export const universityResources = [
 {name:'Harvard CS50P',school:'Harvard University',level:'Python',url:'https://cs50.harvard.edu/python/',focus:'Python programming, testing, files, exceptions and object-oriented design',prerequisite:'Computer literacy'},
 {name:'Harvard CS50 AI',school:'Harvard University',level:'Computer science',url:'https://cs50.harvard.edu/ai/',focus:'Search, knowledge, uncertainty, optimization and machine learning projects',prerequisite:'Python and algorithms'},
 {name:'Stanford CS229',school:'Stanford University',level:'Classical ML',url:'https://cs229.stanford.edu/',focus:'Supervised and unsupervised learning, probability, optimization and learning theory',prerequisite:'Python, linear algebra, calculus and probability'},
 {name:'MIT 6.S191',school:'Massachusetts Institute of Technology',level:'Deep learning',url:'https://introtodeeplearning.com/',focus:'Neural networks and practical deep learning applications',prerequisite:'Python, calculus and linear algebra'},
 {name:'CMU 11-785',school:'Carnegie Mellon University',level:'Deep learning',url:'https://deeplearning.cs.cmu.edu/',focus:'Deep learning from scratch, CNNs, sequence models and attention',prerequisite:'Strong Python, mathematics and introductory ML'},
 {name:'Berkeley CS285',school:'University of California, Berkeley',level:'Specializations',url:'https://rail.eecs.berkeley.edu/deeprlcourse/',focus:'Deep reinforcement learning, policy gradients, control and research projects',prerequisite:'Deep learning, optimization and introductory reinforcement learning'}
];
export const resourceForLevel = level => universityResources.filter(x=>x.level===level);
