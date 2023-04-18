import { onClickBtnLoadMore, onFormSubmit } from './js/handlers';
import { refs } from './js/refs';

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onClickBtnLoadMore);
