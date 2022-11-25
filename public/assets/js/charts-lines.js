/**
 * For usage, visit Chart.js docs https://www.chartjs.org/docs/latest/
 */
const lineConfig = {
  type: 'line',
  data: {
    labels: ['1 checkpoint', '2 checkpoint', '3 checkpoint', '4 checkpoint', '5 checkpoint', '6 checkpoint'],
    datasets: [
      {
        label: 'Zero',
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: 'red',
        borderColor: 'red',
        data: [4, 5, 6, 8, 10, 10 ],
        fill: false,
      },
      {
        label: 'Zero',
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: 'purple',
        borderColor: 'purple',
        data: [1, 4, 5, 6, 7, 10],
      },
      {
        label: 'Zero',
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: 'green',
        borderColor: 'green',
        data: [2, 2, 3, 4, 7, 8 ],
      },
      {
        label: 'Zero',
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: 'yellow',
        borderColor: 'yellow',
        data: [2, 3, 3, 5, 5, 9 ],
      },
      {
        label: 'Zero',
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: 'orange',
        borderColor: 'orange',
        data: [1, 2, 2, 3, 4, 5 ],
      },
      {
        label: 'Zero',
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: 'blue',
        borderColor: 'blue',
        data: [2, 3, 3, 4, 5, 6 ],
      },
      {
        label: 'Zero',
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: 'cyan',
        borderColor: 'cyan',
        data: [1, 2, 5, 5, 7, 8 ],
      },
    ],
  },
  options: {
    responsive: true,
    /**
     * Default legends are ugly and impossible to style.
     * See examples in charts.html to add your own legends
     *  */
    legend: {
      display: false,
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month',
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value',
        },
      },
    },
  },
}

// change this to the id of your chart element in HMTL
const lineCtx = document.getElementById('line')
window.myLine = new Chart(lineCtx, lineConfig)
