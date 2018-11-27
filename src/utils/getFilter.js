import { ALL_FILTER, COMPLETED_FILTER, ACTIVE_FILTER } from './const.js';
import path from './path.js';

const filterPathMap = {
  [path.home]: ALL_FILTER,
  [path.completed]: COMPLETED_FILTER,
  [path.active]: ACTIVE_FILTER
};

export default pathname => filterPathMap[pathname] || ALL_FILTER;
