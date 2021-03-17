import "regenerator-runtime/runtime";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-project-0-qinjp"
});

const chart = sdk.createChart({
  chartId: "6a42a445-dddf-47ab-9567-187b00778014",
  height: "700px"
});

const gs_heatmap = sdk.createChart({
  chartId: "a9271355-bb2d-48e7-99db-535e734af2e6",
  height: "700px"
});

gs_heatmap.addEventListener("click", (payload) => {
  document.getElementById("payload").innerHTML = '<pre>' + JSON.stringify(payload, null, 2) + '</pre>'; 

  let infoText = "";
  if (payload.target.role) {
    infoText += `<li>Role: ${payload.target.role}</li>`;
    infoText += `<li>Type: ${payload.target.type}</li>`;
  }

  if (payload.target.fill) {
    infoText += `<li>Fill: <span style="color:${payload.target.fill}">${payload.target.fill}</li>`;
  }
  if (payload.data.x) {
    infoText += `<li>x.label: ${payload.data.x.label}</li>`;
    infoText += `<li>x.value: ${payload.data.x.value}</li>`;
  }
  if (payload.data.y) {
    infoText += `<li>y.label: ${payload.data.y.label}</li>`;
    infoText += `<li>y.value: ${payload.data.y.value}</li>`;
  }
  if (payload.data.color) {
    infoText += `<li>color.label: ${payload.data.color.label}</li>`;
    infoText += `<li>color.value: ${payload.data.color.value}</li>`;
  }

  document.getElementById("info").innerHTML = "<ul>" + infoText + "</ul>";
});

async function renderCharts() {
  await chart.render(document.getElementById("chart"));
  await gs_heatmap.render(document.getElementById("gs_heatmap"));
}

renderCharts().catch((e) => window.alert(e.message));
