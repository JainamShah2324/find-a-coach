import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index';
import requests from './modules/requests/index';

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requests
    }
});

export default store;