export const pages: {
    [key: string]: {
        heading: string;
        categories: {
            [key: string]: {
                title: string;
                links: {
                    [key: string]: string;
                };
            };
        };
    };
} = {
    archive:
    {
        heading: 'archives',
        categories:
        {
            sciences:
            {
                title: 'mathematics and sciences',
                links: {
                    'math': 'mathematics',
                    'cs': 'computer',
                    'phy': 'physics',
                    'chem': 'chemistry',
                    'bio': 'biology',
                    'ds': 'data science',
                    'evs': 'environmental science'
                }
            },
            social_sciences:
            {
                title: 'social sciences',
                links:
                {
                    'eco': 'economics',
                    'his': 'history',
                    'pol': 'political science',
                    'phil': 'philosophy',
                    'psy': 'psychology',
                    'soc': 'sociology',
                }
            },
            arts: 
            {
                title: 'arts',
                links: 
                {
                    'ga': 'global art',
                    'lit': 'literature'
                }
            },
        }
    },
    utility: {
        heading: 'utility',
        categories: {
            food: {
                title: 'food',
                links: {
                    'mess': 'mess menus',
                    'outlet': 'outlet menus',
                    'foodie': 'foodie'
                }
            }
        }
    },
    events: {
        heading: 'events',
        categories: {
            sports: {
                title: 'sports',
                links: {
                    '/ev/sports': 'sports events'
                }
            },
            clubs: {
                title: 'clubs',
                links: {
                    'sym': 'symmetry',
                    'her': 'her',
                    'lit': 'syahi',
                    'dance': 'prakriti',
                }
            },
        },

    }
};