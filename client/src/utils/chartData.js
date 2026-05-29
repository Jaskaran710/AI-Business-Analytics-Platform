export const generateChartData = (analytics) => {

  if (!analytics) return [];

  const data = [];

  if (analytics.total_sales !== null) {

    data.push({
      name: "Total Sales",
      value: analytics.total_sales
    });

  }

  if (analytics.average_sales !== null) {

    data.push({
      name: "Average Sales",
      value: analytics.average_sales
    });

  }

  data.push({
    name: "Rows",
    value: analytics.rows || 0
  });

  data.push({
    name: "Columns",
    value: analytics.columns || 0
  });

  data.push({
    name: "Missing",
    value: analytics.missing_values || 0
  });

  return data;

};
