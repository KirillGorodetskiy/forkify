import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';

/** Global state of the app
 * - Search jblect
 * - Current recipie object
 * - Shopping list object
 * - Liked recipes
 */
 
const state = {};

const controlSearch = async () => {
	// 1. Get query from the view
	const query = searchView.getInput(); //TODO
//	console.log(query);
	if (query) {
	// 2. New search object and add to state
	state.search = new Search(query);
	
	// 3. Prepare UI for the results
	searchView.clearInput();
	searchView.clearResults();
	renderLoader(elements.searchRes);
	// 4. Search for recipes
	await state.search.getResults();
	
	//5. Render results on UI
	clearLoader();
	searchView.renderResults(state.search.results);
	} 
	
}

elements.searchForm.addEventListener('submit', e => {
	e.preventDefault();
	controlSearch();
});

const search = new Search('pizza');
//console.log(search);
search.getResults();

elements.searchResPages.addEventListener('click', e => {
	const btn = e.target.closest('.btn-inline');
	if (btn) {
		const goToPage = parseInt(btn.dataset.goto, 10);
		searchView.clearResults();
		//console.log(goToPage);
		searchView.renderResults(state.search.results, goToPage);
	}
});






