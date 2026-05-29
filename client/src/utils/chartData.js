export const generateChartData = (analytics) => {

  if (!analytics) return [];

  return [

    {
      name: "Rows",
      value: analytics.rows || 0
    },

    {
      name: "Columns",
      value: analytics.columns || 0
    },

    {
      name: "Missing",
      value: analytics.missing_values || 0
    }

  ];

};
