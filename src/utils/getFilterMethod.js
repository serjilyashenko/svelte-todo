import { ALL_FILTER, COMPLETED_FILTER, ACTIVE_FILTER } from './const.js';

const filterMethodMap = {
  [ALL_FILTER]: () => true,
  [COMPLETED_FILTER]: todo => !todo.completed,
  [ACTIVE_FILTER]: todo => todo.completed
};

export default filter => filterMethodMap[filter] || filterMethodMap[ALL_FILTER];
