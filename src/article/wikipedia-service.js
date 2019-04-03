export default async function findByKeyword(topic) {
  const response = await fetch(`https://en.wikipedia.org/w/api.php?${getSearchParams(topic).toString()}`);
  const results = await response.json();
  return adaptSearchResults(results);
}

function adaptSearchResults(searchResult) {
  const summary = getSummary(searchResult);
  const articles = Object.values(searchResult.query.pages)
    .map(({title, extract, fullurl, thumbnail = {}}) => ({title, thumbnail, description: extract, href: fullurl}));
  return {summary, articles};
}

function getSummary(searchResult) {
  const page = searchResult.continue ? searchResult.continue.sroffset :
    searchResult.query.searchinfo.totalhits;
  const total = searchResult.query.searchinfo.totalhits;
  return `${page} of ${total}`
}

function getSearchParams(topic) {
  const searchParams = new URLSearchParams();
  searchParams.append('action', 'query');
  searchParams.append('generator', 'search');
  searchParams.append('gsrsearch', topic);
  searchParams.append('gsrlimit', '3');
  searchParams.append('srsearch', topic);
  searchParams.append('srlimit', '3');
  searchParams.append('prop', 'info|extracts|pageimages');
  searchParams.append('inprop', 'url');
  searchParams.append('list', 'search');
  searchParams.append('iwurl', 'true');
  searchParams.append('explaintext', '1');
  searchParams.append('exintro', '1');
  searchParams.append('redirects', '1');
  searchParams.append('format', 'json');
  searchParams.append('origin', '*');
  return searchParams;
}
