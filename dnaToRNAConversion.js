function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let RNA = dna.replace(/T/g, 'U');
  return RNA
}