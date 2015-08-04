/** @axisfunction bio.gene.hugo
 *  @menuentry Search ClinicalTrials.gov for all
 *  @name searchClinicalTrials
 *  @description Searches ClinicalTrials.gov for the given HUGO gene names
 */
function searchClinicalTrials (names) {
    var gname = names.join('+AND+');
    window.open('http://clinicaltrials.gov/ct2/results?term=' + gname + '&Search=' + 'Search', 'clinicaltrials');
}

