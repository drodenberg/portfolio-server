module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: "https://api.vercel.com/v1/integrations/deploy/prj_EgUY4zxvzknyDEmjvqga2tODicbq/8ny6poC6GF",
      apiToken: "Axk09s3nfJPLGswau7ohCSN1",
      appFilter: "Portfolio-server",
      teamFilter: "drodenberg",
      roles: ["strapi-super-admin"],
    },
  },
});