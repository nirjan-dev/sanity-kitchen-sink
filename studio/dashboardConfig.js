export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5fd2ee700b8f6a5ac44ab02d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-acvazne5',
                  apiId: '96dd6bd8-d952-424e-a9b3-fc8864913553'
                },
                {
                  buildHookId: '5fd2ee701441915431d50f8a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xq6vp484',
                  apiId: 'a4f1985d-4e00-46ec-b3d0-0420b07ad310'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NK-WebDev/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xq6vp484.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
