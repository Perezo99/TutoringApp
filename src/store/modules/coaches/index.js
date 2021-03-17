import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
    namespaced: true,
    state(){
        return {
            lastFetch: null,
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Arnold',
                    lastName: 'Gideon',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "I'm Gideon and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 50
                },
                {
                    id: 'c2',
                    firstName: 'Cole',
                    lastName: 'Jones',
                    areas: ['frontend', 'career'],
                    description:
                        'I am Jones and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 60
                }
            ]
        }
    },
    mutations,
    actions,
    getters
}