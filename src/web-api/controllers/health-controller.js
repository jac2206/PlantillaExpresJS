export const health = (req, res) => {
  // #swagger.tags = ['Health']
  // #swagger.description = 'App health check'
  const works = {
    name: 'ExpressJS API Template',
    release: 'v1.0.0',
    status: true,
  };
  /* #swagger.responses[200] = { 
        description: 'App running successfully',
        schema: { 
          name: "ExpressJS API Template", 
          release: "v1.0.0", 
          status: true 
        } 
      } */
  return res.status(200).json(works);
};
