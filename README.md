"# vue-router-data-fetch-issue" 

to start:

npm install

npm run dev


see /router/index.js

when using:
import Tab from '../components/Tab.vue'
router will render component correctly

but when using lazy load:
const Tab = resolve => require(['../components/Tab.vue'], resolve)
it will stop render everything