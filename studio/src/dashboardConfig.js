export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc85ee0c531987c14e64f90',
                  title: 'Sanity Studio',
                  name: 'sanity-pantsland-studio',
                  apiId: '2a7cd40e-f572-4a96-aeaa-1f6192b8b0b4'
                },
                {
                  buildHookId: '5fc85ee077d23478c7724e5b',
                  title: 'Blog Website',
                  name: 'sanity-pantsland',
                  apiId: '41820934-c4a0-48c1-8935-6ed44379ef5d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lowisren/sanity-pantsland',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-pantsland.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
